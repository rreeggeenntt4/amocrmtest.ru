# amocrmtest.ru

Тестовое задание по amoCRM на вакансию программиста

---------------------------------------------------------------
Введение
Данные тестовые задание взяты из реального практического опыта при работе с нашими клиентами. Цель заданий в том, чтобы определить, насколько хорошо соискатель на вакансию программиста разбирается с API amoCRM и принципами работы виджетов/интеграций. 

Предполагается, что на момент начала работы с данными тестовыми заданиями, у соискателя уже есть уверенный опыт практической работы с языками php, html5, css, javascript не менее 2 лет так как именно с помощью этих языков и нужно реализовывать тестовые задачи. 

---------------------------------------------------------------

Задание 1. Автосмена ответственного у задач
Дано

Аккаунт amoCRM с воронкой “Продажи”. Воронка состоит из этапов
Получена новая заявка
Взято в работу
Выставили счет
Успешно реализовано
Закрыто и не реализовано
В воронке есть сделки на различных этапах. В сделках ставятся задачи. В карточке сделки есть поле “Ответственный за контроль оплат” типа список, которое содержит имена пользователей amoCRM и их id (разделитель | ). Данное поле является обязательным для заполнения с этапа “Выставили счет”
Нужно сделать
У сделок на этапе “Выставили счет” и “Успешно реализовано” необходимо автоматически менять ответственного по задаче на того пользователя, который выбран в поле “Ответственный за контроль оплат”. 

Виджет не имеет визуального интерфейса. Виджет запускается каждые 2 минуты. 
Также необходимо предложить (на словах) вариант оптимизации данного решения для случаев, когда задач/сделок от 10 000 штук, каждый день прибавляется по 1000 сделок и ставится по 2000 новых задач уже у существующих сделок. 
Время на реализацию
2 дня

---------------------------------------------------------------

Задание 2. Расчет предоплаты
Дано
Аккаунт amoCRM с воронкой “Продажи”. Воронка состоит из этапов
Получена новая заявка
Взято в работу
Выставили счет
Успешно реализовано
Закрыто и не реализовано
В воронке есть сделки на различных этапах. Поле “Бюджет” является обязательным для заполнения с этапа “Выставили счет”. 

Также в сделке есть поля
Предоплата (тип поля число)
Остаток оплаты (тип поля число)
Нужно сделать
Виджет с интерфейсом в карточке сделки (расположен справа в разделе виджетов карточки сделки), который позволит менеджеру автоматически подсчитать разделение оплаты на 2 части (от поля бюджет) и сохранить данные в поля “Предоплата” и “Остаток оплаты”

Виджет содержит поля:
% Предоплаты
% Постоплаты
Сумма этих полей должна быть 100%. При вводе данных в одно из полей другое должно пересчитываться. 

Виджет содержит кнопки:
Рассчитать
Сохранить
Кнопка “Рассчитать” становится доступной, когда в полях “% Предоплаты” и “% Постоплаты” вбиты значения. При нажатии на поле “Рассчитать” в интерфейсе виджета показывается значения полей “Предоплата” и “Остаток оплаты”, которые будут при заданном бюджете и процентах в полях “% Предоплаты” и “% Постоплаты”. 

Кнопка “Сохранить” становится доступной, когда произведены расчеты с помощью кнопки “Рассчитать”. При нажатии на кнопку “Сохранить” данные, полученные при расчетах сохраняются в полях “Предоплата” и “Остаток оплаты” карточки сделки. 

Время на реализацию
3 дня

---------------------------------------------------------------

Пояснения к задачам
Для реализации поставленных задач зарегистрируйте тестовый аккаунт amoCRM на сайте https://www.amocrm.ru/. При регистрации дается демо период на 2 недели с максимальными возможностями (тариф “Профессиональный”).

Виджеты должны быть реализованы с поддержкой механизма OAuth 2.0 (подробнее читать здесь https://www.amocrm.ru/developers/content/oauth/oauth). Старый механизм авторизации виджетов, который работал через API ключ аккаунта amoCRM, не использовать (т.к. amoCRM скоро закроет возможность его использования). 

Библиотеку для реализации работы через API можно выбрать любую (но с поддержкой OAuth 2.0).

Виджеты должны учитывать ограничения на использование API amoCRM. 

Виджеты, загруженные в amoCRM через раздел “Настройки->Интеграции” должны иметь 
картинку (можно любую)
название (которое совпадает с названием тестового задание)
описание (можно любое)
Пример того, как это должно выглядеть
<img src="https://github.com/rreeggeenntt4/amocrmtest.ru/blob/main/media/what_should_work.png" alt="">

---------------------------------------------------------------

Ход выполнения:

---------------------------------------------------------------

    - регистрация на сайте https://amocrm.ru

    - по итогу получаем поддомен пример:

            https://rreeeggeenntt4.amocrm.ru/dashboard/?sel=all&period=week

    - переходим https://www.amocrm.ru/developers/content/integrations/intro

            скачиваем "Скачать пример виджета"

    - в настройках не будет api. Пишем службе поддержки "Нужен api"

    - переписка со службой поддержки

            "С 1 июля 2020г мы перестали выводить в интерфейсе API-ключи. Все уже установленные интеграции продолжат работу до смены авторизационных данных пользователя. То есть пока не поменяли API-ключ. Подробное описание почему мы отказались от API-ключей здесь - https://www.amocrm.ru/developers/content/oauth/switch-over-oauth#purpose Механизм API ключей прожил с нами практически все время, начиная со старта нашего проекта. Предоставил возможность разработки десятков и сотен тысяч различных интеграций. Но, к счастью, на его смену пришли новые инструменты, новые механизмы, новые требования по безопасности. На его смену пришел более безопасный, лишенный многих минусов API ключей механизм OAUTH авторизации https://www.amocrm.ru/developers/content/oauth/oauth Уточните, пожалуйста, для какой именно интеграции вам необходим API-ключ?"

            "Мне нужно создать виджет"


