import React, { useState, useEffect } from "react";
import bgc from "../images/bgc.jpg";
import bgc2 from "../images/bgc2.jpg";
import venice from "../images/venice.jpg";
import wawa from "../images/wawa.jpg";
import wawa2 from "../images/wawa2.jpg";
import wawa3 from "../images/wawa3.jpg";
import ortigas from "../images/ortigas.jpg";
import dolomite from "../images/dolomite.jpg";
import stjude from "../images/stjude.jpg";
import scps from "../images/scps.jpg";
import dog from "../images/dog.jpg";
import bgc3 from "../images/bgc3.jpg";
import tower from "../images/tower.jpg";
import carabao from "../images/carabao.jpg";
import pilipinas from "../images/pilipinas.jpg";
import cathedral from "../images/cathedral-basilica.jpg";
import cathedral2 from "../images/cathedral-basilica2.jpg";
import bgc4 from "../images/bgc4.jpg";
import fishingmen from "../images/fishingmen.jpg";
import sm from "../images/sm.jpg";
import bgc5 from "../images/bgc5.jpg";
import cat from "../images/cat.jpg";
import cat2 from "../images/cat2.jpg";
import cow from "../images/cow.jpg";
import up from "../images/up.jpg";
import up2 from "../images/up2.jpg";
import up3 from "../images/up3.jpg";
import ust from "../images/ust.jpg";
import ust2 from "../images/ust2.jpg";
import farmersbuilding from "../images/farmersbuilding.jpg";
import araneta from "../images/araneta.jpg";
import farmerschurch from "../images/farmerschurch.jpg";

