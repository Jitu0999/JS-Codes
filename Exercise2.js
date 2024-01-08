/*
Create Snakem Water and Gun game in JavaScript.
1. The game should ask you to enter S, W, or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert.
2. Use alert, prompt and confirm where ever required.
*/

let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, user) =>{
    if(cpu === user){
        return "Nobody. Match is tied."
    }
    else if(cpu === "S" && user === "W"){
        return "cpu"
    }
    else if(cpu === "S" && user === "G"){
        return "user"
    }
    else if(cpu === "G" && user === "W"){
        return "user"
    }
    else if(cpu === "G" && user === "S"){
        return "cpu"
    }
    else if(cpu === "W" && user === "S"){
        return "user"
    }
    else if(cpu === "W" && user === "G"){
        return "cpu"
    }
}
let result = match(cpu, user)
document.write(`CPU:${cpu} and User:${user} \n The winner is : ${result}`)