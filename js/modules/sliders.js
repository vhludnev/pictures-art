const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1, /* number of slides on a screen to slide */
    paused = false; /* will pause auto animation if coursor is on a slider */

    const items = document.querySelectorAll(slides);
          
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated"); /* activating Animate.css library for slides */
            item.style.display = "none";
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex); /* will show the first slide after opening the page */

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try { /* in case there are next and prev btns on a slider */
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e){}

    function activateAnimation() {
        if (dir === 'vertical') { /* for vertical sliders */
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 7000);
        } else { /* t.i. 'horizontal' */
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 7000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => { /* will pause auto animation if coursor is on a slider */
        clearInterval(paused); /* will stop animation */
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;