/*
Table links :-
Certen DOM elements may provide additional properties specifie to their type for convenience.
Table element supports the following properties :-

table.rows ----> Collection of tr elements.
table.caption ----> refrence to <caption>
table.tHead ----> reftence to <thead>
table.tFoot ----> refrence to <tfoot>
table.tBodies ----> collection to <tbody> elements
tbody.rows ----> collection of <tr> inside

tr.cells ----> collection of td and th
tr.sectionRowIndex ----> Index of tr inside enclosing element.
tr.rowIndex ----> Row number starting from 0

td.cellIndex ----> No. of cells inside enclosing <tr>

Quick Quiz :-
Print typeof document and typeof window in the console and sec what is prints.

*/

let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.rows[0])
console.log(t.rows[0].rowIndex)

let tr = document.body.firstElementChild.firstElementChild
console.log(tr.cells)
console.log(tr.sectionRowIndex)
//console.log(td.cellIndex)





