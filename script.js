//create a close btn 
let my_List_Item = document.querySelectorAll("li");
for (let i=0; i<my_List_Item.length; i++) {
    let span = document.createElement('span');
    let txt= document.createTextNode("\u00D7")
    span.classList.add("close");
    span.appendChild(txt);
    my_List_Item[i].appendChild(span);
}

//click on the  close btn to del an item
let close = document.querySelectorAll(".close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let delSub = this.parentElement;
        delSub.style.display= 'none';
    }
}

//Add a check symbol when clicked
let list = document.querySelector('ul');
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
});

//Add new item via ADD BUTTON
let addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", includeItem)

//Add new item via ENTER KEY
let inputBox = document.querySelector("input");
inputBox.addEventListener("keyup", function(e) {
    if (e.keyCode ===13) {
        e.preventDefault();
        includeItem();
    }
});
    

function includeItem () {
    let list = document.querySelector('ul');
    let input = document.querySelector(".input").value;
    let newTxt = document.createTextNode(input);
    let newLi = document.createElement("li");
    newLi.classList.add("list-group-item");
        //create the close icon
        let newSpan = document.createElement('span');
        newSpan.classList.add("close");
        let spanTxt = document.createTextNode("\u00D7")
        newSpan.appendChild(spanTxt);
    //append the close icon to the listitem (li)
    newLi.appendChild(newSpan);
    newLi.appendChild(newTxt);
    //input field validation
    if (input ==="") {
        let warning = document.querySelector(".warningTxt");
        setTimeout(() => {
            warning.textContent = "write something!"
            setTimeout(() => {
                warning.textContent = ""
            }, 2000);
        }, 100);
    } else {
        list.appendChild(newLi);
    }

    //clear the input box
    document.querySelector(".input").value ="";

    //click on the  close btn to del an item
    let close = document.querySelectorAll(".close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let delSub = this.parentElement;
            delSub.style.display= 'none';
        }
    }
};
