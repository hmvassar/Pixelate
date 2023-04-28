// Your code here
const selector = document.getElementById("color-select")


const table = document.getElementsByTagName('table')[0]

function makeRow() {
const row = document.createElement('tr')
for (let i =0; i < 20; i++){
    const td = document.createElement('td')             
    row.appendChild(td)
}
table.appendChild(row)
}
 makeRow()
 makeRow()
 makeRow()

const button = document.getElementById('add-row')
 button.addEventListener('click', makeRow)

table.addEventListener('click', colorize)

function colorize (event) {
    const target = event.target
    if (target.tagName !== "TABLE"){
        if (target.className === selector.value){
            target.className = ''
    }   else{
            target.className = selector.value
         }
    }
}
