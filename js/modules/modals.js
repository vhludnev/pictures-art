const modals = () => {

    let btnPressed = false; /* check if any btns on a page was pressed */

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
              scroll = calcScroll();

        trigger.forEach(item => { 
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove(); /* removes gift offer on the upper right conner */
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open'); /* when using the bootstrap library */
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open'); /* when using the bootstrap library */
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => { /* modal.addEventListener('click', (e) => { is the same as [modal.onclick = function (e) {  ] */
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                
                modal.style.display = "none";
                document.body.style.overflow = ""; 
                // document.body.classList.remove('modal-open'); /* when using the bootstrap library */
                document.body.style.marginRight = `0px`;
            }
        });
    }

// A funcion to pop up a modal window after certain time interval (but only if another modal window is not active):
    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });
            
            if (!display) { /* if no other modal window is active now then let show this modal window: */
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
                scroll = calcScroll(); /* removes right scroll bar (hence window shifting) when popup window is activated */
                document.body.style.marginRight = `${scroll}px`; /* removes right scroll bar (hence window shifting) when popup window is activated */
            }         
        }, time);
    }

// A function to remove right scroll bar (hence window shifting) when popup window is activated:
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); /* this line will help to support older  browsers which do not understand [document.documentElement.clientHeight] */

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) { /* [pageYOffset] will check how many pixels a user have scrolled down; [clientHeight] present visible window for a user */
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
}

export default modals;