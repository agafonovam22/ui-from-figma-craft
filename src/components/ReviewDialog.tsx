
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Upload, Image } from "lucide-react";

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

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setUploadedImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Review submitted:', { formData, ratings, uploadedImages });
    // Here you would typically send the data to your backend
    onOpenChange(false);
  };

  const RatingBar = ({ category, label }: { category: string; label: string }) => {
    const currentRating = ratings[category as keyof typeof ratings];
    
    return (
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-700 w-32">{label}</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingClick(category, rating)}
              className={`w-4 h-3 ${
                rating <= currentRating ? 'bg-red-500' : 'bg-gray-200'
              } hover:bg-red-400 transition-colors`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#262631] mb-6">
            Написать отзыв
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm text-gray-600">ФИО</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm text-gray-600">Телефон</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm text-gray-600">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-sm text-gray-600">Ваше сообщение</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Напишите ваш отзыв здесь..."
              className="mt-1 min-h-[100px]"
            />
          </div>

          {/* Rating Categories */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Оцените товар</h3>
            <div className="space-y-2">
              {categories.map(({ key, label }) => (
                <RatingBar key={key} category={key} label={label} />
              ))}
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <Label className="text-sm text-gray-600 mb-2 block">Загрузить фото</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">Выберите файлы для загрузки</span>
                  <span className="text-xs text-gray-400 mt-1">или перетащите их сюда</span>
                </div>
              </label>
            </div>

            {/* Preview uploaded images */}
            {uploadedImages.length > 0 && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {uploadedImages.map((file, index) => (
                    <div key={index} className="relative">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg border flex items-center justify-center">
                        <Image className="w-8 h-8 text-gray-400" />
                      </div>
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                      <p className="text-xs text-gray-500 mt-1 text-center truncate w-20">
                        {file.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button 
              onClick={handleSubmit}
              className="bg-[#F53B49] hover:bg-red-600 text-white px-8"
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
