# Hello!

This is my repo for the **frontend project** to simulate a credit card validation. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Live Demo

You will be able to see the demo [here](https://leticiarezende.com/symbio).

## Basic Requirements

First of all, please download or clone this repo.

### Prerequisites
- Node.js
- NPM
- ReactJS

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Application Usage](#application-usage)
  - [Credit Card Number](#credit-card-number)
  - [Enable Submit Button](#enable-submit-button)
- [Build with](#build-with)


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
      images/
    components/
      Content/
        Content.js
      Footer/
        Footer.js
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

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

## Application Usage

Just some tips on how the form works.

### Credit Card Number

This application is able to recognize most common carriers. Validation occurs as you type in the credit card number input, if number is recognized to be from one of the carriers listed below, it will show its flag. If number is valid, according to Luhn, flag will appear in full opacity. If carrier is unkown, no flag will be shown and input will be red to indicate it is wrong.

Carriers:
* Visa
* MasterCard
* American Express
* Diners
* Discover
* JCB
* Maestro

For testing purposes:
```
4111111111111111 - Visa
```
```
5123630736497087 - Mastercard
```
```
371449635398431 - American Express
```
```
30569309025904 - Diners
```
```
6011111111111117 - Discover
```
```
3530111333300000 - JCB
```
```
6759649826438453 - Maestro
```


### Enable Submit Button

To enable the submit button user must fill every input correctly. Rules are:

* **Credit Card Number:** Must be a sequence recognized by carrier, and Length and Luhn valid.
* **Name on Card:** Should be at least 5 chars long.
* **Month and Year:** One of the options provided must be selected.
* **CSC:** Security number on the back of the card. Should be 3 chars long.


## Built With

* [NPM](https://npmjs.com/en/) 
* [ReactJS](https://reactjs.org/)

By **Leticia Rezende**.








