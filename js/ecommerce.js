// add and minus in choose number box
var div= document.querySelector("#wanted-number");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
num = Number(div.innerHTML);
// console.log(typeof(num));
plus.onclick = function(){
    num +=1;
    div.innerHTML = " ";
    num.toString()
    div.appendChild(document.createTextNode(num));
}
minus.onclick = function(){
    num -=1
    div.innerHTML = " ";
    num.toString()
    div.appendChild(document.createTextNode(num));
}
// ----------------- choose your product photo  ---------------------------
// small img
let smallImg = document.querySelectorAll("#small-img");
smallImg.forEach(ele => {
    ele.onclick = function(){
        const name = ele.className
        const bigChoose = document.querySelectorAll("#large-img")
        const last = document.querySelector("[aria-selected = true]")
        last.removeAttribute('aria-selected')
        bigChoose.forEach(e => {
            const selected = document.getElementsByClassName(name);
            const select = selected[0]
            select.setAttribute('aria-selected' , 'true')
            
        })
    }
});

// ==================    mobile menu   ===================================

const list = document.getElementById('list')


const menu = document.querySelector(".menus")


list.onclick = function(){
    menu.style.display = 'block'
}

let xMark = document.querySelector('.icon');

xMark.onclick = function(){
    menu.style.display = 'none'
}



