-------this important concept in normal and arrow functions read thoroughly-------
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);=>in node empty object but in browser console 


function chai(){
    let username = "hitesh"
    console.log(this.username);=>undefined this not referring to function chai
}
// chai()
const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}


const chai =  () => {
    let username = "hitesh"
    console.log(this); //=>empty object
}
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo = (num1, num2) =>  num1 + num2 //implicit return
const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
