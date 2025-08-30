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
import { Building2, Package, BarChart3, CreditCard, Settings, LogOut, TrendingUp, Users, FileText } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { initTabletLayoutFix } from '@/utils/tabletLayout';

const DealerDashboard: React.FC = () => {
  // Инициализируем фикс планшетной раскладки
  useEffect(() => {
    const cleanup = initTabletLayoutFix();
    return cleanup;
  }, []);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Mock data - replace with real data
  const sales = [
    { id: '98765', date: '2024-01-15', client: 'ООО "ФитнесПро"', amount: 2450000, status: 'Оплачен' },
    { id: '98764', date: '2024-01-12', client: 'Спорт Клуб "Энергия"', amount: 1200000, status: 'В обработке' },
    { id: '98763', date: '2024-01-10', client: 'Фитнес-центр "Здоровье"', amount: 890000, status: 'Доставлен' },
  ];

  const products = [
    { id: 1, name: 'Беговая дорожка Technogym', stock: 15, price: 450000, sales: 25 },
    { id: 2, name: 'Силовая станция Matrix', stock: 8, price: 380000, sales: 18 },
    { id: 3, name: 'Эллиптический тренажер', stock: 12, price: 320000, sales: 22 },
  ];

  const monthlyRevenue = 15600000;
  const totalClients = 45;
  const pendingOrders = 8;

  const handleLogout = () => {
    logout();
    navigate('/account');
  };

  return (
    <div className="min-h-screen bg-white page-container">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-[1800px] mx-auto px-[30px] md:px-[20px] lg:px-[60px] py-8">
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
                <BreadcrumbPage>Кабинет дилера</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building2 size={32} className="text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">{user?.fullName || 'Загрузка...'}</CardTitle>
                  <p className="text-sm text-gray-600">{user?.email || ''}</p>
                  <Badge variant="secondary" className="mt-2">Дилер</Badge>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="#sales">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Продажи
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="#products">
                      <Package className="mr-2 h-4 w-4" />
                      Товары
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="#clients">
                      <Users className="mr-2 h-4 w-4" />
                      Клиенты
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="#reports">
                      <FileText className="mr-2 h-4 w-4" />
                      Отчеты
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="#settings">
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
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Обзор</TabsTrigger>
                  <TabsTrigger value="sales">Продажи</TabsTrigger>
                  <TabsTrigger value="products">Товары</TabsTrigger>
                  <TabsTrigger value="clients">Клиенты</TabsTrigger>
                  <TabsTrigger value="reports">Отчеты</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Выручка за месяц</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{monthlyRevenue.toLocaleString()} ₽</div>
                        <p className="text-xs text-muted-foreground">+12% к прошлому месяцу</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Клиенты</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{totalClients}</div>
                        <p className="text-xs text-muted-foreground">активных партнеров</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Заказы в обработке</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{pendingOrders}</div>
                        <p className="text-xs text-muted-foreground">требуют внимания</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Средний чек</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1 250 000 ₽</div>
                        <p className="text-xs text-muted-foreground">+8% к прошлому месяцу</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Sales */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Последние продажи</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sales.slice(0, 3).map((sale) => (
                          <div key={sale.id} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                            <div>
                              <p className="font-medium">Заказ #{sale.id}</p>
                              <p className="text-sm text-gray-600">{sale.client}</p>
                              <p className="text-sm text-gray-600">{sale.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{sale.amount.toLocaleString()} ₽</p>
                              <Badge variant={sale.status === 'Оплачен' ? 'default' : sale.status === 'В обработке' ? 'secondary' : 'outline'}>
                                {sale.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Sales Tab */}
                <TabsContent value="sales" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Все продажи</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sales.map((sale) => (
                          <div key={sale.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                            <div className="space-y-1">
                              <p className="font-medium">Заказ #{sale.id}</p>
                              <p className="text-sm text-gray-600">{sale.client}</p>
                              <p className="text-sm text-gray-600">{sale.date}</p>
                            </div>
                            <div className="text-right space-y-1">
                              <p className="font-medium">{sale.amount.toLocaleString()} ₽</p>
                              <Badge variant={sale.status === 'Оплачен' ? 'default' : sale.status === 'В обработке' ? 'secondary' : 'outline'}>
                                {sale.status}
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

                {/* Products Tab */}
                <TabsContent value="products" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Управление товарами</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {products.map((product) => (
                          <div key={product.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                            <div className="space-y-1">
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-gray-600">Остаток: {product.stock} шт.</p>
                              <p className="text-sm text-gray-600">Продано: {product.sales} шт. в месяц</p>
                            </div>
                            <div className="text-right space-y-1">
                              <p className="font-medium">{product.price.toLocaleString()} ₽</p>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">Редактировать</Button>
                                <Button variant="outline" size="sm">Пополнить</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Clients Tab */}
                <TabsContent value="clients" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>База клиентов</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Здесь отображается информация о ваших клиентах и партнерах.</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Reports Tab */}
                <TabsContent value="reports" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Отчеты и аналитика</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Здесь вы можете скачать отчеты о продажах, остатках и финансах.</p>
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

export default DealerDashboard;