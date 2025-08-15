function createDropdownElements(buttonText, menuItems) {
    const dropdownDiv = document.createElement('div');
    dropdownDiv.classList.add('dropdown');

    const button = document.createElement('button');
    button.classList.add('dropdown-button');
    button.textContent = buttonText;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('dropdown-content');

    menuItems.forEach(item => {
        const link = document.createElement('a');
        link.textContent = item.title;
        link.href = item.href;
        contentDiv.appendChild(link);
    });

    dropdownDiv.appendChild(button);
    dropdownDiv.appendChild(contentDiv);

    return { dropdownDiv, button, contentDiv };
}

export { createDropdownElements };