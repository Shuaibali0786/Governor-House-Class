"use strict";
// // // google serch chalk npm .
// // let  x: {id: number,[x: string]: any } . indexsignecher kehte he
// //  [a: string]: any  };  indexsignecher kehte he  indexsignecher me kujh be name likh sakhte ho  loi bw
// // x = "shuaib"
// // topic nested objects
// // login ko hum , {auth} keh te he
//   // github
//  // indexsignicher
// let x : { id: number,[a: string]: any};
// x = {
//     id: 222,
//     firstName: "Shuaib",
//     fulName: "Ali"
// }
// enum
var Auth;
(function (Auth) {
    Auth[Auth["FASEBOK"] = 0] = "FASEBOK";
    Auth[Auth["GOOGLE"] = 1] = "GOOGLE";
    Auth[Auth["PASWOORD"] = 2] = "PASWOORD";
})(Auth || (Auth = {}));
function Login(authType) {
    if (authType == Auth.GOOGLE) {
        console.log(`LOHIN WITH GOOGLE`);
    }
}
Login(Auth.GOOGLE);
