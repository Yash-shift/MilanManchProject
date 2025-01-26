import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Utensils,
  Heart,
  Music,
  Camera,
  Gift,
  Phone,
  User,
  Flower,
  Ticket,
  Building2
} from "lucide-react";

// Enhanced menu options
const menuOptions = {
  veg: {
    starters: [
      "Paneer Tikka",
      "Veg Spring Rolls",
      "Mushroom Manchurian",
      "Corn Cheese Balls",
      "Crispy Vegetables",
      "Hara Bhara Kebab",
    ],
    mainCourse: [
      "Dal Makhani",
      "Paneer Butter Masala",
      "Veg Biryani",
      "Palak Paneer",
      "Mixed Veg Curry",
      "Malai Kofta",
      "Jeera Rice",
      "Butter Naan",
      "Garlic Roti",
    ],
    beverages: [
      "Fresh Lime Soda",
      "Masala Chai",
      "Coffee",
      "Mango Lassi",
      "Buttermilk",
      "Fresh Fruit Juice",
      "Virgin Mojito",
    ],
    dessert: [
      "Gulab Jamun",
      "Rasmalai",
      "Ice Cream",
      "Gajar Ka Halwa",
      "Kheer",
      "Jalebi",
      "Kulfi",
    ],
  },
  Nonveg: {
    starters: [
      "Chicken pop",
      "Veg Spring Rolls",
      "Mushroom Manchurian",
      "Corn Cheese Balls",
      "Crispy Vegetables",
      "Hara Bhara Kebab",
    ],
    mainCourse: [
      "Dal Makhani",
      "Paneer Butter Masala",
      "Veg Biryani",
      "Palak Paneer",
      "Mixed Veg Curry",
      "Malai Kofta",
      "Jeera Rice",
      "Butter Naan",
      "Garlic Roti",
    ],
    beverages: [
      "Fresh Lime Soda",
      "Masala Chai",
      "Coffee",
      "Mango Lassi",
      "Buttermilk",
      "Fresh Fruit Juice",
      "Virgin Mojito",
    ],
    dessert: [
      "Gulab Jamun",
      "Rasmalai",
      "Ice Cream",
      "Gajar Ka Halwa",
      "Kheer",
      "Jalebi",
      "Kulfi",
    ],
  },
};

const serviceCategories = [
  {
    icon: <Ticket className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Inclusive services",
    features: [
      "Printed invitation cards for bride and groom both.",
      "Provide invitation video.",
      "All Royal decoration and arrangements.",
      "Home decoration for bride and groom",
      "All fun and entertainment",
      "Barat Welcome",
      "Couple car decoration",
      "Bride welcome decoration at brides house",
    ],
  },
];

const locations = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  Delhi: [
    "New Delhi",
    "North Delhi",
    "South Delhi",
    "East Delhi",
    "West Delhi",
  ],
};

const additionalServices = [
  { icon: <Music className="w-5 h-5" />, name: "DJ & Music" },
  { icon: <Camera className="w-5 h-5" />, name: "Photography" },
  { icon: <Gift className="w-5 h-5" />, name: "Gift Registry" },
];

const stageDecorations = [
  "Floral",
  "Vintage",
  "Luxury",
  "Traditional",
  "Fairy_lights",
  "Modern",
  "Minimalist",
  "Royal",
];

