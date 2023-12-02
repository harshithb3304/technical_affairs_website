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
              <div className="relative text-left">
                <p className="m-0">Lorem ipsum text about a paragraph on</p>
                <p className="m-0">the creative and talented works done by</p>
                <p className="m-0">tech affair.</p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[120px] text-left">
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="relative font-semibold text-center">Students</div>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="relative font-semibold text-center">Students</div>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="relative font-semibold text-center">Students</div>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
            </div>
          </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home1;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  