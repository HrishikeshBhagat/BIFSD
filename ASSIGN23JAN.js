/*  PRINT THIS PATTERN
1 
22 
333 
4444 
55555
*/

n = 5; // height of pattern
var valueToprint = "";
// External loop for a column
for ( i = 1; i <= n; i++) {
  // Internal loop for rows
  for ( j = 1; j <= i; j++) {
    valueToprint += i;
  }
  valueToprint += " \n";
}
console.log(valueToprint);