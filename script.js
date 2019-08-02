var title = document.getElementById('headertitle');
title.style.paddingTop = '10px';
title.style.paddingBottom = '10px';
title.style.backgroundColor = 'green';

var contentStyle = document.getElementById('content');
contentStyle.style.border = '1px solid #ccc';
// var inputFieldStyle = document.getElementById('inputField');
// inputFieldStyle.style.paddingTop = '10px';


// var items = document.getElementsByClassName('list-group-item:nth-child(2)');
// items.style.backgroundColor = 'yellow';
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }
// var items = document.getElementsByTagName('li:nthchild(2)');
// items.style.backgroundColor = 'yellow';
// var items = document.querySelector('li:nth-child(odd)');
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = 'yellow';
// }
// var btn = document.querySelector('input[type="submit"]');
// btn.value = 'SEND';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'red';
// }
// create new div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div');
// create text node
var newDivText = document.createTextNode('Hello World!');
newDiv.appendChild(newDivText);
// console.log(newDiv);
var container = document.querySelector('header .container');
console.log(container);
var h1 = document.querySelector('header h1');
console.log(h1);
container.insertBefore(newDiv,h1);

var text = document.querySelector('input[type="text"]');
console.log(text);
text.addEventListener('keydown', runEvent);
function runEvent(e){
    console.log('Event Type: '+e.type);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}



