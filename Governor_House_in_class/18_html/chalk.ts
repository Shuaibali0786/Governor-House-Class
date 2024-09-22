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



//indexsignecher 
let x1: { id: number, [x: string]: any } = {
  id: 1,
  name: "Alice",
  age: 30
};

let x2: { id: number, [x: string]: any } = {
  id: 2,
  isActive: true,
  lastLogin: new Date()
};

let x3: { id: number, [x: string]: any } = {
  id: 3,
  data: {
    score: 95,
    passed: true
  }
};


// enum
enum Auth  {
    FASEBOK,
    GOOGLE,
    PASWOORD
}

function Login (authType: Auth) {
  if (authType == Auth.GOOGLE){

    console.log(`LOHIN WITH GOOGLE`)

  }
  
}

Login(Auth.GOOGLE)