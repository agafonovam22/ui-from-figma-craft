import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const ProductCardConfigurator: React.FC = () => {
  const [config, setConfig] = useState({
    name: 'Гребной тренажер CardioPower PRO CR300',
    price: '4 610 ₽',
    originalPrice: '',
    discount: '',
    rating: 4.8,
    reviews: 124,
    image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
    badge: 'Новинка',
    badgeColor: 'bg-green-500',
    isAvailable: true,
    hasComparison: true,
    inStock: true,
    variant: 'catalog' as 'catalog' | 'grid'
  });

  const updateConfig = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const badgeOptions = [
    { label: 'Новинка', value: 'Новинка', color: 'bg-green-500' },
    { label: 'Хит продаж', value: 'Хит продаж', color: 'bg-blue-500' },
    { label: 'Скидка', value: 'Скидка', color: 'bg-red-500' },
    { label: 'Акция', value: 'Акция', color: 'bg-orange-500' },
  ];

  const imageOptions = [
    { label: 'Гребной тренажер', value: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png' },
    { label: 'Беговая дорожка', value: '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png' },
    { label: 'Эллиптический тренажер', value: '/lovable-uploads/f4e554ea-7370-4b23-85ae-f3045c81543a.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <Link to="/catalog" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4" />
            Назад к каталогу
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Конфигуратор ProductCard</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Превью карточки */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Превью карточки товара</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="max-w-[280px] mx-auto">
                    <ProductCard 
                      product={{
                        id: 1,
                        ...config
                      }}
                      variant={config.variant}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Варианты отображения */}
            <Card>
              <CardHeader>
                <CardTitle>Вариант отображения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={config.variant === 'catalog' ? 'default' : 'outline'}
                    onClick={() => updateConfig('variant', 'catalog')}
                    className="w-full"
                  >
                    Каталог
                  </Button>
                  <Button
                    variant={config.variant === 'grid' ? 'default' : 'outline'}
                    onClick={() => updateConfig('variant', 'grid')}
                    className="w-full"
                  >
                    Сетка
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Панель настроек */}
          <div className="space-y-6">
            {/* Основная информация */}
            <Card>
              <CardHeader>
                <CardTitle>Основная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Название товара</Label>
                  <Textarea
                    id="name"
                    value={config.name}
                    onChange={(e) => updateConfig('name', e.target.value)}
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Цена</Label>
                    <Input
                      id="price"
                      value={config.price}
                      onChange={(e) => updateConfig('price', e.target.value)}
                      placeholder="4 610 ₽"
                    />
                  </div>
                  <div>
                    <Label htmlFor="originalPrice">Старая цена</Label>
                    <Input
                      id="originalPrice"
                      value={config.originalPrice}
                      onChange={(e) => updateConfig('originalPrice', e.target.value)}
                      placeholder="5 000 ₽"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image">Изображение</Label>
                  <Select value={config.image} onValueChange={(value) => updateConfig('image', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {imageOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Рейтинг и отзывы */}
            <Card>
              <CardHeader>
                <CardTitle>Рейтинг и отзывы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rating">Рейтинг (1-5)</Label>
                    <Input
                      id="rating"
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      value={config.rating}
                      onChange={(e) => updateConfig('rating', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reviews">Количество отзывов</Label>
                    <Input
                      id="reviews"
                      type="number"
                      value={config.reviews}
                      onChange={(e) => updateConfig('reviews', parseInt(e.target.value) || 0)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Бейджи и метки */}
            <Card>
              <CardHeader>
                <CardTitle>Бейджи и метки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="badge">Бейдж</Label>
                  <Select value={config.badge} onValueChange={(value) => {
                    const selectedBadge = badgeOptions.find(option => option.value === value);
                    updateConfig('badge', value);
                    if (selectedBadge) {
                      updateConfig('badgeColor', selectedBadge.color);
                    }
                  }}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {badgeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded ${option.color}`}></div>
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="comparison"
                    checked={config.hasComparison}
                    onCheckedChange={(checked) => updateConfig('hasComparison', checked)}
                  />
                  <Label htmlFor="comparison">Показать "Выбрать для сравнения"</Label>
                </div>
              </CardContent>
            </Card>

            {/* Состояние товара */}
            <Card>
              <CardHeader>
                <CardTitle>Состояние товара</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="inStock"
                    checked={config.inStock}
                    onCheckedChange={(checked) => updateConfig('inStock', checked)}
                  />
                  <Label htmlFor="inStock">В наличии</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="available"
                    checked={config.isAvailable}
                    onCheckedChange={(checked) => updateConfig('isAvailable', checked)}
                  />
                  <Label htmlFor="available">Доступен для покупки</Label>
                </div>
              </CardContent>
            </Card>

            {/* Экспорт конфигурации */}
            <Card>
              <CardHeader>
                <CardTitle>Конфигурация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <pre className="text-xs text-gray-700 overflow-auto">
                    {JSON.stringify(config, null, 2)}
                  </pre>
                </div>
                <Button 
                  className="mt-4 w-full" 
                  onClick={() => navigator.clipboard.writeText(JSON.stringify(config, null, 2))}
                >
                  Скопировать конфигурацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardConfigurator;