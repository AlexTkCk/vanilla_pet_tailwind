window.addEventListener('DOMContentLoaded', () => {
    const likes_button = document.querySelectorAll('.like_button');

    likes_button.forEach(button => {
        button.addEventListener('click', e => {
            e.target.innerHTML = '✓ Liked';
        })
    })

    const modal = document.querySelector('.modal');

    const subscribe_buttons = document.querySelectorAll('.subscribe_button');
    

    subscribe_buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.toggle('hidden');
        })
    })

    const modal_overlay = document.querySelector('.modal_overlay');
    const close_modal_button = document.querySelector('.close_modal_button');

    modal_overlay.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    })

    close_modal_button.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    })

    const elements_to_animate = document.querySelectorAll('[data-observe]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animation = entry.target.getAttribute('data-animation')
                entry.target.classList.add(animation);
            }
        })
    }, {
        root: null,
        threshold: 0.2,
    });
    

    elements_to_animate.forEach((element) => {
        observer.observe(element);
    })

})  

