const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,0,null];
/*const filterArray = array.map((element) => {
    if(element%2==0){
      return element*element;
    }
    else{
        return element*1/2;
    }

});
console.log(filterArray);*/
/*console.log(array.map((element) => {
    if(element%2==0){
       element*element;
    }
    else{
         element*1/2;
    }

}));
*/
//Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

//const array1 = [null,0,"",false,'apple',5,1,2,3,-1,undefined];
//console.log(array1.filter((value) => value));

//find prime number filter,sqr map

const checkArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//filter prime number
const filterArray = checkArray.filter((value)=>{
    for(let i = 2; value > i; i++)
    {
    if(value%2 == 0) return false;
    }

    return value>1;
   
})
console.log(`prime number`);
console.log(filterArray);//filtered prime number
console.log("square");
console.log(filterArray.map((value)=>value*value));//maped filtered array ,(function square)
