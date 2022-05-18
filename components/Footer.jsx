import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaGithubSquare,
    FaLinkedin
} from 'react-icons/fa'

function Footer() {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-black'>Indie Games Footer.</h1>
                <p className='py-4'>Footer text.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaLinkedin size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Sub Title 1</h6>
                    <ul>
                        <li className='py-2 text-sm'>Sub-sub title 1</li>
                        <li className='py-2 text-sm'>Sub-sub title 2</li>
                        <li className='py-2 text-sm'>Sub-sub title 3</li>
                        <li className='py-2 text-sm'>Sub-sub title 4</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Sub Title 2</h6>
                    <ul>
                        <li className='py-2 text-sm'>Sub-sub title 1</li>
                        <li className='py-2 text-sm'>Sub-sub title 2</li>
                        <li className='py-2 text-sm'>Sub-sub title 3</li>
                        <li className='py-2 text-sm'>Sub-sub title 4</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Sub Title 3</h6>
                    <ul>
                        <li className='py-2 text-sm'>Sub-sub title 1</li>
                        <li className='py-2 text-sm'>Sub-sub title 2</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Sub Title 4</h6>
                    <ul>
                        <li className='py-2 text-sm'>Sub-sub title 1</li>
                        <li className='py-2 text-sm'>Sub-sub title 2</li>
                        <li className='py-2 text-sm'>Sub-sub title 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
