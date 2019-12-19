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
        <>
        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {faq[0].question}
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        {faq[0].answer}
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            {faq[1].question}
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        {faq[1].answer}
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            {faq[2].question}
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        {faq[2].answer}
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            {faq[3].question}
                        </button>
                    </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        {faq[3].answer}
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFive">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {faq[4].question}
                    </button>
                </h5>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                <div class="card-body">
                        {faq[4].answer}
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingSix">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {faq[5].question}
                    </button>
                </h5>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                <div class="card-body">
                        {faq[5].answer}
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingSeven">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {faq[6].question}
                    </button>
                </h5>
                </div>
                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                <div class="card-body">
                        {faq[6].answer}
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingEight">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        {faq[7].question}
                    </button>
                </h5>
                </div>
                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                <div class="card-body">
                        {faq[7].answer}
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingNine">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        {faq[8].question}
                    </button>
                </h5>
                </div>
                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                <div class="card-body">
                        {faq[8].answer}
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTen">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        {faq[9].question}
                    </button>
                </h5>
                </div>
                <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
                <div class="card-body">
                        {faq[9].answer}
                </div>
                </div>
            </div>
</div>
        </>
    )
}