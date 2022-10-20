/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react'
import { Banner } from '../components';

const About = () => {
    return (
            <div className="w-full flex justify-start items-center flex-col min-h-screen">
                <div className="w-full flexCenter flex-col">
                    <Banner
                          name="Contact Us"
                          childStyles="text-center mb-4"
                          parentStyle="h-80 justify-center"
                      />

                <div className="flexCenter flex-col mt-20 z-0 mx-10 md:mx-2 my-20">
                    <p className='text-nft-red-violet font-bold text-2xl text-left py-2'>Why Choose Web3DAO?</p>
                    <p>At Web3dao we offer a variety of services ranging from graphic design, SEO, digital strategy, web development, 3D design, game development, NFT and Crypto development services and post production to motion design and content creation that will make your business stand out from the rest. <br></br>  <br></br> We are branching out to have a sister DEFI company that specializes as an asset management enterprise.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className='text-nft-red-violet font-bold text-2xl  py-2'>Who are we?</p>
                    <p>Web3dao is an agency based in Cape Town, South Africa that specializes in building custom web2 and web3 solutions for businesses. With a focus on blockchain technology, Web3dao builds projects utilizing the latest advancements in this emerging field. </p>
                    <br></br>
                    <p>Web3dao started out as one man wanting to expand the knowledge of others, it started out as one man wanting to make each and every web2/web3 project uniquely its own. We have grown into a team and family who thrives on bringing the utmost best out of each individual to serve you, your wants and needs.</p>
                </div>
            </div>


        </div>
    );
};

export default About