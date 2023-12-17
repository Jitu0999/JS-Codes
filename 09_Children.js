/*
Children of an element.
Direct as well as display nested elements of an element are called its children.

Child nodes- Elements that are direct children,For example head and body are children of <html>

Descendant nodes - all nested elements, children their children and so on...

firstChild, lastChild & childNodes --
element.firstChild -> First child element.
element.lastChild -> Last Child element.
element.childNodes -> All child nodes.

Following is always true :-
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length-1] === elem.lastChild

there is also a method elem.hasChildNodes() to check whether there are any child nodes.

NOTE:- childNodes looks like an array, But its not actually an array but a collection.
We can use array from (Collection) to convert it into an array ---> Array methods wont work.

Notes on DOM Collections :-

*/

console.log(document.body.firstChild) // atext
console.log(document.body.lastChild) // script
console.log(document.body.childNodes) // nodeList(8) [text, h2, text, span, text, div, text, script]
