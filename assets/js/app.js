import { listarComidas } from './utils.js';

$(document).ready(() => {
    listarComidas();

    $("#food").keyup(() => {
        let search = $("#food").val().trim();
        (search.length > 0) ? listarComidas(search) : listarComidas();
    });
});