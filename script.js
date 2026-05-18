
console.log("Running Dima's Divine Dumplings")

let orderName
let favoriteFlavour
let orderServings

const HTML_OUTPUT = document.getElementById("databaseOutput");

function writeForm(){
    orderName = document.getElementById("name").value;
    favoriteFlavour = document.getElementById("favoriteFlavour").value;
    orderServings = document.getElementById("servingsQuantity").value;
}

function fb_write() {
  console.log("writing up order")
  firebaseConfig.databaseURL().ref('/dimasdivinedumplings/orders/' + orderName).set(
    {
        flavour: favoriteFlavour,
        servings: orderServings,
    }
  )
console.log("updated firebase")
}   