function Sameday() {
  const [formData, setFormData] = useState({
    groomName: "",
    brideName: "",
    contactPersonName: "",
    contactNumber: "",
    weddingDate: "",
    state: "",
    city: "",
    menuType: "",
    totalMembers: "",
    stageDecoration: "",
    selectedItems: {
      starters: [],
      mainCourse: [],
      beverages: [],
      dessert: [],
    },
    additionalServices: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMenuSelection = (category, item) => {
    setFormData((prev) => ({
      ...prev,
      selectedItems: {
        ...prev.selectedItems,
        [category]: prev.selectedItems[category].includes(item)
          ? prev.selectedItems[category].filter((i) => i !== item)
          : [...prev.selectedItems[category], item],
      },
    }));
  };

  const handleServiceSelection = (service) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-2xl">
          <div className="text-center mb-8 animate-fade-in">
            <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl font-bold text-amber-900 mb-2">
              Same Day Event Planning
            </h1>
            <p className="text-amber-600">
              Create your perfect wedding celebration
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Couple Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Groom's Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="groomName"
                    value={formData.groomName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter groom's name"
                    required
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bride's Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="brideName"
                    value={formData.brideName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter bride's name"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Groom Side Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Groom Side Contact Person Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter contact person's name"
                    required
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter contact number"
                    required
                  />
                </div>
              </div>
            </div>

            {/* bride Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bride Side Contact Person Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter contact person's name"
                    required
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter contact number"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Wedding Date */}
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wedding Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

           

           {/* state and venue selction */}

           <div className="max-w-full mx-auto">
              <div className="bg-white shadow rounded-lg p-6">
                {/* Venue Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="transform transition-all duration-300 hover:scale-[1.01]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Your State
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select State</option>
                        {Object.keys(locations).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="transform transition-all duration-300 hover:scale-[1.01]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                      disabled={!formData.state}
                    >
                      <option value="">Select City</option>
                      {formData.state &&
                        locations[formData.state].map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="transform transition-all duration-300 hover:scale-[1.01] md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Venue Preference
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select
                        name="venueType"
                        value={formData.venueType}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                        disabled={!formData.city}
                      >
                        <option value="">Select Venue Type</option>
                        <option value="hotel">Hotel Banquet Hall</option>
                        <option value="conference">Conference Center</option>
                        <option value="garden">Garden/Outdoor Venue</option>
                        <option value="restaurant">
                          Restaurant Private Room
                        </option>
                        <option value="theater">Theater/Auditorium</option>
                        <option value="rooftop">Rooftop Venue</option>
                        <option value="museum">Museum/Gallery Space</option>
                        <option value="beach">Beach Resort</option>
                        <option value="historic">Historic Building</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             {/* Stage Decoration */}
             <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stage Decoration Theme
              </label>
              <div className="relative">
                <Flower className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  name="stageDecoration"
                  value={formData.stageDecoration}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select Stage Decoration</option>
                  {stageDecorations.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Menu Type */}
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Menu Preference
              </label>
              <div className="relative">
                <Utensils className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  name="menuType"
                  value={formData.menuType}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select Menu Type</option>
                  <option value="veg">Vegetarian</option>
                  <option value="nonveg">Non-Vegetarian</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>

            {/* Menu Selection for Veg */}
            {formData.menuType === "veg" && (
              <div className="space-y-6 animate-fade-in">
                {Object.entries(menuOptions.veg).map(([category, items]) => (
                  <div
                    key={category}
                    className="border-t pt-4 transform transition-all duration-300 hover:scale-[1.01]"
                  >
                    <h3 className="text-lg font-medium text-gray-800 mb-3 capitalize">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <label
                          key={item}
                          className="flex items-center space-x-2 text-sm group cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.selectedItems[category].includes(
                              item
                            )}
                            onChange={() => handleMenuSelection(category, item)}
                            className="rounded text-purple-600 focus:ring-purple-500 transition-all duration-300"
                          />
                          <span className="group-hover:text-purple-600 transition-colors duration-300">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Menu for NOn veg */}
            {formData.menuType === "nonveg" && (
              <div className="space-y-6 animate-fade-in">
                {Object.entries(menuOptions.Nonveg).map(([category, items]) => (
                  <div
                    key={category}
                    className="border-t pt-4 transform transition-all duration-300 hover:scale-[1.01]"
                  >
                    <h3 className="text-lg font-medium text-gray-800 mb-3 capitalize">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <label
                          key={item}
                          className="flex items-center space-x-2 text-sm group cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.selectedItems[category].includes(
                              item
                            )}
                            onChange={() => handleMenuSelection(category, item)}
                            className="rounded text-purple-600 focus:ring-purple-500 transition-all duration-300"
                          />
                          <span className="group-hover:text-purple-600 transition-colors duration-300">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total Members */}
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="totalMembers"
                  value={formData.totalMembers}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter number of guests"
                  required
                />
              </div>
            </div>
            {/*Included Services */}

            <div className="">
              <div className="container mx-auto justify-center">
                <div className=" gap-6">
                  {serviceCategories.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* {service.icon} */}
                      <h3 className="text-lg font-medium text-gray-700 mb-1">
                        {service.title}
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-700 text-sm "
                          >
                            <svg
                              className="w-4 h-4 mr-2 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-4 px-6 rounded-lg hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              Submit Event Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sameday;
