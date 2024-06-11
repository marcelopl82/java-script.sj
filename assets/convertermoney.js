
const converterbutton = document.querySelector(".converter-button")


function convertervalues(){

console.log(inputcurrencyvalue)}
const inputcurrencyvalue=document.querySelector(".input-currency").value/*

   const currencyvaluetoconvert=document.querySelector(".currency-value-to-convert") //valor real
   const currencyvaluetoconverted=document.querySelector(".currency-value")//outras moedas
   
   const dolartoday= 5.20

   const convertervalue=inputcurrencyvalue/dolartoday

 currencyvaluetoconvert.innerHTML = new Intl.NumberFormat(" pt-BR ", {
   style: "currency",
   currency:"BRL"
 }).format(inputcurrencyvalue)

 currencyvaluetoconverted.innerHTML = new Intl.NumberFormat("en-US", 

  {style: "currency"
     ,currency:"USD"}).format(convertervalue)*/


 converterbutton.addEventListener("click", convertervalues)
    