import React from 'react'
import WorkWithFlo from './WorkWithFloForPortfolio'
import kodeTechCofee from './images/kodeTechCofee.png'

const KODETECH = () => {
    return (
        <>
            <main className="px-6 md:px-16 pt-20   relative z-20 flex flex-col bg-darkShade text-lightShade md:min-h-[90vh] md:pb-10">
                <section className='px-2 relative pb-40'>
                    <div>
                        <h1 className="text-[1.6rem] font-semibold md:text-5xl">
                            KodeTech: An <br /> Ecommerce Website
                        </h1>
                    </div>
                    <div className='text-[.83rem] font-[500]  text-[#fafafab9] leading-7 mt-16'>
                        <p>Role:</p>
                        <p className='font-[600] text-white'>Product Designer</p>
                    </div>
                    <div className='text-[.83rem] font-[500]  text-[#fafafab9] leading-7 mt-10'>
                        <p>Length:</p>
                        <p className='font-[600] text-white'>3 weeks</p>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Overview
                        </h3>
                        <article className='text-[.8rem] leading-7 font-[500] text-[#fafafab9]'>
                            KodeTech is an e-commerce website that <br />
                            was created to help the company expand <br />
                            their brand while allowing them connect <br />
                            with their users and effectively market their <br />
                            tech gadget products. <br />
                            On this platform, users are able to easily <br />
                            interact with the website and have an <br />
                            experience that is user-friendly while <br />
                            performing their primary tasks of placing <br />
                            orders.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={kodeTechCofee} alt="" />
                    </div>
                </section>
                <WorkWithFlo />
            </main>
        </>
    )
}

export default KODETECH
