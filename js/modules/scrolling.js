// Setting scroll symbol on a page

const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    let links = document.querySelectorAll('[href^="#"]'), /* [..] - means we're refering to a certain Attribute; [href^="#"] - t.i. all links that start with # */
        speed = 0.3; /* NB: lower the number faster the speed */
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top, /* [getBoundingClientRect().top] - will identify location of the window */
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r); /* will activate animation: to x=0 (does not change) and y=r */

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash; /* will stop the animation when it reaches the certain destination */
                }
            }
        });
    });
}

export default scrolling;