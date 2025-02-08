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

function gallery() {
    return {
        images: [
            '/images/cars/1.webp',
            '/images/cars/2.webp',
            '/images/cars/3.webp',
            '/images/cars/1.jpeg',
            '/images/cars/2.jpeg',
            '/images/cars/3.jpeg',
            '/images/cars/4.jpeg',
            '/images/cars/6.jpeg',
        ],
        currentImage: '/images/cars/1.jpeg',
        setCurrent(image) {
            this.currentImage = image;
        },
    };
}

