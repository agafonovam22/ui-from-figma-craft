import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailSubscription from '../components/EmailSubscription';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { User, Package, Heart, CreditCard, Settings, LogOut, Star, ShoppingBag } from 'lucide-react';

const BuyerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Load user data from localStorage
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      setUser(userData);
    }
  }, []);

  // Mock data - replace with real data
  const orders = [
    { id: '12345', date: '2024-01-15', status: 'Доставлен', total: 125000, items: 3 },
    { id: '12346', date: '2024-01-10', status: 'В пути', total: 89000, items: 2 },
    { id: '12347', date: '2024-01-05', status: 'Обрабатывается', total: 45000, items: 1 },
  ];

  const favorites = [
    { id: 1, name: 'Беговая дорожка Technogym', price: 450000, image: '/lovable-uploads/treadmill.jpg' },
    { id: 2, name: 'Силовая станция Matrix', price: 380000, image: '/lovable-uploads/strength.jpg' },
  ];

  const bonusPoints = 2450;

  const handleLogout = () => {
    // Clear user data and redirect
    localStorage.removeItem('userData');
    navigate('/account');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Личный кабинет покупателя</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User size={32} className="text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">{user?.fullName || 'Загрузка...'}</CardTitle>
                  <p className="text-sm text-gray-600">{user?.email || ''}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="#orders">
                      <Package className="mr-2 h-4 w-4" />
                      Мои заказы
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="#favorites">
                      <Heart className="mr-2 h-4 w-4" />
                      Избранное
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="#profile">
                      <Settings className="mr-2 h-4 w-4" />
                      Настройки
                    </Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Выйти
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Обзор</TabsTrigger>
                  <TabsTrigger value="orders">Заказы</TabsTrigger>
                  <TabsTrigger value="favorites">Избранное</TabsTrigger>
                  <TabsTrigger value="profile">Профиль</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginTop: '10px' }}>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Всего заказов</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">за последний год</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Потрачено</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1 250 000 ₽</div>
                        <p className="text-xs text-muted-foreground">за все время</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Orders */}
                  <Card style={{ marginTop: '10px' }}>
                    <CardHeader>
                      <CardTitle>Последние заказы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orders.slice(0, 3).map((order) => (
                          <div key={order.id} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                            <div>
                              <p className="font-medium">Заказ #{order.id}</p>
                              <p className="text-sm text-gray-600">{order.date} • {order.items} товар(а)</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{order.total.toLocaleString()} ₽</p>
                              <Badge variant={order.status === 'Доставлен' ? 'default' : order.status === 'В пути' ? 'secondary' : 'outline'}>
                                {order.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Все заказы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                            <div className="space-y-1">
                              <p className="font-medium">Заказ #{order.id}</p>
                              <p className="text-sm text-gray-600">{order.date}</p>
                              <p className="text-sm text-gray-600">{order.items} товар(а)</p>
                            </div>
                            <div className="text-right space-y-1">
                              <p className="font-medium">{order.total.toLocaleString()} ₽</p>
                              <Badge variant={order.status === 'Доставлен' ? 'default' : order.status === 'В пути' ? 'secondary' : 'outline'}>
                                {order.status}
                              </Badge>
                              <div>
                                <Button variant="outline" size="sm">Подробнее</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Favorites Tab */}
                <TabsContent value="favorites" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Избранные товары</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {favorites.map((item) => (
                          <div key={item.id} className="border rounded-lg p-4 flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-lg font-bold text-[#F53B49]">{item.price.toLocaleString()} ₽</p>
                            </div>
                            <Button size="sm">В корзину</Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Profile Tab */}
                <TabsContent value="profile" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Настройки профиля</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">Здесь вы можете изменить свои личные данные, пароль и настройки уведомлений.</p>
                      <Button>Редактировать профиль</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default BuyerDashboard;