import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { FormLayout } from '../../components/FormLayout';
import AppearanceModal from './AppearanceModal'; // ✅ Correct import

interface SearchFormData {
  name: string;
  alias: string;
  sonOf: string;
  trackingId: string;
  cnicPassport: string;
  lostDateFrom: string;
  lostDateTo: string;
  lostTimeFrom: string;
  lostTimeTo: string;
  ageMin: string;
  ageMax: string;
  gender: string;
  district: string;
  mentalCondition: string;
  physicalCondition: string;
  streetAddress: string;
  coordinates: string;
}

export function SearchLostPerson() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<SearchFormData>({
    name: '',
    alias: '',
    sonOf: '',
    trackingId: '',
    cnicPassport: '',
    lostDateFrom: '',
    lostDateTo: '',
    lostTimeFrom: '',
    lostTimeTo: '',
    ageMin: '',
    ageMax: '',
    gender: '',
    district: '',
    mentalCondition: '',
    physicalCondition: '',
    streetAddress: '',
    coordinates: ''
  });

  const [appearanceData, setAppearanceData] = useState({
    upperWear: [] as string[],
    upperWearColor: '',
    overWear: [] as string[],
    overWearColor: '',
    lowerWear: [] as string[],
    lowerWearColor: '',
    footWear: [] as string[],
    footWearColor: '',
    socksColor: '',
    headGear: [] as string[],
    headGearColor: '',
    hairDetails: [] as string[],
    complexion: [] as string[],
    eyesColor: [] as string[],
    supportiveEquipment: [] as string[],
    bodyWearings: '',
    belongings: '',
    languages: '',
    mentalCondition: '',
    physicalCondition: '',
    birthMark: false,
    birthMarkBodyPart: '',
    scars: false,
    scarsBodyPart: '',
    tattoo: false,
    tattooBodyPart: '',
    moles: false,
    molesBodyPart: '',
    pigmentation: false,
    pigmentationBodyPart: '',
  });

  const validateFile = (file: File): boolean => {
    const maxSize = 215 * 1024; // 215KB in bytes
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (!allowedTypes.includes(file.type)) {
      setUploadError('Only JPG, JPEG, and PNG files are allowed');
      return false;
    }

    if (file.size > maxSize) {
      setUploadError('File size must be less than 215KB');
      return false;
    }

    return true;
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    setUploadError('');
    const validFiles: File[] = [];

    Array.from(files).forEach(file => {
      if (validateFile(file)) {
        validFiles.push(file);
      }
    });

    if (validFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...validFiles]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddAppearance = () => {
    setIsModalOpen(true);
  };

  const handleSaveAppearance = () => {
    console.log('Appearance Data:', appearanceData);
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (category: keyof typeof appearanceData, value: string) => {
    setAppearanceData(prev => {
      if (Array.isArray(prev[category])) {
        const arr = prev[category] as string[];
        return {
          ...prev,
          [category]: arr.includes(value)
            ? arr.filter(item => item !== value)
            : [...arr, value],
        };
      }
      return prev;
    });
  };

 const handleColorChange = (category: string, value: string) => {
  if (category in appearanceData) {
    setAppearanceData(prev => ({
      ...prev,
      [category]: value,
    }));
  }
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Appearance Data:', appearanceData);
    console.log('Uploaded Files:', uploadedFiles);
  };

  return (
    <FormLayout title="Search Among Lost">
<div className="font-bold text-black">Advance Search</div>

      <div className="text-gray-600 mb-8">See Results Based On Your Filters</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Filters</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Alias (If Any)</label>
                  <input 
                    type="text"
                    name="alias"
                    value={formData.alias}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter Alias"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Tracking ID</label>
                  <input 
                    type="text"
                    name="trackingId"
                    value={formData.trackingId}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter Tracking ID"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">CNIC / Passport Number</label>
                  <input 
                    type="text"
                    name="cnicPassport"
                    value={formData.cnicPassport}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="12345-1234567-8"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Son / Daughter / Wife Of</label>
                  <input 
                    type="text"
                    name="sonOf"
                    value={formData.sonOf}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter Father / Husband Name"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Lost After The Date</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text"
                      name="lostDateFrom"
                      value={formData.lostDateFrom}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="DD / MM / YYYY"
                    />
                    <input 
                      type="text"
                      name="lostDateTo"
                      value={formData.lostDateTo}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="DD / MM / YYYY"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Lost After The Time</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text"
                      name="lostTimeFrom"
                      value={formData.lostTimeFrom}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="HH : MM : AM"
                    />
                    <input 
                      type="text"
                      name="lostTimeTo"
                      value={formData.lostTimeTo}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="HH : MM : AM"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text"
                      name="ageMin"
                      value={formData.ageMin}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="Min Age"
                    />
                    <input 
                      type="text"
                      name="ageMax"
                      value={formData.ageMax}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="Max Age"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">District / City</label>
                  <select 
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="">Select District / City</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Mental Condition</label>
                  <select 
                    name="mentalCondition"
                    value={formData.mentalCondition}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="">Choose Option</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Details For Physically Challenged Person (If Any)
                  </label>
                  <select 
                    name="physicalCondition"
                    value={formData.physicalCondition}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="">Choose Option</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Lost From Where (Street Address) *
                  </label>
                  <input 
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter The Street Address From Where The Person Lost"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Found From Where (Coordinates)
                  </label>
                  <input 
                    type="text"
                    name="coordinates"
                    value={formData.coordinates}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter Google Map Coordinates"
                  />
                </div>
              </div>

              <button 
                type="button"
                onClick={handleAddAppearance}
                className="w-full py-3 px-4 border-2 border-indigo-900 rounded-lg text-indigo-900 hover:bg-indigo-900 hover:text-white transition-all duration-300 font-medium"
              >
                Add Appearance
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-center text-gray-600">
              Upload Pictures Of The Person To Search By Facial Recognition
            </h3>
            <div
              className={`border-2 border-dashed ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} rounded-lg p-8 text-center transition-colors duration-200`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                className="hidden"
                accept="image/jpeg,image/png,image/jpg"
                multiple
              />
              <p className="text-gray-500">Drag & Drop Files Here Or</p>
              <button 
                type="button"
                onClick={handleBrowseClick}
                className="mt-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors duration-200"
              >
                Browse
              </button>
              {uploadError && (
                <p className="text-red-500 text-sm mt-2">{uploadError}</p>
              )}
              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
                  <ul className="mt-2 space-y-1">
                    {uploadedFiles.map((file, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {file.name} ({(file.size / 1024).toFixed(1)}KB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <AppearanceModal
          appearance={appearanceData}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveAppearance}
          onCheckboxChange={handleCheckboxChange}
          onColorChange={handleColorChange}
        />
      )}
    </FormLayout>
  );
}

export default SearchLostPerson;