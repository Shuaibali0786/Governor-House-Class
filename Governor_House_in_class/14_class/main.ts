

// class person1 {
//     name: string;
//    readonly age: number;
//    private salary: number;                // peelar , enkepsiletion,        >>>> private, publick, readonly, 3 

//      constructor(name: string, age: number, salary: number){
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }

//  walk () {


//  console.log(this.name,"walking.........")
//  }
    
// }


// let greet = new person1("Shuaib", 22, 10000);


// console.log(greet)


// //insesiz ua object

 
// // object orianted



class Dog {
    name: string
    
    constructor(name: string){
        this.name = name;


    }

    woolf(){
        console.log("waking....................")
    }
}

class cat extends Dog {
    
    constructor(nme: string, name: string){
        
        super(name) // Dog conttructor call
    }

    walking(){
        console.log("walking........")
    }
}


let A = new Dog("Dogs");

console.log(A);





// oop by hamza  saleem