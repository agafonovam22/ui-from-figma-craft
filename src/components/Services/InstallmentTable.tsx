import React from 'react';
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
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Text content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">В рассрочку</h2>
          
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
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold text-gray-900">Рассрочка</TableHead>
              <TableHead className="font-semibold text-gray-900">Ежемесячный платеж</TableHead>
              <TableHead className="font-semibold text-gray-900">Переплата</TableHead>
              <TableHead className="font-semibold text-gray-900">Срок</TableHead>
              <TableHead className="font-semibold text-gray-900"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plans.map((plan) => (
              <TableRow key={plan.id} className="hover:bg-gray-50">
                <TableCell>
                  <div>
                    <div className="font-semibold text-gray-900">{plan.plan}</div>
                    <div className="text-sm text-gray-600">{plan.bank}</div>
                  </div>
                </TableCell>
                <TableCell className="font-semibold">{plan.monthlyPayment}</TableCell>
                <TableCell>{plan.overpayment}</TableCell>
                <TableCell>{plan.term}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {plan.rate}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {plan.firstPayment}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
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
        <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 text-lg font-semibold rounded-lg">
          Оставить заявку
        </Button>
      </div>
    </div>
  );
};

export default InstallmentTable;