<<<<<<< HEAD
import Image from 'next/image'

const Home1 = () => {


    // replace the numbers by the path of the images and make appropriate changes to all the img tags(just change the src to this path)
    const teamMembers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1];
    const facultyMembers = [1,2,3,4];
    const developers = [1,2,3,4,5,6,7,8,9];
  
    return (
      <div className="relative bg-white w-full h-[3068px] overflow-hidden text-left text-base text-black font-inter">
        <div className="absolute top-[0px] left-[-3px] w-[100vw] h-[322px] text-center text-[64px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-gainsboro-100 h-[322px]" />
          <img
            className="absolute h-[12.64%] top-[37.27%] bottom-[50.09%] left-[calc(50%_-_27px)] max-h-full w-[53.9px]"
            alt=""
            src="/vector.svg"
          />
          <div className="absolute top-[640px] left-[690px] flex flex-row items-start justify-start gap-[16px] opacity-[0]">
            <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
            <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
            <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
          </div>
          <div className="absolute top-[206px] left-[calc(50%_-_370px)] font-semibold">
            We are Technical affairs
          </div>
        </div>
        <div className="absolute top-[1580px] left-[calc(50%_-_669px)] text-29xl font-semibold text-center inline-block w-[1340px]">{`Our lovely team `}</div>
        <div className="absolute top-[1522px] left-[calc(50%_-_46px)] bg-darkgray-100 flex flex-row items-center justify-center p-2.5 text-center">
          <div className="relative font-semibold">Sponsors</div>
        </div>
        <div className="absolute top-[521px] w-[100vw] left-[50px] flex flex-row items-center justify-start gap-[166px] text-17xl">
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <div className="relative font-semibold inline-block w-[662px]">
              About Us
            </div>
            <div className="relative text-9xl capitalize inline-block w-[662px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, 
            </div>
          </div>
          <img
            className="relative w-[510px] h-[183px]"
            alt=""
            src="././frame-42.svg"
          />
        </div>
        <div className="absolute top-[904px] left-[7px] bg-whitesmoke w-[100vw] h-[530px] overflow-hidden text-center text-29xl">
          <div className="absolute top-[245px] left-[741px] w-[492px] h-[136px]" />
          <div className="absolute top-[95px] left-[calc(50%_-_669.5px)] flex flex-row items-center justify-start gap-[213px]">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <div className="relative font-semibold">Our Journey</div>
              <div className="w-[551px] flex flex-col items-start justify-start text-left text-base">
                <div className="relative w-[551px] h-[63px]">
                  <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 hover:bg-gainsboro-100 cursor-pointer w-[551px] h-[63px]">
                  <div className="absolute top-[21px] left-[45px] capitalize inline-block w-[373.8px]">
                    Our first Vashisht in 2019
                  </div>
                  </div>
                </div>
                <div className="relative w-[551px] h-[63px]">
                  <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 hover:bg-gainsboro-100 cursor-pointer w-[551px] h-[63px]">
                  <div className="absolute top-[21px] left-[50.8px] capitalize inline-block w-[300.5px]">
                    First Virtual vashisht
                  </div>
                  </div>
                </div>
                <div className="relative w-[551px] h-[63px]">
                  <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 hover:bg-gainsboro-100 cursor-pointer w-[551px] h-[63px]">
                  <div className="absolute top-[21px] left-[50.8px] capitalize inline-block w-[271.6px]">
                    Largest tech expo
                  </div>
                  </div>
                </div>
                <div className="relative w-[551px] h-[63px]">
                  <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 hover:bg-gainsboro-100 cursor-pointer w-[551px] h-[63px]">
                  <div className="absolute top-[21px] left-[50.8px] capitalize inline-block w-[362.2px]">
                    Largest vashisht in 2023
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start gap-[18px] text-left text-17xl">
              <div className="relative w-[567px] h-[136px]">
              {/* The next div and img tags can be replaced by an appropriate img tag */}
                <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[567px] h-[136px]" />
                <img
                  className="absolute h-[14.04%] w-[4.48%] top-[44.85%] right-[45.43%] bottom-[41.1%] left-[50.09%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />  
              </div>
              <div className="relative font-semibold inline-block w-[567px]">
                Event
              </div>
              <div className="relative text-9xl capitalize inline-block w-[568px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1947px] left-[25vw] w-[50vw] text-9xl capitalize">
          <div className="ml-[18vw]">Team members</div>
          <div className="ml-0 flex overflow-hidden">
            <div className="animate-scrolling flex space-x-4 p-4">
              {teamMembers.map((member) => (
                <div key={member} className="flex-shrink-0 p-2">
                  <img
                    src={`https://via.placeholder.com/150x150?text=Member${member}`}
                    alt={`Member ${member}`}
                    className="w-32 h-32 rounded-full"
                  />
                </div>
              ))}
            </div>
        </div>
        </div>
        <div className="absolute top-[2231px] left-[25vw] w-[50vw] text-9xl capitalize">
        <div className="ml-[10vw]">
          <span>Designed and developed with</span>
          <span className="text-red">❤</span>
          <span>️ by</span>
        </div>
          <div className="ml-0 flex overflow-hidden">
            <div className="animate-scrolling flex space-x-4 p-4">
              {developers.map((member) => (
                <div key={member} className="flex-shrink-0 p-2">
                  <img
                    src={`https://via.placeholder.com/150x150?text=Member${member}`}
                    alt={`Member ${member}`}
                    className="w-32 h-32 rounded-full"
                  />
                </div>
              ))}
            </div>
        </div>
        </div>
        <div className="absolute top-[1690px] left-[26vw] w-[50vw] text-9xl capitalize">
        <div className="ml-[12vw]">Faculty Heads & Team lead</div>
        <div className="ml-[20px] flex overflow-hidden">
            <div className=" flex space-x-4 p-4">
              {facultyMembers.map((member) => (
                <div key={member} className="flex-shrink-0 p-2">
                  <img
                    src={`https://via.placeholder.com/150x150?text=Member${member}`}
                    alt={`Member ${member}`}
                    className="w-32 h-32 rounded-full"
                  />
                </div>
              ))}
            </div>
        </div>
        </div>
        <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] bg-gainsboro-100 w-[1440px] h-[408px] overflow-hidden text-center">
          <div className="absolute top-[54px] left-[50px] flex flex-row items-start justify-start gap-[579px]">
            <div className="flex flex-col items-start justify-start gap-[13px]">
              <div className="relative font-semibold">Tech affairs logo</div>
