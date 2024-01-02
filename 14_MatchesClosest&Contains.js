/*
Matches, Closest and Contains methods:-
There are three important methods to search the dom.
1. elem.matches(css) -> To check if element matches the given css selector.
2. elem.closet(css) -> To look for the nearest ancestor that matches the given css selector. The elem itself is also checked.
3. elemA.contains(elemB) -> Returns true if elemB is inside elemA (a descendant of elemA) or when elemA == elemB.


*/
let id1 = document.getElementById("id1")
console.log(id1);
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest(".box"))


