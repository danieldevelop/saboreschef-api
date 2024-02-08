import { showCategories } from './utils.js';

export const allCategories = () => {
    $.ajax({
        url: 'src/routes/categorieRouter.php',
        type: 'GET',
        success: response => showCategories(response)
    });
};