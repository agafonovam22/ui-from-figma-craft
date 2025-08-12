// Централизованное хранилище новостей для синхронизации между страницами

export interface NewsItem {
  id: number;
  type: string;
  category?: string;
  categoryColor?: string;
  date: string;
  title: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
  slug: string;
  isActive?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '27.02.2025',
    title: 'Новость для дилеров WellFitness',
    description: 'Специальные условия и предложения для наших партнеров-дилеров. Новые возможности для развития бизнеса.',
    image: '/lovable-uploads/38337e2c-c9ef-4784-a9a1-e0f20df7076d.png',
    size: 'large',
    slug: 'novost-dlya-dilerov-wellfitness',
    isActive: true
  },
  {
    id: 2,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '18.11.2023',
    title: 'Wellfitness PRO в Сколково 2023',
    description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
    image: '/lovable-uploads/09977489-01ac-4f0b-8284-db7c003b425b.png',
    size: 'large',
    slug: 'wellfitness-pro-skolkovo-2023',
    isActive: false
  },
  {
    id: 19,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '16.11.2023',
    title: 'Новинка - Уже в продаже: Беговая дорожка CardioPower T40 NEW',
    description: 'Представляем новую модель профессиональной беговой дорожки CardioPower T40 NEW с улучшенными характеристиками и современным дизайном.',
    image: '/lovable-uploads/cardiopower-t40-new.jpg',
    size: 'large',
    slug: 'cardiopower-t40-new-v-prodazhe',
    isActive: false
  },
  {
    id: 20,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '15.11.2023',
    title: 'Новинка - Уже в продаже: Беговая дорожка CardioPower S20',
    description: 'Беговая дорожка CardioPower S20 одна из самых компактных не только среди стационарных но и среди ультра-компактных беговых дорожек для дома.',
    image: '/lovable-uploads/8ea9b9be-2293-4e24-a820-f56c2a81923e.png',
    size: 'large',
    slug: 'cardiopower-s20-new-v-prodazhe',
    isActive: false
  },
  {
    id: 3,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '12 Декабря 2024',
    title: 'Wellfitness PRO в Сколково 2023',
    description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
    image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
    size: 'medium',
    slug: 'wellfitness-pro-skolkovo-2023-2',
    isActive: false
  },
  {
    id: 4,
    type: 'Блог',
    category: 'БЛОГ',
    categoryColor: 'bg-orange-600',
    date: '10 Декабря 2024',
    title: 'Wellfitness PRO в Сколково 2023',
    description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
    image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
    size: 'small',
    slug: 'wellfitness-pro-skolkovo-2023-3',
    isActive: false
  },
  {
    id: 5,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '8 Декабря 2024',
    title: 'Wellfitness PRO в Сколково 2023',
    description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
    image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
    size: 'medium',
    slug: 'wellfitness-pro-skolkovo-2023-4',
    isActive: false
  },
  {
    id: 6,
    type: 'Блог',
    category: 'БЛОГ',
    categoryColor: 'bg-orange-600',
    date: '5 Декабря 2024',
    title: 'Wellfitness PRO в Сколково 2023',
    description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
    image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
    size: 'small',
    slug: 'wellfitness-pro-skolkovo-2023-5',
    isActive: false
  },
  {
    id: 7,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '3 Декабря 2024',
    title: 'Wellfitness PRO в Сколково 2023',
    description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
    image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
    size: 'large',
    slug: 'wellfitness-pro-skolkovo-2023-6',
    isActive: false
  },
  {
    id: 8,
    type: 'Блог',
    category: 'БЛОГ',
    categoryColor: 'bg-orange-600',
    date: '1 Декабря 2024',
    title: 'Wellfitness PRO в Сколково 2023',
    description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
    image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
    size: 'medium',
    slug: 'wellfitness-pro-skolkovo-2023-7',
    isActive: false
  },
  {
    id: 9,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '28 Ноября 2024',
    title: 'Wellfitness PRO в Сколково 2023',
    description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
    image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
    size: 'small',
    slug: 'wellfitness-pro-skolkovo-2023-8',
    isActive: false
  },
  {
    id: 10,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '5 ноября 2024',
    title: 'Участие в выставке FIBO 2024',
    description: 'Наша компания примет участие в крупнейшей европейской выставке фитнес-индустрии FIBO 2024...',
    image: '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png',
    size: 'large',
    slug: 'uchastie-v-vystavke-fibo-2024',
    isActive: false
  },
  {
    id: 11,
    type: 'Акции',
    category: 'АКЦИИ',
    categoryColor: 'bg-red-600',
    date: '3 ноября 2024',
    title: 'Скидки до 30% на кардиотренажеры',
    description: 'Специальное предложение на беговые дорожки, велотренажеры и эллиптические тренажеры...',
    image: '/lovable-uploads/03483cd7-94a8-4050-b663-8e2a5d663e53.png',
    size: 'medium',
    slug: 'skidki-kardiotrenazher',
    isActive: false
  },
  {
    id: 12,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '1 ноября 2024',
    title: 'Новая линейка силовых тренажеров',
    description: 'Представляем обновленную серию профессиональных силовых тренажеров для коммерческих залов...',
    image: '/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png',
    size: 'medium',
    slug: 'novaya-lineyka-silovyh-trenazherov',
    isActive: false
  },
  {
    id: 13,
    type: 'События',
    category: 'СОБЫТИЯ',
    categoryColor: 'bg-green-600',
    date: '28 октября 2024',
    title: 'Открытие нового шоу-рума в Санкт-Петербурге',
    description: 'Мы рады объявить об открытии нового демонстрационного зала в центре Санкт-Петербурга...',
    image: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png',
    size: 'small',
    slug: 'otkrytie-shou-ruma-spb',
    isActive: false
  },
  {
    id: 14,
    type: 'Акции',
    category: 'АКЦИИ',
    categoryColor: 'bg-red-600',
    date: '25 октября 2024',
    title: 'Осенняя распродажа домашних тренажеров',
    description: 'Успейте приобрести домашние тренажеры со скидкой до 25% до конца месяца...',
    image: '/lovable-uploads/052844f7-bb47-4b45-ba40-d4123336188f.png',
    size: 'small',
    slug: 'osennyaya-rasprodazha',
    isActive: false
  },
  {
    id: 15,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '22 октября 2024',
    title: 'Сертификация ISO 9001:2015',
    description: 'Наша компания успешно прошла сертификацию по международному стандарту качества...',
    image: '/lovable-uploads/05ba64f8-caa1-4ce9-8069-6889a6182ae3.png',
    size: 'small',
    slug: 'sertifikaciya-iso-9001',
    isActive: false
  },
  {
    id: 16,
    type: 'События',
    category: 'СОБЫТИЯ',
    categoryColor: 'bg-green-600',
    date: '20 октября 2024',
    title: 'Мастер-класс по функциональному тренингу',
    description: 'Приглашаем на бесплатный мастер-класс от ведущих тренеров по функциональной подготовке...',
    image: '/lovable-uploads/0838e433-093a-4bb6-a996-3a7c584ed057.png',
    size: 'medium',
    slug: 'master-klass-funkcionalniy-trening',
    isActive: false
  },
  {
    id: 17,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '18 октября 2024',
    title: 'Партнерство с ведущими спортивными клубами',
    description: 'Заключены договоры о сотрудничестве с крупнейшими фитнес-сетями России...',
    image: '/lovable-uploads/08975827-d091-4c00-9cb5-85e93a4b1853.png',
    size: 'small',
    slug: 'partnerstvo-sportivnye-kluby',
    isActive: false
  },
  {
    id: 18,
    type: 'Акции',
    category: 'АКЦИИ',
    categoryColor: 'bg-red-600',
    date: '15 октября 2024',
    title: 'Специальное предложение для залов',
    description: 'Выгодные условия поставки оборудования для фитнес-центров и спортивных комплексов...',
    image: '/lovable-uploads/08d1344d-ca43-44d2-b953-28d3cb4c83d2.png',
    size: 'small',
    slug: 'specialnoe-predlozhenie-zaly',
    isActive: false
  },
  {
    id: 21,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '12 августа 2025',
    title: 'Новинка - Уже в продаже: Беговая дорожка CardioPower ТТ30',
    description: 'Беговая дорожка CardioPower ТТ30 - новая модель с улучшенными характеристиками и современным дизайном для домашнего использования.',
    image: '/lovable-uploads/6ca6c3e1-17e7-4d1a-9c84-8018e1af3530.png',
    size: 'large',
    slug: 'cardiopower-tt30-v-prodazhe',
    isActive: false
  },
  {
    id: 22,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '11 августа 2025',
    title: 'Новинка - Уже в продаже: Беговая дорожка CardioPower S55',
    description: 'Беговая дорожка CardioPower S55 - профессиональная модель с передовыми технологиями для эффективных тренировок.',
    image: '/lovable-uploads/3fe4b3b1-63a2-4ed1-b873-07b7de639ca1.png',
    size: 'large',
    slug: 'cardiopower-s55-v-prodazhe',
    isActive: false
  }
];

// Получить первые 4 новости для главной страницы
export const getHomePageNews = (): NewsItem[] => {
  return newsItems.slice(0, 4);
};

// Получить все новости для страницы /news
export const getAllNews = (): NewsItem[] => {
  return newsItems;
};

// Получить новости для страницы About
export const getAboutPageNews = (): NewsItem[] => {
  return newsItems;
};