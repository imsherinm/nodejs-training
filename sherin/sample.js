// var course = 'JavaScript';

// var grade = 50;

// function getCourse() {
//     var name = 'sherin';

//     console.log(course);
// }

// function getGrade() {
//     var age = 10;

//     function getAge() {
//         console.log(age);
//     }

//     getAge();

//     console.log(grade);
// }

// getCourse();

// getGrade();

// var ,
// let course; // Hoisting
// console.log(course);

// let JavaScript = 'JavaScript'; // Global var/let/const - thro- file

// function getCourse() {
//     let python = 'python'; // functional scope // var/let/ const thro-function

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//     }
//     {
//         // block
//     }
//     if (true) {
//         let pythonShort = 'py'; // block scope . let const
//         var jsShort = 'js'; // var is not block scoped
//     }

//     console.log(jsShort);
// }

// getCourse();

// const age = 10;

// let number = 10;
// let number5 = 5.1;
// let string = 'sherin';
// let infinity = Infinity;
// console.log(typeof number5);
// if (number != 0)
//     if (number)
//         if (string) {
// false, '', 0, undefined, null, {}; // boolean false
//             console.log(string);
//         }

// let array = [];
// if (array.length) {
//     console.log('array ');
// }
// if (0) {
//     console.log('true value');
// } else {
//     console.log('false value');
// }

// let string = 'hi there';
// let number = 10;

// let number = 3;
// let string = '5.4';
// console.log(String(number));
// let fract = 3.0;
// console.log('fract: ', fract);

// console.log(number + parseInt(string));
// // console.log(Number('sherin'));
// console.log(String(true));

// let date = new Date();
// console.log(String(date));

// console.log(Boolean('sherin'));

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let sum = 0;
// while (sum != 0) {
//     console.log(sum);
// }
// console.log(sum);
// let count = 0;
// do {
//     console.log(count);
// } while (count != 0);

// index of array - 0;
// ++ , --

// ++ -- j ; -> do and use, increment and use , decremnet and use
// j ++ --  ; -> use and do, use and increment

// while
// do- while

function getInvoice(download) {
    // const name = 'sherin';
    // -- 100 lines of code

    // order value --- database
    // discount -- online service
    // payment -- payment gateway
    // customer name, address - api

    download();
}

const result = new Promise((resolve, reject) => {
    try {
        // order value --- database
        // discount -- online service
        // payment -- payment gateway
        // customer name, address - api

        const invoice = { amount: 300 };

        resolve(invoice);
    } catch (error) {
        reject(error);
    }
});

// download(result);

console.log(result);

const getInvoice = async () => {
    // await // fetch
};
