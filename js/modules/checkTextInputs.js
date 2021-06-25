const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
}

export default checkTextInputs;
