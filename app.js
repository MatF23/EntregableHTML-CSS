// Codigo para probar que haya quedado enlazado el documento al html
// document.getElementById("submitbtn").addEventListener('click', ()=> {window.alert('Hola!')})



function submitHandler() {

// const formElem = document.getElementsByTagName("form")[0];
// formElem.addEventListener("submit", (event) => {
// event.preventDefault();
// }) 
// para anular la configuracion predeterminada del form, que es enviar al back y refrescar pantalla

const name = document.getElementById('fName')
const lName = document.getElementById('lName')
const emailA = document.getElementById('emailAdress')
const companyName = document.getElementById('companyName')
const phoneNumber = document.getElementById('phoneNumber')
const message = document.getElementById('message')

const nameV = name.value
const lNameV = lName.value
const emailV = emailA.value
const companyV = companyName.value
const phoneV = phoneNumber.value
const messV = message.value

function addAListener() {
    const submitbtnI = document.getElementById("submitbtn")
    submitbtnI.addEventListener('click', alertMessage)
}
addAListener()


if (nameV && lNameV && emailV && companyV && phoneV && messV) { 
    alertMessage()
}

function alertMessage() {
    console.log(`First Name: ${nameV}, Last Name: ${lNameV}, Email Adress: ${emailV}, Company Name: ${companyV}, Phone Number: ${phoneV}, Message: ${messV}`)
    window.alert(`First Name: ${nameV}, Last Name: ${lNameV}, Email Adress: ${emailV}, Company Name: ${companyV}, Phone Number: ${phoneV}, Message: ${messV}`)
}

}

// submitHandler() pense que habia que llamar la funcion para que se ejecute,
// pero si lo hago se ejecuta dos veces, una por el onclick en el html y otra
// por llamarla aca

// document.getElementsByClassName('hamburguesa').addEventListener('click', mostrarMenu)
// document.getElementsByClassName('hamburguesa').addEventListener('click', ocultarMenu)
// nav = document.getElementsByClassName('container')
// shadow_menu = document.getElementsByClassName('shadow_menu')

// function mostrarMenu() {
//     nav.style.rigth = "0px"
//     shadow_menu.style.display = "block"
// }

// function ocultarMenu() {
//     nav.style.rigth = "-250px"
//     shadow_menu.style.display = "none"
// }