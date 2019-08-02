var headerStyle = document.querySelector('header');
headerStyle.style.backgroundColor = 'green';
headerStyle.style.padding = '10px';
headerStyle.style.width = '100%';
var headerLeft = document.getElementById('headertitle');
headerLeft.style.width = '50%';
headerLeft.style.cssFloat = 'left';
var searchRight = document.getElementById('search');
searchRight.style.width = '50%';
searchRight.style.cssFloat = 'right';
searchRight.style.padding = '10px';
var crossBtn = document.getElementsByClassName('btn btn-danger')
// console.log(crossBtn);
// crossBtn[1].style.cssFloat = "right";
for(var i=0; i<crossBtn.length; i++){
    crossBtn[i].style.cssFloat = "right";
}


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var search = document.getElementById('search');
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
search.addEventListener('keyup', searchItem);


function addItem(e){
e.preventDefault();
var getItem = document.getElementById('liInput').value;
// console.log(getItem);
var li = document.createElement('li');
li.className = 'list-group-item';
console.log(getItem);
li.appendChild(document.createTextNode(getItem));
var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger';
deleteBtn.style.cssFloat = 'right';
deleteBtn.appendChild(document.createTextNode('x'));
li.appendChild(deleteBtn);
itemList.appendChild(li);
}
function removeItem(e){
    // console.log(2);
    if(e.target.classList.contains('btn-danger')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function searchItem(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } 
        else{
            item.style.display = 'none';   
        }
    })

    }
