document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(section => section.style.display = 'none');

            this.classList.add('active');
            document.querySelector(this.getAttribute('href')).style.display = 'block';
        });
    });

    // Activate the first tab by default
    tabs[0].click();
});


