class Myclass {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	myclass_return1() {return `MyClass1 - My name is ${this.name} and type ${this.type}`};
	myclass_return2() {return `MyClass2 - My name is ${this.name} and type ${this.type}`};
}

class Subclass extends Myclass{
	constructor (name, type) {
		   super(name, type)
    }
    sub_return() {return `Subclass - My name is ${this.name} and type ${this.type}`} 

}
















// const player = "bamby";
// let experience = 100;
// let wizardLevel = false;


// if (experience>90) {
// 	let wizardLevel = true
// 	console.log("inside", wizardLevel)
// }

// console.log("outside", wizardLevel)

// const compose = (f,g)=>(a)=>f(g(a));
// const mult = (num)=>num*5;
// compose(mult,mult)(3)





















// function checkAccess(bool) {return bool;}

// var center_account = "You "  + (checkAccess(false) ? "have access to your account" : "access denied");  


// function directionChoose(direction){
// 	var whatHappens;
// 	switch(direction){
// 		case "up": whatHappens = "You go north";
// 		break;

// 		case "down" : whatHappens = "You go south";
// 		break;

// 		case "left" : whatHappens = "You go west";
// 		break;

// 		case "right" : whatHappens = "You go east";
// 		break;

// 		default: whatHappens = "Enter right direction you stupid fuck!!!!";
		
// 	}
// 	return whatHappens;
// }