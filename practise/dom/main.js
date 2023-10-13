console.log('test');
let container = document.querySelector("#container");
let redp = document.createElement('p');
redp.textContent = "hey im red";
redp.style.color = 'red'
container.appendChild(redp);
let blueh3 = document.createElement('h3');
blueh3.textContent = 'I\'m blue H3';
blueh3.style.color = 'blue';
container.appendChild(blueh3);
let newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border-style: solid; background: pink; ')
let newDivH1 = document.createElement('h1');
newDivH1.textContent = "im in a div";
let newDivp = document.createElement('p');
newDivp.textContent = "same blud";
newDiv.appendChild(newDivH1);
newDiv.appendChild(newDivp);


container.appendChild(newDiv);