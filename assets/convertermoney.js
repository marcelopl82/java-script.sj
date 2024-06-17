
const converterbutton = document.querySelector(".converter-button")
const currencyselect =document.querySelector(".currency-select")

function convertvalues () {


const inputcurrencyvalue = document.querySelector(".input-currency").value
const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")// valor real
const currencyvaluetoconverted = document.querySelector(".currency-value")// outras moedas


const dólartoday=5.20
const eurotoday=6.20

if (currencyselect.value == "dólar"){// se select estiver slecionado o valor de dólar, entre aqui//
  currencyvaluetoconverted.innerHTML=new Intl.NumberFormat("en-US",{
  style :"currency", 
  currency: "USD",

}).format(inputcurrencyvalue/dólartoday)

}

  if(currencyselect.value =="euro"){
    currencyvaluetoconverted.innerHTML = new Intl.NumberFormat("de-DE",{
    style :"currency", 
    currency: "EUR",
  
  }).format(inputcurrencyvalue/eurotoday)

}
  
  
   currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style :"currency", 
    currency: "BRL",
  
  }).format(inputcurrencyvalue)

}


 function currencychange() {

 const currencyname=document.getElementById("currency-name")
  const currencyimge=document.querySelector(".currency-img ")

  if(currencyselect.value=="dólar"){
  currencyname.innerHTML = "Dólar americano"
  currencyimge.src="./assets/dolar(1)1.png"}


  
  if(currencyselect.value=="euro")
  currencyname.innerHTML = "euro"
 currencyimge.src ="./assets/euro 3.png"}

 convertvalues ()
 
 currencyselect.addEventListener("change", currencychange)    
 converterbutton.addEventListener("click", convertvalues)
