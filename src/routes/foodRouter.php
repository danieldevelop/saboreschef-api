<?php
require_once '../app.php';
require_once '../handlers/foodHandler.php';

if ($method === "GET"):
    if (empty($_GET)):
        echo json_encode(getFoods());
    else:
        echo json_encode(getFoodByName($_GET['food']));
    endif;
endif;

if ($method === "POST"):
    if (empty($_POST)){
        http_response_code(400);
        echo json_encode(["error" => "No se han enviado datos"]);
        return;
    }

    $body = [
        "id" => count(getFoods()) + 1,
        "name" => $_POST['name'],
        "price" => intval($_POST['price']),
        "description" => $_POST['description'],
        "categoriaId" => intval($_POST['categoriaId']),
        "disabled" => $_POST['disabled'] === "true",
        "rating" => intval($_POST['rating']),
        "discount" => intval($_POST['discount']),
        "image" => empty($_POST['image']) 
            ? "https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-260nw-2079504220.jpg" 
            : $_POST['image']
    ];

    echo json_encode(addFood($body));
endif;