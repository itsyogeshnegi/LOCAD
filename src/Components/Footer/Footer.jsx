"use client";

import React from "react";
import "./Footer.css";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a>
                      <Image
                        height={100}
                        width={100}
                        layout="responsive"
                        src="/locad_logo.png"
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-social-icon flex">
                    {/* <span>Follow us</span> */}
                    <a
                      href="https://www.facebook.com/locadooh/"
                      style={{ color: "#4267B2", fontSize: "20px" }}
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/locad/mycompany/"
                      style={{ color: " #0072b1", fontSize: "20px" }}
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                    <a
                      style={{ color: "red", fontSize: "20px" }}
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-google"
                        viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/LOCADOOH"
                      style={{ color: "skyblue", fontSize: "20px" }}
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/locadooh/"
                      style={{ color: "#962fbf", fontSize: "20px" }}
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-5">
                    <img src="/certificate/Sector.jpg" className="h-36" />
                    <div className="flex gap-2 mt-3">
                      <img src="/certificate/red.png" className="h-36" />
                      <img src="/certificate/cc.png" className="h-36" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Our Offices</h3>
                  </div>
                  <ul>
                    <li>
                      <p style={{ color: "white", fontSize: "14px" }}>
                        <b>Delhi</b> :<br /> 3rd Floor, N-116 <br /> Panchsheel
                        Park, <br />
                        New Delhi-110017
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p style={{ color: "white", fontSize: "14px" }}>
                        <b>Singapore</b> :<br /> LOCAD Pte Ltd. 8 UBI
                        <br /> Road 2, #08-10, ZERVEX, Singapore 408538
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p style={{ color: "white", fontSize: "14px" }}>
                        <b>Gurugram</b> :<br /> DLF Forum ,<br />
                        Cybercity WeWork DLF Forum, <br />
                        {`Cybercity, Phase III, Gurugram, Haryana 122002`}
                      </p>
                    </li>
                  </ul>
                </div>
                
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Download Our Android App</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <a>
                      <Image
                        height={150}
                        width={150}
                        alt="logo"
                        src="/playstores.png"
                        style={{ height: "40px" }}
                      />
                    </a>
                  </div>
                  <br />

                  <div className="footer-widget-heading d-flex">
                    <div className="footer-text">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.company.locad&hl=en"
                        target="_blank">
                        <Image
                          height={150}
                          width={45}
                          alt="logo"
                          src="/locApps.webp"
                          style={{ height: "40px" }}
                          title="Locaudit"
                        />
                      </a>
                    </div>
                    <div className="footer-text" style={{ marginLeft: "1rem" }}>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.locad.locauditpro&hl=en"
                        target="_blank">
                        <Image
                          height={150}
                          width={45}
                          alt="logo"
                          src="/proApps.webp"
                          style={{ height: "40px", mixBlendMode: "darken" }}
                          title="Locaudit-Pro"
                        />
                      </a>
                    </div>
                    <div className="footer-text" style={{ marginLeft: "1rem" }}>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.locad.locauditpro&hl=en"
                        target="_blank">
                        <Image
                          height={150}
                          width={45}
                          alt="logo"
                          src="/android.png"
                          style={{ height: "40px", mixBlendMode: "darken" }}
                          title="Android App"
                        />
                      </a>
                    </div>
                    <div className="footer-text" style={{ marginLeft: "1rem" }}>
                      <a
                        href="https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_ia32_win.msi"
                        target="_blank">
                        <Image
                          height={150}
                          width={45}
                          alt="logo"
                          src="/windows.png"
                          style={{ height: "40px", mixBlendMode: "darken" }}
                          title="Windows 32-bit"
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    className="footer-widget-heading d-flex"
                    style={{ marginTop: "20px" }}>
                    <div className="footer-text" style={{ marginLeft: "1rem" }}>
                      <a
                        href="https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_x64_win.msi"
                        target="_blank">
                        <Image
                          height={150}
                          width={45}
                          alt="logo"
                          src="/windows.png"
                          style={{ height: "40px", mixBlendMode: "darken" }}
                          title="Windows 64-bit"
                        />
                      </a>
                    </div>
                    <div className="footer-text" style={{ marginLeft: "1rem" }}>
                      <a
                        href="https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_armv7l_linux.AppImage"
                        target="_blank">
                        <Image
                          height={150}
                          width={45}
                          alt="logo"
                          src="/linux.png"
                          style={{ height: "40px", mixBlendMode: "darken" }}
                          title="Linux armv7 (Raspberry pi)"
                        />
                      </a>
                    </div>
                    <div className="footer-text" style={{ marginLeft: "1rem" }}>
                      <a
                        href="https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_x86_64_linux.AppImage"
                        target="_blank">
                        <Image
                          height={150}
                          width={45}
                          alt="logo"
                          src="/linux.png"
                          style={{ height: "40px", mixBlendMode: "darken" }}
                          title="Linux 64-bit"
                        />
                      </a>
                    </div>
                    <div className="footer-text" style={{ marginLeft: "1rem" }}>
                      <a
                        href="https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_i386_linux.AppImage"
                        target="_blank">
                        <Image
                          height={150}
                          width={45}
                          alt="logo"
                          src="/linux.png"
                          style={{ height: "40px", mixBlendMode: "darken" }}
                          title="Linux 32-bit"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                      <img src="/assets/mg.png" className="h-20" />
                    <div className="flex gap-2 mt-3">
                      <img src="/assets/msg.png" className="h-20" />
                      <img src="/assets/seal.jpg" className="h-20" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center align-items-center text-center">
                <div className="copyright-text">
                  <p>
                    Copyright ©2024 All Rights Reserved. Sector 6 Technologies
                    LLP | LOCAD PTE .LTD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
