console.log("Running Dima's Divine Dumplings")

let orderName
let favoriteFlavour
let orderServings

window.writeForm = writeForm
window.reset = reset
window.blah = blah

import {signedIn} from './fb_io.js';
import {GLOBAL_user} from './fb_io.js';


const HTML_OUTPUT = document.getElementById("databaseOutput");
let element = document.getElementById("statusMessage")

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
    console.log(GLOBAL_user["uid"])
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
  firebase.database().ref('/dimasdivinedumplings/orders/' + GLOBAL_user["uid"]).set(
    {
        flavour: favoriteFlavour,
        servings: orderServings,
    }
  )
console.log("updated firebase")
element.innerText = "Hey " + GLOBAL_user["displayName"] + ", your order has come through. Thank you for ordering Dima's Divine Dumplings. We will send details to your email, " + GLOBAL_user["email"];
}