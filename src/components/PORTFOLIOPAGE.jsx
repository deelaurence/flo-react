import React from 'react'
import WorkWithFlo from './WorkWithFlo'
import largest from "./images/largest.png"
import box1 from "./images/box1.png"
import box2 from "./images/box2.png"
import rectangle from "./images/rectangle.png"
import shpLargest from "./images/shp-largest.png"
import shpBox1 from "./images/shp-box1.png"
import shpBox2 from "./images/shp-box2.png"
import shpRectangle from "./images/shp-rectangle.png"
import dxLargest from "./images/dx-largest.png"
import dxBox1 from "./images/dx-box1.png"
import dxBox2 from "./images/dx-box2.png"
import dxRectangle from "./images/dx-rectangle.png"
import arrow from "./images/arrow.png"
import femImg1 from "./images/fem-img1.png"
import femImg2 from "./images/fem-img2.png"
import femImg3 from "./images/fem-img3.png"
import splImg1 from "./images/spl-img1.png"
import splImg2 from "./images/spl-img2.png"
import splImg3 from "./images/spl-img3.png"
const PORTFOLIOPAGE = () => {
    return (
        <>
            <main className="px-6 md:px-16 pt-20   relative z-20 flex flex-col bg-darkShade text-lightShade md:min-h-[90vh] md:pb-10">
                <section className='relative pb-40'>
                    <div>
                        <h1 className="text-[1.6rem] font-semibold md:text-5xl">
                            Work
                        </h1>

                    </div>
                    <div className='text-[.83rem] font-[500]  text-[#fafafab9] leading-7 mt-8'>
                        <p>I focus on using end-to-end Product Design
                            <span className='block' >to create products that can offer users a</span>
                            <span className='block'>seamless interaction experience with the </span>
                            <span className='block'>aid of visual design, interaction design,</span>
                            <span className='block'> and prototyping.</span>
                            <br />
                            <span className='block'>Products for industries like web3, blockchain,</span>
                            <span className='block'>Femtech, e-commerce, and enterprise.</span>
                        </p>
                    </div>
                    <div
                        className="seperator absolute bottom-0  -translate-x-1/2 left-1/2 h-14 w-[1.5px] bg-lightShade"
                    ></div>
                </section>
                <section className='mt-20 text-[1.5rem]'>
                    <div>
                        <h3 className='text-center text-[1.3rem] font-semibold'>
                            Selected Projects
                        </h3>
                    </div>
                    <div className=' flex project-cont gap-12 flex-col'>
                        <div className='mt-16 grid-container'>
                            <div className='overflow-hidden largest'>
                                <img src={largest} alt="kodetech" />
                            </div>
                            <div className='header '>
                                <h3 className='font-semibold text-[1rem]' >
                                    KodeTech
                                </h3>
                                <p className='text-[.5rem]'>
                                    An E-Commerce website
                                </p>
                            </div>
                            <div className='box1' >
                                <img src={box1} className='h-full' alt="kodetech2" />
                            </div>
                            <div className='box2'>
                                <img className='h-full' src={box2} alt="kodetech3" />
                            </div>
                            <div className='rectangle' >
                                <img className='h-full' src={rectangle} alt="kodetech" />
                            </div>
                            <div className='text-[.5rem] overflow-hidden button'>
                                <div className='flex gap-3'>
                                    <p>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-16 grid-container-femmina'>
                            <div className=' fem-img1'>
                                <img src={femImg1} className='h-full' alt="kodetech" />
                            </div>
                            <div className='fem-header '>
                                <h3 className='font-semibold text-[1rem]' >
                                    Femmina
                                </h3>
                                <p className='text-[.5rem]'>
                                    A Femtech app
                                </p>
                            </div>
                            <div className='fem-img2' >
                                <img src={femImg2} className='h-full' alt="kodetech2" />
                            </div>
                            <div className='fem-img3'>
                                <img className='h-full' src={femImg3} alt="kodetech3" />
                            </div>
                            <div className='text-[.5rem] self-center pb-8 overflow-hidden fem-button'>
                                <div className='flex gap-3'>
                                    <p>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-16 grid-container-dexchange'>
                            <div className='overflow-hidden dx-largest'>
                                <img src={dxLargest} alt="kodetech" />
                            </div>
                            <div className='dx-header justify-self-end  float-right'>
                                <h3 className=' font-semibold text-[1rem]' >
                                    D-Exchange
                                </h3>
                                <p className='text-[.5rem]'>
                                    A Liquidity pool design
                                </p>
                            </div>
                            <div className='dx-box1' >
                                <img src={dxBox1} className='h-full' alt="kodetech2" />
                            </div>
                            <div className='dx-box2'>
                                <img className='h-full' src={dxBox2} alt="kodetech3" />
                            </div>
                            <div className='dx-rectangle' >
                                <img className='h-full' src={dxRectangle} alt="kodetech" />
                            </div>
                            <div className='text-[.5rem] overflow-hidden dx-button'>
                                <div className='flex float-right gap-3'>
                                    <p>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-16 grid-container-splita'>
                            <div className=' spl-img1 pt-1'>
                                <img src={splImg1} className='h-full' alt="kodetech" />
                            </div>
                            <div className='spl-header '>
                                <h3 className='font-semibold text-[1rem]' >
                                    Splita
                                </h3>
                                <p className='text-[.5rem]'>
                                    A JSON and CSV Chunking platform
                                </p>
                            </div>
                            <div className='spl-img2' >
                                <img src={splImg2} className='h-full' alt="kodetech2" />
                            </div>
                            <div className='spl-img3'>
                                <img className='h-full' src={splImg3} alt="kodetech3" />
                            </div>
                            <div className='text-[.5rem] self-center   overflow-hidden spl-button'>
                                <div className='flex gap-3 '>
                                    <p className=''>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-16 grid-container'>
                            <div className='overflow-hidden largest'>
                                <img src={shpLargest} alt="kodetech" />
                            </div>
                            <div className='header '>
                                <h3 className='font-semibold text-[1rem]' >
                                    Shoptacle
                                </h3>
                                <p className='text-[.5rem]'>
                                    A Luxury Clothing webstore
                                </p>
                            </div>
                            <div className='box1' >
                                <img src={shpBox1} className='h-full' alt="kodetech2" />
                            </div>
                            <div className='box2'>
                                <img className='h-full' src={shpBox2} alt="kodetech3" />
                            </div>
                            <div className='rectangle' >
                                <img className='h-full' src={shpRectangle} alt="kodetech" />
                            </div>
                            <div className='text-[.5rem] overflow-hidden button'>
                                <div className='flex gap-3'>
                                    <p>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <WorkWithFlo />
        </>
    )
}

export default PORTFOLIOPAGE
