console.log("Running Dima's Divine Dumplings")

let orderName
let favoriteFlavour
let orderServings

window.writeForm = writeForm

import {signedIn} from './fb_io.js';


const HTML_OUTPUT = document.getElementById("databaseOutput");

function reset() {
  console.log("resetting")
  firebase.database().ref('/').set(
    {
      dimasdivinedumplings: {
        orders: {
          Name: {
            Flavour: 'Yummy',
            Servings: 'A lot',
          }
        }
      }
    }
  )
}


function writeForm(){
  if (signedIn == true) {
    orderName = document.getElementById("name").value;
    favoriteFlavour = document.getElementById("favoriteFlavour").value;
    orderServings = document.getElementById("servingsQuantity").value;
    console.log(orderName)
    console.log(orderServings)
    console.log(favoriteFlavour)
    fb_write()
  } else {
    console.log("user not signed in")
  }
}

function fb_write() {
  console.log("writing up order")
  firebase.database().ref('/dimasdivinedumplings/orders/' + orderName).set(
    {
        flavour: favoriteFlavour,
        servings: orderServings,
    }
  )
console.log("updated firebase")
}