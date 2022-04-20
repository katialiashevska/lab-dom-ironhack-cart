// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  console.log(price);

  let quantity = product.querySelector(" input").value;
  console.log(typeof quantity);
  console.log(quantity);

  let subTotalValue = price * quantity;
  (product.querySelector(".subtotal span")).innerText = subTotalValue;

  console.log('Calculating subtotal, yey!');
  return subTotalValue;
}

function calculateAll() {
 
  // ITERATION 2
  let manyProducts = document.querySelectorAll(".product");
  let newTotal = +"";
  let subTotals = manyProducts.forEach(function(result1) {
    let total = updateSubtotal(result1);
    newTotal += total;
  });

  // ITERATION 3
  document.querySelector("#total-value span").innerText = newTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const removeItemBtn = document.getElementsById(".btn.btn-remove");
  removeItemBtn.addEventListener("click", removeProduct);
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
