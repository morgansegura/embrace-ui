import Tooltip from './embrace-ui/tooltip'
import Dropdown from './embrace-ui/dropdown'
import Tabs from './embrace-ui/tabs'

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

console.log("Embrace UI");