=======
'use client'

import { useState } from "react";
import MemberCard from "../(components)/MemberCard";

const Home1 = () => { 

  const arr = [1,2,3,4,5,6,7]

  const [image,setImage] = useState('/unsplashmxvkwpijals1@2x.png');


  return (
    <div className="relative bg-text-color w-full h-[2721px] overflow-hidden text-center text-base text-text-color font-image-text">
      <div className="absolute top-[0px] left-[-26px] w-[101vw] h-[401px] overflow-hidden text-29xl">
        <div className="absolute top-[712px] left-[687px] flex flex-row items-start justify-start gap-[16px] opacity-[0]">
          <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
          <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
          <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
        </div>
        <img
          className="absolute top-[0px] left-[26px] w-[100vw] h-[979px] object-cover"
          alt=""
          src="/unsplashi6at9f7mwdq@2x.png"
        />
        <div className="absolute w-[calc(100%_+_3px)] top-[0px] right-[0px] left-[0px] [background:linear-gradient(180.03deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0)_51.48%,_#000)] h-[401px]" />
        <b className="absolute top-[308px] left-[calc(50%_-_279px)]">
          We are Technical affairs
        </b>
      </div>
      <div className="absolute top-[521px] left-[50px] flex flex-row items-center justify-start gap-[166px] text-left text-17xl text-black font-inter">
        <div className="flex flex-col items-start justify-start gap-[26px]">
          <div className="relative font-semibold inline-block w-[662px]">
            About Us
          </div>
          <div className="relative text-9xl capitalize inline-block w-[662px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `}</div>
        </div>
        <div className="relative w-[510px] h-[183px] text-xs text-text-color font-image-text">
          <div className="absolute top-[-0.5px] left-[255px] rounded-tl-none rounded-tr-3xs rounded-b-none w-[255px] h-[182.7px] overflow-hidden">
            <img
              className="absolute top-[0px] left-[0px] w-[285px] h-[190px] object-cover"
              alt=""
              src="/unsplashourqhrte2im@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[255px] h-[182.7px]" />
            <b className="absolute top-[155.9px] left-[17.9px] inline-block w-[81.2px] h-[15.4px]">
              Hackathons
            </b>
          </div>
          <div className="absolute top-[-0.5px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-b-none w-[255px] h-[182.7px] overflow-hidden">
            <img
              className="absolute top-[0px] left-[0px] w-[268px] h-[406px] object-cover"
              alt=""
              src="/unsplashmxvkwpijals@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[255px] h-[182.7px]" />
            <b className="absolute top-[155.9px] left-[17.9px]">Experience</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[904px] left-[0px] w-[100vw] overflow-hidden flex flex-col items-center justify-center py-[72px] px-[54px] bg-[url('/frame-37@3x.png')] bg-cover bg-no-repeat bg-[top] text-17xl">
        <div className="flex flex-row items-center justify-start gap-[213px]">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <b className="relative">Our Journey</b>
            <div className="w-[551px] flex flex-col items-start justify-start text-left text-xl">
              <div className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[45px] capitalize font-medium inline-block w-[373.8px]">
                  Our first Vashisht in 2019
                </div>
              </div>
              <div className="relative w-[551px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] h-[50px] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[45px] capitalize font-medium inline-block w-[373.8px]">
                  Our first Vashisht in 2019
                </div>
              </div>
              <div className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[45px] capitalize font-medium inline-block w-[373.8px]">
                  Our first Vashisht in 2019
                </div>
              </div>
              <div className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[45px] capitalize font-medium inline-block w-[373.8px]">
                  Our first Vashisht in 2019
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[18px] text-left text-9xl">
            <div className="relative w-[567px] h-[136px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-[604px] h-[916px] object-cover"
                alt=""
                src={image}
              />
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(179.91deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.2))] w-[567px] h-[136px]" />
            </div>
            <div className="relative font-medium inline-block w-[567px]">
              Event
            </div>
            <div className="relative text-xl capitalize inline-block w-[568px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-[1325px] left-[calc(50%_-_719px)] overflow-hidden flex flex-col items-start justify-start py-[72px] px-[49px] text-black">
        <div className="flex flex-col items-center justify-start gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[102px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Team</div>
            </div>
            <b className="relative text-17xl inline-block w-[1340px]">Our lovely team</b>
          </div>
          <div className="flex flex-col items-center justify-start gap-[50px] text-left text-9xl font-inter">
            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize">Faculty Heads & Team lead</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text">
                <div className="relative w-[138px] h-[103px]">
                  <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                    <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                    <b className="absolute top-[64px] left-[calc(50%_-_42px)]">
                      Dr. Siva Selvan
                    </b>
                    <div className="absolute top-[80px] left-[calc(50%_-_21px)] text-3xs">
                      Dean-SA
                    </div>
                  </div>
                  <img
                    className="absolute top-[10px] left-[45px] rounded-[112px] w-12 h-12 object-cover"
                    alt=""
                    src="/image-38@2x.png"
                  />
                </div>
                <div className="relative rounded-8xs w-[138px] h-[103px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                  <b className="absolute top-[64px] left-[calc(50%_-_47px)]">
                    Dr. Parvathy Das
                  </b>
                  <div className="absolute top-[80px] left-[calc(50%_-_35px)] text-3xs">
                    Faculty Advisor
                  </div>
                  <img
                    className="absolute top-[10px] left-[45px] rounded-[300px] w-12 h-12 object-cover"
                    alt=""
                    src="/image-39@2x.png"
                  />
                </div>
                <div className="flex flex-col items-center justify-start">
                  <div className="relative w-[138px] h-[103px]">
                    <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                      <b className="absolute top-[64px] left-[calc(50%_-_52px)]">
                        G.Praneeth kumar
                      </b>
                      <div className="absolute top-[80px] left-[calc(50%_-_45px)] text-3xs">
                        Technical secretary
                      </div>
                    </div>
                    <img
                      className="absolute top-[10px] left-[45px] rounded-81xl w-12 h-12 object-cover"
                      alt=""
                      src="/image-40@2x.png"
                    />
                  </div>
                  <div className="rounded-[34.21px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] overflow-hidden flex flex-row items-start justify-start p-[6.842105388641357px] mt-[-7px]">
                    <img
                      className="relative w-[12.3px] h-[12.3px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <div className="relative w-[138px] h-[103px]">
                    <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                      <b className="absolute top-[64px] left-[calc(50%_-_26px)]">
                        Sundar S
                      </b>
                      <div className="absolute top-[80px] left-[calc(50%_-_56px)] text-3xs">
                        Joint Technical Secretary
                      </div>
                    </div>
                    <img
                      className="absolute top-[10px] left-[calc(50%_-_24px)] rounded-81xl w-12 h-12 object-cover"
                      alt=""
                      src="/image-40@2x.png"
                    />
                  </div>
                  <div className="rounded-[34.21px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] overflow-hidden flex flex-row items-start justify-start p-[6.842105388641357px] mt-[-7px]">
                    <img
                      className="relative w-[12.3px] h-[12.3px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize">Team members</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text animate-scrolling">
                {arr.map((member) => (
                  <MemberCard name = "G Praneeth Kumar" />
                ))}
              </div>
            </div>


            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize">
                <span>Designed and developed with</span>
                <span className="text-red">❤</span>
                <span>️ by</span>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px] text-xs font-image-text animate-scrolling">
                {arr.map((member) => (
                    <MemberCard name = "G Praneeth Kumar" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[0px] left-[1px] w-[98vw] h-[72px] text-left text-black font-inter">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-gray [backdrop-filter:blur(20px)] h-[72px]" />
        <div className="absolute top-[14px] left-[1014px] flex flex-row items-center justify-start gap-[38px]">
          <div className="relative font-medium">Home</div>
          <div className="relative font-medium">About</div>
          <div className="relative font-medium">Clubs</div>
          <div className="rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] flex flex-row items-start justify-start py-2.5 px-3">
            <div className="relative font-medium">Joy of giving</div>
          </div>
        </div>
        <div className="absolute top-[27px] left-[50px] font-semibold hidden">
          Tech affairs logo
        </div>
        <img
          className="absolute top-[11px] left-[49px] w-[50px] h-[50px] object-cover"
          alt=""
          src="/image-20@2x.png"
        />
      </div> */}
      <div className="absolute bottom-[0px] w-[100vw] overflow-hidden flex flex-col items-start justify-start p-[50px] box-border bg-[url('/footer@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-start justify-start gap-[126px]">
          <div className="flex flex-row items-start justify-start gap-[579px]">
            <div className="flex flex-col items-start justify-start gap-[13px]">
              <div className="relative">Tech affairs IIITDM</div>
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
              <div className="relative text-left">
                <p className="m-0">Lorem ipsum text about a paragraph on</p>
                <p className="m-0">the creative and talented works done by</p>
                <p className="m-0">tech affair.</p>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex flex-row items-start justify-start gap-[120px] text-left">
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="relative font-semibold text-center">Students</div>
=======
            <div className="flex flex-row items-start justify-start gap-[120px] text-left font-inter">
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="relative font-semibold text-center">
                  Students
                </div>
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px]">
<<<<<<< HEAD
                <div className="relative font-semibold text-center">Students</div>
=======
                <div className="relative font-semibold text-center">
                  Students
                </div>
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px]">
<<<<<<< HEAD
                <div className="relative font-semibold text-center">Students</div>
