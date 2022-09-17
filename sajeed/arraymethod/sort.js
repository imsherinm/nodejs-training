//sort()
//sort the array.
//returns the reference to the same array, now sorted
// ascending,


//eg:1
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();//array sort alphabetical order (A-Z).
console.log(months);

console.log("number sort")
const numbers = [1, 30, 4, 21, 100000];
//if numbers are sorted as strings,rsult incorrect
numbers.sort();
//sort() method will produce incorrect result when sorting numbers.
console.log(numbers);

//eg:2 number sort
const arrayNumber = [40, 100, 1, 5, 25, 10];
console.log(`unsorted array
${arrayNumber}`);
arrayNumber.sort(function(a,b){
    return a-b;
});
console.log(arrayNumber);

//arrow function
const numbers2 = [4, 2, 5, 1, 3];
numbers2.sort((a, b) => a - b);
console.log(numbers2);