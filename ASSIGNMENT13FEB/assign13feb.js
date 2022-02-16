/*
Assignment 1 ==============>

Print All Prime Numbers from 1 to 500 i.e number divisible only by itself and 1 ( 2, 3, 5, 7, 11....).
-->a number is prime if it is not divisible by any number from 2 to n-1.
*/



// function to check if a given number is prime
function numIsPrime( n)
{
	//0 and 1 is not prime return false.
	if(n == 1 || n == 0)
     return false;

	// Run a loop from 2 to n-1 i.e from 2 to 499
	for(var i = 2; i < n; i++)
	{
	// if the number is divisible by i, then n is not a prime number.
		if(n % i == 0) 
        return false;
	}
	// otherwise, n is prime number.
	return true;
}
var N = 500;
// check for every number from 1 to N
for(var i = 1; i <= N; i++)
{
	// check if current number is prime
	if(numIsPrime(i)) {
		console.log( i );
	}
}



/*
Assignment=================> 2

Using for of loop, print the concatinated string of an array
Eg - 
Array -> ["A", "B", "C", "D"]
Output -> A B C D
*/
let fruits = ["Apple","Banana","Orange","Mango","Grapes"];
 
for (var element of fruits) {
  console.log(element);
}

/*

Assignment 3====>

Using Rest Operator, create one function to print the sum considering below condition


Multiply each element with 2 and then take the sum

Eg -> functionName(2, 3, 4, 5, 6, 7, 8)

Output -> 2*2 + 3*2 + 4*2 + 5*2 + 6*2 + 7*2 + 8*2 (Result) -> 70

*/

function multiplyAdd(...input) {
	let result = 0;
	for (let arg of input){
	  result += arg*2;
	}
	return result;
  }

  console.log(multiplyAdd( 2, 3,4,5,6,7,8)); 

