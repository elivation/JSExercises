/*const scores =  {
    Kofi:0,
    Ama:0,
    James:0
}


scores.Kofi += 3
scores.Ama += 5

console.log(scores)*/

/*const myCrazy = {
    name:"abject",
    array: [7,9,{purpose:"confusion",number:123},3.3],
    "random animal":"banaba shark"
};

const get = myCrazy.array[2].number

console.log(get)*/

const marks = {
    Kofi:87,
    Ama:45,
    James:76,
    Tina:70,
    Paul:55
}



//function that takes the marks of students and print out their name
//and if the graduate or not based on the pass mark that is above 75

function grade(marks){
    for(let key in marks){
        if(marks[key] >= 90) console.log(key,":","A")
        else if(marks[key] >= 85) console.log(key,":","B")
        else if(marks[key] >= 75) console.log(key,":","C")
        else if(marks[key] >= 65) console.log(key,":","D")
        else if(marks[key] >= 55) console.log(key,":","E")
        else console.log(key,":","F") 
    }
}

grade(marks)