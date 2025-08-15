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
    image: '/lovable-uploads/455535ff-3272-4d6d-96c9-d3784ffaf8fb.png',
    size: 'large',
    slug: 'cardiopower-t40-new-v-prodazhe',
    isActive: false
  },
  {
    id: 20,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '9.11.2023',
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
    date: '9.11.2023',
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
    date: '9.11.2023',
    title: 'Новинка - Уже в продаже: Беговая дорожка CardioPower S55',
    description: 'Беговая дорожка CardioPower S55 - профессиональная модель с передовыми технологиями для эффективных тренировок.',
    image: '/lovable-uploads/3fe4b3b1-63a2-4ed1-b873-07b7de639ca1.png',
    size: 'large',
    slug: 'cardiopower-s55-v-prodazhe',
    isActive: false
  },
  {
    id: 23,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '9.11.2023',
    title: 'Новинка - Уже в продаже: Беговая дорожка CardioPower S50',
    description: 'Беговая дорожка CardioPower S50 - инновационная модель с профессиональными характеристиками для интенсивных тренировок.',
    image: '/lovable-uploads/3b753ca2-42c7-416f-9886-af8374196645.png',
    size: 'large',
    slug: 'cardiopower-s50-v-prodazhe',
    isActive: false
  },
  {
    id: 24,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '17.10.2023',
    title: 'Новинка - Уже в продаже: Эллиптический тренажер CardioPower X48',
    description: 'Эллиптический тренажер CardioPower X48 - профессиональная модель для эффективных кардиотренировок.',
    image: '/lovable-uploads/8f5c4260-9931-4f3a-9ae2-b0f6122e8f2f.png',
    size: 'large',
    slug: 'cardiopower-x48-v-prodazhe',
    isActive: false
  },
  {
    id: 25,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '17.10.2023',
    title: 'Новинка - Уже в продаже: Эллиптический тренажер CardioPower X45',
    description: 'Эллиптический тренажер CardioPower X45 - инновационная модель для эффективных домашних тренировок.',
    image: '/lovable-uploads/18cd3093-b7ac-453b-8467-1fec09fb24fc.png',
    size: 'large',
    slug: 'cardiopower-x45-v-prodazhe',
    isActive: false
  },
  {
    id: 26,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '26.09.2023',
    title: 'Новинка - Уже в продаже: Беговая дорожка CardioPower TT35',
    description: 'Беговая дорожка CardioPower TT35 - современная модель с передовыми технологиями для эффективных тренировок.',
    image: '/lovable-uploads/f723c377-cd62-435f-86d4-71f10aca1c8f.png',
    size: 'large',
    slug: 'cardiopower-tt35-v-prodazhe',
    isActive: false
  },
  {
    id: 27,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '6.09.2023',
    title: 'Новинка - Уже в продаже: Гребной тренажёр CardioPower RE50',
    description: 'Гребной тренажёр CardioPower RE50 - профессиональная модель для тренировки всех групп мышц.',
    image: '/lovable-uploads/fac5ea13-b62c-4a6f-8362-0195de2226a6.png',
    size: 'large',
    slug: 'cardiopower-re50-v-prodazhe',
    isActive: false
  },
  {
    id: 29,
    type: 'Новости',
    category: 'НОВОСТИ',
    categoryColor: 'bg-blue-600',
    date: '06.09.2023',
    title: 'Новинка - Уже в продаже: Вертикальный велотренажёр CardioPower B35',
    description: 'Вертикальный велотренажёр CardioPower B35 - профессиональная модель с современным дизайном для эффективных кардиотренировок.',
    image: '/lovable-uploads/be6f99e9-3aac-4e59-bffd-6f339330f7a2.png',
    size: 'large',
    slug: 'cardiopower-b35-v-prodazhe',
    isActive: false
  }
];

// Получить первые 4 новости для главной страницы
export const getHomePageNews = (): NewsItem[] => {
  return newsItems.slice(0, 4);
};

// Получить новости с пагинацией (11 новостей на страницу)
export const getNewsWithPagination = (page: number = 1): { news: NewsItem[], totalPages: number } => {
  const itemsPerPage = 11;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNews = newsItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  
  return {
    news: paginatedNews,
    totalPages
  };
};

// Получить все новости для страницы /news (с пагинацией)
export const getAllNews = (page: number = 1): { news: NewsItem[], totalPages: number } => {
  return getNewsWithPagination(page);
};

// Получить новости для страницы About (с пагинацией)
export const getAboutPageNews = (page: number = 1): { news: NewsItem[], totalPages: number } => {
  return getNewsWithPagination(page);
};