import getparticipenttemplate from "./template.mjs"
const addbutton = document.getElementById("add")

const form = document.querySelector("form")

form.addEventListener("submit", submitForm)

// Create a variable to keep track of the number
let participantplus = 1

addbutton.addEventListener("click", () => {
    // call the function incrementing that number getparticipenttemplate(number++)

    const template = getparticipenttemplate(++participantplus)
    addbutton.insertAdjacentHTML("beforebegin", template)
})

function submitForm(event) {
    event.preventDefault();
    const fee = totalFees()
    form.style.display = 'none'
    const reciept = getreceipttemplate(fee)
    const summary = document.getElementById("summary")
    summary.insertAdjacentHTML("beforebegin", reciept)
    // do the rest of the stuff
}

function getreceipttemplate(fee){
    return`<p>Total participants is ${participantplus}, and the total fee is $${fee} </p>`
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    
    let sum = 0


    feeElements.forEach((item) => {
        console.log(item.value)
    let fee =  parseFloat(item.value)
    sum += fee
    })
    // once you have your total make sure to return it!
    return sum
}
