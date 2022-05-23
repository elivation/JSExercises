let student={
    name:"David Ray",
    sclass:"VI",
    rollno:12
}
//Q1 print properties
//for(let key in student) console.log(key)

//Q2 delete rollno property, print object before and after
/*console.log(student)
delete student.rollno
console.log(student)*/

//Q3 get the length of object
/*length = 0
for(let key in student) length++
console.log(length)*/

//Q4 display the values of the properties of this object
/*let library = [
    {
        author:"Bill gates",
        title:"the road ahead",
        readStatus:true
    },
    {
        author:"Steve Jobs",
        title:"abput apple",
        readStatus:true
    },
    {
        author:"Suzzane Collins",
        title:"big day",
        readStatus:false
    }
]

for(let book of library){
    for(let key in book) 
    console.log(book[key])
}*/

//Q5 swap the keys and the value
// take value and set to new key and key to new value

/*let swap = {}


for(let key in student){
    swap[student[key]] = `${key}`
}
console.log(swap)*/

//Q5 check whether object contains a property sclass

/*for(let key in student)
  if(key === "sclass") console.log("true")*/

  