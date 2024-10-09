const About = () => {
    return (
        <div id="about" className="h-full p-8  flex-wrap w-full bg-black flex flex-col  items-center text-white">
            <h1 className="text-5xl text-amber-500 mb-10">About Me</h1>
            <div className="mt-8 text-white">
                <h2 className="text-3xl mb-4">Education Timeline</h2>
                <div className="relative">
                    <ul className="list-none pl-0">
                        <li className="mb-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">1</div>
                                <div className="ml-4">
                                    <h3 className="text-xl">High School: Sri prakash Vidyanikathan - 2021</h3>
                                </div>
                            </div>
                        </li>
                        <li className="mb-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">2</div>
                                <div className="ml-4">
                                    <h3 className="text-xl">Junior College: Green Field School International- 2023</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">3</div>
                                <div className="ml-4">
                                    <h3 className="text-xl">Current Institution: Kalasalingam<b className=" text-red-500 font-mono"> X </b>Kalvium </h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <h1 className="text-3xl text-indigo-500 mt-10">MySelf</h1>
            <div className=" w-full h-auto flex lg:flex-nowrap flex-wrap justify-between m-4 items-center"> 
                <div><video src="https://www.meesho.io/img/home/banner.mp4" autoPlay playsInline className=" rounded"></video></div>
                <div>
                <p className=" text-justify text-xl mr-6 mt-32">
                    Full stack web developer with specialization in JavaScript, HTML, CSS, React, REST API, and Git/GitHub. I have hands-on expertise in developing website features. I excel in analytical decision-making and  i am an articulate presenter, capable of communicating technical information clearly and concisely.
                </p>
                </div>
            </div>         
            </div>
    );
};

export default About;
