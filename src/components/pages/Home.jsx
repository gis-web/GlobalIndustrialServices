import React from 'react'
import Navbar from '../Navbar'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-red-200 to-white min-h-screen'>
                <Navbar />


                <div className=' pt-44 h-full p-[12%] m-auto'>
                    <div className='text-6xl font-bold tracking-wider text-center'>
                        Empowering Industries with Reliable Electrical Solutions!!
                    </div>
                    <div className='text-center text-xl mt-8'>
                        From switchyard installations to solar projects, we deliver seamless engineering, procurement, and construction services tailored to your needs.
                    </div>
                    <div className='flex justify-center gap-10 mt-10'>
                        <div>
                           <Button className="bg-primary">
                                                   <Link to="/contact">Contact Us</Link>
                                               </Button>
                        </div>
                        <div>
                        <Link to="/about">
                            <Button variant={'ghost'}>About Us <ArrowRight /></Button>
                        </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home