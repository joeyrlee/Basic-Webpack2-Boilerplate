var _ = require('lodash');
require('./styles.css');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

alert(other); // [1, 2, 3, [4]]