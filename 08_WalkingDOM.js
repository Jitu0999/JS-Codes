/*
DOM tree refers the HTML page where all the nodes are objects. There can be 3 main types of nodes in the DOM tree-
1. Text nodes
2. Element nodes
3. Comment nodes

In an HTML page, <html> is at the root and <head> and <body> are its children, etc.
A text node is always a leaf of the tree.

AUTO CORRECTIN -
If an erroneous HTML is encountered by the browser,
it tends to correct it for example, if we put something after the body, it is automatically moved inside the body.
Another example is <table> tag which must contain <tbody>

*/
<html>
    <head>
        <title>Hello</title>
    </head>
    <body>
        <>...</>
        <>....</>
        <>.....</>
    </body>
</html>

Document.body  ---> Page body tag 
    ^
    |
   DOCUMENT ---> Document  documentElement
   /   \                       |
   |    More Children       Page HTML tag
   |
document.head

// NOTE - document.body can sometime be null if the javascript is writen before the body tag.
 