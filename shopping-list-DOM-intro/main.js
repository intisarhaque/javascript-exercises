let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

function addItem(e){
    e.preventDefault();
    console.log("submit");

    //get input
    var newItem = document.getElementById('item').value;
    console.log(newItem);

    //create new li element
    var newLi = document.createElement('li');
    //add class
    newLi.className = 'list-group-item';
    console.log(newLi);
    //add text with input's value
    newLi.appendChild(document.createTextNode(newItem));
    console.log(newLi);

    let delButton = document.createElement('button');
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    delButton.appendChild(document.createTextNode('X'));
    newLi.appendChild(delButton);
    
    itemList.appendChild(newLi);
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}    

function filterItem(e){
    let text = e.target.value.toLowerCase();
    console.log(text);
    let items = itemList.getElementsByTagName('li')
    // items = Array

}    