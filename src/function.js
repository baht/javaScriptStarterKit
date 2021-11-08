function addToCart(productName="Elma", quantity) {
    console.log("Sepete eklendi: " + productName + " Adet: " + quantity)
}

// addToCart()
addToCart("Yumurta", 10)
// addToCart("Karpuz")

//-------------------------------------------------------------------------

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

//-------------------------------------------------------------------------

let sayHello2 = function () {
    console.log("Hello World 2!")    
}

sayHello2()

//-------------------------------------------------------------------------

function addToCart2(productName, quantity, unitPrice) {

}

addToCart("Elma", 5, 10)
addToCart("Armut", 2, 20)
addToCart("Limon", 3, 15)

//------------------------------------------------------------------------

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product){
    console.log("Ürün: " + product.productName + ", Fiyat: " 
    + product.unitPrice + ", Adet: " + product.quantity)
}

addToCart3(product1)

//------------------------------------------------------------------------

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

//-------------------------------------------------------------------------

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

// REST -------------------------------------------------------------------

function add(...numbers) { // rest (...degisken) - rest değeri sonda alınır!
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)

}

add(20,30)
// add(20,30,40)
// add(20,30,40,50)

//SPREAD-------------------------------------------------------------------

let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))

//-------------------------------------------------------------------------

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"}, 
    {name:"Marmara", population:"30M"}, 
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Samsun","Trabzon"]
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

//-----------------------------------------------------------------------------------

let newproductName, newunitPrice, newquantity
({productName:newproductName, unitPrice:newunitPrice, quantity:newquantity} = 
    {productName:"Elma", unitPrice:10, quantity:5})

console.log(newproductName);
console.log(newunitPrice);
console.log(newquantity);

