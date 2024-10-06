document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.hidden');

    function isVisible(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function scanDocument() {
        elements.forEach(function (element) {
            if (isVisible(element)) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Event to fire when scrolling
    window.addEventListener('scroll', scanDocument);
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.slide-in-right');

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    elements.forEach(el => {
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.slide-in-left');

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    elements.forEach(el => {
        observer.observe(el);
    });
});
