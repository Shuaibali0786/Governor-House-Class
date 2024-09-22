// // class Animal{
// //     name: string;
// //     constructor(name: string) {
// //         this.name = name;
// //     }
// //     makeSound(){
// //         console.log("Genral1 Sound")
// //     }
// // }

// // class Dog extends Animal{
// //     makeSond(){
// //         console.log("Woof")
// //     }
// // }

// // class Cat extends Animal{
// // makeSond(){
// //     console.log("meow meow")
// // }
// // }
// // // overlide functionncls
// // //2 poliforizum 

// // let c1 = new Cat("tun tun")

// // c1.makeSond();


// // incepsiletion

// class person {
//     name: string; // pravite , protected,  public
//     protected age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Teacher extends person{
//     get(){
//         console.log("Age is private")
//     }
// }

// let t1 = new Teacher("Shuaib", 22)
// t1.get();

//  

interface shape {
    draw(): void;                      // assecpection kar te he

}

class circle implements shape{
    draw() {
        console.log("Drawing a circle")
    }
}

class square implements shape{
    draw(): void {
        console.log("Darwing a square")
    }
}

let s1 = new circle()
s1.draw()

let  c1 = new square()
c1.draw()


// class blueben

// sta