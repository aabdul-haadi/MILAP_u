// import React from 'react';
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
    socksColor: string;
    headGear: string[];
    headGearColor: string;
    hairDetails: string[];
    complexion: string[];
    eyesColor: string[];
    supportiveEquipment: string[];
    bodyWearings: string;
    belongings: string;
    languages: string;
    mentalCondition: string;
    physicalCondition: string;
    birthMark: boolean;
    birthMarkBodyPart: string;
    scars: boolean;
    scarsBodyPart: string;
    tattoo: boolean;
    tattooBodyPart: string;
    moles: boolean;
    molesBodyPart: string;
    pigmentation: boolean;
    pigmentationBodyPart: string;
  }
  
  

interface AppearanceModalProps {
  appearance: AppearanceData;
  onClose: () => void;
  onSave: () => void;
  onCheckboxChange: (category: keyof AppearanceData, value: string) => void;
  onColorChange: (category: string, value: string) => void;
}

 function AppearanceModal({
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

          {/* Color of Socks */}
<div className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">Color of Socks</label>
  <select
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
    value={appearance.socksColor}
    onChange={(e) => onColorChange('socksColor', e.target.value)}
  >
    <option value="">Choose Color</option>
    {['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow'].map((color) => (
      <option key={color} value={color}>{color}</option>
    ))}
  </select>
</div>

{/* Head Gear Section */}
<div className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">Head Gear</label>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {['Dupatta', 'Scarf', 'Cap', 'Peaked Cap', 'Prayer Cap', 'Sindhi Cap', 'Turban', 'Other'].map((item) => (
      <label key={item} className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={appearance.headGear.includes(item)}
          onChange={() => onCheckboxChange('headGear', item)}
          className="rounded border-gray-300"
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700">Color Of The Head Gear</label>
    <select
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
      value={appearance.headGearColor}
      onChange={(e) => onColorChange('headGearColor', e.target.value)}
    >
      <option value="">Choose Color</option>
      {['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow'].map((color) => (
        <option key={color} value={color}>{color}</option>
      ))}
    </select>
  </div>
</div>

{/* Hair Details Section */}
<div className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">Hair Details</label>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {['Half Bald', 'Bald', 'Normal Haircut', 'No Haircut', 'Braid', 'Bun', 'Long Hair', 'Hair Clips', 'Ponytail'].map((item) => (
      <label key={item} className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={appearance.hairDetails.includes(item)}
          onChange={() => onCheckboxChange('hairDetails', item)}
          className="rounded border-gray-300"
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
</div>

{/* Complexion Section */}
<div className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">Color Complexion</label>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {['Fair', 'Wheatish', 'Dark'].map((item) => (
      <label key={item} className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={appearance.complexion.includes(item)}
          onChange={() => onCheckboxChange('complexion', item)}
          className="rounded border-gray-300"
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
</div>

{/* Eye Color Section */}
<div className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">Eyes Color</label>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {['Black', 'Brownish Black', 'Grey', 'Blue'].map((item) => (
      <label key={item} className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={appearance.eyesColor.includes(item)}
          onChange={() => onCheckboxChange('eyesColor', item)}
          className="rounded border-gray-300"
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
</div>

{/* Supportive Equipment Section */}
<div className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">Supportive Equipment (If Any)</label>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {['Eye Glasses', 'Hearing Aid', 'Crutches'].map((item) => (
      <label key={item} className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={appearance.supportiveEquipment.includes(item)}
          onChange={() => onCheckboxChange('supportiveEquipment', item)}
          className="rounded border-gray-300"
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
</div>

{/* Body Wearings */}
<div className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">Body Wearings (If Any)</label>
  <select
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
    value={appearance.bodyWearings}
    onChange={(e) => onColorChange('bodyWearings', e.target.value)}
  >
    <option value="">Choose Wearings</option>
  </select>
</div>

{/* Unique Physical Identifiers Section */}
<div className="space-y-6">
  <h3 className="text-lg font-semibold text-gray-700">Unique Physical Identifiers (If Any)</h3>

  {/* Birth Mark */}
  <div className="flex flex-col space-y-2">
    <label className="block text-sm font-medium text-gray-700">Birth Mark</label>
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={appearance.birthMark}
        onChange={() => onCheckboxChange('birthMark', 'Birth Mark')}
        className="rounded border-gray-300"
      />
      <span>Has Birth Mark</span>
    </div>
    <input
      type="text"
      placeholder="Which Part of Body"
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm"
      value={appearance.birthMarkBodyPart}
      onChange={(e) => onColorChange('birthMarkBodyPart', e.target.value)}
    />
    <input type="file" className="mt-2 block w-full" />
  </div>

  {/* Scars/Burn Marks */}
  <div className="flex flex-col space-y-2">
    <label className="block text-sm font-medium text-gray-700">Scars / Burn Marks</label>
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={appearance.scars}
        onChange={() => onCheckboxChange('scars', 'Scars')}
        className="rounded border-gray-300"
      />
      <span>Has Scars or Burn Marks</span>
    </div>
    <input
      type="text"
      placeholder="Which Part of Body"
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm"
      value={appearance.scarsBodyPart}
      onChange={(e) => onColorChange('scarsBodyPart', e.target.value)}
    />
    <input type="file" className="mt-2 block w-full" />
  </div>

  {/* Tattoo */}
  <div className="flex flex-col space-y-2">
    <label className="block text-sm font-medium text-gray-700">Tattoo</label>
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={appearance.tattoo}
        onChange={() => onCheckboxChange('tattoo', 'Tattoo')}
        className="rounded border-gray-300"
      />
      <span>Has Tattoo</span>
    </div>
    <input
      type="text"
      placeholder="Which Part of Body"
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm"
      value={appearance.tattooBodyPart}
      onChange={(e) => onColorChange('tattooBodyPart', e.target.value)}
    />
    <input type="file" className="mt-2 block w-full" />
  </div>

  {/* Significant Moles */}
  <div className="flex flex-col space-y-2">
    <label className="block text-sm font-medium text-gray-700">Significant Moles</label>
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={appearance.moles}
        onChange={() => onCheckboxChange('moles', 'Moles')}
        className="rounded border-gray-300"
      />
      <span>Has Significant Moles</span>
    </div>
    <input
      type="text"
      placeholder="Which Part of Body"
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm"
      value={appearance.molesBodyPart}
      onChange={(e) => onColorChange('molesBodyPart', e.target.value)}
    />
    <input type="file" className="mt-2 block w-full" />
  </div>

  {/* Pigmentation */}
  <div className="flex flex-col space-y-2">
    <label className="block text-sm font-medium text-gray-700">Pigmentation</label>
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={appearance.pigmentation}
        onChange={() => onCheckboxChange('pigmentation', 'Pigmentation')}
        className="rounded border-gray-300"
      />
      <span>Has Pigmentation</span>
    </div>
    <input
      type="text"
      placeholder="Which Part of Body"
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm"
      value={appearance.pigmentationBodyPart}
      onChange={(e) => onColorChange('pigmentationBodyPart', e.target.value)}
    />
    <input type="file" className="mt-2 block w-full" />
  </div>
</div>

{/* Languages Spoken */}
<div className="flex flex-col space-y-4">
  <label className="block text-sm font-medium text-gray-700">Languages Can Speak</label>
  <select
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
    value={appearance.languages}
    onChange={(e) => onColorChange('languages', e.target.value)}
  >
    <option value="">Select Language</option>
    <option value="English">English</option>
    <option value="Spanish">Spanish</option>
    <option value="French">French</option>
    {/* Add more languages as required */}
  </select>
</div>

{/* Mental Condition */}
<div className="flex flex-col space-y-4">
  <label className="block text-sm font-medium text-gray-700">Details Of Mental Condition</label>
  <select
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
    value={appearance.mentalCondition}
    onChange={(e) => onColorChange('mentalCondition', e.target.value)}
  >
    <option value="">Choose Your Option</option>
    <option value="Normal">Normal</option>
    <option value="Anxiety">Anxiety</option>
    <option value="Depression">Depression</option>
    {/* Add more options as required */}
  </select>
</div>

{/* Physical Condition */}
<div className="flex flex-col space-y-4">
  <label className="block text-sm font-medium text-gray-700">Details For Physically Challenged Person</label>
  <select
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
    value={appearance.physicalCondition}
    onChange={(e) => onColorChange('physicalCondition', e.target.value)}
  >
    <option value="">Choose Your Option</option>
    <option value="No Disability">No Disability</option>
    <option value="Wheelchair">Wheelchair</option>
    <option value="Hearing Impairment">Hearing Impairment</option>
    {/* Add more options as required */}
  </select>
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
export default AppearanceModal;
