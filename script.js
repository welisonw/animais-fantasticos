
import ScrollSuave from "./js/modules/scrollSuaveLinkInterno.js";
import AccordionList from './js/modules/navegacaoAccordionList.js';
import TabNav from './js/modules/navegacaoPorTabs.js';
import Modal from './js/modules/modal.js';
import Tooltip from './js/modules/tooltip.js';
import fetchAnimais from "./js/modules/fetchAnimais.js";
import fetchBitcoin from "./js/modules/fetchBitcoin.js";
import AnimacaoScroll from './js/modules/animacaoAoScroll.js';
import DropdownMenu from "./js/modules/dropdownMenu.js";
import MenuMobile from './js/modules/menuMobile.js';
import HorarioFuncionamento from './js/modules/horarioFuncionamento.js';
import SlideNav from "./js/modules/slide.js";

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

// Animação ao scroll
const animacaoAoScroll = new AnimacaoScroll('.js-animationScroll');
animacaoAoScroll.init();

// Dropdown Menu
const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

// Menu mobile
const menuMobile = new MenuMobile('[data-menu= "button"]', '[data-menu="list"]');
menuMobile.init();

// Horário de funcionamento
const horarioFuncionamento = new HorarioFuncionamento('[data-semana]');
horarioFuncionamento.init();

// Slide 
const slide = new SlideNav('.slide-wrapper', '.slide');
slide.init();

// slide.addArrow('.prev', '.next');

slide.addControl('.custom-controls');
