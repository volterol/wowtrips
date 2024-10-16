import React from 'react';
import './rightpanel.css';

export default function RightPanel() {
    return (
        <div className="right-panel shadow-lg">
          {/* About Us Section */}
          <section id="block-54" className="mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold">
                <strong>About us</strong>
              </h2>
            </div>
          </section>
    
          {/* Image Section */}
          <section id="block-55" className="mb-6">
            <div className="flex justify-center">
              <figure className="rounded-lg shadow-lg overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  width="480"
                  height="300"
                  src="https://wowtrips.eu/wp-content/uploads/2023/06/photo_2023-06-09_15-19-25-e1690386556873-480x300.jpg"
                  alt="Oleg and Veronica in Yucatan"
                  className="object-cover"
                />
              </figure>
            </div>
          </section>
    
          {/* About Us Text Section */}
          <section id="block-57" className="mb-6">
            <p>
              Hi, we are Oleg and Veronica and we welcome you to WowTrips.eu! Here
              we share travel tips and tricks that help you save on your vacation
              and make planning of your next trip easier.
            </p>
          </section>
    
          {/* Separator */}
          <section id="block-75" className="mb-6">
            <hr className="border-t border-gray-300" />
          </section>
    
          {/* Follow Us Section */}
          <section id="block-61" className="mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4">
                <strong>Follow us</strong>
              </h2>
              <div className="flex justify-left">
                <a
                  href="https://www.facebook.com/wowtrips.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    width="64"
                    height="64"
                    src="https://wowtrips.eu/wp-content/uploads/2023/05/facebook2-1.png"
                    alt="Facebook Logo"
                    className=""
                  />
                </a>
              </div>
            </div>
          </section>
    
          {/* Separator */}
          <section id="block-76" className="mb-6">
            <hr className="border-t border-gray-300" />
          </section>
    
          {/* Search Section */}
          <section id="block-66" className="mb-6">
            <form
              role="search"
              method="get"
              action="https://wowtrips.eu/"
              className="w-full flex items-center"
            >
              <label htmlFor="wp-block-search__input-1" className="mr-2 text-gray-700">
              </label>
              <div className="flex-grow">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="wp-block-search__input-1"
                  placeholder=""
                  type="search"
                  name="s"
                  required
                />
              </div>
              <button
                aria-label="Search"
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                type="submit"
              >
                Search
              </button>
            </form>
          </section>
    
          {/* Separator */}
          <section id="block-77" className="mb-6">
            <hr className="border-t border-gray-300" />
          </section>
    
          {/* Resources Section */}
          <section id="block-67" className="mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4">
                <strong>Resources</strong>
              </h2>
              <p>
                <a
                  href="https://www.stay22.com/allez/kayak?aid=wowtrips&campaign=wowtripseu&product=lma&habl=false&isinc=false&sid22=ab7fa48b-bb34-4dc8-ab8c-351ba3820da1&source=direct&medium=deeplink&link=https%3A%2F%2Fwww.momondo.com%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Flights
                </a>
              </p>
              <p>
                <a
                  href="https://www.stay22.com/allez/booking?aid=wowtrips&campaign=wowtripseu&product=lma&habl=false&isinc=false&sid22=ab7fa48b-bb34-4dc8-ab8c-351ba3820da1&source=direct&medium=deeplink&link=https%3A%2F%2Fwww.booking.com%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Hotels
                </a>
              </p>
              <p>
                <a
                  href="https://wowtrips.eu/go/discovercars"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find Car Rental
                </a>
              </p>
              <p>
                <a
                  href="https://compensair.tp.st/FfP3tDDh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delayed Flight?
                </a>
              </p>
              <p>
                <a
                  href="https://gettransfer.tp.st/7lHZpSAS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Transfer
                </a>
              </p>
              <p>
                <a
                  href="https://airalo.tp.st/1RI7c3B6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy eSIM
                </a>
              </p>
            </div>
          </section>
        </div>
      );
    }