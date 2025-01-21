import React, { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const EventBookingForm = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    venue: "",
    selectedMenuItems: [],
    decorationtype: "",
  });

  const [needVenue, setNeedVenue] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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

  const states = ["Delhi", "UttarPradesh", "Rajasthan"];

  const cities = {
    Delhi: ["Rohini", "Saket", "Okhla"],
    UttarPradesh: ["Noida", "GreaterNoida", "Ghaziabad"],
    Rajasthan: ["Jaipur", "Alwar", "Rampur"],
  };

  const venues = [
    { id: 1, name: "Grand Ballroom", capacity: 300, price: 2000 },
    { id: 2, name: "Garden Pavilion", capacity: 150, price: 1500 },
    { id: 3, name: "Rooftop Terrace", capacity: 100, price: 1200 },
    { id: 4, name: "Crystal Hall", capacity: 200, price: 1800 },
  ];

  const menuItems = {
    vegetarianStarters: [
      { id: 1, name: "Paneer Tikka", price: 12 },
      { id: 2, name: "Vegetable Spring Rolls", price: 10 },
      { id: 3, name: "Mushroom Manchurian", price: 11 },
      { id: 4, name: "Crispy Corn", price: 9 },
      { id: 5, name: "Veg Seekh Kebab", price: 10 },
    ],
    vegetarianMain: [
      { id: 6, name: "Vegetable Biryani", price: 18 },
      { id: 7, name: "Palak Paneer", price: 16 },
      { id: 8, name: "Dal Makhani", price: 14 },
      { id: 9, name: "Mixed Vegetable Curry", price: 15 },
      { id: 10, name: "Veg Noodles", price: 14 },
    ],
    nonVegStarters: [
      { id: 11, name: "Chicken Tikka", price: 15 },
      { id: 12, name: "Fish Amritsari", price: 16 },
      { id: 13, name: "Seekh Kebab", price: 14 },
      { id: 14, name: "Tandoori Wings", price: 13 },
      { id: 15, name: "Prawn Tempura", price: 18 },
    ],
    nonVegMain: [
      { id: 16, name: "Butter Chicken", price: 20 },
      { id: 17, name: "Mutton Rogan Josh", price: 22 },
      { id: 18, name: "Fish Curry", price: 21 },
      { id: 19, name: "Chicken Biryani", price: 19 },
      { id: 20, name: "Grilled Fish", price: 23 },
    ],
    desserts: [
      { id: 21, name: "Gulab Jamun", price: 8 },
      { id: 22, name: "Rice Kheer", price: 7 },
      { id: 23, name: "Ice Cream", price: 6 },
      { id: 24, name: "Fruit Trifle", price: 8 },
    ],
    beverages: [
      { id: 25, name: "Soft Drinks Package", price: 8 },
      { id: 26, name: "Fresh Juice Selection", price: 10 },
      { id: 27, name: "Coffee & Tea Service", price: 6 },
      { id: 28, name: "Masala Chaas", price: 5 },
    ],
  };

  const handleMenuChange = (menuId) => {
    setFormData((prev) => ({
      ...prev,
      selectedMenuItems: prev.selectedMenuItems.includes(menuId)
        ? prev.selectedMenuItems.filter((id) => id !== menuId)
        : [...prev.selectedMenuItems, menuId],
    }));
  };

  const calculateTotal = () => {
    const venuePrice =
      venues.find((v) => v.name === formData.venue)?.price || 0;
    const menuTotal = formData.selectedMenuItems.reduce((sum, itemId) => {
      const allItems = [
        ...menuItems.vegetarianStarters,
        ...menuItems.vegetarianMain,
        ...menuItems.nonVegStarters,
        ...menuItems.nonVegMain,
        ...menuItems.desserts,
        ...menuItems.beverages,
      ];
      const item = allItems.find((m) => m.id === itemId);
      return sum + (item?.price || 0);
    }, 0);
    return venuePrice + menuTotal;
  };

  const renderMenuItems = (items) => (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item) => (
        <label
          key={item.id}
          className="flex items-center justify-between p-2 hover:bg-amber-100 rounded cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.selectedMenuItems.includes(item.id)}
              onChange={() => handleMenuChange(item.id)}
              className="rounded"
            />
            <div>{item.name}</div>
          </div>
          {/* <span className="font-medium">${item.price}</span> */}
        </label>
      ))}
    </div>
  );

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
              <option value="">Select Event Type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Event Date *
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={formData.eventDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    eventDate: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

           {/* Total members */}
           <div>
            <label
              htmlFor="members"
              className="block text-sm font-medium text-gray-700"
            >
              Total Members
            </label>
            <input
              type="number"
              id="members"
              className="w-full p-2 border rounded-md mt-1"
              // className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              required
            />
          </div>

           {/*Decoration Selection */}
           <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Select Decoration Design *
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={formData.decorationtype}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  decorationtype: e.target.value,
                }))
              }
              required
            >
              <option value="">Select decoration style</option>
              {decorationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Venue Required *
            </label>
            <div className="space-y-6">
              {/* Venue Need Selection */}
              <div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setNeedVenue(true)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      needVenue
                        ? "bg-amber-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setNeedVenue(false);
                      setSelectedState("");
                      setSelectedCity("");
                    }}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      !needVenue
                        ? "bg-amber-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* State Selection */}
              {needVenue && (
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select State
                  </label>
                  <select
                    id="state"
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* City Selection */}
              {needVenue && selectedState && (
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select City
                  </label>
                  <select
                    id="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a city</option>
                    {cities[selectedState].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Selection Summary */}
              {needVenue && selectedState && selectedCity && (
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                  <h2 className="text-lg font-semibold text-indigo-900 mb-2">
                    Your Selection
                  </h2>
                  <p className="text-indigo-700">
                    {selectedCity}, {selectedState}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Menu Selection */}
          <div>
            <h2 className="text-xl font-medium mb-4  text-amber-900 text-center">
              Select Menu Items
            </h2>

            {/* Vegetarian Menu */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="font-medium text-lg mb-4">Vegetarian Menu</h3>

              {/* Vegetarian Starters */}
              <div className="mb-6">
                <h4 className="text-md font-medium  mb-3 text-gray-700">
                  Starters
                </h4>
                {renderMenuItems(menuItems.vegetarianStarters)}
              </div>

              {/* Vegetarian Main Course */}
              <div>
                <h4 className="text-md font-medium mb-3 text-gray-700">
                  Main Course
                </h4>
                {renderMenuItems(menuItems.vegetarianMain)}
              </div>
            </div>

            {/* Non-Vegetarian Menu */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="font-medium text-lg mb-4">Non-Vegetarian Menu</h3>

              {/* Non-Veg Starters */}
              <div className="mb-6">
                <h4 className="text-md font-medium mb-3 text-gray-700">
                  Starters
                </h4>
                {renderMenuItems(menuItems.nonVegStarters)}
              </div>

              {/* Non-Veg Main Course */}
              <div>
                <h4 className="text-md font-medium mb-3 text-gray-700">
                  Main Course
                </h4>
                {renderMenuItems(menuItems.nonVegMain)}
              </div>
            </div>

            {/* Desserts */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="font-medium text-lg mb-3">Desserts</h3>
              {renderMenuItems(menuItems.desserts)}
            </div>

            {/* Beverages */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="font-medium text-lg mb-3">Beverages</h3>
              {renderMenuItems(menuItems.beverages)}
            </div>
          </div>
          

          {/* Total Price */}
          {/* <div className="border-t pt-4">
            <div className="flex justify-between items-center font-medium text-2xl  text-amber-900 text-center">
              <span>Total Estimated Price:</span>
              <span>${calculateTotal()}</span>
            </div>
          </div> */}


         
          

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
