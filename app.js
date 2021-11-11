const button = document.querySelector(".btn");
const output = document.querySelector(".output");

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
        output.innerText =`${objectOne.name} age is ${objectOne.age} which is more than ${objectTwo.name}'s age`

    } else {
        output.innerText =`${objectTwo.name} age is ${objectTwo.age} which is more than ${objectOne.name}'s age`
    }
}

button.addEventListener('click', comparison)