# Simple Dropdown Menu

A lightweight and simple dropdown menu component.

## Installation

```bash
npm install @shazomiii/simple-dropdown
```

## Usage

1.  Create a container element in your HTML.

```html
<div id="my-dropdown"></div>
```

2.  Import the `createDropdown` function in your JavaScript and call it.

```javascript
import { createDropdown } from '@shazomiii/simple-dropdown';

// The selector for your container element
const containerSelector = '#my-dropdown';

// The text for the dropdown button
const buttonText = 'Click Me';

// An array of objects for the menu items
const menuItems = [
    { title: 'Home', href: '/home' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
];

// Initialize the dropdown
createDropdown(containerSelector, buttonText, menuItems);
```