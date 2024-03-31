<?php require_once 'config/config.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="<?= constant('URL_DEV') ?>assets/img/favicon.ico" type="image/x-icon">
    <title>SaboresChef API</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= constant('URL_DEV') ?>assets/css/estilos.css">
</head>
<body>

    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div class="container">
            <a href="<?= constant('URL_DEV') ?>" class="navbar-brand" title="Inicio">
                <img src="<?= constant('URL_DEV') ?>assets/img/logo.svg" alt="Logo SaboresChef" width="30" height="24" class="d-inline-block align-text-top">
                SaboresChef API
            </a>
            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="menu">
                <div class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                    <a href="<?= constant('URL_DEV') ?>about" class="nav-link text-dark">Acerca de</a>
                    <a href="<?= constant('URL_DEV') ?>foods" class="nav-link text-dark">Menú</a>
                    <a href="<?= constant('URL_DEV') ?>#contact" class="nav-link text-dark">Contacto</a>
                </div>

                <div class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <a href="<?= constant('URL_DEV') ?>#reserva" class="btn boton-reserva text-uppercase fw-medium">Reserva</a>
                </div>
            </div>
        </div>
    </nav>


    <header class="py-5 my-3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-6">
                    <h1 class="display-5 fw-normal">¡Bienvenido!</h1>
                    <p class="lead fw-normal">Disfruta del sabor de la mejor cocina chilena. Explora nuestro menú y descubre platos 
                        que deleitarán tu paladar. ¡Haz tu reserva ya!.</p>
                    </p>
                    <a href="<?= constant('URL_DEV') ?>foods" class="btn boton-menu">Ver Menú</a>
                </div>

                <div class="col-12 col-md-6 text-center">
                    <img src="<?= constant('URL_DEV') ?>assets/img/img-header.svg" alt="Chef" class="img-fluid food-header">
                </div>
            </div>
        </div>
    </header>

    <main class="reservas py-5" id="reserva">
        <div class="container">
            <h2 class="h2 fw-bold text-center">RESERVA UNA MESA</h2>
            <p class="fw-normal text-center">
                Para poder ofrecerte la mejor mesa, selecciona la cantidad de personas, la fecha y el horario de reserva.
            </p>


            <form method="post" class="my-5" id="reserva-add">
                <div class="row">
                    <div class="col-12 col-md-3 mb-3">
                        <label for="personas" class="form-label">Cantidad de personas</label>
                        <select name="personas" id="personas" class="form-select shadow-none">
                            <option value="1">1 persona</option>
                            <option value="2">2 personas</option>
                            <option value="3">3 personas</option>
                            <option value="4">4 personas</option>
                            <option value="5">5 personas</option>
                            <option value="6">6 personas</option>
                            <option value="7">7 personas</option>
                            <option value="8">8 personas</option>
                            <option value="9">9 personas</option>
                            <option value="10">10 personas</option>
                        </select>
                    </div>

                    <div class="col-12 col-md-3 mb-3">
                        <label for="fecha" class="form-label">Fecha</label>
                        <input type="date" name="fecha" id="fecha" class="form-control shadow-none">
                    </div>

                    <div class="col-12 col-md-3 mb-3">
                        <label for="horario" class="form-label">Horario</label>
                        <input type="time" name="horario" id="harario" class="form-control shadow-none">
                    </div>

                    <div class="col-12 col-md-3 mb-3 d-flex align-items-end justify-content-center">
                        <button type="submit" class="btn boton-reserva-mesa text-uppercase">Reservar Mesa</button>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <footer class="bg-dark fixed-footer">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mt-4">
                    <p class="fw-normal text-white">© <span id="year-actual"></span> SaboresChef API. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="<?= constant('URL_DEV') ?>assets/js/app.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>