const PortfolioGallery = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Mountain Nature",
      category: "mountain",
      image: wawa,
      description: "Beautiful Nature Photoshoot",
    },
    {
      id: 2,
      title: "Mountain Nature",
      category: "mountain",
      image: wawa2,
      description: "Beautiful Mountain Photoshoot",
    },
    {
      id: 3,
      title: "Mountain Nature",
      category: "mountain",
      image: wawa3,
      description: "Beautiful Wawa Dam Photoshoot",
    },
    {
      id: 4,
      title: "Urban Photography",
      category: "urban",
      image: bgc,
      description: "Bonifacio Global City Photoshoot",
    },
    {
      id: 5,
      title: "Urban Photography",
      category: "urban",
      image: bgc2,
      description: "Bonifacio Global City Photoshoot",
    },
    {
      id: 6,
      title: "Urban Photography",
      category: "urban",
      image: bgc3,
      description: "Bonifacio Global City Photoshoot",
    },
    {
      id: 7,
      title: "Urban Photography",
      category: "urban",
      image: bgc4,
      description: "Bonifacio Global City Photoshoot",
    },
    {
      id: 8,
      title: "Urban Photography",
      category: "urban",
      image: tower,
      description: "Somewhere in Mckinley Photoshoot",
    },
    {
      id: 9,
      title: "Urban Photography",
      category: "urban",
      image: bgc5,
      description: "Bonifacio Global City Photoshoot",
    },
    {
      id: 10,
      title: "Urban Photography",
      category: "urban",
      image: carabao,
      description: "Somewhere in Manila Photoshoot",
    },
    {
      id: 11,
      title: "Urban Photography",
      category: "urban",
      image: pilipinas,
      description: "Somewhere in Manila Photoshoot",
    },
    {
      id: 12,
      title: "Urban Photography",
      category: "urban",
      image: fishingmen,
      description: "Somewhere in Manila Photoshoot",
    },
    {
      id: 13,
      title: "Urban Photography",
      category: "urban",
      image: venice,
      description: "Venice Grand Canal Photoshoot",
    },
    {
      id: 14,
      title: "Urban Photography",
      category: "urban",
      image: dolomite,
      description: "Dolomite Photoshoot",
    },
    {
      id: 15,
      title: "Urban Photography",
      category: "urban",
      image: ortigas,
      description: "Ortigas Building Photoshoot",
    },
    {
      id: 16,
      title: "Urban Photography",
      category: "urban",
      image: sm,
      description: "SM City San Mateo Photoshoot",
    },
    {
      id: 17,
      title: "Urban Photography",
      category: "urban",
      image: farmersbuilding,
      description: "Farmers Building Photoshoot",
    },
    {
      id: 18,
      title: "Urban Photography",
      category: "urban",
      image: farmerschurch,
      description: "Farmers Church Photoshoot",
    },
    {
      id: 19,
      title: "Urban Photography",
      category: "urban",
      image: araneta,
      description: "Farmers Araneta City Mall Photoshoot",
    },
    {
      id: 20,
      title: "Animal Portrait",
      category: "Animals",
      image: dog,
      description: "Dog Photoshoot",
    },
    {
      id: 21,
      title: "Animal Portrait",
      category: "Animals",
      image: cat,
      description: "Cat Photoshoot",
    },
    {
      id: 22,
      title: "Animal Portrait",
      category: "Animals",
      image: cat2,
      description: "Cat Photoshoot",
    },
    {
      id: 23,
      title: "Animal Portrait",
      category: "Animals",
      image: cow,
      description: "Cow Photoshoot",
    },
    {
      id: 24,
      title: "Church Photography",
      category: "church",
      image: stjude,
      description: "St. Jude Thaddeus Church Photoshoot",
    },
    {
      id: 25,
      title: "Church Photography",
      category: "church",
      image: scps,
      description: "Sta. Cecilia Parish Church Photoshoot",
    },
    {
      id: 26,
      title: "College's Campus Photography",
      category: "campus",
      image: up,
      description: "UP Campus Photoshoot",
    },
    {
      id: 27,
      title: "College's Campus Photography",
      category: "campus",
      image: up2,
      description: "UP Campus Photoshoot",
    },
    {
      id: 28,
      title: "College's Campus Photography",
      category: "campus",
      image: up3,
      description: "UP Campus Photoshoot",
    },
    {
      id: 29,
      title: "College's Campus Photography",
      category: "campus",
      image: ust,
      description: "UST Campus Photoshoot",
    },
    {
      id: 30,
      title: "College's Campus Photography",
      category: "campus",
      image: ust2,
      description: "UST Campus Photoshoot",
    },
    {
      id: 31,
      title: "Church Photography",
      category: "church",
      image: cathedral,
      description: "Manila Metropolitan Cathedral-Basilica Photoshoot",
    },
    {
      id: 32,
      title: "Church Photography",
      category: "church",
      image: cathedral2,
      description: "Manila Metropolitan Cathedral-Basilica Photoshoot",
    },
  ];

  const categories = [
    "all",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewedImage, setViewedImage] = useState(null); // State for the modal
  const [showScrollButton, setShowScrollButton] = useState(false); // State for button visibility

  // Group items by category
  const groupedItems = portfolioItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Track scroll position to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        // Change this value to control when to show the button
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    useEffect(() => {
      if (viewedImage) {
        document.body.style.overflow = "hidden"; // Prevent scrolling
      } else {
        document.body.style.overflow = ""; // Enable scrolling
      }

      return () => {
        document.body.style.overflow = "";
      };
    }, [viewedImage]);

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative pb-12 pt-32 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My Portfolio
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Explore my collection of memorable moments across various
            photography styles
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        {/* Category Filter */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-400 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="space-y-12">
            {selectedCategory === "all" ? (
              // Show all categories
              Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 capitalize">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => setViewedImage(item)} // Set the modal image
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                            <h3 className="text-2xl font-bold mb-2">
                              {item.title}
                            </h3>
                            <p className="text-center">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              // Show selected category only
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.category === selectedCategory)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                      onClick={() => setViewedImage(item)} // Set the modal image
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                          <h3 className="text-2xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-center">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {viewedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setViewedImage(null)} // Close the modal on click
        >
          <div className="relative max-w-4xl mx-auto">
            <button
              className="absolute top-2 right-2 bg-white text-black px-4 py-2 rounded-full font-bold"
              onClick={() => setViewedImage(null)}
            >
              X
            </button>
            <img
              src={viewedImage.image}
              alt={viewedImage.title}
              className="max-h-[80vh] max-w-full rounded-lg shadow-lg"
            />
            <div className="text-white text-center mt-4">
              <h2 className="text-2xl font-bold">{viewedImage.title}</h2>
              <p>{viewedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-orange-400 rounded-full text-white shadow-lg hover:bg-orange-500 transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default PortfolioGallery;
