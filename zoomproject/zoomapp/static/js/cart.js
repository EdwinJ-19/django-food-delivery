function decreasequantity() {
    var quantityinput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityinput.value);
        if (currentQuantity > 1) {
            quantityinput.value = currentQuantity - 1;
        }
}

function increasequantity() {
    var quantityinput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityinput.value);
        quantityinput.value = currentQuantity + 1;
}