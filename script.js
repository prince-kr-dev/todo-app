let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let body = document.querySelector("body");

btn.addEventListener("click",()=>{
    if(inp.value != ""){
        let item = document.createElement("li");
        item.innerText = inp.value;
        ul.appendChild(item);
        inp.value = "";

        let delBtn = document.createElement("button");
        delBtn.innerText = "X";
        delBtn.classList.add("delete"); //adding class to delete button
        item.appendChild(delBtn);
    }
});


body.addEventListener("keydown",()=>{
    if(inp.value != ""){
        if(event.code == "Enter"){
            let item = document.createElement("li");
            item.innerText = inp.value;
            ul.appendChild(item);
            inp.value = "";

            let delBtn = document.createElement("button");
            delBtn.innerText = "x";
            delBtn.classList.add("delete"); //adding class to delete button
            item.appendChild(delBtn);
        }
    }
});


ul.addEventListener("click", ()=>{
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }  
})