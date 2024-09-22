// // // // // AC cronice , 
// //C coronice, 
// // // // type Fu  = () => void
// // // // function greet ( cb: Fu ) {
// // // //     console.log("Iam Student")    
// // // //     cb();
// // // // }
// // // // function callback(){
// // // //     console.log("karachi")
// // // // }
// // // // greet( () => {console.log("Shuaib")});
// // // // greet(callback);
// // // // setimeout
// // // console.log("First")
// // // setTimeout( () => {
// // //     console.log("Second")                //Settimeout million second me use hote he
// // // }, 5000);
// // // console.log("Third")
// //                                              // callbacke settimeout function 
// // function  message (marks: number,
// //     celebratecd: any
// // ){
// //     setTimeout(() => {
// //         if(marks >= 90){
// //             celebratecd();
// //         }
// //     } , 3000);
// // }
// // function celebratecd(){
// // console.log("Congrezz");
// // }
// // message(98, celebratecd);
// // Function
// function checkMarks (marks: number) {
//      return new Promise ( (pass, fail) => { // promise
//         setTimeout( () => {
//             if(marks > 90){
//                 pass("Congratzz");
//             } else{
//             fail("Fail hain");
//             }
//         }, 3000);
//     });
// }
// // checkMarks(89)
// // .then(( )=> console.log("Congratzz!!!!!!!!!!!!!!"))
// // .catch( ()=> console.log("Fail Hain"))
// // pass ko call karegy  to .than chalega.
// // Fail ko call karegy to  .catch chalega.
// let res = await checkMarks(89);
// try{
//     let res = await checkMarks(89);
// } catch (err) {
//     console.log(err)
// }
// promise
let getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Iam a promise");
        // resolve("123");
        reject(" netwoknerrer");
    });
};
let promise = getPromise();
promise.then(() => {
    console.log("promise fullfilled");
});
promise.catch((err) => {
    console.log("rejected err");
});
export {};
