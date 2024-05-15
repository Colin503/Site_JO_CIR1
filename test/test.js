document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
        document.querySelectorAll('.image').forEach(image => {
            image.style.display = 'none';
        });
        const imageId = link.getAttribute('data-image');
        document.getElementById(imageId).style.display = 'block';
    });

    link.addEventListener('mouseout', () => {
        document.getElementById(link.getAttribute('data-image')).style.display = 'none';
    });
});