const result = document.getElementById("result");
const inputBox = document.getElementById("inputBox");

const myList = "1234567890abcdefghijklmnoprstuvyzwqxxABCDEFGHIJKLMNOPRSTUVYZWQX";
const list = myList.split("");


let total=[]
function refresh() {

let randomIndex;
total=[]
for(let i=0; i<6; i++){
randomIndex= Math.floor(Math.random()*list.length)

total.push(list[randomIndex])
result.innerHTML=total.join("");
console.log(total);
}

}

function send() {
    if (inputBox.value == total.join("")) {
      alert("Successful");
    } else {
    alert("Hopps!!! Unsuccessful, Try again");
    refresh()
    }
  }
