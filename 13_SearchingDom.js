/*
Searching the DOM:-
DOM navigation properties are helpful when the elements are close to each other.
If they are not close to each other, we have some more methods to search the DOM.

1. document.getElementById -
This method is used to get the element with a given id attribute.

let span = document.getElementById('span')
span.style.color="red"

2. document.querySelectorAll -
Returns all element inside an element matching the given CSS selector.

3. document.querySelector -
Returns the first element for the given CSS selector.
A efficient version of elem.querySelectorAll(css)[0]

4. document.getElementsByTagName :-
Returns elements with the given tag name

5. document.getElementsByClassName :-
Returns elements that have the given css class



*/



// Change the card title to red.

let ctitle = document.getElementsByClassName("card-title")[0]