=======
                <div className="relative font-semibold text-center">
                  Students
                </div>
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="absolute top-[326.5px] left-[49.5px] box-border w-[1340px] h-px border-t-[1px] border-solid border-black" />
          <div className="absolute top-[338px] left-[50px] w-[1339px] flex flex-col items-start justify-start p-2.5 box-border text-left">
            <div className="w-[1329px] flex flex-row items-center justify-start gap-[757px]">
              <div className="relative">
                © Technical Affairs IIITDM. All rights reserved.
              </div>
              <div className="flex flex-row items-center justify-center gap-[18px]">
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/instagram.svg"
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/linkedin.svg"
                />
                <img
                  className="relative w-6 h-6 object-cover"
                  alt=""
                  src="/twitter-1-1@2x.png"
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/youtube.svg"
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/facebook.svg"
                />
=======
          <div className="flex flex-col items-start justify-start gap-[11px] text-left font-inter">
            <div className="relative box-border w-[1340px] h-px border-t-[1px] border-solid border-text-color" />
            <div className="w-[1339px] flex flex-col items-start justify-start p-2.5 box-border">
              <div className="w-[1329px] flex flex-row items-center justify-start gap-[799px]">
                <div className="relative">
                  © Technical Affairs IIITDM. All rights reserved.
                </div>
                <div className="flex flex-row items-center justify-center gap-[18px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/instagram.svg"
                  />
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/linkedin.svg"
                  />
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/youtube.svg"
                  />
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/facebook.svg"
                  />
                </div>
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    );
  };
  
  export default Home1;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
=======
    </div>
  );
};

export default Home1;
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
