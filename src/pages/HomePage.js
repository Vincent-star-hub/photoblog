import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Quote, Mail } from "lucide-react";
import vince from "../images/vince.jpg";
import beach from "../images/beach.jpg";
import self from "../images/self.jpg";
import bokeh from "../images/bokeh.jpg";
import mobiletips from "../images/mobiletips.jpg";
import logo from "../images/logo.png";

const HomePage = () => {
  const services = [
    {
      title: "Portrait Photography",
      description:
        "Natural and candid portraits that capture real emotions using smartphone photography",
      image: self,
    },
    {
      title: "Event Coverage",
      description:
        "Documenting your special occasions with a creative eye and mobile photography expertise",
      image: bokeh,
    },
    {
      title: "Mobile Photography Tips",
      description:
        "Learn how to take better photos with your smartphone through one-on-one sessions",
      image: mobiletips,
    },
  ];

  const stats = [
    {
      icon: <Star size={32} />,
      value: "50+",
      label: "Happy Clients",
    },
    {
      icon: <Star size={32} />,
      value: "100+",
      label: "Photos Delivered",
    },
    {
      icon: <Star size={32} />,
      value: "10+",
      label: "Events Covered",
    },
    {
      icon: <Star size={32} />,
      value: "4.8",
      label: "Average Rating",
    },
  ];

  const testimonials = [
    {
      text: "For a smartphone photographer, the quality of photos exceeded my expectations. Very creative angles!",
      name: "Maria Santos",
      role: "Birthday Celebrant",
    },
    {
      text: "Amazing how you captured our family moments using just a phone. The photos look so professional!",
      name: "John Cruz",
      role: "Family Portrait Client",
    },
    {
      text: "Great budget-friendly option for small events. The candid shots were beautiful!",
      name: "Ana Reyes",
      role: "Event Organizer",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${beach})`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          {/* Logo */}
          <img
            src={logo}
            alt="Smartphone Photography Logo"
            className="w-full h-full md:w-32 md:h-32"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Smartphone Photography
          </h1>
          <p className="text-xl md:text-2xl text-orange-400 mb-8 text-center max-w-2xl">
            Creating beautiful memories with the power of mobile photography
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/portfolio"
              className="bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-colors flex items-center gap-2"
            >
              See My Work
              <ChevronRight size={20} />
            </Link>
            <Link
              to="/booking"
              className="bg-white text-orange-400 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Affordable photography services using the latest smartphone
              technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-orange-400 hover:text-orange-500 font-medium flex items-center gap-1"
                  >
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src={vince}
                alt="About Me"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                My Photography Journey
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I started my photography journey with just a smartphone and a
                passion for capturing moments. While I may not have professional
                equipment, I believe that great photos come from creativity,
                timing, and understanding light. I focus on making the most of
                mobile technology to deliver beautiful photos that tell your
                story without breaking the bank.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Star className="text-orange-400" size={20} />
                  <span className="font-medium">Budget-Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-orange-400" size={20} />
                  <span className="font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-orange-400" size={20} />
                  <span className="font-medium">Creative Angles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What My Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Quote className="text-orange-400 mb-4" size={32} />
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Memories Together
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Looking for affordable photography for your special occasion? Let's
            chat about how we can capture your moments using the power of mobile
            photography.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-colors"
          >
            <Mail size={20} />
            Book a Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
