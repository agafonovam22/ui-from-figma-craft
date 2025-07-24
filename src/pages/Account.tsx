
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailSubscription from '../components/EmailSubscription';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

const Account: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'buyer' | 'dealer'>('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { userType, email, password });
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    console.log(`Login with ${provider}`);
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
                <BreadcrumbPage>Личный кабинет</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Login Form */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-lg">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-[#262631] mb-6">
                Вход в личный кабинет
              </h1>
              
              {/* User Type Toggle - Updated Design */}
              <div className="flex gap-2.5 mb-6" style={{ width: '589px' }} key="user-type-toggle-v2">
                <button
                  type="button"
                  onClick={() => setUserType('buyer')}
                  className={`h-12 px-8 text-base font-medium transition-all duration-200 rounded-xl ${
                    userType === 'buyer'
                      ? 'bg-[#F53B49] text-white shadow-lg'
                      : 'border border-gray-300 bg-white text-[#262631] hover:bg-gray-50 hover:border-gray-400'
                  }`}
                  style={{ textAlign: 'left', width: '289.5px' }}
                >
                  Покупатель
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('dealer')}
                  className={`h-12 px-8 text-base font-medium transition-all duration-200 rounded-xl ${
                    userType === 'dealer'
                      ? 'bg-[#F53B49] text-white shadow-lg'
                      : 'border border-gray-300 bg-white text-[#262631] hover:bg-gray-50 hover:border-gray-400'
                  }`}
                  style={{ textAlign: 'left', width: '289.5px' }}
                >
                  Дилер
                </button>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Input */}
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 px-4 border border-gray-300 rounded-md text-base placeholder:text-gray-400"
                  style={{ width: '589px' }}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 px-4 pr-12 border border-gray-300 rounded-md text-base placeholder:text-gray-400"
                  style={{ width: '589px' }}
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

              {/* Forgot Password */}
              <div className="text-left">
                <span className="text-sm text-[#262631]">Забыли пароль? </span>
                <Link
                  to="/password-reset"
                  className="text-sm text-[#007BFF] hover:underline"
                >
                  Восстановить
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="h-12 bg-[#F53B49] hover:bg-[#e63946] text-white text-base font-medium rounded-md"
                style={{ width: '589px' }}
              >
                Войти
              </Button>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="flex justify-center mb-4">
                <p className="text-sm text-gray-600">
                  Или войти с помощью
                </p>
              </div>
              
              <div className="flex gap-2.5" style={{ width: '589px' }}>
                <button
                  onClick={() => handleSocialLogin('google')}
                  className="h-12 flex items-center justify-center gap-3 border border-[#F53B49] rounded-md hover:bg-red-50 transition-colors"
                  style={{ width: '289.5px' }}
                >
                  <div className="w-8 h-8 bg-[#F53B49] rounded-full flex items-center justify-center">
                    <img src="/lovable-uploads/db62b558-c880-4804-9e0c-98c2ede12b2c.png" alt="Google" className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-[#F53B49]">Google</span>
                </button>
                
                <button
                  onClick={() => handleSocialLogin('facebook')}
                  className="h-12 flex items-center justify-center gap-3 border border-[#1877F2] rounded-md hover:bg-blue-50 transition-colors"
                  style={{ width: '289.5px' }}
                >
                  <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#1877F2]">Facebook</span>
                </button>
              </div>
            </div>

            {/* Registration Link */}
            <div className="mt-6">
              <div className="flex justify-center mb-4">
                <p className="text-sm text-gray-600">Нет аккаунта?</p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="h-12 border border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white transition-colors rounded-md text-base font-medium"
                style={{ width: '589px' }}
              >
                Регистрация
              </button>
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

export default Account;
