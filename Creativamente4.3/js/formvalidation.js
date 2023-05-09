$(function() {
    $("#miFormulario").validate({
        rules: {
            sku: {
                requiered: true 
            },
            Nombre: {
                requiered: true
            },
            Cantidad: {
                requiered: true
            }
        },
        messages: {
            sku: {
                requiered: "Debe ingresar el código necesario"
            },
            Nombre: {
                requiered: "Ingrese nombre del producto"
            },
            Cantidad: {
                requiered: "Especifique la cantidad que quiera agregar"
            }
        }
    })
})