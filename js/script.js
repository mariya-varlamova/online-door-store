document.addEventListener('DOMContentLoaded', function() {
    const intro = document.querySelector('.intro');
    const images = [
        'img/Img1.png',
        'img/Img3.png', 
        'img/Img4.png'
    ];

    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        intro.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    intro.style.backgroundImage = `url(${images[0]})`;

    setInterval(changeBackground, 5000);


    const modal = document.getElementById('modalForm');

    const headerButton = document.querySelector('.header-button');
    const introButton = document.querySelector('.intro-button');
    const aboutCompanyButton = document.querySelector('.about-company-button');
    const articleButton = document.querySelector('.article-button');
    const buttonPlashka = document.querySelectorAll('.button-plashka');
    const buttonFormContacts = document.querySelector('.button__form-contacts');
    const footerButton = document.querySelector('.footer__button');

    const closeBtn = document.querySelector('.close-btn');
    const form = document.querySelector('.application-form');

     let scrollPosition = 0;

    function disableScroll() {
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        }

    function enableScroll() {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        window.scrollTo({
            top: scrollPosition,
            behavior: 'instant' 
        });
    }


    headerButton.addEventListener('click', function() {
        modal.style.display = 'flex';
        disableScroll();
        
    });

     introButton.addEventListener('click', function() {
        modal.style.display = 'flex';
        disableScroll();
        
    });

     aboutCompanyButton.addEventListener('click', function() {
        modal.style.display = 'flex';
        disableScroll();
        
    });

     articleButton.addEventListener('click', function() {
        modal.style.display = 'flex';
        disableScroll();
        
    });
    
    buttonPlashka.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
            disableScroll();
        });
});

    buttonFormContacts.addEventListener('click', function() {
        modal.style.display = 'flex';
        disableScroll();
        
    });

    footerButton.addEventListener('click', function() {
        modal.style.display = 'flex';
        disableScroll();
        
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        form.reset();
        clearErrors();
        enableScroll()
       
    });


    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            enableScroll()
            
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

         const isValid = validateForm();

         if (isValid) {
            alert('Форма отправлена!');
            modal.style.display = 'none';
            enableScroll();
            form.reset(); 
    }
    });

    function validateForm() {
        let isValid = true;
        
        const nameInput = document.querySelector('.modal-input__name');
        if (!nameInput.value.trim() || nameInput.value.trim().length === 0) {
            showError(nameInput, 'Введите ваше имя');
            isValid = false;
        }
        
        const phoneInput = document.querySelector('.modal-input__phone');
        const phoneRegex = /^\+7\s?[\(]?\d{3}[\)]?\s?\d{3}[\-]?\d{2}[\-]?\d{2}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            showError(phoneInput, 'Введите корректный номер телефона');
            isValid = false;
        }
        
        const checkbox = document.querySelector('.modal-input__checkbox');
        if (!checkbox.checked) {
            showError(checkbox, 'Необходимо согласие с политикой конфиденциальности');
            isValid = false;
        }
        
        return isValid;
    }

    function showError(input, message) {
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        input.style.borderColor = '#ff0000';
        

        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = '#ff0000';
        errorElement.style.fontSize = '14px';
        errorElement.style.fontFamily = 'Century Gothic';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        
        input.parentNode.appendChild(errorElement);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
    }

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '';
            const error = this.parentNode.querySelector('.error-message');
            if (error) {
                error.remove();
            }
        });
    });
});



