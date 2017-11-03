# Hello!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Live Demo

You will be able to see the demo [here](https://leticiarezende.com/symbio).

## Basic Requirements

First of all, please download or clone this repo.

## Prerequisites
- Node.js
- npm
- ReactJS

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)

## Folder Structure

This is how I have organized folders and files:

```
checkout/
  README.md
  dist/
    bundle.js
  node_modules/
  public/
    favicon.png
    index.html
    manifest.json
  src/
    assets/
      css/
      fonts/
      iamges/
    components/
      Content/
        Content.js
        Form/
        CardHolder/
          CardHolder.js
        CardNumber/
          CardNumber.js
        SecurityNumber/
          SecurityNumber.js
        SecurityNumber/
          SecurityNumber.js
        Select/
          Select.js
        Form.js
      Header/
        Header.js
    App.js
    index.js
    style.css
  .gitignore
  package-json.lock
  package.json
  webpack.config.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


