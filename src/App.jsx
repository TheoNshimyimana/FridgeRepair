import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Implementation from './serviceDetails/Implementaion'
import Training from './serviceDetails/Training'
import DataEngineering from './serviceDetails/DataEngineering'
import ProjectManagement from './serviceDetails/ProjectManagement'
import Integration from './serviceDetails/Integration'
import QualityInsurance from './serviceDetails/QualityInsurance'
import ProcessOptimisation from './serviceDetails/ProcessOptimisation'
import InfoManagement from './serviceDetails/InfoManagement'

function App() {
  ;<Layout />
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/training" element={<Training />} />
          <Route path="/cbs_implementation" element={<Implementation />} />
          <Route path="/data_engineering" element={<DataEngineering />} />
          <Route path="/project_management" element={<ProjectManagement />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/quality_insurance" element={<QualityInsurance />} />
          <Route path="/management_information" element={<InfoManagement />} />
          <Route
            path="/process_optimisation"
            element={<ProcessOptimisation />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
