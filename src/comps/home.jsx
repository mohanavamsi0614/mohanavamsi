import resume from "../assets/first resume-1.pdf"
import mohana from "../assets/1000024332-removebg-preview.png"
function Home() {
    return (
                <div id="home" className=" h-screen flex-wrap-reverse w-full bg-black text-white flex justify-around items-center ">
                <div className="">
                <p className="text-4xl mb-3">Namaste I'm <i className=" font-bold text-amber-400 ">Mohana Vamsi G</i> </p>
                <p className="text-2xl">Aspiring <b className="  font-bold text-amber-400 text-xl">Developer</b> </p>
                <div className=" flex items-center m-5"> 
                <div className=" m-4">
                    <a href="https://github.com/Mohanavamsi0614"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                </div>
                <div className=" m-4">
                    <a href="www.linkedin.com/in/mohana-vamsi-gangisetti"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg></a>
                </div>
                <div className=" m-4">
                    <a href="https://g.dev/mohanavamsi"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB--PQkTQujMNBpQM7jIDjUuut6zBFc2JBxw&s" className=" size-8 rounded-full"/></a>
                </div>
                </div> 
                <div><a href={resume} download><button className=" bg-amber-500 text-white p-4 rounded-lg text-lg" >Download Resume </button></a></div>
                </div>
                <div className=""><img src={mohana} className="  size-72 hover:h-96 hover:w-96 hover:rounded-2xl rounded-full bg-white transition-all duration-200"/></div>
                </div>

    )
}
export default Home