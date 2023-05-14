//Algoritmo sencillo para calcular el costo total de los productos comprados en la panadería

//01 Primera Función🦄

// const calcularCostoTotal = ()=> {
    
//     let finalizado = false;
//     while(!finalizado){
//     const producto = prompt('Ingrese el pan que desea comprar');
//     if(producto === null){
//         finalizado=true;
//     continue;
//     }
//     const cantidad = parseInt(prompt('Ingrese la cantidad'));
//     let costo = 0;
//     let costoProducto = 0;


//     switch(producto) {
//         case 'baguette':
//             costoProducto = 35;
//             break;
//         case 'batard':
//             costoProducto = 100;
//             break;
//         case 'boule':
//             costoProducto = 120;
//             break;
//         case 'bagel':
//             costoProducto = 25;
//             break;
//         case 'pizza':
//             costoProducto = 250;
//             break;
//         case null:
//             finalizado = true;
//             break;
//         default:
//             alert('Ingrese un producto válido');
//             continue;
//     }

//     if (cantidad >0){
//         costo = costoProducto * cantidad;
//         alert(`El cálculo total de tu pedido es ${costo}`);
//        } else{
//         alert('Ingrese una cantidad válida')
//        }
// }
// };

// calcularCostoTotal();

////Algoritmo sencillo para saber si el cliente desea agregar más productos a su carrito de compras


const agregarMas= ()=>{
    
    let continuar = 'si';
    let pedido = prompt('Ingrese el pan que deseas agregar a tu carrito de compras')
    
    while(continuar ==="si" || continuar ==="sí"){
    
        continuar =prompt('¿Deseas agregar más productos a tu carrito?');

        if(continuar === 'si'|| continuar ==='sí'){
            pedido= prompt('Ingrese el pan que desea agregar')
            
        } 
    
    }
    alert('Gracias por tu compra')

}


agregarMas()

