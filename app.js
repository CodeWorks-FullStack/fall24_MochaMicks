console.log('Ready to make some bean juice')


// #region Reference Examples

// NOTE reference type, when variables are created for reference types, the original is used in both places. NOT a copy, Just a second 'pointer'

// Arrays, Collections of data organized by a POSITION, or and INDEX. They are Ordered
let namesArray = ['mick', 'jeremy', 'jake']
let numsArray = [1, 10, 100]
let boolsArray = [true, true, false]
let arrayArray = [['neo', 'the one'], ['trinity', 'IRS hacker'], ['morpheus', '💊💊']]
let mixedArray = [1, 'mick', ['neo', 'trinity', 'morpheus']]

for (let i = 0; i < namesArray.length; i++) {
  console.log(i, namesArray[i] + '🙋‍♂️');
}

// Objects, Collections of data organized by KEY : VALUE pairs, there is no order

let staffObj = {
  name: 'Mick',
  position: 'instructor',
  yearsAsDM: 10,
  ownsDogs: true,
  dogNames: ["Dipper", "Pluto"]
}

let theOne = {
  name: 'Neo',
  occupation: 'Web Dev',
  'admin access to system': true
}

// Complex data structures 

let codeworks = [
  {
    name: 'Mick',
    occupation: 'Instructor',
    points: 0
  },
  {
    name: 'Jeremy',
    occupation: 'Instructor',
    points: 0
  },
  {
    name: 'Jake',
    occupation: 'CEO',
    points: 0
  },
  {
    name: 'Dipper',
    occupation: 'Bug Sniffer',
    points: 0
  },
  {
    name: 'Pluto',
    occupation: 'Bug Eater',
    points: 0
  }
]

console.log(codeworks[2].dogs
);

for (let i = 0; i < codeworks.length; i++) {
  // console.log(i, codeworks[i]);
  let person = codeworks[i] // retains reference, because codeworks[0] is an object (REFERENCE TYPE)
  let score = person.points // loses reference, because person.points is a primitive number (PRIMITIVE TYPE)
  if (person.occupation == 'Instructor') {
    score += 3 // this only modifies score, not the person's points
    person.points += 100 // this included the reference, so it does in fact modify the original
    // console.log(person.name, person.occupation);
    console.log('🧑‍🏫', person, score);
  }
}


// #endregion


const shopItems = [
  { name: "Mick's Mocha", price: 7.55, qty: 0 },
  { name: "Matcha Powder Shake", price: 12.25, qty: 0 },
  { name: "Dipper Dapper Milk", price: 5, qty: 0 },
  { name: "Kirkland Croissant", price: 1.99, qty: 0 },
]


function orderMocha() {
  console.log('🍫☕', shopItems[0]);
  let mocha = shopItems[0]
  mocha.qty += 1
  // console.log(mocha);
  drawOrder()
}

function orderMatcha() {
  let matcha = null // we don't start with a reference
  // loop is used to find the reference to the matcha item
  for (let i = 0; i < shopItems.length; i++) {
    let item = shopItems[i]
    console.log('🔄️', item);
    if (item.name == "Matcha Powder Shake") {
      console.log('you found matcha', item);
      matcha = item
    }
  }

  console.log('You ready to Matcha this?', matcha) // now we do have it, after the loop
  matcha.qty += 1
  drawOrder()
}

// This takes in the name of one of the shop items, finds it's reference, and increases the quantity by 1. Then invokes the drawOrder function
function orderItem(selectedItemName) {
  console.log('ordering', selectedItemName);
  let itemOrdered = null
  for (let i = 0; i < shopItems.length; i++) {
    let item = shopItems[i]
    if (item.name == selectedItemName) {
      console.log('found', item);
      itemOrdered = item
    }
  }

  itemOrdered.qty += 1
  drawOrder()

}

function calculateOrderTotal() {
  let orderTotal = 0
  for (let i = 0; i < shopItems.length; i++) {
    let item = shopItems[i]
    orderTotal += item.price * item.qty
  }
  console.log('💳', orderTotal);

  return orderTotal
}


function drawOrder() {
  let orderElm = document.getElementById('order')
  // console.log('📃', orderElm);
  // orderElm.innerText = "1x Mick's Mocha $7.55"
  let orderContent = '' // this allows us to clear the HTML with new content, instead of endlessly adding to it
  for (let i = 0; i < shopItems.length; i++) {
    console.log(i, shopItems[i]);
    let item = shopItems[i]
    console.log(`${item.qty}x ${item.name} $${item.price * item.qty}`);
    // orderElm.innerHTML += `<p>${item.qty}x ${item.name} $${item.price * item.qty}</p>`
    if (item.qty > 0) { // don't include the item in the order if it doesn't have a quantity greater than 0
      orderContent += `<p>${item.qty}x ${item.name} $${(item.price * item.qty).toFixed(2)}</p>`
    }
  }
  console.log(orderContent);
  orderElm.innerHTML = orderContent


  // runs the function calculateOrderTotal, and it's value gets stored in the variable customerTotal
  let customerTotal = calculateOrderTotal()
  console.log('You owe me', customerTotal);
  let totalElm = document.getElementById('total')
  totalElm.innerText = customerTotal.toFixed(2)

}
