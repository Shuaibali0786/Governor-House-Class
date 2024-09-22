

// let firstName: unknown = "Shuaib";   
//  // (unknown) meaning Namaloom pata nahi.

//  //1

//  console.log((firstName as string) .length);

// // 2 console.log( (firstName as string).lenth);

// //3  console.log((<string> firstName).lenth);


// let myName = "Shuaib";

// console.log(myName.toUpperCase())



// let num1 = 18;
// console.log(num1.toFixed(2)) // 18.00   // (.toFixed)

// let myname = "Shuaib";

// myname.charAt(0).toUpperCase();

// console.log(myname.charAt(0).toUpperCase)


// function greet () {

//     let age = 18;

// }

// console.log(greet)   // undifinde



// function greet(): number {
//     let age = 16;
//   return age;
// }
// console.log(greet());


// function  message(): void{ 
//     let age = 16;
// }

// let restult = message();

// console.log(restult);      // undifinde  // (void)  fucntion me use hota he ue kujh be returen nahi karwata he 


// let friends = ["Ali", "Muneer", "Shuaib"]

// let joinedNames = friends.join(",") 

//  (join )kia karta he sare code ko line be line print karta he our array  ke baher be aa sakhta he  line be line hosakhta he .// Ali, Muneer, Shuaib,



// console.log(joinedNames);

// ... meaning restperameters.  jitne be array me value add karsakhte ho  kama ke zariay , 

// function name1 (...arr: string[]){
//     console.log(arr.join());
// }

// name1("Shuaib", "Muneer", "Ali");            // Shuaib, Muneer, Ali,     // 


// function sum (num1: number, num2: number){
//     console.log(num1 + num2);
// }

   // over function kia he
// sum(4,8);


// function sum (num1: number, num2: number){
//     console.log(num1 + num2);
// }



// sum(4,8);



// function sum (num1: number, num2: string):
// void;

// function sum (num1: number, num2: number):
// void;
// function sum (num1: number, num2: string):
// void;

// function sum (num1: any, num2: any): any {
//     console.log(num1 + num2);
// }

// zoom login
function loggin (email: string, pass?:    // Functio over loading. 
    string ): void;

function loggin (email: string, pass:
    string): void;

function loggin (email: any, pass?: any){
    console.log("loggin")
}


loggin("email", "pass");




