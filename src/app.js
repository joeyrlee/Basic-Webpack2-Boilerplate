/* JavaScript Entry File */
require('./styles.css');
//es6 imports from other modules (with the exception of node_modules libraries) must
//additionally be assigned to the global `window` object here or in their respective modules 
//or you must use es5 myVar = require('./myModule.js') syntax without `var`, `let`, or `const` assignment
//as this automatically assigns the variable to the global scope
//(the variables will be privately scoped and inaccessible inside of your bundle.js otherwise)