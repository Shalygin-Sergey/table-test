'use strict';

/* Парсим пользователей и рисуем таблицу */

function getRequest() {
    return fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
    .then(res => res.json())
    .then(data => { 
        state.users = state.users.concat(data); 
        result();
        return data; 
    })
}

const state = {
    users: [],
}

getRequest();


const buttonGet = document.querySelector('.btnGet');
const usersList = document.querySelector('.users_list');
const table = document.querySelector('.table');
const ul = document.querySelector('#pagination');
const input = document.querySelector('.input');
const filter = document.querySelector('.filter');

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');
const popupOk = document.querySelector('.popup_ok');


console.log(state);

function result () {

    /* Пагинация */
    let notesOnPage = 5;

    let countOfItems = Math.ceil(state.users.length / notesOnPage);
   
    let items = [];
    
    if(state.users.length > 4) {
        for (let i = 1; i <= countOfItems; i++) {
            let li = document.createElement('li');
            li.innerHTML = i;
            ul.append(li);
            items.push(li);
            
        }
    } else {
        ul.classList.add('over')
    }
    let active;
    showPage(items[0])
    


    for (let item of items) {
        item.addEventListener('click', function() {
            showPage(this)
        })
    }

    

    function showPage(item) {

        if (active) {
            active.classList.remove('active')
        }
        active = item;
        
        item.classList.add('active');
        let pageNum = +item.innerHTML;

        
        let start = (pageNum - 1) * notesOnPage;
        let end = start + notesOnPage;
        let notes = state.users.slice(start, end);
        table.innerHTML = '';

        /* Отрисовка данных и самой таблицы динамически */
        for (let note of notes) {
            
            let tr = document.createElement('tr');
            tr.classList.add('searchble');
            table.append(tr);
            let options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                timezone: 'UTC'
            };
            let registr_date = new Date(note.registration_date).toDateString('en', options);

            createCell(note.username, tr)
            createCell(note.email, tr)
            createCell(registr_date, tr)
            createCell(note.rating, tr)
            createCell('X', tr)

            
            

        }

        /* Проверка крестиков в полях и вызов модалки по нажатию + логика модалки */
        let poles = document.querySelectorAll('.mom');
        
        poles.forEach((e) => {
            e.addEventListener('click', (e) => {

                let target = e.target;
                let tr = target.parentNode;
                if(target === poles[4] || 
                    target === poles[9] || 
                    target === poles[14] || 
                    target === poles[19] || 
                    target === poles[24]) {
                     
                    popup.classList.add('open');
                    popupOk.addEventListener('click', () => {
                        
                        if(popupOk) {
                            popup.classList.remove('open');
                            
                            tr.parentNode.removeChild(tr);
                        } 
                    })
                    popupClose.addEventListener('click', () => {
                        if(popupClose) {
                            popup.classList.remove('open');
                            tr = '';
                        }
                    })
                } else {
                    return
                }
            })
        })

    }
    /* Функция генерации ячеек и текста в них */
    function createCell(text, tr) {
        let td = document.createElement('td');
        td.innerHTML = text;
        td.classList.add('mom');
        tr.append(td);
    }
    /* Функция появления кнопки очистки фильтра */
    function disabledButton(e) {
        const input = document.querySelector('.input');
        input.addEventListener('input', (e) => {
            console.log(e.target.value);
            if (e.target.value != '') {
                filter.classList.add('open')
            } else {
                filter.classList.remove('open')
            }
        })
        const registr = document.querySelector('#registr');
        const registred = document.querySelector('#registred');
        registr.addEventListener('click', () => {
            filter.classList.add('open');
        })
        registred.addEventListener('click', () => {
            filter.classList.add('open');
        })

    }
    disabledButton()

    // Поиск по таблице
    document.querySelector('.input').oninput = function() {
        let val = this.value.trim().toUpperCase();
        
        
        let itemsStr = document.querySelectorAll('.searchble');
        if(val != '') {
            itemsStr.forEach((elem) => {
                if (elem.innerText.search(RegExp(val,"gi")) == -1) {
                    elem.classList.add('hide');
                } else {
                    elem.classList.remove('hide');
                }
            })
        } else {
            itemsStr.forEach((elem) => {
                elem.classList.remove('hide');
            })
                
        }
    }
    /* Перезагрузка страницы по нажатию на кнопку фильтр */
    filter.addEventListener('click', () => {
        location.reload();
    });
    new Tablesort(document.getElementById('table-id'))
}





