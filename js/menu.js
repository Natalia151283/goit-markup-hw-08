(() => {
    const refs = {
        dataMenuOpen: document.querySelector('[data-menu-open]'),
        dataMenuClose: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        body: document.body,
    };

    // refs.toggleMenuBtn.addEventListener('click', toggleMenu);
    refs.dataMenuOpen.addEventListener('click', toggleMenu);
    refs.dataMenuClose.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        // refs.toggleMenuBtn.classList.toggle('is-hidden');
        refs.body.classList.toggle('modal-open');
    }
})();