import { Rule, SchematicContext, Tree, apply, applyTemplates, chain, mergeWith, move, strings, url } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
interface PageOptions {
  name: string;
  path: string;
}
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function page(_options: PageOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    let name = _options.name;
    let path = _options.path;
    if (_options.name.includes('/') && _options.name.split('/').length > 1) {
      name = _options.name.split('/').pop() ?? '';
      path = `${_options.path}/${_options.name.replace('/'+name, '')}`;
    }


    if (!name) {
      context.logger.error('invalid page name');
      return tree;
    }

    const templateSource = apply(
      url('./files'),
      [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: name
        }),
        move(normalize(`/${path}/${strings.dasherize(name)}`))
      ]
    );

    return chain([
      mergeWith(templateSource)
    ])
  }
}
