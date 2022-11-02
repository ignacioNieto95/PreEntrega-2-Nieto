Introduccion

Este proyecto comenzo con la idea de poder realizar un E-Commerce con el cual se pudieran comercializar distintos tipos de picantes y sus variedades. Comence usandolo como idea para practicar en el Curso de React de CoderHouse y al darle forma clase a clase, me decidi por perfeccionarlo a fondo para poder entregarlo como mi proyecto final para aprobar el curso en si.

Componentes y funcionalidades utilizadas.

La aplicacion se fue desestructurando en distintos componentes, tratando de darle claridad a cada uno para poder codearlo de la manera mas practica y imple posible, asi si el dia de mañana alguien se interesa en leer y entender el desarrollo del proyecto, tiene una baja dificultad en comprenderlo.

Cada producto se describe de la misma manera, tanto en el home como en las demas pantallas de "categorias", dentro de un componente Card el cual recibe el producto por parametro como "props" y utiliza cada una de las llaves del componente(nombre, precio, cantidad) para poder describir brevemente el producto.

En el componente ItemList vamos a cargar todas las Card que se generan realizando un .map al array de "listaPicantes". Luego dentro del componente ItemListContainer funcionando como contenedor, llamamos a ItemList para cargar el conjunto entero de productos y mostrarlos por pantalla.

Al hacer click en un producto, vamos a ser dirigidos al componente ItemDetail el cual recibira el producto como "prop" y lo utilizara para realizar un renderizado del producto seleccionado en detalle, mostrando su descripcion completa y datos particulares. Dentro del ItemDetail utilizamos otro componente denominado ItemCount el cual se encarga de llevar la cuenta de la cantidad de productos seleccionados con una botonera que permite sumar o restar productos.
Al igual que el ItemList, el ItemDetail esta tambien englobado en un contenedor al que denominamos ItemDetailContainer.

Dentro de la <NavBar/> vamos a tener el <CartWidget/> el cual nos permite ver el carrito de compras con los productos seleccionados. Para ver la pantalla del carrito renderizamos el componente <CartView/> donde mostramos pequeños contenedores en escala menor que en el home, con el fin de ver un detalle pequeño de los productos que estamos por comprar. Tambien aqui tendremos distintos botones para eliminar un producto o para vaciar el carrito y llamaremos tambien al componente <UserForm/> el cual nos pide que el usuario ingrese por teclado sus datos para poder generar la orden de compra con todos los datos del comprador.

Para el momento de carga de los datos en los componentes trabajamos con un componente <Loader/> el cual es el mismo en todas las pantallas al momento de la carga.

En cuanto a las funcionalidades tenemos al <cartContext> en donde desarrollamos funciones que luego aplicamos en el sistema como addToCart(), getTotalItems(), removeItem(), emptyCart(), getTotalPrice(). Estas funciones son devueltas despues dentro de un provider al cual accedo desde los distintos componentes para los casos puntuales que necesite cada componente.
Trabajamos en un principio con una MockApi, la cual usamos como base de datos en la que consultabamos y cargabamos nuestros productos, hasta que luego implementamos dentro de la carpeta "services" el servicio de Firebase con el archivo firebase.js utilizando el servicio firestore de Google.

Por ultimo, todos los componentes que llevan estilos tiene sus archivos ".css" correspondientes, ya que no trabajamos con los estilos en linea.