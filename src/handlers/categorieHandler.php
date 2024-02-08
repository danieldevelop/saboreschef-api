<?php
$categoriasJSON = '../../data/categorias.json';

function getCategories() {
    global $categoriasJSON;
    $categorias = json_decode(file_get_contents($categoriasJSON), true);
    return $categorias;
}