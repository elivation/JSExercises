//calculate average grade
//check grade of average 
//1-59 F
//60-69 D
//70-79 C
//80-89 B
//90-100 A


function Grade(marks){
    let total = 0
    for(score of marks) total += score
    
    let average = Math.floor(total/(marks.length))
    console.log(total)
    console.log(average)
    if (average >= 90) return "A"
    if (average >= 80) return "B"
    if (average >= 70) return "C"
    if (average >= 60) return "D"
    return "F"
}

const grade = []

console.log(Grade(grade))