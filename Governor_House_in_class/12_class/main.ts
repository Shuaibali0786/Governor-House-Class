// // // let age: string | number;
 
// // // age = 19;
// // // age = "19";   // unian me ham number ua string be use karskhate he
// // // age = `true ${88}`;

// // // console.log(age);

// // // console.log(typeof age);           // Narrowing


// // // random 

// // let age = Math.random() > 0.5 ?

// // "Shuaib" : 18;

// // if (typeof age === "number") {
// //     console.log(age.toFixed(2))
// // } else {
// //    console.log( age.toUpperCase())
// // }


// // console.log(age)


// //  type me sirf karlibreke use hote he 
// type userProfile = {

//     fistName: string;
//     middleName:  null | string;
//     lastName: string
// };

// let user: userProfile = {
//     fistName: "Shuaib",
//     lastName: "Baat",
//     middleName: null,
// }

// console.log(user);
// let ag: number | null = null

// interface object our function keliay  use hote he

interface Deal1 {
    name: string;
    food: string;
    
};

let shuaibOrder: Deal1 = {
    name: "Shuaib",
    food: "biryani",
    
}

interface Deal2 {
    name: string;
    food: string;
    drink: string;
};

let muneerOrder:  Deal2 = {
    name: "Muneer",
    food: "Burger",
drink: "7up",
}

console.log(shuaibOrder, muneerOrder);


