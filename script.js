const memEl = document.querySelector(".memory");

// [indirizzoIniziale, dimensione]
let fragments = [
    [100, 100],
    [300, 100],
    [550, 50],
    [700, 50],
];

/*
let primo = fragments.slice(1);
if (primo[0] == 0) {
} else {
}
console.log(primo);
*/

let begin = 0
for ([elem1, elem2] of fragments) {

    let newEl = document.createElement("div");
    newEl.classList.add("empty")
    newEl.style.width = elem1 - begin;
    newEl.innerText = elem1 - begin;
    memEl.append(newEl);
    

    newEl = document.createElement("div");
    newEl.style.width = elem2
    memEl.append(newEl);

}

