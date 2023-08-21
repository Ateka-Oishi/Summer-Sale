// 1. price summing function
function sumOfTotalPrice(data){
    const textOfTotalPrice = document.getElementById('price-total');
    const priceTotal = parseFloat(textOfTotalPrice.innerText);
    const textTotal = document.getElementById('total');
    const dataPrice = parseFloat(data.innerText);
    let price =(priceTotal + dataPrice).toFixed(2);
    textTotal.innerText = price;
    textOfTotalPrice.innerText = price;

    // validation
    if(price > 0)
        makeEnable('purchase-btn');
    if(price >= 200)
        makeEnable('apply-btn');

}

// 2. make enable disable function
function makeEnable(id){
    const btn = document.getElementById(id);
    btn.disabled = false;
}

function makeDisable(id){
    const btn = document.getElementById(id);
    btn.disabled = true;
}

// 3. get discount
function getDiscount(){
    const textTotal = document.getElementById('total');
    const total = parseFloat(textTotal.innerText);
    let discount = (total * 0.2);
    const discountText = document.getElementById('discount');
    discountText.innerText = discount.toFixed(2);
    let final = parseFloat(total-discount).toFixed(2);
    textTotal.innerText = final;

}

// 4. add and remove text
function addChild(text){
    let addChild = document.getElementById('add-child');
    const count = addChild.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${text}`;
    addChild.appendChild(p);

}

function removeText(){
    let addChild = document.getElementById('add-child');
    const cnt = addChild.childElementCount;
    // validation
    for(let i = cnt; i >= 1; i--){
        let child = addChild.querySelector('p');
        addChild.removeChild(child);
    }
}

// 5. adding eventListener
document.getElementById('tablespoon-set').addEventListener('click', function(){
    const textOfPrice = document.getElementById('tablespoon-set-price');
    sumOfTotalPrice(textOfPrice);
    addChild('Tablespoon Set');

})

document.getElementById('bread-maker').addEventListener('click', function(){
    const textOfPrice = document.getElementById('bread-maker-price');
    sumOfTotalPrice(textOfPrice);
    addChild('Bread Maker');

})

document.getElementById('home-cooker').addEventListener('click', function(){
    const textOfPrice = document.getElementById('home-cooker-price');
    sumOfTotalPrice(textOfPrice);
    addChild('Home Cooker');

})

document.getElementById('back-cap').addEventListener('click', function(){
    const textOfPrice = document.getElementById('back-cap-price');
    sumOfTotalPrice(textOfPrice);
    addChild('Sports Back Cap');

})

document.getElementById('jersey-set').addEventListener('click', function(){
    const textOfPrice = document.getElementById('jersey-set-price');
    sumOfTotalPrice(textOfPrice);
    addChild('Full Jersey Set');

})

document.getElementById('sports-cates').addEventListener('click', function(){
    const textOfPrice = document.getElementById('sports-cates-price');
    sumOfTotalPrice(textOfPrice);
    addChild('Sports Cates');

})

// 6. apply coupon
document.getElementById('apply-btn').addEventListener('click', function(){
    const textOfCoupon = document.getElementById('coupon');
    const coupon = textOfCoupon.value;

    // validation
    if(coupon != "SELL200"){
        alert('Please Enter the Valid Coupon Code.');
        textOfCoupon.value = '';
    }
    else{
        makeDisable('apply-btn');
        getDiscount();
        textOfCoupon.value = '';

    }
           
})

// make purchase
document.getElementById('modal-btn').addEventListener('click', function(){
    const textOfTotalPrice = document.getElementById('price-total');
    const discountText = document.getElementById('discount');
    const textTotal = document.getElementById('total');
    textOfTotalPrice.innerText = parseFloat(0.00).toFixed(2);
    textTotal.innerText = parseFloat(0.00).toFixed(2);
    discountText.innerText = parseFloat(0.00).toFixed(2);
    makeDisable('purchase-btn');
    makeDisable('apply-btn');
    removeText();

})







