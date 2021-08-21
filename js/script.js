/* memory button */
document.getElementById('8gbMemoryBtn').addEventListener('click', function () {
    const memoryCost = priceUpdate('memoryPrice', 0);
    totalPrice();
})
document.getElementById('16gbMemoryBtn').addEventListener('click', function () {
    const memoryCost = priceUpdate('memoryPrice', 180);
    totalPrice();
})
/* storage button */
document.getElementById('256gbStorageBtn').addEventListener('click', function () {
    const storageCost = priceUpdate('storagePrice', 0);
    totalPrice();
})
document.getElementById('512gbStorageBtn').addEventListener('click', function () {
    const storageCost = priceUpdate('storagePrice', 100);
    totalPrice();
})
document.getElementById('1tbStorageBtn').addEventListener('click', function () {
    const storageCost = priceUpdate('storagePrice', 180);
    totalPrice();
})
/* Shipping Button */
document.getElementById('freeShip').addEventListener('click', function () {
    const shippingCost = priceUpdate('shippingPrice', 0);
    totalPrice();
})
document.getElementById('expressShip').addEventListener('click', function () {
    const shippingCost = priceUpdate('shippingPrice', 20);
    totalPrice();
})

/* Promo Code */
document.getElementById('promoBtn').addEventListener('click', function(){
    const promoInnerValue = document.getElementById('promoInput').value;
    document.getElementById('promoInput').value = '';
    const currentFinalCost = document.getElementById('grandtotal');
    const innerFinalCost = parseFloat(currentFinalCost.innerText);
    if(promoInnerValue == 'stevekaku'){
        const discount = innerFinalCost-(innerFinalCost*20/100);
        currentFinalCost.innerText = discount;
    }
})

function priceUpdate(price, extraPrice) {
    const currentAmount = document.getElementById(price);
    const currentAmountText = parseFloat(currentAmount.innerText);
    currentAmount.innerText = extraPrice;
};
function totalPrice() {
    const memoryCost = parseFloat(document.getElementById('memoryPrice').innerText);
    const storageCost = parseFloat(document.getElementById('storagePrice').innerText);
    const shippingCost = parseFloat(document.getElementById('shippingPrice').innerText);
    const basedAmount = document.getElementById('basedPrice');
    const basedAmountInnerText = parseFloat(basedAmount.innerText);
    const totalCost = memoryCost + storageCost + shippingCost + basedAmountInnerText;

    const currentTotalCost = document.getElementById('totalPrice');
    currentTotalCost.innerText = totalCost;

    const currentFinalCost = document.getElementById('grandtotal');
    currentFinalCost.innerText = totalCost;
}