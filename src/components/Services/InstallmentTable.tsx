import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

interface InstallmentPlan {
  id: number;
  plan: string;
  bank: string;
  monthlyPayment: string;
  overpayment: string;
  term: string;
  rate: string;
  firstPayment: string;
  duration: string;
}

interface InstallmentTableProps {
  plans: InstallmentPlan[];
}

const InstallmentTable: React.FC<InstallmentTableProps> = ({ plans }) => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left side - Text content */}
          <div className="flex-1">
            <h2 className="mb-6" style={{ fontFamily: 'Manrope', fontSize: '32px', fontWeight: '700', color: '#111827' }}>В рассрочку</h2>
            
            <div className="space-y-4 mb-8" style={{ fontFamily: 'Manrope', fontSize: '16px', color: '#6B7280' }}>
              <p>
                Оформить кредит на сайте — быстро и легко. При оформлении заказа в корзине укажите способ 
                оплаты «Кредит».
              </p>
              <p>
                Вы будете перенаправлены на сайт банка для заполнения анкеты. После заполнения анкеты с вами 
                свяжется представитель банка. Вашу заявку рассмотрят в течение 20—30 минут.
              </p>
              <p>
                Также вы можете оформить рассрочку или кредит в любом магазине, сделав заказ на самовывоз. 
                Пожалуйста, будьте готовы предоставить паспорт при получении кредита. Также банки вправе 
                потребовать иные дополнительные документы и подтверждение доходов заемщика.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
              alt="Спортивное оборудование"
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Installment Table */}
        <div className="overflow-hidden mb-8">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-b hover:bg-transparent">
                <TableHead className="py-4" style={{ fontFamily: 'Manrope', fontSize: '16px', fontWeight: '600', color: '#111827' }}>Рассрочка</TableHead>
                <TableHead className="py-4" style={{ fontFamily: 'Manrope', fontSize: '16px', fontWeight: '600', color: '#111827' }}>Ежемесячный платеж</TableHead>
                <TableHead className="py-4" style={{ fontFamily: 'Manrope', fontSize: '16px', fontWeight: '600', color: '#111827' }}>Переплата</TableHead>
                <TableHead className="py-4" style={{ fontFamily: 'Manrope', fontSize: '16px', fontWeight: '600', color: '#111827' }}>Срок</TableHead>
                <TableHead className="py-4 text-right" style={{ fontFamily: 'Manrope', fontSize: '16px', fontWeight: '600', color: '#111827' }}></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow 
                  key={plan.id} 
                  className="border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <TableCell className="py-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 border-2 bg-white rounded-sm flex items-center justify-center"
                        style={{ borderColor: selectedPlan === plan.id ? '#F53B49' : '#D1D5DB' }}
                      >
                        {selectedPlan === plan.id && (
                          <div className="w-2 h-2 bg-[#F53B49]"></div>
                        )}
                      </div>
                      <div>
                        <div className="mb-1" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px', color: '#111827' }}>{plan.plan}</div>
                        <div style={{ fontFamily: 'Manrope', fontSize: '16px', color: '#6B7280' }}>{plan.bank}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-6" style={{ fontFamily: 'Manrope', fontSize: '16px', fontWeight: '600', color: '#111827' }}>{plan.monthlyPayment}</TableCell>
                  <TableCell className="py-6" style={{ fontFamily: 'Manrope', fontSize: '16px', color: '#111827' }}>{plan.overpayment}</TableCell>
                  <TableCell className="py-6" style={{ fontFamily: 'Manrope', fontSize: '16px', color: '#111827' }}>{plan.term}</TableCell>
                  <TableCell className="py-6 text-right">
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full" style={{ fontFamily: 'Manrope', fontSize: '12px' }}>
                        {plan.rate}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full" style={{ fontFamily: 'Manrope', fontSize: '12px' }}>
                        {plan.firstPayment}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full" style={{ fontFamily: 'Manrope', fontSize: '12px' }}>
                        {plan.duration}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 rounded" style={{ fontFamily: 'Benzin-Regular', fontSize: '16px' }}>
            Оставить заявку
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstallmentTable;