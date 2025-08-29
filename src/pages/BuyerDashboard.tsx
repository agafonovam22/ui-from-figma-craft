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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Package, Heart, CreditCard, Settings, LogOut, Star, ShoppingBag, Eye, EyeOff } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const BuyerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout, updateUser } = useAuth();
  const { favorites, removeFromFavorites } = useFavorites();
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editForm, setEditForm] = useState({
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Set edit form data when user data is available
    if (user) {
      setEditForm({
        email: user.email || '',
        phone: user.phone || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  }, [user]);

  // Mock data - replace with real data
  const orders = [
    { id: '12345', date: '2024-01-15', status: 'Доставлен', total: 125000, items: 3 },
    { id: '12346', date: '2024-01-10', status: 'В пути', total: 89000, items: 2 },
    { id: '12347', date: '2024-01-05', status: 'Обрабатывается', total: 45000, items: 1 },
  ];

  const bonusPoints = 2450;

  const handleLogout = () => {
    logout();
    navigate('/account');
  };

  const handleEditFormChange = (field: string, value: string) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    // Basic validation
    if (editForm.newPassword && editForm.newPassword !== editForm.confirmPassword) {
      alert('Новые пароли не совпадают');
      return;
    }

    if (editForm.newPassword && editForm.newPassword.length < 6) {
      alert('Новый пароль должен содержать минимум 6 символов');
      return;
    }

    // Update user data using auth context
    updateUser({
      email: editForm.email,
      phone: editForm.phone
    });

    setIsEditingProfile(false);

    // Clear password fields
    setEditForm(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));

    alert('Профиль успешно обновлен');
  };

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
    // Reset form to current user data
    setEditForm({
      email: user?.email || '',
      phone: user?.phone || '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image_url: item.image_url,
      is_available: true
    });
    alert('Товар добавлен в корзину');
  };

  const handleRemoveFromFavorites = (id: string) => {
    removeFromFavorites(id);
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
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('orders')}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Мои заказы
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('favorites')}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Избранное
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('profile')}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Настройки
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
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Обзор</TabsTrigger>
                  <TabsTrigger value="orders">Заказы</TabsTrigger>
                  <TabsTrigger value="favorites">Избранное</TabsTrigger>
                  <TabsTrigger value="profile">Профиль</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <div className="mt-[10px]">
                  <TabsContent value="overview" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope' }}>{order.date} • {order.items} товар(а)</p>
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
                </div>

                {/* Orders Tab */}
                <TabsContent value="orders" className="space-y-6 mt-[10px]">
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
                              <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope' }}>{order.date}</p>
                              <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope' }}>{order.items} товар(а)</p>
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
                <TabsContent value="favorites" className="space-y-6 mt-[10px]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Избранные товары</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {favorites.length === 0 ? (
                        <div className="text-center py-8">
                          <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-500 mb-4">У вас пока нет избранных товаров</p>
                          <Link to="/categories">
                            <Button variant="outline">Перейти к покупкам</Button>
                          </Link>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {favorites.map((item) => (
                            <div key={item.id} className="border rounded-lg p-4 space-y-4">
                              <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                                <img 
                                  src={item.image_url} 
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                                  }}
                                />
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">{item.name}</h4>
                                <p className="text-lg font-bold text-[#F53B49]">{item.price.toLocaleString()} ₽</p>
                              </div>
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  className="flex-1 bg-[#F53B49] hover:bg-[#e63946]"
                                  onClick={() => handleAddToCart(item)}
                                >
                                  В корзину
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleRemoveFromFavorites(item.id)}
                                >
                                  <Heart className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Profile Tab */}
                <TabsContent value="profile" className="space-y-6 mt-[10px]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Настройки профиля</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600" style={{ fontFamily: 'Manrope' }}>
                        Здесь вы можете изменить свои личные данные, пароль и настройки уведомлений.
                      </p>
                      
                      {!isEditingProfile ? (
                        <Button onClick={() => setIsEditingProfile(true)}>
                          Редактировать профиль
                        </Button>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={editForm.email}
                                onChange={(e) => handleEditFormChange('email', e.target.value)}
                                placeholder="Введите новый email"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Телефон</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={editForm.phone}
                                onChange={(e) => handleEditFormChange('phone', e.target.value)}
                                placeholder="Введите новый телефон"
                              />
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <h4 className="font-medium mb-4">Изменить пароль (опционально)</h4>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="currentPassword">Текущий пароль</Label>
                                <div className="relative">
                                  <Input
                                    id="currentPassword"
                                    type={showCurrentPassword ? "text" : "password"}
                                    value={editForm.currentPassword}
                                    onChange={(e) => handleEditFormChange('currentPassword', e.target.value)}
                                    placeholder="Введите текущий пароль"
                                    className="pr-10"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                  >
                                    {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                  </button>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="newPassword">Новый пароль</Label>
                                  <div className="relative">
                                    <Input
                                      id="newPassword"
                                      type={showNewPassword ? "text" : "password"}
                                      value={editForm.newPassword}
                                      onChange={(e) => handleEditFormChange('newPassword', e.target.value)}
                                      placeholder="Введите новый пароль"
                                      className="pr-10"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowNewPassword(!showNewPassword)}
                                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                      {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                                  <div className="relative">
                                    <Input
                                      id="confirmPassword"
                                      type={showConfirmPassword ? "text" : "password"}
                                      value={editForm.confirmPassword}
                                      onChange={(e) => handleEditFormChange('confirmPassword', e.target.value)}
                                      placeholder="Повторите новый пароль"
                                      className="pr-10"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button onClick={handleSaveProfile} className="bg-[#F53B49] hover:bg-[#e63946]">
                              Сохранить изменения
                            </Button>
                            <Button variant="outline" onClick={handleCancelEdit}>
                              Отменить
                            </Button>
                          </div>
                        </div>
                      )}
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