
import ScrollSuave from "./js/modules/scrollSuaveLinkInterno.js";
import AccordionList from './js/modules/navegacaoAccordionList.js';
import TabNav from './js/modules/navegacaoPorTabs.js';
import Modal from './js/modules/modal.js';
import Tooltip from './js/modules/tooltip.js';
import fetchAnimais from "./js/modules/fetchAnimais.js";
import fetchBitcoin from "./js/modules/fetchBitcoin.js";

import initDropdownMenu from './js/modules/dropdownMenu.js';
import initAnimacaoScroll from './js/modules/animacaoAoScroll.js';
import initMenuMobile from './js/modules/menuMobile.js';
import initHorarioFuncionamento from './js/modules/horarioFuncionamento.js';


// Scroll suave
const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollSuave.init();

// Accordion List
const accordionList = new AccordionList('.js-accordionList dt');
accordionList.init();

// Navegação por tab
const tabNav = new TabNav('.js-tabMenu li', '[data-tab="content"] section');  
tabNav.init();

// Modal
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

// Tooltip
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

// Fetch Animais
fetchAnimais('./animais-api.json', '.numeros-grid');

// Fetch Bitcoin
fetchBitcoin('https://www.blockchain.com/ticker', '.bitcoin-preco');


initAnimacaoScroll();

initDropdownMenu();
initMenuMobile();
initHorarioFuncionamento();
