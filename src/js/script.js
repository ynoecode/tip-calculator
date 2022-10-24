/**
 * ? Variables
 */
const totalBillInputElement = document.getElementById("total-bill-input")
const totalTipInputElement = document.getElementById("total-tip-input")
const numPeopleElement = document.querySelector(".num-people")
const totalCost = document.querySelector(".total")


let numberOfPeople = Number(numPeopleElement.innerText)


/**
 * ? Functions/Algorithms
 * ? 1. Calculate the total bill.
 * ? 2. Calculate the total tip.
 */
let calculate = {
  /**
   * ? Calculate the total bill.
   */
  calculateBill() {
    // ? Getting the value of `totalBillInputElement`
    const bill = Number(totalBillInputElement.value)

    // ? Getting the value of `totalTipInputElement` then divide it to `100`
    const tipPercent = Number(totalTipInputElement.value) / 100

    // ? Getting the product of `bill` and `tipPercent` 
    const tipAmount = bill * tipPercent

    // ? Getting the sum of `bill` and `tipAmount` 
    const total = tipAmount + bill

    // ? Getting the quotient of `total` and `numberOfPeople` 
    const perPersonTotal = total / numberOfPeople

    // ?  
    totalCost.innerText = perPersonTotal.toFixed(2)
  },  
}

/**
 * ? Functions/Algorithms
 */
let numOfPeople = {

  /**
   * ? Increase number of people.
   */
  increasePeople() {

    // Increasing Number
    numberOfPeople += 1
    
    numPeopleElement.innerText = numberOfPeople

    calculate.calculateBill()
  },

  /**
   * ? Decrease number of people.
   */
  decreasePeople() {

    /**
     * ? Catch Errors
     * ? 1. Read if the value of `numberOfPeople` is `1`.
     * ? 2. If the value of `numberOfPeople` is equal to `1` it will stays at `1`.
     */
    if (numberOfPeople <=1) return

    // Decresing Nubmer
    numberOfPeople -= 1

    numPeopleElement.innerText = numberOfPeople

    calculate.calculateBill()
  }
}