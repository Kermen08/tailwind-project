import './style.css';
import './images/sofa.png'
import './images/desk.png'

let validateInputs = {
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
        },
        phone: {
            required: true,
        },
        country: {
            required: true,
        }
    },
    errorPlacement: function (error, element) {
        const container = element.closest('.form-group').find('.error-message');
        error.appendTo(container);
    },
    messages: {
        name: {
            required: "Введите ваше имя",
        },
        email: {
            required: "Введите вашу почту",
        },
        phone: {
            required: "Номер телефона обязателен",
        },
        country: {
            required: "Введите страну",
        }
    },
    submitHandler: function (form) {
        let loader = $('.loader'),
            nameVal = $('input[name="name"]', form).val(), // Значение поля "Имя" конкретной формы
            phoneVal = $('input[name="phone"]', form).val(); // Значение поля "Телефон" конкретной формы

        loader.css('display', 'flex'); // Показываем загрузочный индикатор

        $.ajax({
            method: "POST",
            url: "http://testologia.ru/checkout",
            data: {name: nameVal, phone: phoneVal},
            success: function (response) {
                loader.hide(); // Скрываем лоадер
                if (response.success) {
                    if ($(form).is("#request-info-form")) {
                        showSuccessPopup('.info-popup', form);
                    } else if ($(form).is("#show-house-form")) {
                        showSuccessPopup(".request-house-popup", form);
                    }
                    $(form).closest('.form-container').css('opacity', '0');
                } else {
                    alert('Ошибка при отправке формы. Попробуйте снова.');
                }
            },
        });
    }
};