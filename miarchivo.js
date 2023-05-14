function calcularCostoPedido(){
    let producto = document.getElementById('producto').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let costo = 0;
    let costoProducto = 0;

    switch(producto) {
        case 'baguette':
            costoProducto = 35;
            break;
        case 'batard':
            costoProducto = 100;
            break;
        case 'boule':
            costoProducto = 120;
            break;
        case 'bagel':
            costoProducto = 25;
            break;
        case 'pizza':
            costoProducto = 250;
            break;
        default:
            return;
    }

    // Calcula el costo total del pedido
    costo = costoProducto * cantidad;

    document.getElementById("costo").textContent = `${costo.toFixed(2)}`;
}


////Algoritmo sencillo para saber si el cliente desea agregar más productos a su carrito de compras


// const agregarMas= ()=>{
    
//     let continuar = 'si';
//     let pedido = prompt('Ingrese el pan que deseas agregar a tu carrito de compras')
    
//     while(continuar ==="si" || continuar ==="sí"){
    
//         continuar =prompt('¿Deseas agregar más productos a tu carrito?');

//         if(continuar === 'si'|| continuar ==='sí'){
//             pedido= prompt('Ingrese el pan que desea agregar')
            
//         } 
    
//     }
//     alert('Gracias por tu compra')

// }


// agregarMas()

