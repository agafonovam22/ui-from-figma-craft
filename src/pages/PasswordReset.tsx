
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset request:', { email });
    setIsEmailSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumbs */}
        <section className="bg-[#F8F9FA] py-4">
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
                  <BreadcrumbPage>Восстановление пароля</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Password Reset Form or Success Message */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-lg">
            {!isEmailSent ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-[#262631] mb-4">
                    Восстановление пароля
                  </h1>
                  
                  <p className="text-[#262631] mb-8">
                    Мы отправим письмо со ссылкой для смены пароля на указанный Вами при регистрации адрес. Откройте письмо и перейдите по ссылке из письма.
                  </p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <Input
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md text-base placeholder:text-gray-400"
                      required
                    />
                  </div>

                  {/* Reset Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#F53B49] hover:bg-[#e63946] text-white text-base font-medium rounded-md"
                  >
                    Восстановить
                  </Button>
                </form>

                {/* Back to Login */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 mb-4">Нет аккаунта?</p>
                  <button
                    type="button"
                    onClick={() => navigate('/register')}
                    className="w-full h-12 border border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white transition-colors rounded-md text-base font-medium"
                  >
                    Регистрация
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-[#F53B49] rounded-full flex items-center justify-center">
                      <Check size={48} color="white" strokeWidth={3} />
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-[#262631] mb-6">
                    Мы отправили вам письмо со ссылкой для восстановления пароля
                  </h1>
                  
                  <p className="text-[#262631] mb-2">
                    на указанный e-mail: <span className="text-[#007BFF]">{email}</span>
                  </p>
                  
                  <p className="text-[#262631] mb-8 font-medium">
                    Осталось сделать 3 шага:
                  </p>
                  
                  <div className="text-left space-y-3 mb-8">
                    <p className="text-[#262631]">
                      <span className="font-medium">1.</span> Зайдите в свой почтовый ящик и найдите письмо от info@wellfitness.ru. Если вы не нашли письма, проверьте папку «Спам».
                    </p>
                    <p className="text-[#262631]">
                      <span className="font-medium">2.</span> Перейдите по ссылке, указанной в письме.
                    </p>
                    <p className="text-[#262631]">
                      <span className="font-medium">3.</span> Придумайте и введите новый пароль
                    </p>
                  </div>
                </div>

                {/* Back to Home Button */}
                <Button
                  onClick={() => navigate('/')}
                  className="w-full h-12 bg-[#F53B49] hover:bg-[#e63946] text-white text-base font-medium rounded-md"
                >
                  Вернуться на главную
                </Button>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PasswordReset;
