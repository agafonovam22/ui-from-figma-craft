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
                <BreadcrumbPage>Восстановление пароля</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Password Reset Form or Success Message */}
        <section className="py-8 bg-white">
          <div className={`${!isEmailSent ? 'container mx-auto px-4' : ''}`} style={{ maxWidth: !isEmailSent ? '650px' : 'none' }}>
            {!isEmailSent ? (
              <div>
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-[#262631] mb-6">
                    Восстановление пароля
                  </h1>
                  
                  <p className="text-[#262631] text-left" style={{ width: '589px', margin: '0 auto 10px auto', fontFamily: 'Manrope', fontSize: '16px' }}>
                    Мы отправим письмо со ссылкой для смены пароля на указанный Вами при регистрации адрес. Откройте письмо и перейдите по ссылке из письма.
                  </p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-[10px]" style={{ width: '589px', margin: '0 auto' }}>
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
                <div className="mt-6" style={{ width: '589px', margin: '24px auto 0 auto' }}>
                  <div className="text-center mb-4">
                    <p className="text-gray-600" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>Нет аккаунта?</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/register')}
                    className="w-full h-12 border border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white transition-colors rounded-md text-base font-medium"
                  >
                    Регистрация
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                {/* Gray background container stretched full width */}
                <div className="bg-gray-100 py-12">
                  <div style={{ paddingLeft: '220px', paddingRight: '60px' }}>
                    <div className="flex items-start gap-6">
                      {/* Checkmark icon - larger and aligned with title top */}
                      <div className="flex-shrink-0" style={{ marginTop: '-8px' }}>
                        <img 
                          src="/lovable-uploads/163791b0-3a3a-443b-9703-750e208fd889.png" 
                          alt="Checkmark" 
                          className="w-48 h-auto"
                          style={{ height: '240px', objectFit: 'contain' }}
                        />
                      </div>
                      
                      {/* Text content - all aligned to start from same line */}
                      <div className="flex-1">
                        <h1 className="text-2xl font-bold text-[#262631] mb-2 leading-none">
                          Мы отправили вам письмо со ссылкой<br />
                          для восстановления пароля
                        </h1>
                        
                        <p className="text-[#262631] text-base mb-6">
                          на указанный e-mail: <span className="text-[#007BFF]">{email}</span>
                        </p>
                        
                        <p className="text-[#262631] font-medium mb-6" style={{ fontSize: '16px', fontFamily: 'Manrope' }}>
                          Осталось сделать 3 шага.
                        </p>
                        
                        <div className="space-y-3 mb-8">
                          <p className="text-[#262631] leading-relaxed" style={{ fontSize: '16px', fontFamily: 'Manrope' }}>
                            <span className="font-medium">1.</span> Зайдите в свой почтовый ящик и найдите письмо от info@wellfitness.ru. Если вы не нашли письма, проверьте папку «Спам».
                          </p>
                          <p className="text-[#262631] leading-relaxed" style={{ fontSize: '16px', fontFamily: 'Manrope' }}>
                            <span className="font-medium">2.</span> Перейдите по ссылке, указанной в письме.
                          </p>
                          <p className="text-[#262631] leading-relaxed" style={{ fontSize: '16px', fontFamily: 'Manrope' }}>
                            <span className="font-medium">3.</span> Придумайте и введите новый пароль
                          </p>
                        </div>

                        {/* Back to Home Button */}
                        <div className="flex justify-start">
                          <Button
                            onClick={() => navigate('/')}
                            className="w-64 h-12 bg-[#F53B49] hover:bg-[#e63946] text-white text-base font-medium rounded-md"
                          >
                            Вернуться на главную
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
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