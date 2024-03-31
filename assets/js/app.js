import { allFoods, foodByName, foodAdd } from './foodAjax.js';
import { allCategories } from './categorieAjax.js';
import { onlyText, onlyNumbers, alertMixin, yearActual } from './utils.js';

$(document).ready(() => {
    $("#year-actual").text(yearActual()); 
    allFoods();
    allCategories();

    $("#reserva-add").submit((e) => {
        e.preventDefault();

        const persona = $("#personas").val();
        const fecha = $("#fecha").val();
        const horaario = $("#horario").val();

        if (persona === "" || fecha === "" || horaario === "") {
            alertMixin('error', 'Todos los campos son obligatorios!');
            return;
        }

        localStorage.setItem("reserva", JSON.stringify({ persona, fecha, horaario }));
        alertMixin('success', 'Reserva realizada con éxito!');
    });
    
    /** ===========================================
     * TODO: Bloque de código para buscar platos de comida por nombre, se puede ejecutar de forma 
     * TODO: automatica o manual, es decir, al momento de escribir en el input o al momento de enviar
     * TODO: el formulario.
     */
    // $("#search-food").submit((e) => {
    //     e.preventDefault();
    //     let food = $("#food").val().trim();
    //     foodByName(food);
    // });

    $("#food").keyup(() => {
        let food = $("#food").val().trim();
        foodByName(food);
    });
    /** Fin del bloque */

    /** ===========================================
     * TODO: Formulario para agregar platos de comida, donde se valida que solo se ingrese
     * TODO: solo numero y cadena de acuerdo al campo seleccionado.
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