"use client";

import React, { useState } from "react";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import UpperNav from "@/Components/NavBar/UpperNav";
import Footer from "@/Components/Footer/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "react-bootstrap";

const Page = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [modalShow, setModalShow] = useState(false);

  const sendData = async e => {
    e.preventDefault();
    if (
      state.name === " " ||
      state.email === " " ||
      state.phone === " " ||
      state.message === " " ||
      state.subject === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      console.log("helloo....", state);
      await axios.post("https://plano-v1-api.locad.tech/mailer", state, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // toast.success("Your message has been sent");
      setState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setModalShow(true);
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  const handleClose = () => setModalShow(false);

  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="h-24 w-full flex justify-center items-center font-mono bg-slate-100 font-thin">
        <h1>Contact Us</h1>
      </div>
      <div className=" flex max-md:flex-col w-full  justify-center items-center">
        <div className="h-auto py-3 w-1/2 max-md:w-full flex justify-center items-center">
          <form className="w-full max-w-lg mt-5" onSubmit={sendData}>
            <div className="flex flex-wrap mb-2">
              <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="john"
                  name="name"
                  required
                  onChange={e => setState({ ...state, name: e.target.value })}
                  value={state.name}
                />
              </div>
              <div className="w-full md:w-1/2 px-1">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="john@gmail.com"
                  name="email"
                  required
                  onChange={e => setState({ ...state, email: e.target.value })}
                  value={state.email}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Work..."
                  name="subject"
                  required
                  onChange={e =>
                    setState({ ...state, subject: e.target.value })
                  }
                  value={state.subject}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  placeholder="1234..."
                  name="number"
                  required
                  value={state.phone}
                  onChange={e => setState({ ...state, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Hello John...."
                  name="message"
                  required
                  onChange={e =>
                    setState({ ...state, message: e.target.value })
                  }
                  value={state.message}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <button
                  className="bg-green-600 hover:bg-green-800 px-20 py-1 rounded-lg text-white font-Teko text-2xl max-md:w-full"
                  type="submit"
                >
                  Send Your Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="h-96 w-1/2 max-md:w-full px-2">
          <p className=" text-md">
            Get in touch with us now to solve all your advertising and targeting
            needs.
          </p>
          <br />
          <div>
            <p className="font-bold">📌 Our Office Location</p>
            <li className="font-thin">
              3rd Floor, N-116 Panchsheel Park, New Delhi-110017 (India).
            </li>
            <li className="font-thin">
              LOCAD Pte Ltd. 8 UBI Road 2, #08-10, ZERVEX, Singapore
              408538(Singapore).
            </li>
            <li className="font-thin">
              WeWork DLF Forum, Cybercity, Phase III, Gurugram, Haryana
              122002(India).
            </li>
          </div>
          <br />
          <div>
            <p className="font-bold">📞 Contact Number</p>
            <p>+919810174445 , +91-11-26498187</p>
          </div>
          <br />
          <div>
            <p className="font-bold">📧 Email Address</p>
            <p>info@locad.net</p>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Page;
