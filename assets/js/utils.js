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
                            <div class="card shadow card-food">
                                <img src="${image}" class="card-img-top img-fluid img-food" alt="${name}">
                                <div class="card-body">
                                    <h5 class="card-title fw-medium">${name}</h5>
                                    <p class="card-text description-food">${description}</p>
                                    <p class="card-text price-food fw-bold">$${price}</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#?id=${id}" 
                                        class="btn btn-success btn-sm float-end text-uppercase fw-medium" 
                                        id="detail-food">
                                        Ver detalle
                                    </a>
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