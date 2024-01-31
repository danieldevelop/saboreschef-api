<?php
require_once '../app.php';

$comidasJSON = '../../data/comidas.json';
$categoriasJSON = '../../data/categorias.json';


if ($method === "GET"):
    $comidas = json_decode(file_get_contents($comidasJSON), true);

    if (isset($_GET['search']) && $_GET['search'] !== '') {
        $search = $_GET['search'];

        $comidas = array_filter($comidas, function($comida) use ($search) {
            return strpos(strtolower($comida['name']), strtolower($search)) !== false;
        });

        // Reindexar las claves del array, es decir, reordenar los elementos del array para que las claves sean números 
        // consecutivos empezando desde 0.
        $comidas = array_values($comidas);
    }

    echo json_encode($comidas);
endif;