import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Products from './components/ProductDisplay';
import ContactUs from './components/pages/ContactUs';
import SwitchyardServices from './components/pages/SwitchyardServices';
import TransmissionServices from './components/pages/TransmissionServices';
import SolarServices from './components/pages/SolarServices';
import MaintenanceServices from './components/pages/MaintainanceServices';
import PanelsServices from './components/pages/PanelServices';
import CablesAccessories from './components/pages/CablesAccessories';
import SwitchgearAutomation from './components/pages/SwitchgearAutomation';
import MeteringMonitoring from './components/pages/MeteringMonitoring';
import FlameproofWeatherproof from './components/pages/FlameproofWeatherproof';
import SubstationTransmission from './components/pages/SubstationTransmission';
import EarthingTransformers from './components/pages/EarthingTransformers';
import StreetLightingPoles from './components/pages/StreetLightingPoles';
import Miscellaneous from './components/pages/Miscellaneous';


const router = createBrowserRouter(
  [
    {path: '/', element: <Home />},
    {path: '/about', element: <AboutUs />},
    {path: '/contact', element: <ContactUs />},
    {path: '/switchyard-services', element: <SwitchyardServices />},
    {path: '/transmission-services', element: <TransmissionServices />},
    {path: '/solar-services', element: <SolarServices />},
    {path: '/maintainance-services', element: <MaintenanceServices />},
    {path: '/panel-services', element: <PanelsServices />},
    { path: '/cableAndAccessories', element: <CablesAccessories /> },
    { path: '/switchgearAndAutomation', element: <SwitchgearAutomation /> },
    { path: '/meteringAndMonitoring', element: <MeteringMonitoring /> },
    { path: '/flameproofAndWeatherproof', element: <FlameproofWeatherproof /> },
    { path: '/substationAndTransmission', element: <SubstationTransmission /> },
    { path: '/earthingAndTransformers', element: <EarthingTransformers /> },
    { path: '/streetLightingAndPoles', element: <StreetLightingPoles /> },
    { path: '/miscellaneous', element: <Miscellaneous /> },

  ]
)

function App() {

  return (
    <div className=' min-h-screen'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
