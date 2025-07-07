import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailSubscription from '../components/EmailSubscription';
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
                  <BreadcrumbPage>Восстановление пароля</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Password Reset Form or Success Message */}
        <section className="py-8 bg-white">
          <div className={`container mx-auto px-4 ${!isEmailSent ? 'max-w-lg' : 'max-w-4xl'}`}>
            {!isEmailSent ? (
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-[#262631] mb-4">
                    Восстановление пароля
                  </h1>
                  
                  <p className="text-[#262631] mb-6 text-center">
                    Мы отправим письмо со ссылкой для смены пароля на указанный Вами при регистрации адрес. Откройте письмо и перейдите по ссылке из письма.
                  </p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-4">
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
                <div className="mt-6 text-center">
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
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-8 mb-12">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-[#F53B49] rounded-full flex items-center justify-center">
                      <Check size={48} color="white" strokeWidth={3} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-[#262631] mb-6 leading-tight text-left">
                      Мы отправили вам письмо со ссылкой для восстановления пароля
                    </h1>
                    
                    <p className="text-[#262631] mb-2 text-lg text-left">
                      на указанный e-mail: <span className="text-[#007BFF]">{email}</span>
                    </p>
                    
                    <p className="text-[#262631] mb-12 font-medium text-lg text-left">
                      Осталось сделать 3 шага.
                    </p>
                  </div>
                </div>
                
                <div className="text-left space-y-6 mb-12 max-w-4xl">
                  <p className="text-[#262631] text-base leading-relaxed">
                    <span className="font-medium">1.</span> Зайдите в свой почтовый ящик и найдите письмо от info@wellfitness.ru. Если вы не нашли письма, проверьте папку «Спам».
                  </p>
                  <p className="text-[#262631] text-base leading-relaxed">
                    <span className="font-medium">2.</span> Перейдите по ссылке, указанной в письме.
                  </p>
                  <p className="text-[#262631] text-base leading-relaxed">
                    <span className="font-medium">3.</span> Придумайте и введите новый пароль
                  </p>
                </div>

                {/* Back to Home Button */}
                <div className="max-w-lg mx-auto">
                  <Button
                    onClick={() => navigate('/')}
                    className="w-full h-12 bg-[#F53B49] hover:bg-[#e63946] text-white text-base font-medium rounded-md"
                  >
                    Вернуться на главную
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default PasswordReset;
