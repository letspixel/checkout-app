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
  - [Inputs Validation](#inputs-validation)
  - [Submit Button](#submit-button)
- [Development Process](#development-process)
  - [Basic HTML](#basic-html)
  - [Creating Components](#creating-components)
  - [Validation](#validation)
  - [Improvements](#improvements)
- [Re-usable Component](#re-usable-component)
  - [Select](#select)
- [Built with](#built-with)


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
        Select/
          Select.js
        Form.js
      Header/
        Header.js
    App.js
    constants.js
    index.js
  .gitignore
  package-json.lock
  package.json
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

Builds the app for production to the `build` folder. Before running this, please change "Homepage" on package.json.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

## Application Usage

Just some tips on how the form works.

### Credit Card Number

This application is able to recognize most common carriers. Validation occurs as you type in the credit card number input, if number is recognized to be from one of the carriers listed below, it will show its flag. If number is valid, according to Luhn, flag will appear in full opacity. If carrier is unkown, no flag will be shown and input will be red to indicate it is wrong.

| Carrier             | Starts with | Test |
| -------------       | ------------- | ------------- |
| Visa                |  Starts with 4  |  4111111111111111
| MasterCard          |  Starts with 51 to 55  | 5123630736497087
| American Express    |  Starts with 34 to 37  | 371449635398431 
| Diners              |  Starts with 300 to 305, 309, 36, 38 to 39  | 30569309025904
| Discover            |  Starts with 6011, 622126 to 622925, 644 to 649, 65  | 6011111111111117
| JCB                 |  Starts with 3528 to 3589  | 3530111333300000
| Maestro             |  Starts with 5018, 5020, 5038, 5612, 5893, 6304, 6759, 6761, 6762, 6763, 0604, 6390  | 6759649826438453

### Inputs Validation

If inputs are empty or invalid, they turn red once user leaves it, to indicate it must be filled correctly. While user is typing, input will not show if it is invalid, as user may still be changing the content.

* **Credit Card Number:** Must be a sequence recognized by carrier, length valid and Luhn valid.
* **Name on Card:** Should be at least 5 chars long.
* **Month and Year:** One of the options provided must be selected.
* **CSC:** Security number on the back of th e card. Should be 3 chars long.

### Submit Button

To enable the submit button user must fill every input correctly. If not, button will appear disabled and form submission won't be possible.

## Development Process

In this section I will describe each step during development process.

### Basic HTML

Enhance HTML and CSS to get a better layout and to allow a user friendly application. This is all static and no information is handled, only css transitions and visual elements. The HTML was adapted from the index.html provided.

### Creating Components

Converting HTML group of elements into single component. The components created are listed below:
* **Header**: The navbar and it's contents. Does not receive any props.
* **Content**: This is the main body that holds Form component. Also does not receive any props.
  * **Form**: This is the container for form inputs, selects and submit button. Will pass props to child components and later will receive their new state with a function. The function will get each input value to be handled on form submit. All child components must have a inputName and handleValue props.
    * **CardNumber**: This is the input for the credit card number. 
    * **CardHolder**: Also an input for the credit card holder name. 
    * **Select**: For Month and Year options. This is a [re-usable component](#re-usable-component).
    * **SecurityNumber**: Input for the security code on the back of the card.
* **Footer**: This only holds a description of the project and author identification.

### Validation

After components are created, now it is possible to work on the logic to check and validate each one.

### Improvements

At this point improvements were made in the code itself, also on the design and usability aspects.

## Re-usable Component

### Select

Select was the only element that was used twice. Its usage is simple, just provide the props below:
- disabledOption: This value will work as a title for the select element, it will be the first option and non-selectable.
- options: Each value will turn into an option element.


## Built With

* [NPM](https://npmjs.com/en/) 
* [ReactJS](https://reactjs.org/)

By **Leticia Rezende**.