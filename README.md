# Тестовое задание

# Вёрстка и программирование Таблицы пользователей
# Задание
  *Сверстать таблицу
  * На стороне клиента реализовать следующий функционал:
  * Возможность поиска пользователей по имени пользователя или e-mail адресу
  * Возможность сортировки таблицы по следующим полям: дата регистрации, rating
  * Реализовать пагинацию 
  * Реализовать возможность удалить пользователя из списка
  
# Описание функционала

  * Поля таблицы должны содержать следующие данные: 
  *  Имя пользователя
  *  E-mail
  *  Дата регистрации
  *  Рейтинг пользователя

* Для получения списка пользователей выполнить GET запрос на  url: (....)
# В ответ приходит список пользователей со следующими полями:
  *  id – Уникальный номер пользователя
  *  username – Имя пользователя
  *  email – e-mail адрес пользователя
  *  registration_date – дата регистрации
  *  rating – рейтинг пользователя
  # Реализация поиска пользователей по имени пользователя или e-mail адресу:
  *  Доступна возможность ввода запроса для поиска пользователя по имени пользователя либо по e-mail адресу.
  *  Поиск осуществляется при совпадении введенного запроса с полями  «username» или «email» без учёта регистра.
  *Реализация сортировки таблицы:
  *  При нажатии на «Дата регистрации» в сортировке список сортируется по дате регистрации от наибольшей даты к наименьшей, при повторном нажатии на активное поле сортировки дата список сортируется по дате от наименьшей даты к наибольшей.
  *  При нажатии на «Прогресс» в сортировке список сортируется по полю «Прогресс» по возрастанию/убыванию аналогично полю «Дата регистрации».
# Кнопка очистить фильтр:
   * Появляется при активном поиске, либо после применения сортировки по любому из полей
  *  При нажатии на кнопку выполняется сброс фильтр поиска и сортировки
# Пагинация:
 *  На странице отображается по 5 пользователей, есть возможность переходить между страницами (реализация свободная)
# Возможность удаления пользователя из таблицы
 *   При нажатии на крестик выводится модальное окно с фразой «Вы уверены, что хотите удалить пользователя» и кнопки «Да», «Нет»
 *   При нажатии на «Нет», модальное окно закрывается
 *   При нажатии на «Да» пользователь удаляется из таблицы на стороне клиента (при обновлении страницы он снова отображается)
 *   При использовании фильтров после удаления пользователя, он не показывается в списках

# Требования к реализации
 * Разработанный функционал должен корректно работать в Chrome, Opera, Mozilla, Edge, IE11+.
 * Для реализации используется следующий стек – HTML, CSS, JS, любой из JS фреймворков (Vue, React, Angular, Svelte и. т.п.)
 * Нельзя использовать готовые компоненты для указанных фреймворков.
 * Использовать “use strict”.
 * При открытом модальном окне все другие активности невозможны, кроме как в окне.
