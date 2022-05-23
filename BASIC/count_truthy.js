//take each element in array
//chaeck if it is part of falsy array
//if not increment truthy count
//use array.includes optioins

function countTruthy(array){
    /*const falsey = ["Falsy",undefined,null,0,NaN,'',false]
    let truthy = 0
    for(element of array){
        if (!(falsey.includes(element))) ++truthy
    }*/
    let truthy = 0
    for (element of array){
        if(element) ++truthy
    }
    return truthy


}

const get = [1,2,3,0,0,null,6,5]

console.log(countTruthy(get))