import { allFoods, foodByName, foodAdd } from './foodAjax.js';
import { allCategories } from './categorieAjax.js';
import { onlyText, onlyNumbers } from './utils.js';

$(document).ready(() => {
    allFoods();
    allCategories();

    // $("#search-food").submit((e) => {
    //     e.preventDefault();
    //     let food = $("#food").val().trim();
    //     foodByName(food);
    // });

    $("#food").keyup(() => {
        let food = $("#food").val().trim();
        foodByName(food);
    });

    
    /**
     * Formulario para agregar platos de comida, donde se valida que solo se ingrese
     * solo numero y cadena de acuerdo al campo seleccionado.
     */
    $("#inpCodigo").keypress(onlyNumbers);
    $("#inpNombre").keypress(onlyText);
    $("#inpPrecio").keypress(onlyNumbers);
    $("#inpDescripcion").keypress(onlyText);
    
    $("#food-add").submit((e) => {
        e.preventDefault();

        // let codigo = $("#inpCodigo").val().trim();
        let nombre = $("#inpNombre").val().trim();
        let precio = $("#inpPrecio").val().trim();
        let descripcion = $("#inpDescripcion").val().trim();
        let categoria = $("#inpCategoria").val();
        let imagen = $("#inpImagen").val().trim();

        foodAdd(nombre, precio, descripcion, categoria, imagen);
    });
    /** Fin del bloque */
});