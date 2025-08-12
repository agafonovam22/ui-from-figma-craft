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