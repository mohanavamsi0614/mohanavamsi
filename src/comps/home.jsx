import resume from "../assets/mohana_vamsi_G.pdf"
import mohana from "../assets/1000024332-removebg-preview.png"

function Home() {
    return (
        <div id="home" className="min-h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl px-8 lg:px-16 z-10">
                {/* Text Section */}
                <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 space-y-6">
                    <p className="text-xl md:text-2xl text-neutral-400 font-light">Namaste, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tight">
                        <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                            Mohana Vamsi G
                        </span>
                    </h1>
                    <p className="text-2xl md:text-4xl text-neutral-300">
                        Aspiring <span className="font-semibold text-amber-500">Developer</span>
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-6 mt-4">
                        <a href="https://github.com/Mohanavamsi0614" target="_blank" rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-white/10 p-2 rounded-full glass">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/mohana-vamsi-gangisetti" target="_blank" rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-blue-400 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 p-2 rounded-full glass">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
                        </a>
                        <a href="https://g.dev/mohanavamsi" target="_blank" rel="noopener noreferrer"
                            className="size-12 rounded-full glass overflow-hidden border-2 border-transparent hover:border-amber-500 transition-all transform hover:scale-110">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB--PQkTQujMNBpQM7jIDjUuut6zBFc2JBxw&s" className="w-full h-full object-cover" />
                        </a>
                    </div>

                    <div className="mt-8">
                        <a href={resume} download>
                            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white font-bold text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end mb-12 lg:mb-0 relative">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-transparent rounded-full opacity-20 blur-2xl animate-pulse"></div>
                        <img
                            src={mohana}
                            className="w-full h-full object-cover rounded-2xl glass-card rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105"
                            alt="Mohana Vamsi"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home