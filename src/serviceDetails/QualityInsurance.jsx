import { AiOutlineSafety } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const QualityInsurance = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <AiOutlineSafety className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">Cold room installation and maintenance</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            <strong>New Cold Room Installation:</strong> Complete installation of cold rooms,
            including insulated panels, doors, flooring, and necessary
            refrigeration units. <br /> <strong>Cleaning and Sanitizing:</strong> Cleaning condenser
            coils, evaporator coils, and fan blades to prevent build-up and
            ensure efficient cooling. <br /> <strong>Refrigerant Level Check and Recharge:</strong>
            Monitoring refrigerant levels and recharging the gas if levels are
            low to maintain optimal cooling performance. <br /> <strong>Compressor and
            Condenser Repair:</strong> Diagnosing issues with the compressor and
            condenser, and performing repairs or replacements if needed. <br />
            <strong>Electrical and Control System Repairs:</strong> Repairing or replacing faulty
            electrical components and control systems to ensure consistent
            temperature management.
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

export default QualityInsurance;
