import { AiOutlineApi } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Integration = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <AiOutlineApi className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">
            Industrial compressed air dryer maintenance and gas recharging
          </h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            <strong>Filter Inspection and Replacement:</strong>  Checking and replacing air
            filters to prevent contaminants from entering the air system. <br />
            <strong>Condenser and Coil Cleaning:</strong> Cleaning the condenser coils and heat
            exchangers to ensure efficient cooling and drying performance. <br />
           <strong> Sensor and Thermostat Calibration:</strong> Testing and calibrating sensors
            and thermostats to ensure the air dryer maintains the correct
            temperature and dew point. <br /> <strong>Refrigerant Level Check and Recharge:</strong>
            Checking refrigerant levels in refrigerated air dryers and
            recharging if levels are low to ensure proper cooling. <br /> <strong>Compressor
            and Condenser Repair:</strong> Inspecting, repairing, or replacing
            compressors and condensers to ensure optimal cooling performance. <br />
            <strong>Heat Exchanger and Valve Repair:</strong> Repairing or replacing heat
            exchangers and valves to maintain efficient operation and prevent
            pressure drops.
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

export default Integration;
