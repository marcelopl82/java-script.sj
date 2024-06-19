
const converterbutton = document.querySelector(".converter-button")
const currencyselect = document.querySelector(".currency-select")

function convertvalues() {


  const inputcurrencyvalue = document.querySelector(".input-currency").value
  const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")// valor real
  const currencyvaluetoconverted = document.querySelector(".currency-value")// outras moedas


  const dólartoday = 5.20
  const eurotoday = 6.20
 const bitcoindoday = 19.71


  if (currencyselect.value == "dólar") {// se select estiver slecionado o valor de dólar, entre aqui//
    currencyvaluetoconverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",

    }).format(inputcurrencyvalue / dólartoday)

  }
  if (currencyselect.value == "euro") {
    currencyvaluetoconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputcurrencyvalue / eurotoday)
  }


  if (currencyselect.value == "bitcoin") {
    currencyvaluetoconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",

    }).format(inputcurrencyvalue / bitcoindoday)

  }


  currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",

  }).format(inputcurrencyvalue)

}


function changecurrency() {

  const currencyname = document.getElementById("currency-name")
  const currencyImg = document.querySelector(".currency-img ")

  if (currencyselect.value == "dólar") {
    currencyname.innerHTML = "Dólar americano"
    currencyImg.src = "./dolar (1) 1.png"
  }


  if (currencyselect.value == "euro") {
    currencyname.innerHTML = "Euro"
    currencyImg.src = "./euro 3.png"
  }

  if (currencyselect.value=="bitcoin")
    {currencyname.innerHTML="bitcoin"
      currencyImg.src = "./bitcoin 1.png"}
}
convertvalues()

currencyselect.addEventListener("change", changecurrency)
converterbutton.addEventListener("click", convertvalues)
