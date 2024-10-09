function Contact() {
    return(
        <div id="contact" className="h-screen flex-wrap w-full bg-black flex flex-col items-center justify-center p-4 md:p-8">
            <h1 className="text-4xl md:text-5xl text-amber-500 mb-6 md:mb-10">Contact Details</h1>
            <div className="w-full flex flex-col md:flex-row justify-around flex-wrap-reverse">
            <div className="w-full md:w-1/2 p-5 text-white flex flex-col flex-wrap">
                <div className="flex mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-fill mr-3"  viewBox="0 0 16 16" color="#ffca28"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path></svg>
                mohanavamsi14@gmail.com
                </div>
                <div className="flex mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-fill mr-3" viewBox="0 0 16 16" color="#ffca28"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg>
                +91 6281605767
                </div>
                <div className="flex mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin mr-3" viewBox="0 0 16 16" color="#ffca28"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
                Mohana Vamsi
                </div>
            </div>
            <div className="w-full md:w-1/2 p-5">
                <h2 className="text-xl md:text-2xl text-amber-500 mb-4">How Can I Help You!</h2>
                <div className="border p-4 rounded-lg shadow-md flex flex-col space-y-4">
                    <input type="text" placeholder="Enter name" className="p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Enter email" className="p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea placeholder="Enter message" className="p-2 rounded text-balck focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
                    <button type="submit" className="bg-amber-500 text-white p-2 rounded hover:bg-red-600 transition duration-200">Submit</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Contact