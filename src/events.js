function setupEventListeners(dropdownDiv, button, contentDiv) {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        contentDiv.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!dropdownDiv.contains(event.target)) {
            if (contentDiv.classList.contains('show')) {
                contentDiv.classList.remove('show');
            }
        }
    });
}

export { setupEventListeners };