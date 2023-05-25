//Al ingresar, aparece un mensaje de bienvenida al sitio.
let comando;

while(comando != 'salir') {
    comando = prompt('Bienvenido a Sillas de Diseño Artie - En qué lo podemos ayudar?:\n\n- Mostrar productos\n- Precio del producto\n- Salir')
//Le preguntamos al usuario qué es lo que desea hacer en el sitio.
   switch(comando){
   case 'Mostrar productos':
    for(let i = 1; i <= 8; i++) {
        alert('Silla N° '+ i);
    }  
    break;
    case'Precio del producto':
        let iNaN= prompt('Ingrese el producto del cual desea saber el precio');
        for(let i=1; i<=8; i++);{
        alert('Producto ' + iNaN + ' es igual a $5000.');
    }
    break;
    case'Salir':
        alert('!Vuelva pronto¡');
    break;
    default:
        alert('La informacion ingresada no se reconoce. Ingresar otra opcion.');
        break;
    }
}