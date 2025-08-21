
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
              className={`w-12 h-8 rounded-sm transition-colors ${
                rating <= currentRating 
                  ? 'bg-[#F53B49]' 
                  : 'bg-muted hover:bg-muted/80'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-['Benzin-Semibold'] text-foreground mb-8">
            Написать отзыв
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            {/* ФИО - полная ширина */}
            <Input
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="ФИО"
              className="w-full h-14 text-base font-['Benzin-Regular']"
            />
            
            {/* Телефон и E-mail в одну строку */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Телефон"
                className="h-14 text-base font-['Benzin-Regular']"
              />
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="E-mail"
                className="h-14 text-base font-['Benzin-Regular']"
              />
            </div>
          </div>

          {/* Message */}
          <Textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Ваше сообщение"
            className="min-h-[120px] text-base font-['Benzin-Regular']"
          />

          {/* Rating Categories in Gray Container */}
          <div className="bg-muted rounded-lg p-6 space-y-2">
            {categories.map(({ key, label }) => (
              <RatingBar key={key} category={key} label={label} />
            ))}
          </div>

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
                className="h-12 px-6 font-['Benzin-Regular']"
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
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-['Benzin-Regular']">Captcha Image</span>
              </div>
            </div>
            <div className="space-y-4">
              <Input
                placeholder="Введите слово на картинке"
                className="h-14 text-base font-['Benzin-Regular']"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start pt-4">
            <Button 
              onClick={handleSubmit}
              className="bg-[#F53B49] hover:bg-[#F53B49]/90 text-white px-8 py-3 text-base h-12 rounded-lg font-['Benzin-Regular']"
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
