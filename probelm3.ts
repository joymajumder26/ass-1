//Create a TypeScript program that uses a generic function to reverse an array of strings, 
//and takes a variable number of strings to the array using rest parameters. 
//Provide an example of calling the function with a variable number of strings.

function reverseArray<T>(...arr: T[]): T[] {
  return arr.reverse();
}


const reversedNames = reverseArray<string>("Joy","Ashik","Habib");
console.log(reversedNames); 