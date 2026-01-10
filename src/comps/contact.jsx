function Contact() {
    return (
        <div id="contact" className="min-h-screen w-full bg-black text-white relative overflow-hidden flex items-center justify-center py-20 px-6">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 z-10">
                {/* Left Side: Contact Info */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
                    <div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 group p-4 glass-card rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-white/5">
                            <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400 group-hover:text-amber-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-neutral-400">Email Me</p>
                                <p className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">mohanavamsi14@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 group p-4 glass-card rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-white/5">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-neutral-400">Call Me</p>
                                <p className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">+91 6281605767</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 group p-4 glass-card rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-white/5">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-neutral-400">LinkedIn</p>
                                <p className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">Mohana Vamsi</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2">
                    <form className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400 ml-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400 ml-1">Your Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400 ml-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Project inquiry..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;