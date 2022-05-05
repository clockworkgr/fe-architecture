
/*
  Assume this is our stores library.
  It provides modular access to individual stores as needed
	it also contains a "special" store that holds our client instance so other stores can refer to it to fetch data.
	This special store is the only one that must be initialized by our app.
*/

import { useClientLib } from "./useClientLib";
import { useEmployee } from "./useEmployee";
export { useClientLib, useEmployee };