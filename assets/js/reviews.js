let slideIndex = 1;
function showSlides(n) {
    const slides = document.getElementsByClassName('slide-review');
    const dots = document.getElementsByClassName('r_dot');
    if (slides.length === 0 || dots.length === 0) {
        return;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    Array.from(slides).forEach(slide => slide.style.display = 'none');
    Array.from(dots).forEach(dot => dot.className = dot.className.replace(' r_active', ''));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' r_active';
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    const prevButton = document.querySelector('.r_prev');
    const nextButton = document.querySelector('.r_next');
    const reviewSlider = document.querySelector('.review-slider');
    const dots = document.querySelectorAll('.r_dot');
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            plusSlides(-1);
        });
    }
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            plusSlides(1);
        });
    }
    if (dots.length > 0) {
        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                currentSlide(index + 1);
            });
        });
    }
    let autoPlayInterval;
    function sliderAutoPlay() {
        plusSlides(1);
    }
    function startAutoPlay() {
        autoPlayInterval = setInterval(sliderAutoPlay, 4000);
    }
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    if (reviewSlider) {
        reviewSlider.addEventListener('mouseenter', stopAutoPlay);
        reviewSlider.addEventListener('mouseleave', startAutoPlay);
        startAutoPlay();
    }
});