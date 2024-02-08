import { showFoods, alertMixin } from './utils.js';

export const allFoods = () => {
    $.ajax({
        url: 'src/routes/foodRouter.php',
        type: 'GET',
        success: response => showFoods(response)
    });
};

export const foodByName = (food) => {
    if (food !== undefined) {
        $.ajax({
            url: 'src/routes/foodRouter.php',
            type: 'GET',
            data: {food},
            success: response => showFoods(response)
        });
    }
};

export const foodAdd = (nombre, precio, descripcion, categoria, imagen) => {
    
    // No se iguala a "" (cadena vacia) porque se considera falso en javascript si su 
    // valor es false, 0, "" (cadena vacía), null, undefined o NaN.
    // if (!codigo) {
    //     alertMixin('error', 'Debe ingresar un codigo.');
    //     return; // No se continua con la ejecución del código.
    // }
    
    if (!nombre) {
        alertMixin('error', 'Debe ingresar un nombre.');
        return;
    }

    if (categoria === '-1') {
        alertMixin('error', 'Debe seleccionar una categoría.');
        return;
    }

    if (!precio) {
        alertMixin('error', 'Debe ingresar el precio.');
        return;
    }

    if (!descripcion) {
        alertMixin('error', 'Debe ingresar una descripción.');
        return;
    }

    $.ajax({
        url: 'src/routes/foodRouter.php',
        type: 'POST',
        data: {
            name: nombre,
            price: precio,
            description: descripcion,
            categoriaId: categoria,
            disabled: false,
            rating: 0,
            discount: 0,
            image: imagen
        },
        success: response => {
            if (response) {
                alertMixin('success', 'Plato de comida agregado correctamente.');
                allFoods();
            } else {
                alertMixin('error', 'Error al agregar el plato de comida.');
            }
        }
    });
};