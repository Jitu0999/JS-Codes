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

Data Attributs:-
We can always creats custom attributs but the ones starting with 'data' reserved for programmers use.
They are availabe in a property named dataset.
If an element has an attribut named 'data-one'.
Its availabe as element.dataset.one

Insertion methods:-
We looked at some ways to insert elements in the DOM. Here is another ways-
let div = document.createElement('div') // create.











*/