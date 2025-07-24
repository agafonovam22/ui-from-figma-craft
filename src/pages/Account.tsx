
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
              <div className="flex gap-2.5 mb-6" key="user-type-toggle-v2">
                <button
                  type="button"
                  onClick={() => setUserType('buyer')}
                  className={`py-4 px-8 text-base font-medium transition-all duration-200 rounded-xl ${
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
                  className={`py-4 px-8 text-base font-medium transition-all duration-200 rounded-xl ${
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
                <Link
                  to="/password-reset"
                  className="text-sm text-[#007BFF] hover:underline"
                >
                  Забыли пароль? Восстановить
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
              <p className="text-center text-sm text-gray-600 mb-4">
                Или войти с помощью
              </p>
              
              <div className="flex gap-2.5">
                <button
                  onClick={() => handleSocialLogin('google')}
                  className="h-12 flex items-center justify-center gap-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  style={{ width: '289.5px' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm text-gray-700">Google</span>
                </button>
                
                <button
                  onClick={() => handleSocialLogin('facebook')}
                  className="h-12 flex items-center justify-center gap-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  style={{ width: '289.5px' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm text-gray-700">Facebook</span>
                </button>
              </div>
            </div>

            {/* Registration Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">Нет аккаунта?</p>
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
