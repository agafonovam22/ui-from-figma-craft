
import React from 'react';
import { useParams } from 'react-router-dom';

const Brand = () => {
  const { brandSlug } = useParams();

  const getBrandContent = () => {
    switch (brandSlug) {
      case 'bowflex':
        return {
          title: 'Bowflex',
          content: (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">О бренде</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Bowflex — это бренд из США с богатой историей, который уже почти сорок лет помогает людям по всему миру тренироваться дома и чувствовать себя лучше. С 1986 года компания создаёт удобные, надежные и современные тренажёры, которые подходят всем — от новичков до опытных спортсменов.
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/b2857e06-f776-42f3-ae7f-5f9b648d5573.png" 
                    alt="Bowflex тренажёры" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/lovable-uploads/a1331dd7-212c-4d15-a930-7bd880228278.png" 
                    alt="Тренажёры Bowflex" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold mb-4">Качество и инновации</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Тренажеры Bowflex легко узнать по их стильному дизайну, продуманной конструкции и высоким технологиям. Мы делаем всё, чтобы занятия были не только эффективными, но и приятными. Bowflex помогает сэкономить время и пространство, при этом вы получаете результат, как в настоящем спортзале.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Вдохновение к движению</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Каждый наш тренажёр создан, чтобы вдохновлять. Мы верим, что даже 10 минут движения в день могут подарить вам заряд энергии и улучшить настроение на целый день. Мы приносим радость движения в ваш дом, чтобы вы всегда были рядом с тем, что наполняет вас силами.
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/bc820bdc-17a0-4d70-a621-8d5a0ebf37ad.png" 
                    alt="Домашние тренировки Bowflex" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/lovable-uploads/c4fbfa9e-af20-4a86-87a4-93a9d834a095.png" 
                    alt="Фитнес с Bowflex" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold mb-4">Ваш путь к цели</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Bowflex — это не просто оборудование. Это поддержка и комфорт, которые всегда с вами, помогая двигаться к своим целям. Каждый человек выбирает свой путь, свой стиль и свои любимые упражнения — у нас есть решения для каждого. Что бы вас ни мотивировало, с Bowflex вы сможете двигаться так, как нравится именно вам.
                    <br /><br />
                    Мы создаём тренажёры, которые делают фитнес доступным и вдохновляющим. Дома, в своем ритме и на своих условиях. Просто начните, и вы почувствуете разницу.
                    <br /><br />
                    Bowflex — для тех, кто выбирает движение.
                  </p>
                </div>
              </div>
            </div>
          )
        };
      
      case 'gym80':
        return {
          title: 'Gym80',
          content: (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Стремление к совершенству</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Мы всегда смотрим вперед. Мы не стоим на месте и никогда не удовлетворяемся достигнутым, потому что верим — нет предела совершенству. Эти ценности определяют Gym80 уже более сорока лет.
                    <br /><br />
                    Сегодня Gym80 — один из крупнейших европейских производителей силовых тренажеров с самой широкой линейкой оборудования на рынке. Мы входим в число мировых лидеров индустрии и продолжаем доказывать, что немецкое качество, внимание к деталям и научный подход могут создавать по-настоящему уникальные продукты.
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/b2857e06-f776-42f3-ae7f-5f9b648d5573.png" 
                    alt="Gym80 тренажёры" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/lovable-uploads/a1331dd7-212c-4d15-a930-7bd880228278.png" 
                    alt="Профессиональные атлеты Gym80" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold mb-4">Выбор профессионалов</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Нашими тренажерами пользуются те, кто знает цену настоящей работе и высокому результату. Звезды мирового бодибилдинга, такие как Ли Хейни, Гюнтер Шлиеркамп, Роб Робинсон, Шон Рэй, Винс Тэйлор, выбирают Gym80. Ведущие футбольные клубы — Bayern München, Schalke 04, Bayer Leverkusen, FC Köln, московский Локомотив — доверяют подготовку своих игроков именно нам. Наше оборудование стоит в крупнейших фитнес‑сетях Европы, включая McFit, John Reed, Fitness Lounge, Benefit, а также в спортивных академиях и элитных тренажерных залах по всему миру.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Наука в действии</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Мы гордимся своей биомеханикой, ведь каждая деталь и каждое движение на наших тренажерах создаются с опорой на науку и многолетний опыт. Всё, чему мы научились за десятилетия работы, мы воплощаем в тренажерах, которые служат эталоном для всей индустрии. Мы не копируем — мы создаём. Над каждым нашим продуктом трудится команда инженеров, спортсменов, врачей и кинезиологов, чтобы довести его до совершенства.
                    <br /><br />
                    С 1996 года мы тесно сотрудничаем с Кельнским университетом спорта, который обеспечивает нам научную базу для разработки тренажеров, максимально соответствующих естественной биомеханике человека. Опытные инженеры, медики и профессиональные атлеты вместе разрабатывают решения, которые помогают достигать максимальных результатов безопасно и эффективно.
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/bc820bdc-17a0-4d70-a621-8d5a0ebf37ad.png" 
                    alt="Научный подход Gym80" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/lovable-uploads/c4fbfa9e-af20-4a86-87a4-93a9d834a095.png" 
                    alt="Made in Germany Gym80" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold mb-4">Made in Germany</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Мы остаёмся верны своим корням и традициям, производя тренажёры в Германии и следуя философии настоящего «Made in Germany». Для нас это не просто знак качества, а символ уважения к каждому клиенту, который выбирает лучшее. Gym80 выбирают те, кто серьёзно относится к своему делу, кто ценит безупречную механику движения, надёжность и долговечность оборудования.
                    <br /><br />
                    Gym80 — это история о силе, науке и стремлении к совершенству, рассказанная на языке железа. Мы создаём тренажёры, которые становятся частью больших побед и помогают раскрывать потенциал каждого спортсмена. Gym80 — это выбор профессионалов.
                  </p>
                </div>
              </div>
            </div>
          )
        };
      
      case 'true':
        return {
          title: 'TRUE',
          content: (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">О бренде TRUE</h2>
                  <p className="text-gray-600 leading-relaxed">
                    TRUE Fitness — это американский бренд премиального кардио-оборудования, который уже более 30 лет создает инновационные решения для фитнеса. Компания специализируется на производстве беговых дорожек, эллиптических тренажеров и велотренажеров высочайшего качества.
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/fdb2c107-4d4a-4359-ad9e-e0956210e114.png" 
                    alt="TRUE беговые дорожки" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/lovable-uploads/efed9e00-b7a6-41f7-9a09-fda3063fb2d1.png" 
                    alt="TRUE кардио оборудование" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold mb-4">Инновации и качество</h2>
                  <p className="text-gray-600 leading-relaxed">
                    TRUE известен своими запатентованными технологиями, включая уникальную систему амортизации SOFT SYSTEM и передовые консоли управления. Каждый тренажер создается с использованием высококачественных материалов и проходит строгий контроль качества.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Профессиональное оборудование</h2>
                  <p className="text-gray-600 leading-relaxed">
                    TRUE оборудование используется в ведущих фитнес-клубах, отелях и реабилитационных центрах по всему миру. Бренд заслужил доверие профессионалов благодаря надежности, долговечности и превосходной эргономике своих тренажеров.
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/420b5083-d5d6-4a7e-832a-14c1b055fb02.png" 
                    alt="TRUE силовые тренажеры" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/lovable-uploads/9e88f8c8-81a6-4cd5-9d9c-3308b5056f9c.png" 
                    alt="TRUE велотренажеры" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold mb-4">Комфорт и эффективность</h2>
                  <p className="text-gray-600 leading-relaxed">
                    TRUE создает тренажеры, которые обеспечивают максимальный комфорт во время тренировок и помогают достигать лучших результатов. Продуманная биомеханика движений и интуитивно понятное управление делают занятия приятными и эффективными для пользователей любого уровня подготовки.
                  </p>
                </div>
              </div>
            </div>
          )
        };

      default:
        return {
          title: 'Бренд не найден',
          content: (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Страница не найдена</h2>
              <p className="text-gray-600">Запрашиваемый бренд не существует.</p>
            </div>
          )
        };
    }
  };

  const { title, content } = getBrandContent();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Brand;
