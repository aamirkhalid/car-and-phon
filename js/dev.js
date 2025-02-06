document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('include').forEach((el) => {
        const src = el.getAttribute('src');
        if (src) {
            fetch(`/components/${src}.html`)
                .then((res) => res.text())
                .then((html) => (el.outerHTML = html))
                .catch((err) => console.error(`Error loading ${src}:`, err));
        }
    });
});

