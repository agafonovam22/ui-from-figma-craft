
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

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

  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);

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

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedPhotos(Array.from(files));
    }
  };

  const handleSubmit = () => {
    console.log('Review submitted:', { formData, ratings, photos: selectedPhotos });
    // Here you would typically send the data to your backend
    onOpenChange(false);
  };

  const RatingBar = ({ category, label }: { category: string; label: string }) => {
    const currentRating = ratings[category as keyof typeof ratings];
    
    return (
      <div className="flex items-center justify-between py-3">
        <span className="text-base text-foreground font-['Benzin-Regular'] w-48">{label}</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingClick(category, rating)}
              className={`w-12 h-8 rounded-sm border transition-colors ${
                rating <= currentRating 
                  ? 'bg-[#F53B49] border-[#F53B49]' 
                  : 'bg-white border-gray-300 hover:bg-gray-50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1000px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-['Benzin-Semibold'] text-foreground mb-4">
            Написать отзыв
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Personal Information */}
          <div className="space-y-3">
            {/* ФИО - полная ширина */}
            <Input
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="ФИО"
              className="w-full h-10 text-sm font-['Benzin-Regular']"
            />
            
            {/* Телефон и E-mail в одну строку */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Телефон"
                className="h-10 text-sm font-['Benzin-Regular']"
              />
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="E-mail"
                className="h-10 text-sm font-['Benzin-Regular']"
              />
            </div>
          </div>

          {/* Message */}
          <Textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Ваше сообщение"
            className="min-h-[80px] text-sm font-['Benzin-Regular']"
          />

          {/* Rating Categories in Gray Container */}
          <div className="bg-muted rounded-lg p-4 space-y-1">
            {categories.map(({ key, label }) => (
              <RatingBar key={key} category={key} label={label} />
            ))}
          </div>

          {/* Photo Upload and Captcha */}
          <div className="grid grid-cols-2 gap-6">
            {/* Photo Upload Button */}
            <div className="flex justify-start">
              <label className="cursor-pointer">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 px-4 text-sm font-['Benzin-Regular']"
                  asChild
                >
                  <span>
                    <Upload className="mr-2 h-4 w-4" />
                    Добавить фото
                  </span>
                </Button>
              </label>
            </div>
            
            {/* Captcha Section */}
            <div className="space-y-3">
              <div className="w-full h-20 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-['Benzin-Regular']">Captcha Image</span>
              </div>
              <Input
                placeholder="Введите слово на картинке"
                className="h-10 text-sm font-['Benzin-Regular']"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start pt-2">
            <Button 
              onClick={handleSubmit}
              className="bg-[#F53B49] hover:bg-[#F53B49]/90 text-white px-6 py-2 text-sm h-10 rounded-lg font-['Benzin-Regular']"
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
