

// var Person={name:"abhinand",age:21,place:"kannur",display: function () {
//   var name="Abhi"
//   console.log(this.name)
// }}

// // for(x in Person)
// // {
// //   console.log(Person[x])
// // }

// // //Person.name='knr'
// Person.dob="20-10-2000"

// Person.displayage=function(){
//     console.log(this.age)
// }


// console.log(Person.displayage())
 

// function Person(name,age,place){
//     this.name=name
//     this.age=age
//     this.place=place
//     this.display=function (){
//         console.log("name :"+this.name+ ", age :"+this.age )
//     }
// }

// var abhinand=new Person("abhinand",21,"calicut")
// var abhi=new Person("Abhi",21,"kannur")

//  abhinand.display()
//  abhi.display()


//by using an object constructor

// function emp(id,name,salary){
//     this.id=id;
//     this.name=name;
//     this.salary=salary;

// }
// emp1=new emp(10,"vimal",30000);
// console.log(emp1.id+" "+  emp1.name+" "+  emp1.salary);








//Write a JavaScript program to delete the rollno property from the following object.
 //Also print the object before or after deleting the property.

// const student={
//     name:"david ", class:"X", rollno:11
// };
// console.log(student);
// delete student.rollno;
// console.log(student);







// Write a JavaScript program to display the reading status
// var library = [ 
//     {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
//     },
//     {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true
//     },
//     {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games', 
//     readingStatus: false
//     }];
    

//    const book = library.map((value,index)=>{
   
   
// console.log(value.title," ",value.author," ","reading status",value.readingStatus)
//    })







 //10. Write a JavaScript program to sort an array of JavaScript objects. Go to the editor


var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

const sortArray = library.sort((a,b) =>  a.libraryID<b.libraryID);
console.log(sortArray);

     