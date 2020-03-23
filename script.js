//function expression to select element
const selectElement = (s) => document.querySelector(s);

//Open the menu onclick
// selectElement(s: '.open').addEventListener('click', () =>{
//     selectElement(s: '.nav-list').classList.add('active')
// })
selectElement(`.open`).addEventListener('click', () => {
    selectElement( '.nav-list').classList.add('active')
})
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
})