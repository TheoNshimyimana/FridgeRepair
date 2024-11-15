// Services.jsx
import React, { forwardRef } from 'react'
import {
  FaNetworkWired,
  FaStream,
  FaFileInvoice,
  FaUserClock,
} from 'react-icons/fa'
import {
  FaTools,
  FaDatabase,
  FaProjectDiagram,
  FaChalkboardTeacher,
} from 'react-icons/fa'
import { AiOutlineApi, AiOutlineSafety } from 'react-icons/ai'
import { MdSettings, MdBusinessCenter } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Services = forwardRef((props, ref) => {
  return (
    <section className="bg-slate-100 pt-10">
      {/* T24 Consultancy Section */}
      <main id="services" className="pt-4" ref={ref}>
        <h1 className=" font-semibold text-custom-blue text-3xl text-center mb-10">
          Our Core Services
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 pb-14 px-5 gap-4">
          {/* T24 Training */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaChalkboardTeacher className="text-4xl text-custom-blue mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                T24 Training
              </h1>
              <Link to="/training">
                <button className="mt-6 px-4 py-1 font-bold bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* CBS Implementation */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaTools className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                CBS Implementation
              </h1>
              <Link to="/cbs_implementation">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaDatabase className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Data Engineering
              </h1>
              <Link to="/data_engineering">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Project Management */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaProjectDiagram className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Project Management
              </h1>
              <Link to="/project_management">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* T24 Integration */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <AiOutlineApi className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                T24 Integration
              </h1>
              <Link to="/integration">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Quality Insurance Services */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <AiOutlineSafety className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Quality Insurance Services
              </h1>
              <Link to="/quality_insurance">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Process Optimisation */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <MdSettings className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Process Optimisation
              </h1>
              <Link to="/process_optimisation">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Management Information Systems */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <MdBusinessCenter className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Management Information Systems
              </h1>
              <Link to="/management_information">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Products */}
      <main className="px-6 py-10" id="products">
        <h1 className="font-semibold text-custom-blue text-3xl text-center mb-10">
          Our Products
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
          {/* Product Card 1 - Afronet */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaNetworkWired className="text-3xl text-custom-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">Afronet</h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam cumque sapiente culpa non perferendis nam. Quod quo
                voluptatem ducimus numquam?
              </p>
            </div>
          </div>

          {/* Product Card 2 - Direct Daily T24 Transactions */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaStream className="text-3xl text-custom-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                Direct Daily T24 Transactions
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ipsum neque sapiente cumque quasi voluptate quam animi
                quas.
              </p>
            </div>
          </div>

          {/* Product Card 3 - E-Statements Solution */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaFileInvoice className="text-3xl text-custom-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                E-Statements Solution
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur dignissimos itaque accusamus laudantium facilis
                temporibus! Odio ab exercitationem numquam veritatis eius? Nemo
                eos omnis asperiores eius dolores minima voluptate vitae?
              </p>
            </div>
          </div>

          {/* Product Card 4 - Dormant Accounts Management */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaUserClock className="text-3xl text-custom-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                Dormant Accounts Management
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique itaque in iste fuga soluta aliquid!
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
})

Services.displayName = 'Services'

export default Services




import { useState } from 'react'
import banner from '../images/banner.jpg'
import GetAppointment from './GetAppointment'
import Bg from '../assets/bg.jpg'

function Body() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false)

  const toggleAppointmentModal = () =>
    setShowAppointmentModal(!showAppointmentModal)

  const scrollToServices = () => {
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
    const element = document.getElementById('services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div id="home">
      <section
        style={{ backgroundImage: `url(${Bg})` }}
        className="w-full h-1/2 sm:h-screen flex items-center justify-center"
      >
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Title with responsive text size */}
          <div className="flex flex-col sm:flex-row justify-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-shadow">
            <span className="text-custom-blue">AFRICODE</span>
            <span className="text-custom-yellow mx-0 sm:mx-2">CONSULTANCY</span>
            <span className="text-custom-blue">Ltd</span>
          </div>

          {/* Subtitle with responsive text size */}
          <h5 className="text-custom-blue text-xl sm:text-3xl lg:text-6xl font-extrabold uppercase mb-4 sm:mb-6 lg:mb-8 text-shadow leading-tight sm:leading-normal">
            A dynamic ICT solutions company
          </h5>

          {/* Responsive button */}
          <button
            onClick={toggleAppointmentModal}
            className="bg-custom-yellow font-semibold text-lg rounded-md px-5 py-1 text-white mt-24"
          >
            Get Started
          </button>
        </div>
        {showAppointmentModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={toggleAppointmentModal}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full h-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-4 text-slate-700 text-4xl hover:text-gray-800"
                onClick={toggleAppointmentModal}
              >
                ×
              </button>
              <GetAppointment />
            </div>
          </div>
        )}
      </section>

      {/* Home Section */}
      <main className="flex flex-col md:flex-row justify-between md:space-y-0 md:space-x-4 pt-2 gap-5 py-0 z-0 scroll-animate bg-cover bg-center">
        <div className="flex-1 sm:mt-0 lg:mt-12 md:text-left">
          <h1 className="text-custom-yellow pl-5 text-2xl md:text-3xl lg:text-4xl">
            Africode Consultancy Ltd
          </h1>
          <p className="mt-4 leading-10 text-slate-600 text-base md:text-lg text-justify mx-4 sm:mx-4">
            Africode Consultancy specializes in ICT consultancy, advisory
            services, capacity building, and training. We simplify enterprise
            technology and offer high-quality services at affordable prices. Our
            approach is centered on understanding and meeting our client's
            specific business needs, guided by strong business principles and a
            commitment to quality. We focus on integrating human capital
            development with our business culture to provide tailored solutions.
            Our experienced management and technical expertise ensure efficient
            and professional services, aligning with data-driven organizations
            to optimize business outcomes.
          </p>
          <div className="text-center md:text-left mt-10">
            <button
              onClick={scrollToServices}
              className="flex items-center ml-3 justify-center text-white bg-custom-yellow font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-yellow-600"
            >
              What We Offer
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={banner}
            alt="Banner image"
            className="w-full h-[500px] rounded-lg shadow-md"
          />
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="pt-12 px-4 pb-5 md:px-8 bg-slate-100">
        <h1 className="font-semibold text-custom-yellow text-center text-3xl md:text-2xl lg:text-3xl mb-10">
          About Us
        </h1>
        <main className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 bg-custom-green text-black p-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-sm md:text-base ">
                  To empower people and businesses through excellently tailored
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-custom-yellow text-black p-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">
                  Our Vision
                </h2>
                <p className="leading-relaxed text-sm md:text-base ">
                  To be the preferred ICT consultancy company of choice in the
                  banking and financial services industry.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-custom-black text-white p-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div>
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">
                Our Values
              </h2>
              <p className="text-sm md:text-md mb-4 font-op">
                <strong className="font-bold">Accountability: </strong>
                We accept responsibility for our actions and make business
                decisions based on experience and good judgment.
              </p>
              <p className="text-sm md:text-md mb-4">
                <strong className="font-bold">Customer Service Excellence:</strong>
                We are committed to satisfying customer needs and honoring the
                commitments we make to them.
              </p>
              <p className="text-sm md:text-md mb-4">
                <strong className="font-bold">Teamwork: </strong> We believe in
                teamwork for efficient and effective delivery of our services.
              </p>
              <p className="text-sm md:text-md mb-4">
                <strong className="font-bold">Integrity:</strong> We act with
                honesty and integrity, never compromising the truth.
              </p>
              <p className="text-sm md:text-md mb-4">
                <strong className="font-bold">Respect: </strong> We give the
                utmost respect to our stakeholders at all times.
              </p>
              <p className="text-sm md:text-md">
                <strong className="font-bold">Reliability: </strong> We deliver
                as per our promise.
              </p>
            </div>
          </div>
        </main>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-8 bg-slate-100">
        {/* Your services content here */}
      </section>
    </div>
  )
}

export default Body
