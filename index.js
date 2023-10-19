// Prompt and Arry creation
const userInputString = prompt(
    "Please enter some flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  const stringArray = userInputString.split(",");
  console.table(stringArray)

//Functions

function getVanilla() {
  let amountVanilla=0
  for(let i=0; i < stringArray.length; i++) {
    if (stringArray[i] === "vanilla") {
      amountVanilla += 1
    }
  }
  return amountVanilla
}

function getStrawberry() {
  let amountStrawberry=0
  for(let i=0; i < stringArray.length; i++) {
    if (stringArray[i] === "strawberry") {
      amountStrawberry += 1
    }
  }
  return amountStrawberry
}

function getCoffee() {
  let amountCoffee=0
  for(let i=0; i < stringArray.length; i++) {
    if (stringArray[i] === "coffee") {
      amountCoffee += 1
    }
  }
  return amountCoffee
}

//Object

const order = {
  vanillaScoops: getVanilla(),
  strawberryScoops: getStrawberry(),
  coffeeScoops: getCoffee()
}
 
//Table

console.table(order)