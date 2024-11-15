import { Link } from "react-router-dom";
import { MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProcessOptimisation = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <MdSettings className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">Washing machine repair</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            <strong>Drum and Bearing Repair/Replacement:</strong> Repairing or replacing drum
            bearings and bushings to prevent noise and ensure smooth rotation. <br />
            <strong>Motor Repair and Replacement:</strong> Diagnosing motor issues, including
            checking for overheating, and replacing faulty motors to restore
            operation. <br /> <strong>Drain Pump Repair and Replacement:</strong> Repairing or replacing
            a malfunctioning drain pump to ensure proper drainage and prevent
            water accumulation. <br /> <strong>Drum and Dispenser Cleaning:</strong>  Removing soap scum,
            mold, and mildew from the drum and detergent dispenser to keep the
            machine hygienic and smelling fresh.
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

export default ProcessOptimisation;
