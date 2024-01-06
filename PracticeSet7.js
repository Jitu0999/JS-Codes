/*
Q.1  Create a navbar and change the color if its first element to red ?

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
*/

/*
Q.2 Create a table without tbody. Now use "View page source" button to check when ther it has a tbody or not?
Ans-  NO.
*/

/*
Q.3 Create an element with 3 children now change the color of first and last element to blue?
*/

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "blue"

/*
Q.4 Write a javascript code to change background of all <li> tags to yellow?
*/
Array.from(document.getElementsByTagName("li")).forEach((Element) =>{
    Element.style.background = "yellow";
})

/*
Q.5 Write of the following is used to look for the farthest encistor that matches a given css selector?
*/
