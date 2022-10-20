/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import { Banner, Input } from '../components';

const Contact = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        message: '',
        mail: '',
    });
    return (
      <div className="w-full flex justify-start items-center flex-col min-h-screen">
          <div className="w-full flexCenter flex-col">
              <Banner
                    name="Contact Us"
                    childStyles="text-center mb-4"
                    parentStyle="h-80 justify-center"
                />

              <div className="flexCenter flex-col mt-20 z-0 my-10 md:w-[300px] w-[400px] ">
                  <Input
                        inputType="input"
                        title="Name"
                        placeholder="Enter your name"
                        handleClick={(e) => setFormInput({ ...formInput, name: e.target.value })}
                    />
                  <Input
                        inputType="textarea"
                        title="Mesasage"
                        placeholder="Send us your message"
                        handleClick={(e) => setFormInput({ ...formInput, message: e.target.value })}
                    />
                  <Input
                        inputType="mail"
                        title="Email"
                        placeholder="Enter your mail"
                        handleClick={(e) => setFormInput({ ...formInput, mail: e.target.value })}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;