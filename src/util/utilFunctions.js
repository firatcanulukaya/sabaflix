export const handleCategories = () => {
    const category = document.getElementById('CategoriesContainer')
    const body = document.body;

    category.classList.toggle('active')

    if (category.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}