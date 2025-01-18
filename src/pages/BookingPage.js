import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Camera,
  Mail,
  Phone,
  Send,
  MapPin,
} from "lucide-react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    package: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const packages = [
    "Simple Shoot (₱999)",
    "Event Coverage (₱2,499)",
    "Half-Day Package (₱3,999)",
    "Custom Package",
  ];

  return (
    <div className="">
      <div className="relative pb-20 pt-32 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Book Your Photo Session
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Let's capture your special moments together
          </p>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg">
              <Phone className="text-orange-400" size={24} />
              <div>
                <h3 className="font-bold">Contact Number</h3>
                <p className="text-gray-600">+63 912 345 6789</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg">
              <Mail className="text-orange-400" size={24} />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-600">sampleemail@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg">
              <Clock className="text-orange-400" size={24} />
              <div>
                <h3 className="font-bold">Available Hours</h3>
                <p className="text-gray-600">8:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Phone/Mobile Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="e.g., 0912 345 6789"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Package Type *
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                >
                  <option value="">Select a package</option>
                  {packages.map((pkg, index) => (
                    <option key={index} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Event Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Start Time *</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">
                  Event Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Enter the complete address of your event"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                placeholder="Tell me more about your event (type of event, number of people, special requests, etc.)"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-orange-400 text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors flex items-center gap-2"
              >
                <Send size={20} />
                Book Now
              </button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              What Happens After Booking?
            </h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Camera className="text-orange-400 flex-shrink-0" size={20} />
                I'll confirm your booking within 12 hours
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-orange-400 flex-shrink-0" size={20} />
                You'll receive payment details for the 50% reservation fee
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="text-orange-400 flex-shrink-0" size={20} />
                We can chat about your specific photo requirements and
                preferences
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="text-orange-400 flex-shrink-0" size={20} />
                I'll help you choose the best spots for photos at your location
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
