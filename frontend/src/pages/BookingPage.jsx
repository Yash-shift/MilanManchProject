import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Utensils,
  User,
  Phone,
  Flower,
  Ticket,
} from "lucide-react";

const EventBookingForm = () => {
  const [formData, setFormData] = useState({
    groomName: "",
    brideName: "",
    contactPersonName: "",
    contactNumber: "",
    eventType: "",
    eventDate: "",

    state: "",
    city: "",
    menuType: "",
    totalMembers: "",
    stageDecoration: "",
    selectedMenuItems: [],
    selectedItems: {
      starters: [],
      mainCourse: [],
      beverages: [],
      dessert: [],
    },
    decorationtype: "",
  });

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

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity(""); // Reset city when state changes
  };

  const decorationTypes = [
    "Floral",
    "Vintage",
    "Luxury",
    "Traditional",
    "Fairy_lights",
    "Modern",
    "Minimalist",
    "Royal",
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

  const eventTypes = [
    "Wedding Reception",
    "Birthday Party",

    "Anniversary",
    "Graduation Party",
    "Reunioun/Farewell",
    "Promotion Celebration",
    "Retirement Ceremony",
    "Engagement Ceremony",
    "Roka Ceremony",
    "HouseWarming",
    "Baby Showers",
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
  const serviceCategories = [
    {
      icon: <Ticket className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Inclusive services",
      features: [
        "Printed invitation cards.",
        "Capture moments.",
        "All Royal decoration and arrangements.",

        "All fun and entertainment",
      ],
    },
  ];

  const handleMenuChange = (menuId) => {
    setFormData((prev) => ({
      ...prev,
      selectedMenuItems: prev.selectedMenuItems.includes(menuId)
        ? prev.selectedMenuItems.filter((id) => id !== menuId)
        : [...prev.selectedMenuItems, menuId],
    }));
  };

  return (
    <div className="w-full mx-auto p-6 bg-amber-50">
      <div className="max-w-3xl w-full rounded-sm hover:shadow-lg mx-auto px-4 bg-white">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-amber-900 text-center ">
            Book Your Event
          </h1>
        </div>
        <form className="p-6 space-y-6">
          {/* Event Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Event Type *
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={formData.eventType}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, eventType: e.target.value }))
              }
              required
            >
              <option className="text-gray-700 text-sm" value="">
                Select Event Type
              </option>
              {eventTypes.map((type) => (
                <option className="text-gray-700" key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Couple Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
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

          {/* Invitation Card */}
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Invitation Cards Required *
            </label>
            <select
              className="w-full p-2 border rounded-md"
              //   value={formData.eventType}
              //   onChange={(e) => setFormData(prev => ({...prev, eventType: e.target.value}))}
              required
            >
              <option value="">Select </option>

              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Venue Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
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

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={
                !formData.eventType || !formData.eventDate || !formData.venue
              }
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventBookingForm;
