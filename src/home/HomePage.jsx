'use client'

import { useEffect, useRef } from 'react'
import { HiOutlineHome, HiOutlineShare, HiOutlineUser, HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineDocumentText, HiOutlineMenu, HiOutlineChat, HiOutlineMail } from 'react-icons/hi';
import { FaCheckDouble } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { SlCloudDownload } from "react-icons/sl";

<HiOutlineHome className="hover:text-[#d67f92] size-5" />
const AnimatedBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const marginPercentage = 0.065; // Left margin as 5% of canvas width
        const lineSpacing = 0.2; // Spacing factor for lines

        class Diamond {
            constructor(x, ascending) {
                this.x = x
                this.y = ascending ? canvas.height : 0
                this.speed = 0.5
                this.ascending = ascending
            }

            draw() {
                const size = 6

                // Draw the vertical line
                ctx.beginPath()
                ctx.moveTo(this.x, 0)
                ctx.lineTo(this.x, canvas.height)
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
                ctx.stroke()

                // Draw the diamond
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.beginPath()
                ctx.moveTo(0, -size)
                ctx.lineTo(size, 0)
                ctx.lineTo(0, size)
                ctx.lineTo(-size, 0)
                ctx.closePath()

                // Create gradient for glow effect
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2)
                gradient.addColorStop(0, '#c57284')
                gradient.addColorStop(0.5, 'rgba(197, 114, 132, 0.3)')
                gradient.addColorStop(1, 'rgba(197, 114, 132, 0)')

                ctx.fillStyle = '#c57284'
                ctx.fill()
                ctx.restore()
            }

            update() {
                if (this.ascending) {
                    this.y -= this.speed
                    if (this.y < 0) {
                        this.y = canvas.height
                    }
                } else {
                    this.y += this.speed
                    if (this.y > canvas.height) {
                        this.y = 0
                    }
                }
            }
        }

        const marginLeft = canvas.width * marginPercentage; // Responsive left margin

        const diamonds = [
            new Diamond(marginLeft + canvas.width * lineSpacing * 1, false),
            new Diamond(marginLeft + canvas.width * lineSpacing * 2, true),
            new Diamond(marginLeft + canvas.width * lineSpacing * 3, false),
            new Diamond(marginLeft + canvas.width * lineSpacing * 4, true)
        ]

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            diamonds.forEach(diamond => {
                diamond.draw()
                diamond.update()
            })
            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            const newMarginLeft = canvas.width * marginPercentage // Update margin on resize

            diamonds[0].x = newMarginLeft + canvas.width * lineSpacing * 1
            diamonds[1].x = newMarginLeft + canvas.width * lineSpacing * 2
            diamonds[2].x = newMarginLeft + canvas.width * lineSpacing * 3
            diamonds[3].x = newMarginLeft + canvas.width * lineSpacing * 4
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
        />
    )
}


