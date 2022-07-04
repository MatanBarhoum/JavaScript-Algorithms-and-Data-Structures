<html>
	<body>
		<script type="module" src="file.js"></script> //loading a js into a HTML file.
	</body>
</html>

/* */

/* Creating a function and exporting it for importing later */

function Add(num1, num2) { 
	return num1+num2;
}

export { Add };

/* */

import { Add } from './file.js'

Add(1,2) // output expected is 3 

/* */

/* */

import * as stringFunctions from "./string_functions.js"

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/* */

/* */
function subtract(x, y) {
  return x - y;
}

export default function(x, y) {
  return x - y;
} // if have only one function to export, use export default, which act as a fallback too
/* */

/* */
import subtract from "./math_functions.js" 

subtract(7,4);
/* */