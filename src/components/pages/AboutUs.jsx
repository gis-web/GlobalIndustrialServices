import React from 'react';
import Navbar from '../Navbar';
import electrcian from '../../assets/electrician.jpg';
import secure from '../../assets/secure.png';
import handshake from '../../assets/handshake.png';
import satisfaction from '../../assets/satisfaction.png';
import windmill from '../../assets/windmills.jpg';
import telescope from '../../assets/telescope.png';
import services from '../../assets/services.png';
import product from '../../assets/product.png';
import Footer from '../footer';

const AboutUs = () => {
  return (
    <div className='bg-secondary'>
      <Navbar />

      <div className=' text-center text-6xl font-bold py-10'>
        About Us

      </div>

      <div className='bg-gray-200'>

        <div className='flex flex-col md:flex-row gap-10 justify-center items-center mt-10 bg-background py-20 px-6 lg:px-20 bg-red-50'>
          <div className='w-full md:w-[140rem]'>
            <img src={electrcian} alt="electrician" className='rounded-lg w-full' />
          </div>
          <div className='grid gap-6 text-center md:text-left'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>Who We Are</h1>
            <p className='text-lg sm:text-xl tracking-wide text-justify'>
              At GLOBAL INDUSTRIAL SERVICES, we specialize in providing integrated and single-point solutions for Electrical, Instrumentation, and Civil Projects. With a commitment to delivering optimal engineering solutions, we aim to meet customer requirements and build long-term, trust-based relationships.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 justify-center items-center py-20 px-6 lg:px-12'>
          <div className='grid gap-12 w-full'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-center'>Our Commitment</h1>
            <div className='flex flex-wrap justify-evenly gap-6'>
              <div className='bg-white h-96 w-full sm:w-80 rounded-2xl hover:shadow-2xl transition-shadow duration-300 p-4 text-center flex items-center flex-col justify-evenly'>
                <img src={secure} alt="" className='h-1/2' />
                <p className='text-lg'>
                  High-quality services at every project stage.
                </p>
              </div>
              <div className='bg-white h-96 w-full sm:w-80 rounded-2xl hover:shadow-2xl transition-shadow duration-300 p-4 text-center flex items-center flex-col justify-evenly'>
                <img src={handshake} alt="" className='h-1/2' />
                <p className='text-lg'>
                  Reliable, faithful execution of electrical, instrumentation, and civil services.
                </p>
              </div>
              <div className='bg-white h-96 w-full sm:w-80 rounded-2xl hover:shadow-2xl transition-shadow duration-300 p-4 text-center flex items-center flex-col justify-evenly'>
                <img src={satisfaction} alt="" className='h-2/5' />
                <p className='text-lg'>
                  Strong focus on customer satisfaction and long-term collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 justify-center items-center py-20 px-6 lg:px-20 bg-red-50'>
  <div className='grid gap-6'>
    <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>Why Choose Us</h1>
    <ul className='text-lg sm:text-xl tracking-wide grid gap-y-4 list-disc pl-8'>
      <li className='pl-2 py-4'>
        A team of experts ensures reliable, efficient project execution.
      </li>
      <li className='pl-2 py-4'>
        Proven expertise in working with industry-leading electrical equipment brands.
      </li>
      <li className='pl-2 py-4'>
        Continuous dedication to quality, efficiency, and excellence.
      </li>
      <li className='pl-2 py-4'>
        Focus on building valuable, cooperative, and long-term relationships.
      </li>
    </ul>
  </div>
  <div className='w-full md:w-[40rem]'>
    <img src={windmill} alt="electrician" className='rounded-lg w-full' />
  </div>
</div>


        <div className='flex flex-col md:flex-row gap-10 justify-center items-center py-20 px-6 lg:px-20'>
          <div className='w-full md:w-[50rem]'>
            <img src={telescope} alt="electrician" className='rounded-lg w-full' />
          </div>
          <div className='grid gap-6'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>Our Vision</h1>
            <p className='text-lg sm:text-xl tracking-wide'>
              To set benchmarks in the industry by providing superior engineering solutions while fostering mutual growth and success with our valued clients.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 justify-center items-center bg-background py-20 px-6 lg:px-20 bg-red-50'>
          <div className='grid gap-6'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>Services</h1>
            <ul className='text-lg sm:text-xl tracking-wide grid gap-y-4'>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Switchyard: </span>
                  Erection, testing, and commissioning of switchyard equipment (11KV to 132KV), and electrical project consultancy with state electricity boards.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Transmission: </span>
                  Erection, testing, and commissioning of transmission network upto 132KV towers. The service also including material supply and complete liaison with State Electricity Boards.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Solar Projects: </span>
                  Comprehensive solar project works, including piling, MMS, IDT, substation, HT/LT panels, AC/DC systems, and lighting installation.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Maintenance: </span>
                  AMC and ARC Services of Switch yard , Generators , Transformer, DG Set , Earthing System , Motors , Battery chargers,Lighting system.We provide end to end solution including spares supply and repair services.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Panels: </span>
                  Complete electrical panel solutions which including HT, PCC, MCC, APFC, VFD, and other custom panels (PDB, LDB, MLDB, DG, PLC AUTOMATION) as per site requirements.
                </p>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-[50rem]'>
            <img src={services} alt="electrician" className='rounded-lg w-full' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 justify-center items-center py-20 px-6 lg:px-20'>
          <div className='w-full md:w-[70rem]'>
            <img src={product} alt="electrician" className='rounded-lg w-full' />
          </div>
          <div className='grid gap-6'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>Products</h1>
            <ul className='text-lg sm:text-xl tracking-wide grid gap-y-4'>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Cables & Accessories: </span>
                  Cable, cable jointkits, cable lugs, cable gland & tray.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Switchgear & Automation: </span>
                  MCBs, RCCBs, industrial automation products, power factor correction devices, MCCB, MPCB, ACB, and ring main unit supply.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Metering & Monitoring: </span>
                  Metering, signaling, monitoring instruments, panel meters, energy meters, current transformers (CT), and voltage transformers (VT).
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Flameproof & Weatherproof: </span>
                  Flameproof LED light fixtures, switchgear, panels, hooters, junction-box fans, and weatherproof LED luminaires.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Substation & Transmission: </span>
                  Substation equipment like GOAB switches, LBS, HT panel, isolators, transmission line materials including AAAC-ACSR conductors, hardware, insulators, and busbar supporters etc.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Earthing & Transformers: </span>
                  Earthing materials like G.I., C.I., copper bonded, chemical earthing electrodes, pipe and plate earthing, lightning arrestors, backfilling compounds, and power/distribution transformer spares.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Street Lighting & Poles: </span>
                  Steel tubular, high mast, decorative, and solar light poles, street light pole with accessories.
                </p>
              </li>
              <li>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">Miscellaneous: </span>
                  Flameproof LED fixtures, switchgear, panels, hooters, junction-box, industrial fans, FRP metering box, and junction boxes.
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <Footer />
    </div>

  );
};

export default AboutUs;

