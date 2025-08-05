document.addEventListener('DOMContentLoaded', function () {
  const posts = document.querySelectorAll('.b_card');
  let visiblePosts = 6;
  const loadMoreBtn = document.getElementById('b_load-more-btn');
    if (loadMoreBtn) {
      for (let i = visiblePosts; i < posts.length; i++) {
      posts[i].classList.remove('b_show');
    }
    if (visiblePosts >= posts.length) {
      loadMoreBtn.style.display = 'none';
    }
    loadMoreBtn.addEventListener('click', () => {
      let showPosts = visiblePosts + 3;

      for (let i = visiblePosts; i < showPosts && i < posts.length; i++) {
        posts[i].classList.add('b_show');
      }
      visiblePosts += 3;

      if (visiblePosts >= posts.length) {
        loadMoreBtn.style.display = 'none';
      }
    });
  }
});