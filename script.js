console.log('Hello!');
document.getElementById("h").textContent="Hello";
let username;
document.getElementById("submit").onclick=function(){
  username=document.getElementById("in").value;
  document.getElementById("h").textContent=`Welcome ${username}`;
}