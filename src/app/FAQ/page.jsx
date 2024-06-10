"use client";
import React from "react";
import "./FAQ.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import Footer from "@/Components/Footer/Footer";
import QesAns from "@/Components/QesAns/QesAns";
const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="FAQ">
        <div className="Heading-FAQ">
          <h2>
            <b>
              Frequently <span style={{ color: "red" }}>Asked Questions</span>
            </b>
          </h2>
        </div>

        <div className="FAQ-Topic">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <h5 style={{fontWeight:600}}> {" Locad (Adtech Company)"} </h5>
          </div>
          <QesAns
            Questions={"What is adtech?"}
            Answers={
              "The term “ad tech,” stands for advertising technology, broadly refers to different types of analytics and digital tools used in the context of advertising."
            }
          />
          <QesAns
            Questions={"What is locad?"}
            Answers={
              "Locad is a Singapore based technology company who loves to build innovative products and IOT solutions for Location Based Advertising & OOH media industry."
            }
          />
          <QesAns
            Questions={"What exactly does Locad do?"}
            Answers={
              "Locad one of best ad tech company provides the underlying technologies that help marketers and their agencies create, plan, target, buy, serve, measure and/or optimize ads."
            }
          />
          <QesAns
            Questions={"What experience do you have in adtech?"}
            Answers={
              "We have a global team of experts with 15 to 18 years in depth experience from the world of AdTech, Advertising and OOH industry."
            }
          />
        </div>
        <div className="FAQ-Topic">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <h5 style={{fontWeight:600}}>{" Locaudit (POP, Monitoring, Reporting)"}</h5>
          </div>
          <QesAns
            Questions={"What is locaudit?"}
            Answers={
              "Locaudit is a leading real time monitoring and reporting platform for OOH media, asset owners, site owners, vendors, agencies and brands etc."
            }
          />
          <QesAns
            Questions={"Importance of outdoor advertising?"}
            Answers={
              "Outdoor media remains one of the most effective ways that marketers can reach audiences with a creative visual message and a high degree of frequency. While it therefore still commands a large share of advertisers’ budgets – particularly in hard to reach places where impactful media options are limited."
            }
          />
          <QesAns
            Questions={
              "How can you be sure that you are not only getting what you paid for, but also getting value for money?"
            }
            Answers={
              "The answer is our LOCAUDIT platform, which not only checks if the correct material is properly displayed, but also assesses the condition of the structure and the quality of the advertisement installation, site impact, light visibility, performance of vendors and monitors, time taken to pass, nearby clutter and obstructions."
            }
          />
          <QesAns
            Questions={"Why to choose locaudit?"}
            Answers={
              "LOCAUDIT is a powerful tool for OOH proof of posting, monitoring of sites and reporting ( both internal and external) for brands, agencies and OOH media companies. Our key features are GEO-TAGGING - Automatically tag the location of data collected in the field, TIME AND DATE STAMP - The app collects both the time/date of collection and upload in case of communication issues in the field, AUTOMATED ALERTS - Select groups of individuals to receive text or email notifications as data is collected, and many more features."
            }
          />
          <QesAns
            Questions={"Which OS does locaudit app support?"}
            Answers={
              "The application currently supports Android mobile devices."
            }
          />
        </div>
        <div className="FAQ-Topic">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <h5 style={{fontWeight:600}}>{" Locad Mobile Advertisment"}</h5>
          </div>
          <QesAns
            Questions={"What is mobile advertisment?"}
            Answers={
              "Mobile advertising is one of the part of advertising done by mobile phones or other mobile devices. It is a type of mobile marketing."
            }
          />
          <QesAns
            Questions={"What is locad mobile ad platform?"}
            Answers={
              "Locad’s platform is a one stop solution for all your advertising needs. It's a hyper local mobile advertising platform across channels for brands and agencies and OOH media companies."
            }
          />
          <QesAns
            Questions={"How does it work?"}
            Answers={
              "The consumer sees an OOH advertisement, while traveling through a pre-defined geofenced area. While engaging with an app, within the geofence, the consumer sees a similar ad appear on their phone as a mobile banner ad."
            }
          />
        </div>
        <div className="FAQ-Topic">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <h5 style={{fontWeight:600}}>{" Screeno (Programmatic DOOH & CMS)"}</h5>
          </div>
          <QesAns
            Questions={"What is screeno?"}
            Answers={
              "It's an unqiue platform for purchasing programmatic DOOH inventory and complete content management system for advertisers and digital media owners."
            }
          />
          <QesAns
            Questions={"How does screeno works?"}
            Answers={
              "Digital media owners can simply manage content across any number of screens and geographies via a single cloud based web interface irrespective of what hardware device they are using. Moreover, they can monetize their inventory by simply integrating with our programmatic DOOH network through the same platform.Advertisers on the other hand get complete access to real time DOOH inventory with in depth live traffic monitoring and footfall numbers."
            }
          />
          <QesAns
            Questions={"What is plug and play module in screeno?"}
            Answers={
              "We have built a simple plug and play module wherein you don't have to worry about any technical integration problems and just focus on getting the best content to your audience."
            }
          />
          <QesAns
            Questions={"Can i manage multiple screens in this platform?"}
            Answers={
              "Whether you have one screen or multiple across geographies , manage all of them from a single and powerful web interface."
            }
          />
          <QesAns
            Questions={"What is live traffic monitoring in screeno?"}
            Answers={
              "Not only monitor live status of each screen but also get live traffic count with respect to number of people , vehicles, other objects etc. At any time you will have a clear indication of the number of audience around your screen who could then further be used for targeted advertising"
            }
          />
        </div>
        <div className="FAQ-Topic">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <h5 style={{fontWeight:600}}> {" Plano (OOH Inventory)"} </h5>
          </div>
          <QesAns
            Questions={"What is plano?"}
            Answers={
              "PLANO is an extremely simple yet effective solution for managing site inventory across multiple geographical locations for OOH site vendors."
            }
          />
          <QesAns
            Questions={"How plano works?"}
            Answers={
              "Ad tech is one of the fastest-growing industries in the world that connect advertisers to customers across Europe, Latin America and Asia."
            }
          />
          <QesAns
            Questions={"How much money is there in adtech?"}
            Answers={
              "The term “ad tech,” which is short for advertising technology, broadly refers to different types of analytics and digital tools used in the context of advertising."
            }
          />
          <QesAns
            Questions={"What exactly does adtech do?"}
            Answers={
              "Locad one of best ad tech company provides the underlying technologies that help marketers and their agencies create, plan, target, buy, serve, measure and/or optimize ads."
            }
          />
          <QesAns
            Questions={"What experience do you have in adtech?"}
            Answers={
              "We have 15 to 18 years of experience in the field of ooh advertisment as a team."
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
