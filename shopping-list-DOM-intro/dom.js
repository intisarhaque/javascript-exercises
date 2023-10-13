// function buttonClick(e){
//     // console.log("button clicked");
//     // console.log(e.target.id);
//     let output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>';
//     // console.log(e.x);
//     // console.log(e.y);
//     // console.log(e.offsetY);
//     // console.log(e.shiftKey);
//     console.log('Event type ' + e.type)
//     output.innerHTML = '<h3>Y: '+e.offsetY+'</h3>' + '<h3>X: '+e.offsetX+'</h3>';
//     box.style.backgroundColor = 'rgb( '+e.offsetY+ ','+e.offsetX+',40';
//     document.body.style.backgroundColor = 'rgb( '+e.offsetX+ ','+e.offsetY+',40';
// }


// let buttonItem = document.getElementById('itemButton');
// buttonItem.addEventListener('dblclick', buttonClick);

// let box = document.getElementById('box');
// box.addEventListener('click', buttonClick);
// box.addEventListener('mouseenter', buttonClick);
// box.addEventListener('mouseleave', buttonClick);
// box.addEventListener('mousemove', buttonClick);

 
// function runEvent(e){
//     console.log('Event type: ' + e.type);

//     console.log(e.target.value);

//     document.getElementById()
// }

// let itemInput = document.querySelector('input[type="text');
// let form = document.querySelector('form');
// itemInput.addEventListener('keydown', runEvent);

// let i = 10;
// console.log(i);

//Examine total document
// console.dir(document);
// document.title= "DOM Site";
// console.log(document.getElementById("items").childNodes[3].innerText)
// document.getElementById("items").childNodes[1].innerText = "ITEM 1";
// document.getElementById("items").childNodes[3].innerHTML += "<br><button type=\"button\">Click Me!</button>";
// let button1 = document.getElementsByClassName('btn');
// button1[0].style.backgroundColor = "orange"
// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 5px #000';
// let headerTitle = document.getElementById('header-title');
// headerTitle.style.fontSize  = '80px'

// let items = document.getElementsByClassName("list-group-item");
// console.log(items)
// items[1].textContent = "BLUD";
// items[2].style.fontWeight = 'bold'

// for (let i = 0; i<items.length; i+=1){
//     items[i].style.backgroundColor = 'gray';
// }

// let itemsTag = document.getElementsByTagName('li');
// itemsTag[3].textContent = "FOWA";

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px yellow'

// var input = document.querySelector('input');//only gets first
// input.value='Hello';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='yoyo';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'pink';

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "TITLE FROM JS BITCH";

// var oddItems = document.querySelectorAll('li:nth-child(odd)');
// var evenItems = document.querySelectorAll('li:nth-child(even)');
// console.log(oddItems);
// for (let i = 0; i<oddItems.length; i+=1){
//     oddItems[i].style.backgroundColor = 'orange';
//     evenItems[i].style.backgroundColor = 'brown';
// }

// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'yellow';

// console.log(itemList.children[1].innerHTML);
// itemList.children[itemList.children.length-1].textContent = "last";
// var newDiv = document.createElement('div');

// newDiv.className = "hello";
// newDiv.id = "helloDiv";
// newDiv.setAttribute('title', 'hello div');
// var newDivText = document.createTextNode('World');
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// let container = document.querySelector('header .container')
// let h1 = document.querySelector('#header-title');
// container.insertBefore(newDiv, h1);

