# StencilAngularOutput

1. Make sure first the Stencil project does the distribution. In my example:
 
 Go to simple-components directory and execute below command:

 ```javascript
 npm run build
 ```

 This would output couple of artifacts:

 1. dist
 2. www -> You can directly deploy this to server. This is more or less a webapp.

## dist 

dist folder contains, custom-elements output and esm output.

## custom-elements
This folder can be directly published to npm. This contains all our components. Ideally this is not suitable. Becasue we need to register ourselves custom elements and perfrom lazy loading actions.

## esm 
Has all required bundles likes polyfills, loader and lazy loading actual *.js file.
Refer to index.html to see how to load under www/index.html

## Stencil.config.ts

Outputs also Angular, React, Vue binded components. Basically Stencil framework rewrites components in there own framework way from our original Webcomponents.
Consumers can either chose framework specific webcomponent or native web component.

## Angular output package

Refer to Sibling project **stencil-angular-output** project.

Main changes:

1. Copy the output of dist and paste it under node_modules with the folder name @simplecomponents.
2. Certain files as part of stencil build are outputted.

    . proxies.ts file - Exports actual component by referring types from actual package
    . value.accessor.ts file -> updated @Directive({}) definition manually as stencil ignored this!
3. Update your app.module to import actual component instead of web component
4. Start the server.

   ```javascript
   npm run start
   ```
