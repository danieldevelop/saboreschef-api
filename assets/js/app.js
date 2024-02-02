import { listarComidas } from './utils.js';

$(document).ready(() => {
    listarComidas();

    $("#food").keyup(() => {
        let search = $("#food").val().trim();
        (search.length > 0) ? listarComidas(search) : listarComidas();
    });

    $(document).on('click', '#detail-food', (e) => {
        e.preventDefault();
        alert('No disponible por el momento!!');
    });
});
