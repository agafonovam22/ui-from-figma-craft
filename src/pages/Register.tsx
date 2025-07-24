import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailSubscription from '../components/EmailSubscription';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

const Register: React.FC = () => {
  const [userType, setUserType] = useState<'buyer' | 'dealer'>('buyer');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', { userType, ...formData });
  };

  const handleSocialRegister = (provider: 'google' | 'facebook') => {
    console.log(`Register with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumbs */}
        <section className="bg-white py-4">
          <div className="container mx-auto px-4 lg:px-[60px]">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Главная</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Регистрация</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-lg">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-[#262631] mb-6">
                Регистрация
              </h1>
              
              {/* User Type Toggle */}
              <div className="flex gap-2.5 mb-6 w-full">
                <button
                  type="button"
                  onClick={() => setUserType('buyer')}
                  className={`flex-1 h-12 px-8 text-base font-medium transition-all duration-200 rounded-xl ${
                    userType === 'buyer'
                      ? 'bg-[#F53B49] text-white shadow-lg'
                      : 'border border-gray-300 bg-white text-[#262631] hover:bg-gray-50 hover:border-gray-400'
                  }`}
                >
                  Покупатель
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('dealer')}
                  className={`flex-1 h-12 px-8 text-base font-medium transition-all duration-200 rounded-xl ${
                    userType === 'dealer'
                      ? 'bg-[#F53B49] text-white shadow-lg'
                      : 'border border-gray-300 bg-white text-[#262631] hover:bg-gray-50 hover:border-gray-400'
                  }`}
                >
                  Дилер
                </button>
              </div>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Full Name Input */}
              <div>
                <Input
                  type="text"
                  placeholder="ФИО"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded-md text-base placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded-md text-base placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded-md text-base placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-md text-base placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Повторите пароль"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-md text-base placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-[#F53B49] hover:bg-[#e63946] text-white text-base font-medium rounded-md"
              >
                Регистрация
              </Button>
            </form>

            {/* Social Registration */}
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 mb-4">
                Или зарегистрируйтесь с помощью
              </p>
              
              <div className="flex gap-2.5 w-full">
                <button
                  onClick={() => handleSocialRegister('google')}
                  className="flex-1 h-12 flex items-center justify-center gap-3 border border-[#F53B49] rounded-md hover:bg-red-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="/lovable-uploads/8f95678a-c44f-49fe-9db4-8f2ecf7e6d0e.png" alt="Google" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm text-[#F53B49]">Google</span>
                </button>
                
                <button
                  onClick={() => handleSocialRegister('facebook')}
                  className="flex-1 h-12 flex items-center justify-center gap-3 border border-[#1877F2] rounded-md hover:bg-blue-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="/lovable-uploads/56a9d743-11c6-471d-a2e4-a83c8818b525.png" alt="Facebook" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm text-[#1877F2]">Facebook</span>
                </button>
              </div>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">Уже есть аккаунт?</p>
              <Link
                to="/account"
                className="w-full h-12 border border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white transition-colors rounded-md text-base font-medium flex items-center justify-center"
              >
                Войти
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default Register;
