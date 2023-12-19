
/*
Notes on DOM Collections :-----
They are read-only
They are live clem.childNodes variable(refrence) will be automatically update if childNodes of elem is changed.
They are iterable using for of loop.

Siblings and the parent :-----
Siblings are nodes that are children of the same parent.

For example:-
<head> and <body> are siblings.
Siblings have same parent. in the above example its html.

<body> is said to be the "next" or "right" sibling of <head>
<head> is said to be the "privious" or "left" sibling of <body

The next sibling is in nextSibling property, and the privious one in previousSibling.
The parent is available as parentNode.

                    html
                    /   \
                head     body
                 |      /  \  \
               title  div div div
                     / |  / |   \
                   h1 h3 h3 li   a


alert(document.documentElement.parentNode); // document
alert(document.documentElement.parentElement); // null



*/