const HomePage = () => {
    return (
        <div className="h-screen w-[100%] flex text-white overflow-y-auto bg-black">
            <AnimatedBackground />
            <div className="w-[20%] h-screen left-[3%] p-4 flex flex-col justify-center items-center fixed">
                <div className='fixed top-10 left-[4%]'>
                    <h2 className='text-3xl font-bold'>{"<"}<span className='text-[#d67f92]'>Eya</span><span className=''>{" />"}</span></h2>
                </div>
                <div className="w-full h-[70%] p-3 bg-[#272231] rounded-2xl">
                    <div className=" h-full pt-6 flex flex-col items-center justify-between">
                        {/* Profile Picture */}
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="rounded-full w-24 h-24 mx-auto mb-2"
                        />
                        {/* Profile Info */}
                        <div>
                            <h2 className="text-lg font-semibold">Eya Khalfallah</h2>
                            <p className="text-[#d67f92]">Web Developer</p>
                        </div>
                        <div className='w-[90%] h-[1px] bg-[#3d3049bb]'></div>

                        {/* Additional Info */}
                        <div className="mt-2 w-full space-y-2">
                            <div className='flex justify-between pl-4 pr-4'>
                                <p>Residence:</p>
                                <span className="text-gray-400">Tunisia</span>
                            </div>
                            <div className='flex justify-between pl-4 pr-4'>
                                <p>City:</p>
                                <span className="text-gray-400">Sfax</span>
                            </div>
                            <div className='flex justify-between pl-4 pr-4'>
                                <p>Age:</p>
                                <span className="text-gray-400">24</span>
                            </div>

                        </div>
                        {/* Skills */}
                        <div className=' w-full bg-[#3d3049bb] p-6 rounded-2xl'>
                            <div className="mt-6">
                                <h3 className="font-semibold mb-2">Skills</h3>
                                <div className="flex items-center justify-center space-x-2">
                                    {/* Skill Circles */}
                                    {['HTML', 'CSS', 'JS', 'PHP'].map((skill, index) => (
                                        <div key={index} className="w-12 h-12 flex items-center justify-center bg-[#4b3b5a] rounded-full">
                                            <span className="text-xs">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Download CV Button */}
                            <button className="mt-6 w-full py-3 bg-[#c57284] rounded-full">
                                <div className='flex space-x-2 place-items-center justify-center font-normal text-gray-300'>
                                    <p className='text-base font-medium text-gray-300'>DOWNLOAD CV</p>
                                    <SlCloudDownload className='size-5' />
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[53%] h-full p-4 top-10 right-[17%] absolute z-10">
                {/* Introduce Section */}
                <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
                    <div className='h-full flex flex-col justify-between '>
                        <div className='w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12'>
                            <HiOutlineHome className='size-4' />
                            <h3 className='text-xs text-gray-300'>  INTRODUCE</h3>
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='w-[60%] h-fit'>
                                <h1 className="text-5xl font-bold">
                                    I Craft The
                                </h1>
                                <div className="h-[15%]"></div>
                                <h1 className="text-5xl font-bold text-[#d67f92]">Digital Landscape</h1> <br />
                                <p className="mt-2 text-lg text-gray-400">
                                    I am a <span className="font-semibold text-gray-300">Frontend Developer</span> at heart, creating features that are best suited for the job at hand.
                                </p><br />
                                <div className='flex space-x-2 place-items-center text-[#d67f92]'>
                                    <FaCheckDouble className='size-4' />
                                    <p className='text-base text-gray-400'>Available for work</p>
                                </div><br />
                                {/* Hire Me Button */}
                                <button className="mt-2 px-8 py-4 bg-[#c57284] rounded-full">
                                    <div className='flex space-x-2 place-items-center font-normal text-gray-300'>
                                        <GrSend className='size-5' />
                                        <p className='text-base font-normal text-gray-300'>HIRE ME</p>

                                    </div>
                                </button>
                            </div>
                            <div className='w-[30%]'></div>
                        </div>
                        <div className='w-full h-[20%] mt-4'></div>

                    </div>
                </section>

                {/* About me Section */}
                <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
                    <div className='h-full flex flex-col justify-between '>
                        <div className='w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12'>
                            <HiOutlineUser className='size-4' />
                            <h3 className='text-xs text-gray-300'>ABOUT ME</h3>
                        </div>
                    </div>
                </section>

                {/* Services Sections */}
                <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
                    <div className='h-full flex flex-col justify-between '>
                        <div className='w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12'>
                            <HiOutlineBriefcase className='size-4' />
                            <h3 className='text-xs text-gray-300'> SERVICES</h3>
                        </div>
                    </div>
                </section>

                {/* SKILLS  Sections */}
                <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
                    <div className='h-full flex flex-col justify-between '>
                        <div className='w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12'>
                            <HiOutlineAcademicCap className='size-4' />
                            <h3 className='text-xs text-gray-300'> SKILLS </h3>
                        </div>
                    </div>
                </section>

                {/* RESUME  Sections */}
                <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
                    <div className='h-full flex flex-col justify-between '>
                        <div className='w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12'>
                            <HiOutlineDocumentText className='size-4' />
                            <h3 className='text-xs text-gray-300'> RESUME </h3>
                        </div>
                    </div>
                </section>

                {/* PROJECTS Sections */}
                <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
                    <div className='h-full flex flex-col justify-between '>
                        <div className='w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12'>
                            <HiOutlineMenu className='size-4' />
                            <h3 className='text-xs text-gray-300'> PROJECTS</h3>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL  Sections */}
                <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
                    <div className='h-full flex flex-col justify-between '>
                        <div className='w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12'>
                            <HiOutlineChat className='size-4' />
                            <h3 className='text-xs text-gray-300'> TESTIMONIAL</h3>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
                    <div className='h-full flex flex-col justify-between '>
                        <div className='w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12'>
                            <HiOutlineMail className='size-4' />
                            <h3 className='text-xs text-gray-300'>CONTACT</h3>
                        </div>
                    </div>
                </section>

                {/* Add more sections as needed */}
            </div>
            <div className="fixed right-[4%] border-[1px]  h-[60%] top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-between  p-4 rounded-full" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                {/* Main Icon at the Top */}
                <button className="flex items-center justify-center w-12 h-12 rounded-full border-[1px]  " style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <h2 className='text-[#d67f92] font-bold'>EK.</h2>
                </button>

                {/* Navigation Icons */}
                <nav className="flex flex-col items-center justify-between space-y-6 text-gray-300">
                    <HiOutlineHome className="hover:text-[#d67f92] size-5" />
                    <HiOutlineUser className="hover:text-[#d67f92] size-5" />
                    <HiOutlineBriefcase className="hover:text-[#d67f92] size-5" />
                    <HiOutlineAcademicCap className="hover:text-[#d67f92] size-5" />
                    <HiOutlineDocumentText className="hover:text-[#d67f92] size-5" />
                    <HiOutlineMenu className="hover:text-[#d67f92] size-5" />
                    <HiOutlineChat className="hover:text-[#d67f92] size-5" />
                    <HiOutlineMail className="hover:text-[#d67f92] size-5" />

                </nav>

                {/* Bottom Icon */}
                <button className="flex items-center justify-center w-10 h-10 rounded-full border-[1px] hover:bg-[#d67f92] text-gray-300 mt-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <HiOutlineShare className="hover:text-[#d67f92] size-5 bg-gray-300" />
                </button>
            </div>
        </div>
    );
}

export default HomePage;