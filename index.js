const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("ph1")
let pass2 = document.getElementById("ph2")

function generatePasswords(){
    let password = "" 
    for(let i = 0; i < 15; i++){
        password += characters[randomIndex()]
    }
    return password
}

function randomIndex(){
    return Math.floor(Math.random() * characters.length)
}

function assignPasswords(){
    pass1.textContent = generatePasswords()
    pass2.textContent = generatePasswords()
}