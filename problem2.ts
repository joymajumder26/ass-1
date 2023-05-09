//Write a function that takes in an array of objects with properties name and age,
// and returns only the objects where the person's age is greater than or equal to 18
function filterAdults(people: any[]) {
  return people.filter(person => person.age >= 18);
}

// Example usage
const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 15 }
];
const adults = filterAdults(people);
console.log(adults);