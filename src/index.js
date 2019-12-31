import Tooltip from './embrace-ui/tooltip'
import Dropdown from './embrace-ui/dropdown'
import Tabs from './embrace-ui/tabs'
import Snackbar from './embrace-ui/snackbar'

// Create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

// Create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('thanks for clicking me');
});

console.log("Embrace UI");