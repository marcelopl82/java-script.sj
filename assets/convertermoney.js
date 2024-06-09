const converterbutton = document.querySelector(".converter-button")
function convertervalues()
{const inputcurrencyvalue=document.querySelector(".input-currency").value

   const currencyvaluetoconvert=document.querySelector(".currency-value-to-convert") //valor real
   const currencyvaluetoconverted=document.querySelector(".currency-value")//outras moedas
   
   const dolartoday= 5.20

   const convertervalues=inputcurrencyvalue/dolartoday

 currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
   stile: "currency",
   currency:"BRL"
 }).format(inputcurrencyvalue)

 currencyvaluetoconverted.innerHTML=convertervalues
}

 converterbutton.addEventListener("click", convertervalues)
    