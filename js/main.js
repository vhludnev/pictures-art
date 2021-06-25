import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import checkMailInputs from './modules/checkMailInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn'); /* [''] - for horizontal sliders  */
    sliders('.main-slider-item', 'vertical');
    forms();
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    checkMailInputs('[name="email"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
});