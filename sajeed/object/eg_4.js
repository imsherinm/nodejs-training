var library = [ 
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
    }];
    

   const book = library.forEach((value,index)=>{
   
console.log(value.title," ",value.author," ","reading status",value.readingStatus)
   })