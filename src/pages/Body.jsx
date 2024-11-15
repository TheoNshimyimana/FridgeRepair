// import { useState } from 'react'
import banner from "../images/banner.jpg";
import Bg from "../assets/bg.webp";
import Logo from "../assets/loggo.png";

function Body() {
  const scrollToServices = () => {
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section id="home">
        <section
          style={{ backgroundImage: `url(${Bg})` }}
          className="w-full h-[400px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 bg-cover bg-center"
        >
          <div className="text-white font-bold text-center bg-transparent">
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              KIGALI REFRIGERATION SYSTEMS REPAIR AND MOTOR REWINDING COMPANY
              Ltd
            </h1>
          </div>
        </section>

        {/* Home Section */}
        <main className="flex flex-col md:flex-row bg-slate-100 justify-between md:space-y-0 md:space-x-4 pt-0 gap-5 py-0 z-0 scroll-animate bg-cover bg-center">
          <div className="flex-1 sm:mt-0 lg:mt-12 md:text-left pl-6">
            <h1 className="text-custom-blue  text-2xl md:text-3xl pl-4 lg:text-4xl font-semibold">
              KIGALI REFRIGRATION SYSTEMS REPAIR AND MOTOR REWINDING COMPANY Ltd
            </h1>
            <p className="mt-4 leading-10 text-slate-600 text-base md:text-lg text-justify mx-4 sm:mx-4 font-semibold">
              Kigali Refrigeration Systems Repair and Motor Rewinding Ltd. was
              founded in February 2010 in Kigali with the mission to provide
              high-quality, reliable, and affordable repair and maintenance
              services for refrigeration systems and electric motors. Our team
              of highly skilled technicians is dedicated to delivering expert
              solutions, ensuring that your equipment operates at peak
              performance and longevity. With years of experience in the
              industry, we have built a reputation for offering fast, efficient,
              and cost-effective services for both residential and commercial
              clients in Kigali and beyond. From repairing refrigerators and
              freezers to rewinding electric motors, we pride ourselves on
              delivering exceptional service and innovative solutions. Whether
              you need a quick fix for your fridge, a comprehensive overhaul of
              your refrigeration system, or expert rewinding services for your
              electric motors, our team of skilled technicians is here to help.
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
              className="w-full h-[500px] rounded-lg object-cover shadow-md"
            />
          </div>
        </main>
      </section>

      {/* About Section */}
      <section id="about" className="pt-14 px-4 pb-16 md:px-8 bg-slate-100">
        <h1 className=" font-semibold text-custom-blue text-center text-3xl md:text-2xl lg:text-3xl mb-10">
          About Us
        </h1>
        <main className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 bg-custom-green text-black pt-10 px-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-bold text-lg md:text-2xl lg:text-3xl mb-4">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-md md:text-lg font-semibold ">
                  Our mission is to provide our clients with the highest quality
                  refrigeration system repairs and motor rewinding services
                  while maintaining a focus on customer satisfaction, safety,
                  and affordability. We strive to exceed customer expectations
                  by offering reliable solutions, professional service, and
                  excellent aftercare, helping our clients achieve optimal
                  performance from their equipment.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-custom-yellow text-black pt-10 px-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
                  Our Vision
                </h2>
                <p className="leading-relaxed text-md md:text-lg font-semibold ">
                  To be the leading provider of refrigeration system repair and
                  motor rewinding services in Rwanda, known for our expertise,
                  reliability, and commitment to excellence. We aim to build
                  lasting relationships with our clients by consistently
                  delivering high-quality solutions, expanding our reach, and
                  being a trusted partner for all refrigeration and motor needs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-custom-black text-white pb-14 pt-10 px-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div>
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
                Our Values
              </h2>
              <p className="text-md md:text-md mb-4 ">
                <strong className="font-extrabold text-custom-blue">
                  Integrity:
                </strong>
                We believe in doing the right thing, even when no one is
                looking. Our team operates with honesty and transparency,
                ensuring clear communication with our clients at every step.
              </p>
              <p className="text-md md:text-md mb-4">
                <strong className="font-extrabold text-custom-blue">
                  Customer Service Excellence:
                </strong>
                We are committed to satisfying customer needs and honoring the
                commitments we make to them.
              </p>
              <p className="text-md md:text-md mb-4">
                <strong className="font-extrabold text-custom-blue">
                  Teamwork:
                </strong>
                We believe in teamwork for efficient and effective delivery of
                our services.
              </p>
              <p className="text-md md:text-md mb-4">
                <strong className="font-extrabold text-custom-blue">
                  Customer-Centricity:
                </strong>
                We put our clients at the center of everything we do. Our goal
                is to understand your needs, solve your problems, and ensure
                your satisfaction with every service.
              </p>
              <p className="text-md md:text-md mb-4">
                <strong className="font-extrabold text-custom-blue">
                  Respect:
                </strong>
                We give the almost respect to our client at all times.
              </p>
              <p className="text-md md:text-md">
                <strong className="font-extrabold text-custom-blue">
                  Reliability:
                </strong>
                We deliver as per our promise.
              </p>
            </div>
          </div>
        </main>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-8 bg-slate-100"></section>
    </>
  );
}

export default Body;
