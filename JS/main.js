let PRODUCTOS = [
{
    id: "Guitarra",
    model: "Hipston",
    image : "./imagenes/guitarra.jpg",
    amount : 20,
    price : 50000
},
{
    id: "Bajo",
    model : "Fender",
    image : "./imagenes/Bajo.jpg",
    amount : 30,
    price : 30000
},
{ 
    id: "Armonica",
    model : "Parquer",
    image : "./imagenes/armonica.jpg",
    amount : 40,
    price : 5000

}
];

const stock = PRODUCTOS.forEach((instrument) => {
    console.log(instrument);
})



//llamo a todos los elementos del DOOM

const containerProducts = document.querySelector("#container-products");
let buyBotons = document.querySelectorAll(".buy-btn");

//creo una funcion para cargar productos utilizando la estructura ya creada en el html

function loadProducts(selectProducts) {
    
    selectProducts.forEach((product) => {
    
    const div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top product-image" alt="imagen de un Bajo" width="300px" height="300px">
        <div class="card-body product-detail">
        <h5 class="card-title product-title">${product.id}</h5>
        <p class="card-text product-price">$${product.price}</p>
        <a href="#" class="btn btn-primary buy-btn" id="${product.id}">Comprar</a>
        </div>
        </div>
        `;  

        containerProducts.append(div);
        
})
    toUpdateBtn();
    console.log(buyBotons);
}

loadProducts(PRODUCTOS);

//Como cargo los botones por medio de una funcion, los debo llamar despues de esta.

function toUpdateBtn () {
    buyBotons = document.querySelectorAll(".buy-btn");
    buyBotons.forEach(buton => {
        buton.addEventListener("click",addToCart)
    } )
}

//Array donde se van a cargar los productos
const productsInCart = [];

//

function addToCart (event) {

    const idBtn = event.currentTarget.id;
    console.log(idBtn);
    const addedProduct = PRODUCTOS.find(producto => producto.id === idBtn );
    console.log(addedProduct);

    
    //Pusheo el producto al array del carrito
    productsInCart.push(addedProduct);
}

