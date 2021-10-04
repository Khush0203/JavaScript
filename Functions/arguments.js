//multiple arguments
let add = function(a , b , c){
    return a+b+c
}

let result = add(5 , 6 , 5)//passing values
console.log(result)


// Default arguments

let getScoreResult = function(name = 'Anonymous' , marks = 0){// 0 is default value
    return 'Name: ' + name + 'Score:' + marks
 }

//getScoreResult('Khush', 100)//100 will be used and not 0

let score = getScoreResult()

console.log()


//A KHUSH MUNSHI PRODUCTION
