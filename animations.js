// Анимация для появления элементов при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Анимация для секций
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Анимация для карточек
    document.querySelectorAll('.car-card').forEach(card => {
        card.classList.add('slide-in-card');
        observer.observe(card);
    });

    // Анимация для изображений
    document.querySelectorAll('img:not(.logo img)').forEach(img => {
        img.classList.add('zoom-in-image');
        observer.observe(img);
    });

    // Анимация для текста
    document.querySelectorAll('p, h1, h2, h3, ul').forEach(text => {
        text.classList.add('fade-in-text');
        observer.observe(text);
    });
});

// Анимация для навигационного меню
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-bar li:not(.logo)');
    navItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('slide-in-nav');
    });
});

// Анимация для дополнительных элементов фона (glows)
document.addEventListener('DOMContentLoaded', () => {
    const glows = document.querySelectorAll('.additional-glow');
    glows.forEach((glow, index) => {
        glow.style.animationDelay = `${index * 0.5}s`;
        glow.classList.add('pulse-glow');
    });
});

// Анимация при наведении на карточки
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.car-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });
});

// Анимация для формы контактов
document.addEventListener('DOMContentLoaded', () => {
    const formElements = document.querySelectorAll('input, textarea, button');
    formElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('form-element-animation');
    });
});