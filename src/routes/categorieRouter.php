<?php 
require_once '../app.php';
require_once '../handlers/categorieHandler.php';

if ($method === "GET"):
    if (empty($_GET)) echo json_encode(getCategories());
endif;
