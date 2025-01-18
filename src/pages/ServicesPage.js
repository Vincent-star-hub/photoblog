import React from "react";
import { ArrowRight } from "lucide-react";
import self from "../images/self.jpg";
import araneta2 from "../images/araneta2.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Services Section */}
      <div className="">
        <section className="relative pb-20 pt-32 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-2">Services</h2>
            <p className="text-center text-gray-300 mb-12">
              All services include much love and deep devotion to my job. While
              I do what I love, your satisfaction is my number one priority.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-400">
                  PERSONAL SESSION
                </h3>
                <p className="text-gray-300 mb-4">
                  I have endless crazy ideas to turn your dark dull photos into
                  artworks. I ensure you will have an unbelievable experience
                  and mind-blowing photo session with me.
                </p>
                <a
                  href="#"
                  className="text-orange-400 flex items-center hover:text-orange-300"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-400">
                  HALF DAY EVENT
                </h3>
                <p className="text-gray-300 mb-4">
                  Taking into consideration your party theme you can invite
                  either a singer, a band or a DJ to assure your people the best
                  musical experience ever.
                </p>
                <a
                  href="#"
                  className="text-orange-400 flex items-center hover:text-orange-300"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-400">
                  WHOLE DAY EVENT
                </h3>
                <p className="text-gray-300 mb-4">
                  Once you have selected the place and the music you need there
                  is nothing left to do but to call your friends! Sounds good
                  isn't it?
                </p>
                <a
                  href="#"
                  className="text-orange-400 flex items-center hover:text-orange-300"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              Why people choose me
            </h2>
            <p className="text-center text-gray-600 mb-12">
              A few words on why choose me and my services. Learn more by
              checking the reviews by my customers.
            </p>

            <div className="flex gap-4 justify-center mb-12">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                LET'S TALK!
              </button>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                LEARN MORE
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Experienced & proficient
                </h3>
                <p className="text-gray-600">
                  I have honed my skills over the years and continue to strive
                  for excellence in every project. My passion for photography
                  keeps me improving and growing in the industry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Creative & innovative
                </h3>
                <p className="text-gray-600">
                  Each photo session is a unique opportunity to showcase
                  creativity. I focus on providing a fresh and innovative
                  experience for every client, making sure the results are
                  memorable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Trustworthy & responsible
                </h3>
                <p className="text-gray-600">
                  I do guarantee that the money you have paid will serve its
                  purposes and the results will exceed your expectations. Your
                  trust is the key to my job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best of All Times Section */}
        <section className="py-20 bg-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              Best of all times
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Freezing the moment unveils the true beauty of the world.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-lg">
                <img
                  src={self}
                  alt="Photography showcase 1"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="bg-white p-4 rounded-lg">
                <img
                  src={araneta2}
                  alt="Photography showcase 2"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              Our customers
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Our clients' opinion has always been on the top. We appreciate
              their kindness and loyalty.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4 italic">
                  "I was amazed at the quality of Vincent. I STRONGLY recommend
                  Vincent to EVERYONE interested in running a successful online
                  business!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/40/40"
                    alt="Jessica"
                    className="rounded-full mr-3"
                  />
                  <span className="font-semibold">Jessica Clark</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4 italic">
                  "Thank you for making it pleasant and most of all hassle free!
                  It really saves me time and effort. I like Vincent more and
                  more each day because I'm having a great experience with him."
                </p>
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/40/40"
                    alt="David"
                    className="rounded-full mr-3"
                  />
                  <span className="font-semibold">David Watson</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Book your exceptional photo session now.
            </h2>
            <p className="text-gray-300 mb-8">
              Let's make your special moments immortal.
            </p>
            <div className="max-w-6xl mx-auto px-4 text-center">
              <Link
                to="/booking"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 inline-block"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
