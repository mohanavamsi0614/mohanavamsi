import React from 'react';

const About = () => {
    const education = [
        {
            id: 1,
            role: "High School",
            place: "Sri Prakash Vidyanikathan",
            year: "2021",
            color: "bg-red-500"
        },
        {
            id: 2,
            role: "Junior College",
            place: "Green Field School International",
            year: "2023",
            color: "bg-blue-500"
        },
        {
            id: 3,
            role: "B.Tech (CSE)",
            place: "Kalasalingam University x Kalvium",
            year: "Present",
            color: "bg-green-500"
        }
    ];

    return (
        <div id="about" className="min-h-screen py-20 w-full bg-black text-white flex flex-col items-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl w-full px-6 z-10">
                <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    About Me
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Education Timeline */}
                    <div className="glass p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-8 text-neutral-200">Education Journey</h2>
                        <div className="relative border-l-2 border-neutral-700 ml-4 space-y-12">
                            {education.map((item) => (
                                <div key={item.id} className="relative pl-8 group">
                                    <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-125 transition-transform duration-300`}></div>
                                    <div className="relative p-6 glass-card rounded-xl hover:-translate-y-1 duration-300">
                                        <span className="absolute -top-3 right-4 px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400 border border-neutral-700">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-amber-500">{item.role}</h3>
                                        <p className="text-neutral-300 mt-2">{item.place}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Self Intro */}
                    <div className="space-y-8">
                        <div className="glass p-8 rounded-2xl h-full flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6 text-neutral-200">Who I Am</h2>
                            <p className="text-lg text-neutral-300 leading-relaxed space-y-4">
                                I am a passionate <span className="text-amber-500 font-bold">Full Stack Developer</span> specialized in building scalable web applications.
                                <br /><br />
                                With expertise in the <span className="text-amber-500">MERN stack</span>, I love translating complex problems into elegant, user-friendly solutions.
                                My journey is driven by curiosity and a relentless desire to create impact through code.
                            </p>

                            <div className="mt-8 flex gap-4">
                                <div className="flex flex-col items-center p-4 glass-card rounded-lg flex-1">
                                    <span className="text-3xl font-bold text-amber-500">10+</span>
                                    <span className="text-sm text-neutral-400">Projects</span>
                                </div>
                                <div className="flex flex-col items-center p-4 glass-card rounded-lg flex-1">
                                    <span className="text-3xl font-bold text-amber-500">20+</span>
                                    <span className="text-sm text-neutral-400">Skills</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 rounded-2xl overflow-hidden glass border border-white/10 relative group">
                            <video
                                src="https://www.meesho.io/img/home/banner.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            ></video>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <p className="text-white text-xl font-bold bg-black/50 px-6 py-2 rounded-full backdrop-blur-sm">
                                    Coding with Passion
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
