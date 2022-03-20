const form = document.querySelector('.contacts__form');
const selector = form.querySelector("input[type='tel']");
const inputMask = new Inputmask("+7(999)-999-99-99");
inputMask.mask(selector);
new window.JustValidate('.contacts__form',
  {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10
        }
      },
    },
    colorWrong: '#D11616',
    messages: {
      name: {
        required: 'Как Вас зовут?',
        minLength: 'Введите 2 и более символов',
        maxLength: 'Запрещено вводить более 30 символов',
      },
      tel: {
        required: 'Укажите ваш телефон',
        function: 'Здесь должно быть 10 символов без +7',
      }
    }
  });
