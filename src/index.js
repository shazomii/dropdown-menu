import './style.css';
import { createDropdownElements } from './dom.js';
import { setupEventListeners } from './events.js';

function createDropdown(containerSelector, buttonText, menuItems) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error('Dropdown container not found');
        return;
    }

    container.innerHTML = '';

    const { dropdownDiv, button, contentDiv } = createDropdownElements(buttonText, menuItems);

    container.appendChild(dropdownDiv);

    setupEventListeners(dropdownDiv, button, contentDiv);
}

export { createDropdown };