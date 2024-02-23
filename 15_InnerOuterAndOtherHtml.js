/*
CHAPTER 8

Console.dir function.
console.log -> Shows the element Dom tree
console.dir -> Shows the element as an boject with its properties.

Tag Name / node Name :-
Used to read tag name of an element.
tagName -> Only exists for Element Nodes. 
nodeName -> Defined for any node (text, comment etc.) 

Inner HTML and Outer HTML :-
The innerHTML property allows to get the HTML inside the element as a string.(valid for element nodes only)

The Outer HTML property contains the full HTML. (inner HTML + the element itself.)
Inner HTML is valid only for element nodes. For other node types we can use node value or data.

Text Content :-
Provides access to the text inside the element. Only text, minus all tags.

The Hidden peoperty:-
The 'Hidden' attribut and the DOM property specifies whether the element is visible or not.
<div hidden> I Am Diddne </div>
<div id = 'element'> I Can be Hidden</div>
<script>
    element.hiddne=true;
</script>

Attribute Methods:-
1. elem.hasAttribute (name) -> Method to check for existence of an attribute.
2. elem.getAttribute (name) -> Method use to get the value of an attribute.
3. elem.setAttribute (name, value) -> Method use to set the value of an attribute.
4. elem.removeAttribute (name) -> Method to remove the attribute from elem.
5. elem.attributes -> Method to get the collection of all attributs

Data -* Attributs:-
We can always creats custom attributs but the ones starting with 'data' reserved for programmers use.
They are availabe in a property named dataset.
If an element has an attribut named 'data-one'.
Its availabe as element.dataset.one

Insertion methods:-
We looked at some ways to insert elements in the DOM. Here is another ways-
let div = document.createElement('div') // Create.
div.className = "alert" // set class.
div.innerHTML = <span> Hello </span>
document.body.append(div)

Here are some more insertion methods:-
1. node.append(e) -> Append at the end of node.
2. node.prepend(e) -> Insert at the begning of node.
3. node.before(e) -> Insert before node.
4. node.after(e) -> Insert after node.
5. node.replaceWith(e) -> Replaces node with given node.

QUICK QUIZ--
Try out all these methods with one webpage.

insertAdjacent HTML/Text/Element :-
This method is used to insert HTML.
The first parameter is a code word, Specifying where to insert.
Must be one of the following---
1. "beforebegin" - Insert HTML immediatly before element.
2. "afterbegin" - Insert HTML in to element at the begining.
3. "beforeend" - Insert HTML in to element at the end.
4. "afterend" - Insert HTML immediately after element.

The second parameter is an HTML string.
Example-

<div id="div"></div>
<script>
div.insertAdjecentHTML ('beforebegin', '<p> Hellow </p>');
div.insertAdjecentHTML ('afterend', '<p> Bye </p>');
</script>

The output would be --

<p> Hello </p>
<div id="div"> </div>
<p> Bye </p>

Node Removal :-
To remove a node, there's a method node.remove();

let id1 = document.getElementById("id1")
id1.remove()

ClassName and classList
If we assign something to elem.className, it replaces the whole string of classes.

Often we want to add/remove/toggle a single class.
1. elem.classList.add/remove("class") -> add/removes a class.
2. elem.classList.toddle("class") -> adds the class if it does not exixt, Otherwise removes it.
3. elem.classList.contains("class") -> checks for the given class, returns true/fals.

Set Timeout and Set Interval:-
set Timeout allows us to run a function once after the interval of time.

Syntax of set Timeout is as follows-
let timerId  = set Timeout(function,<delay>,<arg1>,<arg2>)
        |                               |        
    returns a time Id.                  In MS

Clear Timeout is use to cancel the exicution(in case we change our mind).
For Example-
let timerId = setTimeout(() => alert("never"),1000);
clear Timeout (timerId)
                  |
                 Cancel the exicution.

set Interval method has a similer syntax as set Timeout :-
let timerId = set Interval(function, <delay>, <arg1>, <arg2>);
All arguments have same meaning. But unlike set Timeout,
it runs the function not only once, but regularly after the given interval of time.

To stop furthor cells, we can use clear Interval(timer).

Browser Events:-
An event is a signal that something has append. All the DOM nodes generate such signals.

Some importenet DOM events are:-
Mouse events :- click, context menu(right click), mouseover/mouseout, mousedown/mouseup, mousemove.
Keyboard events :- keydown and keyup.
Form element event :- submit, focus etc.
Documents events :- DOM Content Loaded.

Handling Events :-
Events can be handled through HTML attributes.
<input value = "Hey" onclick="alert('hey')" type="button">
                                |
                            Can be another JS function.
Events can also be handled through the onclick property.
elem.onclick = function(){
                alert("yes")
                    };

Note :- Adding a handler with javaScript overwrites the existing handler ====
addEventListner and removeEventListner ---
addEventListner is used to assign multiple handlers to an events.

element.addEventListner(event, handler)
element.removeEventListner(event, handler)
                        |
                handler must be the same function object for this to work.

The Event Object:-
When an event happens, the browser creats an events object, puts details into it and prasses it as an argument to the handler.

elem.onclick = function (event) {
    ...
}

event.type : Event type.
event.currentTarget : Element that handled the event.
event.clientX/event.clientY : Coordinates of the cursor.

*/
// ______________________________________________________________________________

/*
// TagName and nodeName:-
let x = document.getElementsByTagName('span')[0]
console.log(x);
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

// innerHTML and outerHTML:-
// Note - innerHTML only valid for elements nodes. For other node types we can use nodeValue or data.
first.innerHTML
first.innerHTML = "<i>Hey I am Italic</i>"
first.outerHTML
first.outerHTML = "<div>hey</div>"

Document.body.firstChild
document.body.firstChild.data
document.body.firstElementChild.data
document.body.firstChild.data
document.body.firstChild.nodeValue

// Text Content:-
document.body.firstChild.data
console.log(document.body.textContent)

// Hidden Property:-
first.hidden = false
first.style.display = "none"


// HTML Attributes Methods:--
let first = document.getElementById("first");
let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
first.setAttribute("hidden", "true")
first.setAttribute("class", "true Test")
first.removeAttribute("class")
console.log(first.attributes)

// Data -* Attributs:-
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)


// Insertion Methods :-
let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';
let div = document.createElement('div');
div.innerHTML = '<h2>Hello Jitu...</h2>';
//a.appendChild(div);
//a.append(div);
//a.prepend(div);
//a.before(div)
//a.after(div)
a.replaceWith(div)

//insertAdjacent HTML/Text/Element :-
first.insertAdjacentHTML('beforebegin', '<div class="test"> Before begin</div>');
first.insertAdjacentHTML('beforeend', '<div class="test"> Before end</div>');
first.insertAdjacentHTML('afterbegin', '<div class="test"> After begin</div>');
first.insertAdjacentHTML('afterend', '<div class="test"> After end</div>');

// Node Removal :-
first.remove()

// className and classList:-
first.className = "text-black red"
first.classList.add("red")
first.classList.remove("red")
first.classList.contains("red")
first.classList.toggle("red")
*/
// setInterval and setTimeout:-
alert("Hello")


// 46 - 00:00/00:00





















