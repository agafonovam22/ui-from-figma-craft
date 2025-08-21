
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReviewDialog: React.FC<ReviewDialogProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [ratings, setRatings] = useState({
    quality: 0,
    price: 0,
    functionality: 0,
    speed: 0,
    assembly: 0
  });

  const categories = [
    { key: 'quality', label: 'Качество' },
    { key: 'price', label: 'Цена' },
    { key: 'functionality', label: 'Функциональность' },
    { key: 'speed', label: 'Скорость' },
    { key: 'assembly', label: 'Легкость в сборке' }
  ];

  const handleRatingClick = (category: string, rating: number) => {
    setRatings(prev => ({
      ...prev,
      [category]: rating
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Review submitted:', { formData, ratings });
    // Here you would typically send the data to your backend
    onOpenChange(false);
  };

  const RatingBar = ({ category, label }: { category: string; label: string }) => {
    const currentRating = ratings[category as keyof typeof ratings];
    
    return (
      <div className="flex items-center justify-between py-2">
        <span className="text-base text-gray-700 w-48">{label}</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingClick(category, rating)}
              className={`w-6 h-4 rounded-sm ${
                rating <= currentRating ? 'bg-red-500' : 'bg-gray-300'
              } hover:bg-red-400 transition-colors`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black mb-8">
            Написать отзыв
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-4">
            {/* ФИО - полная ширина */}
            <div>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="ФИО"
                className="w-full h-12 text-base"
              />
            </div>
            
            {/* Телефон и E-mail в одну строку */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Телефон"
                className="h-12 text-base"
              />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="E-mail"
                className="h-12 text-base"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Ваше сообщение"
              className="min-h-[120px] text-base"
            />
          </div>

          {/* Rating Categories */}
          <div className="space-y-4">
            {categories.map(({ key, label }) => (
              <RatingBar key={key} category={key} label={label} />
            ))}
          </div>

          {/* Photo Upload and Captcha */}
          <div className="grid grid-cols-2 gap-8">
            {/* Captcha Section */}
            <div className="space-y-4">
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Captcha Image</span>
              </div>
              <Input
                placeholder="Введите слово на картинке"
                className="h-12 text-base"
              />
            </div>
            
            {/* Upload section placeholder */}
            <div>
              {/* This space can be used for additional content if needed */}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              onClick={handleSubmit}
              className="bg-[#F53B49] hover:bg-red-600 text-white px-12 py-3 text-base h-12 rounded-lg"
            >
              Добавить отзыв
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
