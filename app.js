const result = document.getElementById("result");
const inputBox = document.getElementById("inputBox");

const myList = "1234567890abcdefghijklmnoprstuvyzwqxxABCDEFGHIJKLMNOPRSTUVYZWQX";
const list = myList.split("");

let totalResult;

function refresh() {
  r1 = Math.floor(Math.random() * myList.length);
  r2 = Math.floor(Math.random() * myList.length);
  r3 = Math.floor(Math.random() * myList.length);
  r4 = Math.floor(Math.random() * myList.length);
  r5 = Math.floor(Math.random() * myList.length);
  totalResult = (result.innerHTML = `${list[r1]}${list[r2]}${
    list[r3]
  }${list[r4]}${list[r5]}`);
  console.log(totalResult);
  
 
}
function send() {
    if (inputBox.value == totalResult) {
      alert("Successful");
    } else if (inputBox.value !== totalResult) {
    alert("Hopps!!! Unsuccessful, Try again");
    refresh()
    }
  }