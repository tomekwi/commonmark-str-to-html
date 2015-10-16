# commonmark string to html

## install

    npm i render-commonmark

### usage

    var toHTML = require('render-commonmark')

    console.log(toHTML('the *quick* brown _fox_'))

### contrib

this is a module that demonstrates authoring in es6 but publishing to npm as es5. its all very simple really:

- .npmignore ignores the source file `es6.js`
- .gitignore ignores the published file `es5.js`

compile by running `npm start` and run the tests using `npm test`.
