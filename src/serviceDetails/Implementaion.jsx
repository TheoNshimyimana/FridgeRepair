import { FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Implementation = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <FaTools className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">Milk-cooler installation and maintenance with gas recharging</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            <strong>Cleaning Services:</strong> Deep cleaning of the condenser coils, evaporator
            coils, and fan to prevent build-up that can impact performance. <br />
            <strong>Refrigerant Level Check and Refill:</strong> Measuring refrigerant levels to
            ensure they meet the requirements and recharging gas if levels are
            low. <br /> <strong>Troubleshooting Common Issues:</strong> Diagnosing and fixing problems
            such as temperature fluctuations, compressor failure, or gas leaks. <br />
            <strong>Compressor and Motor Repair:</strong> Repairing or replacing damaged
            compressors and motors, which are essential for consistent cooling.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:bg-yellow-600 bg-custom-yellow rounded-lg px-4 py-2 shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            &larr; Back to Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
