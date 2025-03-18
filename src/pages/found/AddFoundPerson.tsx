import React, { useState } from "react";
import { FormLayout } from "../../components/FormLayout";
import AppearanceModal, { type AppearanceData } from "../../pages/lost/AppearanceModal";

interface Person {
  id: number;
  name: string;
  phone: string;
  relationship: string;
}
export function AddFoundPerson() {
  const [persons, setPersons] = useState<Person[]>([{ id: Date.now(), name: "", phone: "", relationship: "" }]);
  const [showAppearanceModal, setShowAppearanceModal] = useState(false);
  const [appearance, setAppearance] = useState<AppearanceData>({
    upperWear: [],
    upperWearColor: "",
    overWear: [],
    overWearColor: "",
    lowerWear: [],
    lowerWearColor: "",
    footWear: [],
    footWearColor: "",
    socksColor: "",
    headGear: [],
    headGearColor: "",
    hairDetails: [],
    complexion: [],
    eyesColor: [],
    supportiveEquipment: [],
    bodyWearings: "",
    belongings: "",
    languages: "",
    mentalCondition: "",
    physicalCondition: "",
    birthMark: false,
    birthMarkBodyPart: "",
    scars: false,
    scarsBodyPart: "",
    tattoo: false,
    tattooBodyPart: "",
    moles: false,
    molesBodyPart: "",
    pigmentation: false,
    pigmentationBodyPart: "",
  });

  // Function to add a new person dynamically
  const addPerson = () => {
    setPersons([...persons, { id: Date.now(), name: "", phone: "", relationship: "" }]);
  };

  // Function to remove a specific person
  const removePerson = (id: number) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  // Function to update input values dynamically
  const handleInputChange = (id: number, field: keyof Person, value: string) => {
    setPersons((prevPersons) =>
      prevPersons.map((person) =>
        person.id === id ? { ...person, [field]: value } : person
      )
    );
  };

  // Function to handle checkbox changes in appearance
  const handleCheckboxChange = (category: keyof AppearanceData, value: string) => {
    setAppearance(prev => ({
      ...prev,
      [category]: Array.isArray(prev[category])
        ? prev[category].includes(value)
          ? prev[category].filter(item => item !== value)
          : [...prev[category], value]
        : !prev[category] // For boolean fields like birthMark, scars, etc.
    }));
  };

  // Function to handle color selection and input fields in appearance
  const handleColorChange = (category: string, value: string) => {
    setAppearance(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <FormLayout title="Add a Found Person">
      <form className="space-y-6 max-w-8xl mx-auto w-full bg-transparent">
        {/* Upload Photos Section */}
        <div className="p-1 w-full">
          <div className="bg-blue-950 text-white text-center py-2 rounded-t-lg">
            <h2 className="text-lg font-semibold">Upload Photos (PNG, JPEG, JPG)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border border-gray-300 rounded-b-lg">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center w-full">
                <label className="text-sm font-medium text-gray-700">Photo {num} {num === 1 && "*"}</label>
                <input type="file" className="mt-1 block w-full shadow-sm p-2 border border-gray-300 rounded-md" />
              </div>
            ))}
          </div>
        </div>

        {/* Lost Person Details Section */}
        <div className="p-1 w-full">
          <div className="bg-blue-950 text-white text-center py-2 rounded-t-lg">
            <h2 className="text-lg font-semibold">Found Person Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border border-gray-300 rounded-b-lg">
            {[
              { label: "Lost Person Name *", placeholder: "Enter Lost Person Name" },
              { label: "Lost Person Alias (If Any)", placeholder: "Enter Lost Person Alias" },
              { label: "Son / Daughter / Wife / Ward Of *", placeholder: "Enter Lost Person Father / Husband Name" },
              { label: "Lost Date *", placeholder: "MM/DD/YYYY" },
              { label: "Lost Time *", placeholder: "HH : MM : AM" },
              { label: "Lost Person CNIC / Passport Number", placeholder: "12345-1234567-8" },
              { label: "Age *", placeholder: "Enter Age" },
              { label: "Mobile Phone Number", placeholder: "+92 300 1234567" },
              { label: "Lost From Where (Street Address) *", placeholder: "Enter The Street Address Where The Person Lost" },
              { label: "Lost From Where (Coordinates)", placeholder: "Enter Google Map Coordinates" },
              { label: "Residential (Street Address) *", placeholder: "Enter The Street Address Of The Residence Of Lost Person" },
              { label: "Residential Address (Coordinates)", placeholder: "Enter Google Map Coordinates" }
            ].map((field, index) => (
              <div key={index} className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">{field.label}</label>
                <input type="text" placeholder={field.placeholder} className="mt-1 block w-full shadow-sm p-2 border border-gray-300 rounded-md" />
              </div>
            ))}

            {/* Gender Dropdown */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-700">Gender *</label>
              <select className="mt-1 block w-full shadow-sm p-2 border border-gray-300 rounded-md">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* District/City Dropdown */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-700">District / City *</label>
              <select className="mt-1 block w-full shadow-sm p-2 border border-gray-300 rounded-md">
                <option>Select District / City</option>
              </select>
            </div>
          </div>
        </div>

        {/* Add Appearance Button */}
        {/* <div className="p-1 w-full">
          <button
            type="button"
            onClick={() => setShowAppearanceModal(true)}
            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Add Appearance
          </button>
        </div>

        {showAppearanceModal && (
          <AppearanceModal
            appearance={appearance}
            onClose={() => setShowAppearanceModal(false)}
            onSave={() => setShowAppearanceModal(false)}
            onCheckboxChange={handleCheckboxChange}
            onColorChange={handleColorChange}
          />
        )} */}

        {/* Reporting Person Details */}
        <div className="p-1 max-w-screen-xl mx-auto w-full mb-4">
          <div className="bg-blue-950 text-white text-center py-3 rounded-t-lg">
            <h2 className="text-xl font-semibold">Reporting Person Details (If Other Than User)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border border-gray-300 rounded-b-lg">
            {[
              { label: "Reported By Name", placeholder: "Enter Name" },
              { label: "Contact Number", placeholder: "+92 300 1234567" }
            ].map((field, index) => (
              <div key={index} className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-800">{field.label}</label>
                <input type="text" placeholder={field.placeholder} className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
              </div>
            ))}

            {/* Relationship Dropdown */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">Relationship With The Lost Person</label>
              <select className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md">
                <option>Choose Option</option>
              </select>
            </div>
          </div>
        </div>

        {/* Person To Be Notified Section */}
        <div className="p-1 max-w-screen-xl mx-auto w-full">
          <div className="bg-blue-950 text-white text-center py-3 rounded-t-lg">
            <h2 className="text-xl font-semibold">Person To Be Notified</h2>
          </div>

          <div className="p-6 border border-gray-300 rounded-b-lg space-y-6">
            {persons.map((person, index) => (
              <div key={person.id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Name", "Phone Number", "Relationship"].map((field, i) => (
                  <div key={i} className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-800">
                      {field} Of Person No. {index + 1} *
                    </label>
                    <input
                      type="text"
                      placeholder={`Enter ${field}`}
                      value={person[field.toLowerCase().replace(" ", "") as keyof Person]}
                      onChange={(e) => handleInputChange(person.id, field.toLowerCase().replace(" ", "") as keyof Person, e.target.value)}
                      className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                ))}

                {index > 0 && (
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => removePerson(person.id)}
                      className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Another Button */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={addPerson}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              <span className="mr-2 text-lg">＋</span> Add Another
            </button>
          </div>
        </div>

        {/* Police Record Information Section */}
        <div className="p-1 max-w-screen-xl mx-auto w-full">
          <div className="bg-blue-950 text-white text-center py-3 rounded-t-lg">
            <h2 className="text-xl font-semibold">Police Record Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-gray-300 rounded-b-lg">
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                First Information Report No. / Police Complaint No. / Police Case No.
              </label>
              <input type="text" placeholder="Enter FIR No. / Police Complaint No. / Police Case No." className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                Date Of First Information Report / Police Complaint / Police Case
              </label>
              <input type="text" placeholder="DD / MM / YYYY" className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                Concerned Police Station / Police Office Name
              </label>
              <input type="text" placeholder="Enter Concerned Police Station / Police Office Name" className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                Upload Picture Of First Information Report / Police Complaint / Police Case
              </label>
              <input type="file" className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                Landline No. Of Concerned Police Station / Police Office
              </label>
              <input type="text" placeholder="Enter Landline No. Of Police Station / Police Office" className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                Email Of Concerned Police Station / Police Office
              </label>
              <input type="text" placeholder="Enter Email Of Concerned Police Station / Police Office" className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                Investigating Police Officer Name
              </label>
              <input type="text" placeholder="Enter Investigating Police Officer Name" className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                Phone No. Of Investigating Police Officer
              </label>
              <input type="text" placeholder="+92 300 1234567" className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-gray-800">
                Email Of Investigating Police Officer
              </label>
              <input type="email" placeholder="xyz@example.com" className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md" />
            </div>
          </div>
        </div>

        {/* Any Other Details Section */}
        <div className="p-1 max-w-screen-xl mx-auto w-full">
          <div className="bg-blue-950 text-white text-center py-3 rounded-t-lg">
            <h2 className="text-xl font-semibold">Any Other Details</h2>
          </div>
          <div className="p-6 border border-gray-300 rounded-b-lg">
            <label className="text-sm font-medium text-gray-800">Other Details</label>
            <textarea
              rows={4}
              placeholder="Enter Any Other Detail You Want To Mention"
              className="mt-1 block w-full shadow-sm p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        <div className="p-1 w-full">
          <button
            type="button"
            onClick={() => setShowAppearanceModal(true)}
            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Add Appearance
          </button>
        </div>

        {showAppearanceModal && (
          <AppearanceModal
            appearance={appearance}
            onClose={() => setShowAppearanceModal(false)}
            onSave={() => setShowAppearanceModal(false)}
            onCheckboxChange={handleCheckboxChange}
            onColorChange={handleColorChange}
          />
        )}

        {/* Submit Button */}
        <div className="p-1 max-w-screen-xl mx-auto w-full">
          <button
            type="submit"
            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </FormLayout>
  );
}

export default AddFoundPerson;