# Sample React Library

**WIP**

The aim of this project is to help setting up a React library and show how to use it in your project, with live reload.
- `sample-app` : demo application using Create React App
- `sample-library-cra` : demo library using Create React App, Babel and Rollup.js

## Quick demo
- Setup sample library :
```bash
$ cd sample-library-cra
$ npm install
```
- Setup sample app :
```bash
$ cd sample-app
$ npm install
$ ../sample-library-cra/link # Live reload of library in the app
$ npm start
```
Make a change in `sample-library-cra/src/lib/MyComponent.js` and see it changing live.


## Setup

### Creating the library

We will use Create React App for our library but you could use other tool like Storybook.
- Bootstrap our application : `$ npx create-react-app {my-library}` 
- Remove default content of src directory : `$ rm -rf {my-library}/src`
- Copy `sample-library-cra/src` directory to `{my-library}/src` 
- Add babel and presets :
```
$ yarn add --dev @babel/cli @babel/core @babel/preset-env @babel/preset-react
```
- Copy `sample-library-cra/.babelrc` to `{my-library}`
- Add rollup and plugins :
```
$ yarn add --dev rollup @rollup/plugin-node-resolve rollup-plugin-babel rollup-plugin-delete rollup-plugin-scss rollup-plugin-terser
```
- Copy `sample-library-cra/rollup.config.js` to `{my-library}`
- Edit package.json : 
```diff
{
- "name": "@atillay/sample-library-cra",
+ "name": "{my-library-name}",
  "scripts": {
+    "lib:watch": "NODE_ENV=development rollup -c --watch",
+    "lib:build": "NODE_ENV=production rollup -c --compact",
+    "prepare": "npm run lib:build"
  }
}
```
- Make your lib available locally : `$ npm link` or publish to NPM : `$ npm publish --access public`


### Creating the application

We will use Create React App for ou application that will use the library but you can use any other tool.

- Bootstrap our application : `$ npx create-react-app {my-library}` 
- Install our library : `$ yarn add {my-library}`

Automatic refresh of library changes in our application :
- Copy `sample-library-cra/link` to `{my-library}` (the library you created before)
- Go in your application and run : `$ ../{my-library}/link`
- Start your application : `$ npm start`
