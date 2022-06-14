const button = document.getElementById('input-btn')
let myLeads = []
const inputEl = document.getElementById('input-el')

// 2. Grab the unordered list and store it in a const variable called ulEl

const ulEl = document.getElementById('ul-el')
let listItems = ''

button.addEventListener('click', function() {
    

    myLeads.push(inputEl.value)
    console.log(myLeads)

    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML = "<li>" + myLeads[i] + "</li>"
        
        // Create an element to append to the ul
       const li = document.createElement('li')
       li.textContent = myLeads[i]
       ulEl.append(li)
    }

})
  
// Render the leads in the unordered list using for loop

