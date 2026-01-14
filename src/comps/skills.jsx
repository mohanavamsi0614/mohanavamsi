import nextjs from "../assets/download-removebg-preview.png"
import suap from "../assets/download-removebg-preview (2).png"
import bun from "../assets/download-removebg-preview (3).png"
import jwt from "../assets/download-removebg-preview (4).png"
import click from "../assets/download-removebg-preview (5).png"
import docker from "../assets/docker-mark-blue.png"
import vercel from "../assets/vercel.png"

function Skills() {
    return (
        <div id="skills" className="min-h-screen w-full py-20 bg-black text-white relative overflow-hidden flex flex-col items-center">
            {/* Background Elements */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Skills & Technologies
            </h1>

            <div className="max-w-7xl w-full px-6 flex flex-col items-center">

                {/* Frontend Section */}
                <div className="w-full mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-neutral-200 border-l-4 border-amber-500 pl-4">Frontend</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#E34F26"><path d="M71,460 L30,0 481,0 440,460 255,512" /><path d="M256,472 L405,431 440,37 72,37 107,431" fill="#EF652A" /><path d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265 zM256,355 L255,355 192,338 188,293 158,293 132,293 139,389 256,421 z" fill="#FFFFFF" /><path d="M255,208 L255,265 325,265 318,338 255,355 255,421 371,389 372,377 385,236 387,208 371,208 zM255,94 L255,129 255,150 255,150 392,150 392,150 395,115 396,94 255,94 z" fill="#FFFFFF" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors">HTML5</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#1572B6"><path d="M30,0 L481,0 440,460 255,512 71,460" /><path d="M256,472 L405,431 440,37 72,37 107,431" fill="#33A9DC" /><path d="M256,208 L381,208 387,150 256,150 256,94 256,94 114,94 115,109 129,265 256,265 zM256,355 L255,355 192,338 188,293 158,293 132,293 139,389 256,421 z" fill="#FFFFFF" /><path d="M255,208 L255,208 255,265 325,265 318,338 255,355 255,421 371,389 372,377 385,236 385,236 387,208 371,208 zM255,94 L255,94 255,129 255,150 255,150 392,150 392,150 395,115 396,94 255,94 z" fill="#FFFFFF" transform="scale(-1, 1) translate(-510, 0)" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-blue-400 transition-colors">CSS3</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#F7DF1E"><rect width="512" height="512" rx="15%" /><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" fill="#000000" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-yellow-400 transition-colors">JavaScript</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" fill="#00d8ff" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" fill="#00d8ff" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" fill="#00d8ff" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-cyan-400 transition-colors">React</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00bfff"><path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.326 2.167-1.822 3.5-1.491.761-.189 1.305-.738 1.907-1.345.98-.99 2.114-2.134 4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-cyan-500 transition-colors">Tailwind</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <img src={nextjs} alt="NextJS" className="w-16 h-16 object-contain" />
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-white transition-colors">Next.js</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="28" height="28" rx="2" fill="#3178C6" /><path d="M18.5,24v3a6.5,6.5,0,0,0,1.8.6,11.6,11.6,0,0,0,2.1.2,10,10,0,0,0,2.1-.2,5.1,5.1,0,0,0,1.7-.7,3.5,3.5,0,0,0,1.2-1.3,4.5,4.5,0,0,0,.2-3.4,3.4,3.4,0,0,0-.7-1.1,5.2,5.2,0,0,0-1.1-.9,12,12,0,0,0-1.5-.7c-.4-.2-.7-.3-1.1-.5a5.5,5.5,0,0,1-.8-.5,2.1,2.1,0,0,1-.5-.5,1.1,1.1,0,0,1-.2-.6,1,1,0,0,1,.2-.6,1.4,1.4,0,0,1,.5-.4,2.4,2.4,0,0,1,.7-.3,4.2,4.2,0,0,1,1-.1,5.9,5.9,0,0,1,.8.1,6.3,6.3,0,0,1,.9.2,6,6,0,0,1,.8.3,4.6,4.6,0,0,1,.8.4V14a7.5,7.5,0,0,0-1.5-.4,12.4,12.4,0,0,0-1.9-.1,8.8,8.8,0,0,0-2.1.2,5.2,5.2,0,0,0-1.7.7,3.6,3.6,0,0,0-1.2,1.3,3.7,3.7,0,0,0-.4,1.8,3.6,3.6,0,0,0,.8,2.3,6,6,0,0,0,2.4,1.6,12.4,12.4,0,0,0,1.2.5,6.5,6.5,0,0,1,1,.5,2.5,2.5,0,0,1,.6.6,1.2,1.2,0,0,1,.2.7,1.1,1.1,0,0,1-.1.6,1.3,1.3,0,0,1-.4.4,2.4,2.4,0,0,1-.7.3,4.4,4.4,0,0,1-1,.1,5.8,5.8,0,0,1-2-.4,5.9,5.9,0,0,1-1.6-.9Zm-5.2-7.6h4v-2.5h-4v2.5H9.9v10.8h3.2V16.4Z" fill="#FFF" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-blue-500 transition-colors">TypeScript</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.9,2.1c-7.1,0-6.7,3.1-6.7,3.1V8.4h6.8v1H6.5s-4.5.3-4.5,7.5s4,7,4,7H8.3v-6.5c0-4,4-4,4-4h6.7s3.8.1,3.8-3.7V5.8s.6-3.7-6.8-3.7ZM12.2,4.2a1.2,1.2,0,1,1-1.2,1.2v0A1.2,1.2,0,0,1,12.2,4.2Z" fill="#387eb8" /><path d="M16.1,29.9c7.1,0,6.7-3.1,6.7-3.1V23.6H16v-1h9.4s4.5-.3,4.5-7.5s-4-7-4-7H23.6v6.5c0,4-4,4-4,4H13s-3.8-.1-3.8,3.7V26.2s-.6,3.7,6.8,3.7ZM19.8,27.8a1.2,1.2,0,1,1,1.2-1.2v0A1.2,1.2,0,0,1,19.8,27.8Z" fill="#ffe052" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-yellow-300 transition-colors">Python</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM22.5,10.6l-5.3,13.3H14.8L12,17.2,10.8,20h-3L11.5,10h3.2l2.3,6,2.2-5.4Z" fill="#764ABC" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-purple-400 transition-colors">Redux</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#D40001"><path d="M0,0h24v24H0z" fill="none" /><path d="M20,4H4v16h8V8h4v12h4V4z" fill="#D40001" /><rect x="4" y="4" width="16" height="16" fill="none" stroke="#D40001" strokeWidth="2" /><path d="M0,0h24v24H0z" fill="none" /><path d="M5,5v14h14V5H5z M10,15H8V9h2V15z M13,15h-2V9h2V15z M16,15h-2V9h2V15z" fill="#FFF" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-red-500 transition-colors">Npm</p>
                        </div>
                    </div>
                </div>

                {/* Backend Section */}
                <div className="w-full mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-neutral-200 border-l-4 border-green-500 pl-4">Backend</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#539E43"><path d="M16,2.3A13.7,13.7,0,0,0,2.3,16,13.7,13.7,0,0,0,16,29.7,13.7,13.7,0,0,0,29.7,16,13.7,13.7,0,0,0,16,2.3ZM23.4,22.2H20.7V17.5a2,2,0,0,0-2-2H17.4v6.7H14.7V12.1h4.9a4.8,4.8,0,0,1,3.8,4.8Z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-green-500 transition-colors">Node.js</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" fill="#353535" /><path d="M22.5,14l-8-5.3L6.5,14v9.3h5V17.5l4.5,3l4.5-3v5.8h5V14Z" fill="#353535" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-gray-400 transition-colors">Express.js</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256,256-114.6,256-256S397.4,0,256,0Zm0,472.9C136.2,472.9,39.1,375.8,39.1,256S136.2,39.1,256,39.1,472.9,136.2,472.9,256,375.8,472.9,256,472.9Z" fill="#13aa52" /><path d="M266,236c0-21.5-17.5-39-39-39s-39,17.5-39,39,17.5,39,15.5,69c.5,8,7,30,7,30l6.5,75.5c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5l6-93c0-24.5,15.5-59.5,15.5-81.5Z" fill="#3cd757" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-green-400 transition-colors">MongoDB</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.6,18.5L4.4,17l6.6-13l3.2,6.3l1.8,3.5l1.6-2.9l1.7,1.1l-3.3,5.7l-3.5-6.8L6.8,18.5H3.6z" fill="#FFC107" /><path d="M12.7,10.2L11,6.8L4.4,18.5h3.3L12.7,10.2z" fill="#FFA000" /><path d="M12.7,10.2l-1.9,3.7l3.7,4.6L12.7,10.2z" fill="#FFCA28" /><path d="M14.5,18.5l-2.4-4.8l2.4-4.3l1.8,3.5L14.5,18.5z" fill="#F57C00" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors">Firebase</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <img src={suap} alt="SupaBase" className="w-16 h-16 object-contain" />
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-emerald-400 transition-colors">SupaBase</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <img src={bun} alt="Bun" className="w-16 h-16 object-contain" />
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-pink-200 transition-colors">BunJS</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#ffffff"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /><circle cx="12" cy="12" r="5" fill="#ffffff" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-white transition-colors">SocketIO</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#4285F4" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-blue-400 transition-colors">Google Cloud</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#ffffff"><path d="M12,2L2,22h20L12,2z M12,6l6,14H6L12,6z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-white transition-colors">SQL</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">H</p>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-purple-400 transition-colors">Hasura</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <img src={jwt} alt="JWT" className="w-16 h-16 object-contain" />
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-pink-500 transition-colors">JWT</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <img src={docker} alt="Docker" className="w-16 h-16 object-contain" />
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-blue-400 transition-colors">Docker</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#FF9900"><path d="M16 2L2 22h28L16 2zm0 4.5l8.5 12H7.5L16 6.5z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-amber-500 transition-colors">AWS</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#D82C20"><path d="M16 2L2 9l14 7 14-7-14-7zM2 23l14 7 14-7v-8L16 22 2 15v8z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-red-500 transition-colors">Redis</p>
                        </div>
                    </div>
                </div>



                {/* Data & Automation Section */}
                <div className="w-full mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-neutral-200 border-l-4 border-purple-500 pl-4">Data & Automation</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-blue-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-blue-400 transition-colors">Data Engineering</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-green-400"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-green-400 transition-colors">Web Scraping</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-green-500"><path d="M9 18a6 6 0 1 1 6-6M9 22V12h6" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-green-500 transition-colors">Puppeteer</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-orange-500"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-orange-500 transition-colors">Playwright</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-indigo-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4M12 3v18M3 8l9 5 9-5M3 16l9 5 9-5" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-indigo-400 transition-colors">Data Mgmt</p>
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="w-full">
                    <h2 className="text-3xl font-bold mb-8 text-neutral-200 border-l-4 border-blue-500 pl-4">Tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center mb-16">
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#00C7B7"><path d="M12,2L2,22h20L12,2z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-teal-400 transition-colors">Netlify</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <p className="text-4xl font-bold text-white">R</p>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-white transition-colors">Render</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <img src={vercel} alt="Vercel" className="w-16 h-16 rounded-full object-contain bg-white" />
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-white transition-colors">Vercel</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <img src={click} alt="ClickUp" className="w-16 h-16 object-contain" />
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-purple-500 transition-colors">ClickUp</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#0052CC"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z" /><rect x="11" y="7" width="2" height="10" fill="#ffffff" transform="rotate(45 12 12)" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-blue-600 transition-colors">Jira</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#ffffff"><path d="M12,2C6.5,2,2,6.5,2,12c0,4.4,2.9,8.1,6.8,9.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4 -.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8 .1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 -.1-.3-.4-1.3.1-2.7 0,0 .9-.3 2.8,1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7 .6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1,20.1,22,16.4,22,12 C22,6.5,17.5,2,12,2z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-gray-400 transition-colors">GitHub</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#007ACC"><path d="M23,12L1,2l3.4,20L23,12z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-blue-500 transition-colors">VsCode</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#F05032"><path d="M12,2L2,22h20L12,2z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-red-500 transition-colors">Git</p>
                        </div>
                        <div className="p-6 glass-card rounded-xl flex flex-col items-center justify-center w-full h-full hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#FF6C37"><path d="M12,2L2,22h20L12,2z" /></svg>
                            <p className="text-center mt-4 font-semibold text-neutral-300 group-hover:text-orange-500 transition-colors">Postman</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Skills;
