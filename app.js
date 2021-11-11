const button = document.querySelector(".btn");

let objectOne = {
    name: "Ram",
    age: 25,
    yoga: "Treta"
}

let objectTwo = {
    name: "Krishna",
    age: 31,
    yoga: "Dwapar"
}

function comparison (){
    if(objectOne.age > objectTwo){
        console.log(`${objectOne.name} age is ${objectOne.age} which is more than ${objectTwo.name}`)

    } else {
        console.log(`${objectTwo.name} age is ${objectTwo.age} which is more than ${objectOne.name}`)
    }
}

button.addEventListener('click', comparison)