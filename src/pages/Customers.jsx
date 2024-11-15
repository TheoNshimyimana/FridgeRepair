

import { useMediaQuery } from 'react-responsive'

import Brd from '../assets/brd.jpg'
import Bpr from '../assets/bpr.webp'
import Ncb from '../assets/ncba2.png'
import Kcb from '../images/logosmall.webp'
import Nmb from '../assets/nmb1.jpg'
import Tropical from '../assets/tropical.png'
import Ba from '../assets/ba.jpg'
import Trop from '../assets/trop.png'

import Nerma from '../assets/Nerma.jpeg'
import E_solution from '../assets/E-solution.jpeg'
import Ckg from '../assets/Ckg.jpg'
import Usi from '../assets/Usi.jpeg'
import Logo from '../assets/logo_1.png'
import Tat from '../assets/tat.jpeg'

const Customers = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1024px)',
  })
  const isLaptop = useMediaQuery({ query: '(min-width: 1025px)' })

  return (
    <section className="  bg-slate-100  pt-4 pb-10 scroll-animate">
      <h1 className=" font-semibold text-custom-blue text-3xl mt-10 text-center mb-10">
        Our Customers
      </h1>
      <div className="flex-wrap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 gap-6">
        <img
          src={Brd}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Bpr}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Kcb}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />

        <img
          src={Ncb}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Nmb}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Tropical}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Logo}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />

        <img
          src={Ba}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Trop}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
      </div>
      <h1 className="font-semibold text-custom-blue text-3xl mt-10 text-center pt-10 mb-10">
        Our Partners
      </h1>
      <div className="flex-wrap grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 mt-4 gap-6">
        <img
          src={Nerma}
          alt="Partner Logo"
          className="w-60 h-32 object-cover mx-auto"
        />

        <img
          src={E_solution}
          alt="Partner Logo"
          className="w-60 h-32 object-cover mx-auto"
        />
        <img
          src={Ckg}
          alt="Partner Logo"
          className="w-60 h-32 object-cover mx-auto"
        />

        <img
          src={Tat}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />

        <img
          src={Usi}
          alt="Partner Logo"
          className="w-60 h-32 object-cover mx-auto"
        />
      </div>
    </section>
  )
}

export default Customers
