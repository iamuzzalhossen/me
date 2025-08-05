const sidebarMenu = document.getElementById('sidebar-menu');
const hamburger = document.getElementById('hamburger-icon');
const closeSidebar = document.getElementById('close-icon');
hamburger.addEventListener('click', function() {
    sidebarMenu.style.display = 'flex';
})
closeSidebar.addEventListener('click', function() {
    sidebarMenu.style.display = 'none';
})
document.addEventListener('DOMContentLoaded', function () {
    const ddToggles = document.querySelectorAll('#mobile-menu .dropdown-toggle');

    ddToggles.forEach(ddToggle => {
        ddToggle.addEventListener('click', function (e) {
            e.preventDefault();
            const parentDropdown = this.closest('.dropdown');
            parentDropdown.classList.toggle('open');
            document.querySelectorAll('#mobile-menu .dropdown').forEach(dropdown => {
                if (dropdown !== parentDropdown) {
                    dropdown.classList.remove('open');
                }
            });
        });
    });
});

const darkMode = document.getElementById("darkMode");
darkMode.onclick = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkMode.innerHTML = '<i class="fa-regular fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        darkMode.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");
    }
}
const localData = localStorage.getItem("theme");
if (localData === "light") {
    darkMode.innerHTML = '<i class="fa-solid fa-moon"></i>';
    document.body.classList.remove("dark-mode");
} else if (localData === "dark") {
    darkMode.innerHTML = '<i class="fa-regular fa-sun"></i>';
    document.body.classList.add("dark-mode");
}

document.addEventListener('DOMContentLoaded', function() {
    const logoSlider = document.querySelector('.logo-slider');
    if (logoSlider) {
        const wrapper = document.createElement('div');
        wrapper.className = 'logo-slider-wrapper';
        wrapper.appendChild(logoSlider.cloneNode(true));
        wrapper.appendChild(logoSlider.cloneNode(true));
        const companyLogos = document.querySelector('.company-logos');
        companyLogos.innerHTML = '';
        companyLogos.appendChild(wrapper);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const excerpts = document.querySelectorAll('.b_excerpt');
    const wordsLimit = 18;
    excerpts.forEach(function(excerpt) {
        let text = excerpt.textContent.trim();
        let words = text.split(/\s+/);
        if (words.length > wordsLimit) {
            let limitedWords = words.slice(0, wordsLimit).join(' ') + '...';
            excerpt.textContent = limitedWords;
        }
    });
});