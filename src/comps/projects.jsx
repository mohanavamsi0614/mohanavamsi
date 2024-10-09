import hospo from "../assets/Screenshot 2024-10-06 144830.png"
import amu from "../assets/Screenshot 2024-10-06 150007.png"
import chayo from "../assets/Screenshot 2024-10-06 145452.png"
import codepen from "../assets/Screenshot 2024-10-06 150624.png"
import dino from "../assets/Screenshot 2024-10-06 151729.png"
import insta from "../assets/Screenshot 2024-10-06 152552.png"
function Projects() {
    const projects = [
      {
        title: "Hospo - Telemedicine Platform",
        description: "A telemedicine platform enabling secure online consultations, doctor/hospital registration, encrypted medical records, and live medicine tracking.",
        stack: "React, Node.js, Firebase, WebRTC, Twilio",
        features: [
          "Video consultations using WebRTC",
          "Appointment scheduling with Firebase",
          "Encrypted prescriptions and medical records",
          "Medicine reminders with Twilio"
        ],
        image: hospo,  
        githubLink: "https://github.com/mohanavamsi0614/Hospo", 
        deployedLink: "https://hospo-ten.vercel.app/"  
      },
      {
        title: "Chayoo",
        description: "A peer-to-peer video call app with controls for starting, answering, and managing calls using PeerJS. And chanting with your friends with socket.io",
        stack: "React, PeerJS,Express.js,MongoDB,Node.js",
        features: [
          "Real-time video and audio communication",
          "Chat with users 1:1",
          "Share photos with all",
          "Custom controls for managing audio/video"
        ],
        image: chayo, 
        githubLink: "https://github.com/kalviumcommunity/S60_Mohanavamsi_Chayo", 
        deployedLink: "https://chayoo.vercel.app"
      },
      {
        title: "Amrutha-vilas",
        description: "An app for managing restaurant menus apis.",
        stack: "HTML, js, CSS",
        features: [
          "Dynamic menu creation and updates",
          "Nesting of menu items",
          "Real-time menu management"
        ],
        image:amu,
        githubLink: "https://github.com/mohanavamsi0614/Amrutha-villas",  
        deployedLink: "https://amrutha-vilas.netlify.app"  
      }, {
        title: "CodePen-Clone",
        description: "Clone of codepen where you can write your code.",
        stack: "React",
        features: [
            "Dynamic menu creation and updates",
            "Nesting of menu items",
            "Real-time menu management"
          ],
        image:codepen,
        githubLink: "https://github.com/mohanavamsi0614/codepen",  
        deployedLink: "https://codepen2o.netlify.app/"  
      },
      {
        title: "SpaceWars",
        description: "A game where you can play games the first level will be a dno run game and after it is a suprise you go and play.",
        stack: "React",
        features: [
            "Dynamic menu creation and updates",
            "Nesting of menu items",
            "Real-time menu management"
          ],
        image:dino,
        githubLink: "https://github.com/mohanavamsi0614/Space-wars",  
        deployedLink: "https://s-pace-war.netlify.app"  
      },
      {
        title: "Instagram",
        description: "A instagram clone",
        stack: "React,Sql,Express.js,Node.js",
        features: [
            "Dynamic menu creation and updates",
            "Nesting of menu items",
            "Real-time menu management"
          ],
        image:insta,
        githubLink: "https://github.com/mohanavamsi0614/insta-clone",  
        deployedLink: "https://insta-clone-349q.onrender.com"  
      },
      
    ];
  
    return (
      <div className="h-full w-full pt-40 bg-black flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl text-amber-500 mb-10">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover rounded-md mb-5"
              />
              <h2 className="text-2xl font-bold mb-3 text-amber-400">{project.title}</h2>
              <p className="mb-3">{project.description}</p>
              <p className="mb-3"><strong>Tech Stack:</strong> {project.stack}</p>
              <ul className="list-disc pl-5">
                <strong>Features:</strong>
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-sm">{feature}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a href={project.githubLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span className="mx-2">|</span>
                <a href={project.deployedLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Deployed</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
