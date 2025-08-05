document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('p_load-more-btn');
    const buttons = document.querySelectorAll('#filter-buttons .btn');
    filterSelection('all');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const activeBtn = document.querySelector('.btn.active');
            if (activeBtn) {
                activeBtn.classList.remove('active');
            }
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            filterSelection(category);
        });
    });
    loadMoreBtn.addEventListener('click', () => {
        const activeCategory = document.querySelector('#filter-buttons .btn.active').getAttribute('data-category');
        loadMoreProjects(activeCategory);
    });
});
function filterSelection(category) {
    const portfolioCards = document.querySelectorAll('#portfolio-card .p_card');
    updateVisibleCards(category, portfolioCards);
    updateLoadMoreBtn(category, portfolioCards);
}
function updateVisibleCards(category, portfolioCards) {
    let visibleCount = 0;
    const maxVisible = 6;

    portfolioCards.forEach(card => {
        card.classList.remove('p_show');
        if (category === 'all' || card.classList.contains(category)) {
            if (visibleCount < maxVisible) {
                card.classList.add('p_show');
                visibleCount++;
            }
        }
    });
}
function updateLoadMoreBtn(category, portfolioCards) {
    let totalInCategory = 0;
    let visibleInCategory = 0;

    portfolioCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            totalInCategory++;
            if (card.classList.contains('p_show')) {
                visibleInCategory++;
            }
        }
    });
    const loadMoreBtn = document.getElementById('p_load-more-btn');
    if (visibleInCategory < totalInCategory) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}
function loadMoreProjects(category) {
    const portfolioCards = document.querySelectorAll('#portfolio-card .p_card');
    let count = 0;
    const loadMoreCount = 3;

    portfolioCards.forEach(card => {
        if (!card.classList.contains('p_show') && (category === 'all' || card.classList.contains(category))) {
            if (count < loadMoreCount) {
                card.classList.add('p_show');
                count++;
            }
        }
    });
    updateLoadMoreBtn(category, portfolioCards);
}