// on mouseover will show images instead of templates with price and size information

const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block) {
        const img = block.querySelector('img');
        // something.png => something-1.png
        img.src = img.src.slice(0, -4) + '-1.png'; /* will remove last 4 symbols/letters from the template image file name and add '-1.png' instead  */
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { 
            p.style.display = 'none'; /* will hide all p (paragraphs) exept for the one withe the [class=sizes-hit] */
        });
    }

    function hideImg (block) {
        const img = block.querySelector('img');
        // something-1.png => something.png
        img.src = img.src.slice(0, -6) + '.png'; /* will remove last 6 symbols/letters from the image file name and add '.png' instead  */
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
}

export default pictureSize;