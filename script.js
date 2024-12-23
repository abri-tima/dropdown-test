const formsWrapper = document.getElementById('forms-wrapper');
        const addFormButton = document.getElementById('addForm');
        const saveDataButton = document.getElementById('saveData');
        const savedView = document.getElementById('saved-view');

        // Add new form
        addFormButton.addEventListener('click', () => {
            const newForm = formsWrapper.firstElementChild.cloneNode(true);
            formsWrapper.appendChild(newForm);
        });

        // Save all data
        saveDataButton.addEventListener('click', () => {
            const allForms = formsWrapper.querySelectorAll('form');
            savedView.innerHTML = '';
            allForms.forEach((form, index) => {
                const formData = new FormData(form);
                const savedItem = document.createElement('div');
                savedItem.className = 'saved-view';

                const title = document.createElement('div');
                title.className = 'title';
                title.innerText = `${index + 1}_${formData.get('Имя Фамилия') || ''} _ ${formData.get('Стать') || ''}`;

                const details = document.createElement('div');
                details.innerHTML = `
                    Виріб: ${formData.get('Изд') || ''}, ${formData.get('Название изд') || ''}, ${formData.get('Цвет изд') || ''}, ${formData.get('Кол изд') || ''} шт<br>
                    ОГ/ОБ: ${formData.get('ОГ/ОБ') || ''}<br>
                    Вишивка лого: ${formData.get('Кол выш лого') || ''}<br>
                    Вишивка імені: ${formData.get('Кол выш имен') || ''}
                `;

                const actionButtons = document.createElement('div');
                actionButtons.className = 'action-buttons';
                actionButtons.innerHTML = `
                    <button onclick="editEntry(${index})">Редагувати</button>
                    <button onclick="deleteEntry(${index})">Видалити</button>
                `;

                savedItem.appendChild(title);
                savedItem.appendChild(details);
                savedItem.appendChild(actionButtons);
                savedView.appendChild(savedItem);
            });

            formsWrapper.innerHTML = '';
        });

        function editEntry(index) {
            alert('Редагування запису ' + (index + 1));
        }

        function deleteEntry(index) {
            const items = savedView.querySelectorAll('.saved-view');
            if (items[index].remove()) {
                items[index].remove();
            }
        }

        /* МОЙ КОД*/
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwkA4Kq-74fsysdxqCnP8JQAhHZ1cbRAm3q6sL8RCR0icDbeUnUmJSYzWR1oXxks81u/exec'
        const form = document.forms['submit-to-google-sheet']
        const sendText = document.getElementById('sendText')
      
        form.addEventListener('submit', e => { 
          e.preventDefault()
    
          const dropdown = document.getElementById('dropdown');
          const selectedValue = dropdown.value;
    
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>{
              sendText.innerHTML = "Спасибо данные отправлены!"
              setTimeout(function(){
                  sendText.innerHTML = ""
              }, 1000)
              form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

        document.getElementById('input1').addEventListener('input', function () {
      const input1 = document.getElementById('input1').value.toLowerCase();
      const input2 = document.getElementById('input2');

      // Очищаем старые значения
      input2.innerHTML = '<option value="" selected disabled></option>';

      if (input1 === 'китель') {
        addOptions(input2, ['CLOVIS', 'WASHINGTON', 'ALICANTE', 'LAS VEGAS', 'MURANO', 'PORTLAND', 'MILAN', 'NORMAN', 'RIVERSIDE', 'FRANKFURT', 'DENVER', 'TEXAS', 'VENEZUELA', 'NAPOLI', 'SEATTLE', 'EUROPE', 'CAPRI', 'CONCORD', 'SPARTA', 'BRATISLAVA', 'MEXICO', 'FLORIDA', 'MOROCCO', 'TORONTO', 'INDIANA', 'SIDNEY', 'LOS ANGELES', 'NEBRASKA', 'SANTORINI']);
      } else if (input1 === 'брюки') {
        addOptions(input2, ['GENEVA', 'KANZAS', 'BREST', 'CARY', 'CHICO', 'BALTIMOR', 'BASEL', 'LINCOLN', 'ARIZONA', 'KENT', 'TURIN', 'BOGOTA']);
      } else if (input1 === 'фартух') {
        addOptions(input2, ['MONACO', 'TENERIFE', 'SAVANNA', 'SPARKS', 'ALASKA', 'BEND', 'VANCOUVER', 'ASTANA', 'OREGON', 'BOSTON', 'ROME', 'VIRGINIA', 'DETROIT', 'LONDON', 'MANILA', 'MONTERREY', 'VILNIUS', 'COLOMBO', 'OTTAWA', 'SIENA', 'COPENHAGEN']);
      } else if (input1 === 'головной убор') {
        addOptions(input2, ['Шапка ALABAMA', 'Повязка SOFIA', 'Бандана DUBAI', 'Кепка MADAGASKAR', 'Кепка GRANADA', 'Кепка PALERMO', 'Кепка RIMINI', 'Головний убір-панама HONG KONG', 'Таблетка KABUL', 'Гриб стандарт PARIS']);
      } else if (input1 === 'поло футболка') {
        addOptions(input2, ['Футболка NEVADA', 'Поло NEW YORK', 'Футболка DUBLIN']);
      } else if (input1 === 'свитшот') {
        addOptions(input2, ['MICHIGAN']);
      } else if (input1 === 'носки') {
        addOptions(input2, ['Набір шкарпеток LION', 'Набір шкарпеток ABRIKOS', 'Набір шкарпеток BLACK', 'Набір шкарпеток GRAY', 'Набір шкарпеток SPIDER', 'Набір шкарпеток TATTOO', 'Набір шкарпеток DEMON', 'Набір шкарпеток EGG', 'Набір шкарпеток MUHOMOR', 'Набір шкарпеток RACCON']);
      }

      if (input1 === 'китель') {
        addOptions(input3, ['Бежевый', 'Белый', 'Голубой', 'Светло-серый', 'Серый', 'Синий', 'Хаки', 'Черный'])
      } else if (input1 === 'брюки') {
        addOptions(input3, ['Бежевый', 'Клетка', 'Меланж', 'Оранжевый', 'Серый', 'Синий', 'Хаки', 'Черный'])
      } else if (input1 === 'фартух') {
        addOptions(input3, ['Бежевый', 'Белый', 'Голубой', 'Светло-серый', 'Сине-серый', 'Синий', 'Темный беж', 'Хаки', 'Черный', 'Черно-серый'])
      } else if (input1 === 'головной убор') {
        addOptions(input3, ['Бежевый', 'Белый', 'Светло-серый', 'Черный', 'Красный', 'Желтый', 'Серый', 'Пудра', 'Меланж', 'Голубой', 'Зеленый', 'Оранжевый', 'Розовый', 'Cиний', 'Темный беж', 'Хаки'])
      } else if (input1 === 'поло футболка') {
        addOptions(input3, ['Белый', 'Черный', 'Хаки', 'Серый'])
      } else if (input1 === 'свитшот') {
        addOptions(input3, ['Хаки', 'Черный', 'Светло-серый'])
      } else if (input1 === 'носки') {
        addOptions(input3, ['0'])
      }

      if (input1 === 'носки') {
        addOptions(input4, ['36-40', '41-45'])
      } else if (input1 === 'поло футболка') {
        addOptions(input4, ['0', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'])
      } else if (input1 === 'свитшот') {
        addOptions(input4, ['0', 'XS', 'S', 'M', 'L', 'XL', '2XL'])
      } else if (input1 === 'китель', 'брюки') {
        addOptions(input4, ['0', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60', '62'])
      }
      
    });

    // Функция для добавления вариантов в select
    function addOptions(select, options) {
      options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
      });
    }