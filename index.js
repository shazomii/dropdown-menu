import { createDropdown } from './src/index.js';

const menuItems = [
    { title: 'Profile', href: '#' },
    { title: 'Settings', href: '#' },
    { title: 'Messages', href: '#' },
    { title: 'Sign Out', href: '#' }
];

createDropdown('#dropdown-container', 'My Menu', menuItems);