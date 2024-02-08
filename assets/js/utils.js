export const showFoods = (foods) => {
let template = '';

    foods.forEach(({id, name, price, description, image}) => {
        template += `
            <div class="col">
                <div class="card shadow card-food">
                    <img src="${image}" class="card-img-top img-fluid img-food" alt="${name}">
                    <div class="card-body">
                        <h5 class="card-title fw-medium">${name}</h5>
                        <p class="card-text description-food">${description}</p>
                        <p class="card-text price-food">$${price}.-</p>
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
};


export const showCategories = (categories) => {
    let template = '';

    template += `<option value='-1' selected>Seleccione una categoría...</option>`;
    categories.forEach(({id, name}) => {
        template += `<option value="${id}">${name}</option>`;
    });

    $('.categorias').html(template);
};


export const onlyText = (event) => {
    const charCode = event.which || event.keyCode;
    ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) ? true : event.preventDefault();
};


export const onlyNumbers = (event) => {
    var charCode = event.which || event.keyCode;
    if (charCode < 48 || charCode > 57) {
        event.preventDefault();
    }
};


export const alertMixin = (icon, title) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false
    });

    Toast.fire({ icon, title });
};