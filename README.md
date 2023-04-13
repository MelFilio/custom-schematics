## Custom Angular Schematics
This is a custom set of Angular schematics that provide additional functionality beyond what is included in the default Angular schematics.

---

### Versions

Supported angular Versions
| Angular Version | @owey/custom-schematics |
| --------------- | ------------ |
| Angular 14      | 14.0.2        |

**Github** `lemon-mel/custom-schematics`
https://github.com/lemon-mel/custom-schematics

### Installation
To use these custom schematics, you must first install them as a package in your Angular project. To do so, run the following command in your project directory:

`npm install @owey/custom-schematics --save-dev`



### Setup
**Add**  `"@owey/custom-schematics"` to your `"schematicCollections"`
 
`angular.json`
```json
  {
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "cli": {
      "schematicCollections": [
        "@schematics/angular",
        "@owey/custom-schematics"
      ]
    },
    ...
  }
  ```

### Usage

> ##
> ### Page
>  Once you have installed the package containing your custom  schematics, you can use them by running the ng generate command  with the appropriate schematic name. For example, to generate a  new page using one of your custom schematics, you would run the  following command:> 
>  `ng generate page page-name`> 
>  `ng generate page path-name/page-name` 
>  `ng generate page --name=page-name --path=path-name`
>  | Arguments | Description |
>  | -------- | -------- |
>  | name | `--name=page-name` : name of the page |
>  | path | `--path=path-name` : path of the page | 
>  
>  this will generate:
>  
>  > src/app/page-name/page-name-routing.module.ts
>  > src/app/page-name/page-name.module.ts
>  > src/app/page-name/page-name.page.html
>  > src/app/page-name/page-name.page.scss
>  > src/app/page-name/page-name.page.ts
>  
> The generated `component` default `changeDetection` will be `ChangeDetectionStrategyOnPush`
> ##

### License
This package is licensed under the MIT License. See the LICENSE file for details.

### Contributing
If you would like to contribute to this package, please follow the guidelines in the CONTRIBUTING file.
 
 