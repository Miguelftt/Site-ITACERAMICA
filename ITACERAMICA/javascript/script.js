
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
document.getElementById('btnScrollToTop')?.addEventListener('click', scrollToTop);

window.addEventListener('scroll', function () {
    const btnScrollToTop = document.getElementById('btnScrollToTop');
    if (btnScrollToTop) {
        btnScrollToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    }
});
// ------------------------------------------------------------------------
document.getElementById('btnInicio')?.addEventListener('click', function () {
    window.location.href = 'index.html';
});

document.getElementById('btnComentario')?.addEventListener('click', function () {
    window.location.href = 'email.html';
});
// ----------------------------modo noturno---------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('btnDarkMode');
    const darkModeClass = 'dark-mode';

    function applyDarkMode() {
        document.body.classList.add(darkModeClass);

        const cards = document.querySelectorAll('.card');
        const section = document.querySelector('section');
        const sectionTitle = document.querySelector('.section-title');
        const nomeProduto = document.querySelectorAll('.NomeProduto');
        const productPrice = document.querySelectorAll('.product-price');
        const container = document.querySelector('.container');
        const button = document.querySelector('button');

        if (container) container.classList.add(darkModeClass);
        if (button) button.classList.add(darkModeClass);

        cards.forEach(card => card.classList.add(darkModeClass));
        if (section) section.classList.add(darkModeClass);
        if (sectionTitle) sectionTitle.classList.add(darkModeClass);
        nomeProduto.forEach(el => el.classList.add(darkModeClass));
        productPrice.forEach(el => el.classList.add(darkModeClass));
    }

    function removeDarkMode() {
        document.body.classList.remove(darkModeClass);

        const cards = document.querySelectorAll('.card');
        const section = document.querySelector('section');
        const sectionTitle = document.querySelector('.section-title');
        const nomeProduto = document.querySelectorAll('.NomeProduto');
        const productPrice = document.querySelectorAll('.product-price');
        const container = document.querySelector('.container');
        const button = document.querySelector('button');

        if (container) container.classList.remove(darkModeClass);
        if (button) button.classList.remove(darkModeClass);

        cards.forEach(card => card.classList.remove(darkModeClass));
        if (section) section.classList.remove(darkModeClass);
        if (sectionTitle) sectionTitle.classList.remove(darkModeClass);
        nomeProduto.forEach(el => el.classList.remove(darkModeClass));
        productPrice.forEach(el => el.classList.remove(darkModeClass));
    }

    if (localStorage.getItem('darkMode') === 'enabled') {
        applyDarkMode();
    }

    darkModeToggle?.addEventListener('click', function () {
        if (document.body.classList.contains(darkModeClass)) {
            removeDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        } else {
            applyDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        }
    });
});

// ----------------------------Filtro---------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.dropdown-item');
    const products = document.querySelectorAll('.card');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');

            products.forEach(product => {
                if (category === 'all' || product.classList.contains(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
// ------------------------------------------------------------------------
const btnAjudeMe = document.getElementById('btnAjudeMe');
if (btnAjudeMe) {
    btnAjudeMe.addEventListener('click', function () {
        alert('Em breve: Ajuda personalizada para suas compras com nosso bot de IA, automático e com apenas 3 cliques!');
    });
};
