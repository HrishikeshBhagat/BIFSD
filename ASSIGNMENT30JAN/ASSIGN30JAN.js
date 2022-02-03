/*
print following pattern
1
21
321
4321
54321
*/
 n = 5; // height of pattern
 string = "";
// Ext loop
for ( i = 1; i <= n; i++) {
  // Int loop
  for ( j = i; j >= 1; j--) {
    string += j;
  }
  string += "\n";
}
console.log(string);






/*
print following pattern
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5

*/

n=5;
var num ="";

for(var i=1; i<=n; i++){
    for(j=5; j>=i; j--){
        num += j+ " ";
    } 
    num += "\n";
}
console.log(num);