export const listarComidas = (search = '') => {
    if (search !== undefined) {
        $.ajax({
            url: 'src/routes/index.php',
            type: 'GET',
            data: {search},
            success: (response) => {
                let foods = response;
                let template = '';

                foods.forEach(({id, name, price, description, image}) => {
                    template += `
                        <div class="col">
                            <div class="card shadow">
                                <img src="${image}" class="card-img-top img-fluid" alt="${name}">
                                <div class="card-body">
                                    <h5 class="card-title">${name}</h5>
                                    <p class="card-text">${description}</p>
                                    <p class="card-text">S/. ${price}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });

                $('#comidas').html(template);
            }
        });
    }
};