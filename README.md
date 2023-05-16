Segunda Entrega hacia el Proyecto Final💻

De acuerdo a la consigna de pre entrega, este trabajo contiene

   1.Incorporación de al menos 1 array

2. Utilización de algunos de los métodos o propiedades vistos en clase

Formato:

Página HTML y Código fuente en JavaScript

1. Contiene un archivo 'miarchivo.js' en dónde  se complementa la actividad de la preEntrega 1, con la funcionalidad que muestra el costo total del pedido utilizando el método toFixed para mostrar solo dos decimales y se ocupa getElementsByClassName para obtener el elemento con el id costo y mostrar el costo total del pedido en el HTML
2. Contiene un archivo 'miarchivo2.js' en dónde se crea un array de objetos con los productos en este caso de la panadería Bakery, mismo archivo dónde se encuentran los métodos map(), filter() includes() y forEach()

Diseños y Estilo del simulador interactivo

El diseño de este trabajo continúa utilizando el framework Bootstrap. Lo que permite 

que sea un diseño de página web responsive.

### Explicación del desarrollo del simulador interactivo

La sección de funciones  01- calcularCostoTotal() y 02- agregarMas(), se encuentra explicada en el README.md de PreEntrega01AcostaMeza.

En cuanto a la actividad 02 se puede observar  lo siguiente paso a paso:

Método map()

1. creación de un array de objetos con los panes en venta en la panadería, este incluye el nombre, el precio y alergenos
2. se crea un array vacío llamado carrito para alamacenar los productos que el cliente desea comprar
3. Se pregunta mediante un prompt si desea ver la lista de productos disponibles, en caso de que no desee ver la lista se agradece su visita, en caso de que si quiera se muestra la lista de panes con precios respectivos y en caso de una respuesta no válida se solicita que conteste si/no.

   Método filter()/ Método includes()

   1. Se declara una variable 'sinGluten' para almacenar los productos que no contienen gluten y después se utiliza el método filter para obtener la lista de panes sin gluten mediante el uso de la función flecha y el método includes para obtener los productos que no contienen gluten.
   2. Se muestra en consola 'sinGluten'

Método forEach()

    1. Se declara la variable descuento en este caso para aplicar un 10% de descuento en

    panes libres de gluten

2. Se crea la variable carrito para alamacenar el descuento y los panes o productos que el cliente desea comprar
3. Se ocupa el método forEach para ayudar a recorrer el array aplicar un descuento a los productos que no contienen gluten y se almacenan en el array carrito ; finalmente se ocupa .push para agregar los productos al array carrito
