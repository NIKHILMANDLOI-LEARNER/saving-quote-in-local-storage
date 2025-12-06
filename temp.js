let workHolders =JSON.parse(localStorage.getItem("Work") )||[];

// elements

let submit=document.querySelector(".save");
let input=document.querySelectorAll(".input-box");
let shown=document.querySelector(".completed");
let d=document.querySelector(".display");

//functions 
//to save data in local storage
submit.addEventListener("click",function(){
  
  console.log(input.item(0).value);
 workHolders.push(input.item(0).value);
   input.innerText="";
     input.item(0).value="";
  localStorage.setItem("Work",JSON.stringify(workHolders));
 
  
})
console.log(workHolders);
//to display data from local storage when click on dane work button
let flag=true;
shown.addEventListener("click",function(){
 
if(flag==true){
workHolders.forEach(function(ele){
    let p=document.createElement("div");
    p.setAttribute("class","item");
    let button=document.createElement("button");
    let k=document.createElement("h1");
    k.innerText="Task:";
    p.appendChild(k);
    button.textContent="Delete";
    button.setAttribute("class","delete");
    button.style.background="red";
 
    d.appendChild(button);
    console.log(p);
    button.addEventListener("click",function(){
      alert("Are you sure you want to delete this task?");
      d.removeChild(p);
      d.removeChild(button);
      workHolders=workHolders.filter(function(item){
        return item!==ele;
      });
      localStorage.setItem("Work",JSON.stringify(workHolders));
    });

    p.textContent=ele;
    d.appendChild(p); })
   flag=false;}else{
    d.innerHTML="";
    flag=true;
   }
})
   