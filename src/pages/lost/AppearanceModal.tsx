import React from 'react';
import { X } from 'lucide-react';

export interface AppearanceData {
  upperWear: string[];
  upperWearColor: string;
  overWear: string[];
  overWearColor: string;
  lowerWear: string[];
  lowerWearColor: string;
  footWear: string[];
  footWearColor: string;
}

interface AppearanceModalProps {
  appearance: AppearanceData;
  onClose: () => void;
  onSave: () => void;
  onCheckboxChange: (category: keyof AppearanceData, value: string) => void;
  onColorChange: (category: string, value: string) => void;
}

export function AppearanceModal({
  appearance,
  onClose,
  onSave,
  onCheckboxChange,
  onColorChange,
}: AppearanceModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1e1b4b] text-white p-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-xl font-semibold">Appearance</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Upper Wear Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Upper Wear *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Kurta', 'Kameez', 'Dress Shirt', 'T Shirt', 'Jacket', 'Hoodie / Upper', 'Blouse', 'Other'].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={appearance.upperWear.includes(item)}
                    onChange={() => onCheckboxChange('upperWear', item)}
                    className="rounded border-gray-300"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Of The Upper Wear
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={appearance.upperWearColor}
                onChange={(e) => onColorChange('upperWearColor', e.target.value)}
              >
                <option value="">Choose Color</option>
                {['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow'].map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Over Wear Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Over Wear
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Jacket', 'Coat', 'Waist Coat', 'Over Coat', 'Pull Over', 'Burqa', 'Chaddar', 'Saree', 'Other'].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={appearance.overWear.includes(item)}
                    onChange={() => onCheckboxChange('overWear', item)}
                    className="rounded border-gray-300"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Of The Over Wear *
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={appearance.overWearColor}
                onChange={(e) => onColorChange('overWearColor', e.target.value)}
              >
                <option value="">Choose Color</option>
                {['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow'].map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Lower Wear Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Lower Wear *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Shalwar', 'Pajama', 'Tehbund', 'Jeans', 'Formal Dress Trouser', 'Shorts', 'Casual Trouser', 'Skirt', 'Lehanga', 'Sharara / Gharara', 'Peti Coat', 'Other'].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={appearance.lowerWear.includes(item)}
                    onChange={() => onCheckboxChange('lowerWear', item)}
                    className="rounded border-gray-300"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Of The Lower Wear *
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={appearance.lowerWearColor}
                onChange={(e) => onColorChange('lowerWearColor', e.target.value)}
              >
                <option value="">Choose Color</option>
                {['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow'].map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Foot Wear Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Foot Wear *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Peshawari Chappal', 'Sneakers / Joggers', 'Formal Shoes', 'Sandals', 'Slippers / Chappal', 'Hawai Chappal', 'Bare Foot', 'Other'].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={appearance.footWear.includes(item)}
                    onChange={() => onCheckboxChange('footWear', item)}
                    className="rounded border-gray-300"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Of The Foot Wear
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={appearance.footWearColor}
                onChange={(e) => onColorChange('footWearColor', e.target.value)}
              >
                <option value="">Choose Color</option>
                {['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow'].map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-lg">
          <button
            onClick={onSave}
            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Save Appearance
          </button>
        </div>
      </div>
    </div>
  );
}