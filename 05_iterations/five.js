const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){  //this inner function is callback func- func with no name
    // console.log(val);
} )
coding.forEach( (item) => {
    // console.log(item);
} )
coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )


function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
