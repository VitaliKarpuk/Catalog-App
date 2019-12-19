import React from 'react' 
import './style.css'
export const Contact = () => {
    const faq = [{
        question: 'При наличии клубной карточки TOP SECRET или TROLL, могу ли я получить скидку в интернет-магазине?',
        answer: 'Скидки по клубной карточке TOP SECRET и TROLL можно получить исключительно при покупках в стационарных магазинах предъявляя продавцу клубную карточку.'
    },
    {
        question: 'Что делать в случае, если получу товар в поврежденном состоянии?',
        answer: 'В случае получения поврежденного товара просим оформить рекламацию, согласно установленным правилам курьерской службы и уведомить интернет-магазин по телефону либо электронной почте.'
    },{
        question: 'Сколько длится выполнение заказа?',
        answer: 'Срок отгрузки товара 1-3 дней с даты оформления заказа, плюс доставка курьером – 3-5 рабочих дней до Москвы и Санкт-Петербурга, около 5-10 дней для регионов.'
    },
    {
        question: 'Можно ли заказать товар с доставкой за границу?',
        answer: 'Нет, к сожалению, такой возможности нет.'
    },
    {
        question: 'Все ли продукты предлагаемые в интернет-магазине доступны?',
        answer: 'На сайте интернет-магазина предлагаются все доступные цветовые версии и размеры данного продукта. Цвет и размер можно выбирать только из цветовой гаммы и списка размеров. После добавления продукта в корзину, высвечивается главная фотография продукта, фотография продукта выбранного цвета, высвечивается с правой стороны.'
    },
    {
        question: 'Сколько стоит доставка?',
        answer: 'Стоимость доставки зависит от способа оплаты и формы доставки. Более точная информация указана в разделе "Условия оплаты и доставки".'
    },
    {
        question: 'Каков срок возврата денег за возвращенный товар?',
        answer: 'Возврат денег происходит в течении 30 дней с момента получения возврата товара.'
    },
    {
        question: 'Можно ли вернуть купленный товар?',
        answer: 'Информация о возврате товара по ссылке.'
    },
    {
        question: 'Как можно внести изменения в заказ или аннулировать его?',
        answer: 'Если Вы желаете внести изменения в заказ или аннулировать его, просим Вас в день создания заказа обратиться по электронной почте: shop@topsecret.com.ru. Интернет-магазин работает с понедельника по пятницу с 9-00 до 18-00 (по московскому времени). '
    },
    {
        question: 'Какие формы оплаты доступны в интернет-магазине?',
        answer: 'Заплатить за товар, купленный в интернет-магазине, Вы можете наличными денежными средствами или банковской картой.'
    }
     ]
    return(
        <ul className = 'faq'>
            {faq.map((item, index) => <li className = {`faqLi_${index}`} >{item.question}
            <div className = {`listFaq_${index}`}><p>{item.answer}</p></div>
            </li>)}
        </ul>
    )
}