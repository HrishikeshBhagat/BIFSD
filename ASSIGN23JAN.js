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




/* print this pattern
    #
   ##
  ###
 ####   
#####
*/

 n = 5;
 s = "";
for ( i = 1; i <= n; i++) {
  // here printing spaces
  for ( j = 0; j < n - i; j++) {
    s += " ";
  }
  // here printing hash
  for ( k = 0; k < i; k++) {
    s += "#";
  }
  s += "\n";
}
console.log(s);




        9
