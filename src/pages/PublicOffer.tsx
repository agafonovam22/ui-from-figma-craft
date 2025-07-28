import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';

const PublicOffer: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-500 hover:text-gray-700">
                Главная
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 font-medium">
                Публичная оферта
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Main Title */}
        <h1 className="text-[40px] font-bold text-[#17171E] leading-tight mb-8">
          Публичная оферта
        </h1>

        {/* Content */}
        <div className="prose prose-gray max-w-none text-sm space-y-6">
          <section>
            <p className="text-gray-600 leading-relaxed mb-4">
              Настоящий документ– это публичная оферта (предложение) интернет-магазина http://wellfitness.ru/ (далее – Сайт) о продаже товаров.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Настоящая публичная оферта (далее - Оферта) является официальным предложением ООО "Оптима Импорт" в адрес любого лица заключить с ООО "Оптима Импорт" договор купли-продажи товара дистанционным способом (далее - «Договор») на условиях, содержащихся в настоящей Оферте.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-benzin-semibold text-[#17171E] mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">1.1</h3>
                <p className="text-gray-600 leading-relaxed">
                  Заказ Покупателем товара, размещенного на Сайте, означает, что Покупатель согласен со всеми условиями настоящей Оферты.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">1.2</h3>
                <p className="text-gray-600 leading-relaxed">
                  Сайт имеет право вносить изменения в Оферту без уведомления Покупателя. На сайте указывается дата последней применимой редакции Оферты. Изменения обратной силы не имеют.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">1.3</h3>
                <p className="text-gray-600 leading-relaxed">
                  Срок действия Оферты не ограничен, если иное не указано на Сайте.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">1.4</h3>
                <p className="text-gray-600 leading-relaxed">
                  Сайт предоставляет Покупателю полную и достоверную информацию о товаре/услугах, включая информацию об основных потребительских свойствах товара, а также информацию о гарантийном сроке и сроке годности товара (в случае их наличия).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-benzin-semibold text-[#17171E] mb-4">2. ОФОРМЛЕНИЕ ЗАКАЗА</h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.1</h3>
                <p className="text-gray-600 leading-relaxed">
                  Заказ Товара осуществляется Покупателем через Оператора по телефону +7 (499) 677-56-32 или через сайт Интернет-магазина http://wellfitness.ru/ или по электронной почте zakaz@wellfitness.ru
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.2</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  При регистрации на сайте Интернет-магазина Покупатель обязуется предоставить следующую регистрационную информацию:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>фамилия, имя, отчество Покупателя или указанного им лица (получателя) или наименование юридического лица с реквизитами;</li>
                  <li>адрес, по которому следует доставить Товар (если доставка до адреса Покупателя);</li>
                  <li>адрес электронной почты;</li>
                  <li>контактный телефон.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.3</h3>
                <p className="text-gray-600 leading-relaxed">
                  Наименование, количество, ассортимент, артикул, цена выбранного Покупателем Товара указываются в корзине Покупателя на сайте Интернет-магазина и в счетах на оплату, товарных накладных и счетах фактурах.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.4</h3>
                <p className="text-gray-600 leading-relaxed">
                  Если Продавцу необходима дополнительная информация, он вправе запросить ее у Покупателя. В случае, если Покупатель не запрашивал дополнительную информацию о Товаре, Продавец не несет ответственности за выбранный Покупателем Товар.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.5</h3>
                <p className="text-gray-600 leading-relaxed">
                  При оформлении Заказа через Оператора или по электронной почте (п. 2.1. настоящей Оферты) Покупатель обязуется предоставить информацию, указанную в п. 2.2. настоящей Оферты.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.6</h3>
                <p className="text-gray-600 leading-relaxed">
                  Принятие Покупателем условий настоящей Оферты осуществляется посредством внесения Покупателем соответствующих данных в регистрационную форму на сайте Интернет-магазина или через Оператора при оформлении Заказа или путем направления данных на электронную почту zakaz@wellfitness.ru.
                  После оформления Заказа через Оператора данные о Покупателе регистрируются в базе данных Продавца. Подтвердив Заказ выбранного Товара, Покупатель предоставляет Оператору необходимую информацию в соответствии с порядком, указанном в п.2.2. настоящей Оферты.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.7</h3>
                <p className="text-gray-600 leading-relaxed">
                  Продавец не несет ответственности за содержание и достоверность информации, предоставленной Покупателем при оформлении Заказа.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.8</h3>
                <p className="text-gray-600 leading-relaxed">
                  Покупатель несет ответственность за достоверность предоставленной информации при оформлении Заказа.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.9</h3>
                <p className="text-gray-600 leading-relaxed">
                  Договор купли-продажи дистанционным способом между Продавцом и Покупателем считается заключенным с момента выдачи Продавцом Покупателю кассового или товарного чека или счета-фактуры либо иного документа, подтверждающего оплату Товара. Такой кассовый либо товарный чек либо счет-фактура может быть направлен на электронную почту или ссылкой по номеру телефона, указанного Покупателем при оформлении заказа.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">2.10</h3>
                <p className="text-gray-600 leading-relaxed">
                  Для целей покупки товаров с условиями о доставке, сборке и пуско-наладке Товара юридические лица заключают с Продавцом договор поставки в письменной форме.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-benzin-semibold text-[#17171E] mb-4">3. ЦЕНА ТОВАРА</h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">3.1</h3>
                <p className="text-gray-600 leading-relaxed">
                  Цена на каждую позицию Товара указана на сайте Интернет-магазина.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">3.2</h3>
                <p className="text-gray-600 leading-relaxed">
                  Продавец имеет право в одностороннем порядке изменить цену на любую позицию Товара.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">3.3</h3>
                <p className="text-gray-600 leading-relaxed">
                  В случае изменения цены на заказанный Товар Продавец обязуется в течение 2 дней проинформировать Покупателя об изменении цены Товара.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">3.4</h3>
                <p className="text-gray-600 leading-relaxed">
                  Покупатель вправе подтвердить либо аннулировать Заказ на приобретение Товара, если цена изменена Продавцом после оформления Заказа, но до его оплаты Покупателем.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">3.5</h3>
                <p className="text-gray-600 leading-relaxed">
                  Изменение Продавцом цены на оплаченный Покупателем Товар не допускается.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">3.6</h3>
                <p className="text-gray-600 leading-relaxed">
                  Продавец указывает стоимость доставки Товара на сайте Интернет-магазина либо сообщает Покупателю при оформлении заказа Оператором.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">3.7</h3>
                <p className="text-gray-600 leading-relaxed">
                  Обязательства Покупателя по оплате Товара считаются исполненными с момента поступления на расчетный счет Продавца денежных средств.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">3.8</h3>
                <p className="text-gray-600 leading-relaxed">
                  Расчеты между Продавцом и Покупателем за Товар производятся способами, указанными на сайте Интернет-магазина в разделе http://wellfitness.ru/delivery/.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-benzin-semibold text-[#17171E] mb-4">4. ПОСТАВКА И ПЕРЕДАЧА ТОВАРА ПОКУПАТЕЛЮ</h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.1</h3>
                <p className="text-gray-600 leading-relaxed">
                  Поставка Товара производится путем самовывоза Товара Покупателем со склада Поставщика в г. Москве/Московской области и/или г. Санкт-Петербург, силами и за счет Покупателя.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.2</h3>
                <p className="text-gray-600 leading-relaxed">
                  Продавец может оказать Покупателю услуги по организации доставки Товара одним из способов, указанных на сайте Интернет-магазина в разделе http://wellfitness.ru/delivery/.
                  Договор купли-продажи товара дистанционным способом (далее – Договор) заключен с условием о поставке Товара Покупателю, Продавец организует автомобильную или курьерскую доставку Товара в место, указанное Покупателем в пределах Москвы и Московской области, либо организуем доставку Товара до приемного пункта выбранной Покупателем транспортной компании.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.3</h3>
                <p className="text-gray-600 leading-relaxed">
                  Место поставки Товара Покупатель указывает при оформлении Заказа на приобретение Товара.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.4</h3>
                <p className="text-gray-600 leading-relaxed">
                  Срок поставки Товара Покупателю состоит из срока обработки заказа и срока доставки.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.5</h3>
                <p className="text-gray-600 leading-relaxed">
                  Датой поставки (передачи) Товара Покупателю считается дата передачи Товара по товарной накладной или дата передачи Товара в транспортную компанию, указанную Покупателем.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.6</h3>
                <p className="text-gray-600 leading-relaxed">
                  Право собственности на приобретенные Товары переходит к Покупателю с момента фактической передачи товара Продавцом Покупателю либо с момента передачи Товара в транспортную компанию. Риск случайной гибели или повреждения Товара переходит к Покупателю с момента фактической передачи товара Покупателю либо в транспортную компанию.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.7</h3>
                <p className="text-gray-600 leading-relaxed">
                  Продавец не несет ответственность за сохранность Товара, переданного транспортной компании и/или при доставке Товара Поставщиком, но на условиях Покупателя.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.8</h3>
                <p className="text-gray-600 leading-relaxed">
                  Информация о Товаре доводится до сведения Покупателя в технической документации, прилагаемой к Товару, на этикетках, путем нанесения маркировки или иным способом, принятым для отдельных видов товаров.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">4.9</h3>
                <p className="text-gray-600 leading-relaxed">
                  Сведения об обязательном подтверждении соответствия Товара представляются в порядке и способами, которые установлены законодательством Российской Федерации о техническом регулировании, и включают в себя сведения о номере документа, подтверждающего такое соответствие, о сроке его действия и об организации, его выдавшей.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-benzin-semibold text-[#17171E] mb-4">5. ИНЫЕ УСЛОВИЯ</h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">5.1</h3>
                <p className="text-gray-600 leading-relaxed">
                  Покупатель разрешает продавцу обрабатывать свои персональные данные для оформления покупки и доставки Товара, а также в целях участия в программе лояльности. При обработке персональных данных Продавец обеспечивает конфиденциальность персональных данных Покупателя, а также принимает необходимые правовые, организационные и технические меры для защиты персональных данных Покупателя от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных Покупателя.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">5.2</h3>
                <p className="text-gray-600 leading-relaxed">
                  Продавец вправе передавать персональные данные службе доставки.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">5.3</h3>
                <p className="text-gray-600 leading-relaxed">
                  В случае возникновения вопросов и претензий со стороны Покупателя он должен обратиться к уполномоченному сотруднику ООО "Оптима Импорт" через Сайт, по телефону или написать на электронную почту info@wellfitness.ru.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">5.4</h3>
                <p className="text-gray-600 leading-relaxed">
                  Досудебное урегулирование возникшего спора является обязательным. При не достижении соглашения спор подлежит рассмотрению судом в соответствии с действующим законодательством РФ по месту нахождения ООО "Оптима Импорт".
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">5.5</h3>
                <p className="text-gray-600 leading-relaxed">
                  Признание судом недействительности какого-либо положения настоящего Соглашения не влечет за собой недействительность остальных положений.
                </p>
              </div>
              
              <div>
                <h3 className="font-benzin text-[#17171E] mb-2">5.6</h3>
                <p className="text-gray-600 leading-relaxed">
                  Продавец не несет ответственности за ущерб, причинённый Покупателю вследствие ненадлежащего использования Товаров, Заказанных на Сайте.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-benzin-semibold text-[#17171E] mb-4">6. ИНФОРМАЦИЯ О ПРОДАВЦЕ</h2>
            
            <div className="space-y-3">
              <p className="text-gray-600 leading-relaxed font-semibold">Продавец:</p>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p>Общество с ограниченной ответственностью "Оптима Импорт"</p>
                <p>ИНН 7734728519</p>
                <p>КПП 773401001</p>
                <p>Тел: +7 (499) 677-56-32</p>
                <p>Адрес: 123458, г. Москва, ул. Маршала Прошлякова, д.30, офис 407</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed font-semibold mt-4">Банковские реквизиты:</p>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p>Филиал "Корпоративный" ПАО "Совкомбанк"</p>
                <p>Р/С 40702810700050680771</p>
                <p>К/С 30101810445250000360</p>
                <p>БИК 044525360</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              Внимательно ознакомьтесь с текстом публичной оферты, и, если Вы не согласны с каким-либо пунктом оферты, Вы вправе отказаться от покупки Товаров, предоставляемых Продавцом, и не совершать действий, указанных в п. 2.1. настоящей Оферты.
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold">
              Дата применения настоящего текста Оферты с 03 февраля 2020 года.
            </p>
          </section>
        </div>
      </div>
      
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default PublicOffer;