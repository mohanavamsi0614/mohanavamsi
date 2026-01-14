import hospo from "../assets/Screenshot 2024-10-06 144830.png"
import amu from "../assets/Screenshot 2024-10-06 150007.png"
import chayo from "../assets/Screenshot 2024-10-06 145452.png"
import codepen from "../assets/Screenshot 2024-10-06 150624.png"
import dino from "../assets/Screenshot 2024-10-06 151729.png"
import insta from "../assets/Screenshot 2024-10-06 152552.png"
import dasho from "../assets/dasho.png"
import lovable from "../assets/lovable.png"
import vercel from "../assets/vercel.png"
import arya from "../assets/arya.png"

function Projects() {
  const projects = [
    {
      title: "Hospo – Telemedicine Platform",
      description:
        "A scalable full-stack telemedicine platform enabling secure online consultations, encrypted medical records, and appointment management.",
      stack: "React, Node.js, Firebase, WebRTC, Twilio, MongoDB",
      features: [
        "Real-time video consultations using WebRTC",
        "Doctor & hospital registration system",
        "Encrypted prescriptions and medical records",
        "Medicine reminders using Twilio",
        "Scalable appointment scheduling system"
      ],
      image: hospo,
      githubLink: "https://github.com/mohanavamsi0614/Hospo",
      deployedLink: "https://hospo-ten.vercel.app/"
    },

    {
      title: "Dasho – Hackathon Management Platform",
      description:
        "A production-grade hackathon management platform used by over 500 users to manage registrations, teams, attendance, and evaluations.",
      stack: "React, Node.js, Express.js, MongoDB, Socket.io",
      features: [
        "Hackathon registration and team management",
        "Handled 500+ users during live events",
        "Team and organizer dashboards",
        "Attendance tracking and evaluation workflows",
        "Real-time updates using Socket.io",
        "Role-based access control (admin & participants)"
      ],
      image: dasho,
      githubLink: "https://github.com/mohanavamsi0614/dashoo_p",
      deployedLink: "https://dashoo-p.vercel.app"
    },
    {
      title: "Arya – Restaurant Management Website",
      description:
        "A full-featured restaurant website with a modern UI and an admin dashboard for managing menus, content, and customer reservations.",
      stack: "React, Node.js, Express.js, MongoDB",
      features: [
        "Modern, responsive UI for customers",
        "Dynamic food menu management",
        "Admin (owner) dashboard with secure login",
        "Add, update, and delete menu items and categories",
        "Online table reservation management",
        "Role-based access control (admin & customers)",
        "Database-driven content management system"
      ],
      image: arya,
      githubLink: "https://github.com/mohanavamsi0614/arya",
      deployedLink: "https://aryarestaurant.co.uk/"
    },

    {
      title: "Vercel Clone – Cloud Deployment Platform",
      description:
        "A Vercel-inspired deployment platform built to showcase cloud skills, using AWS S3 for static asset hosting and automated deployments.",
      stack: "Next.js, Node.js, AWS S3, Docker, Nginx",
      features: [
        "Frontend deployments using AWS S3",
        "Automated build and upload pipeline",
        "Cloud-based static asset hosting",
        "Deployment logs and status tracking",
        "CI-style workflow for frontend apps"
      ],
      image: vercel,
      githubLink: "https://github.com/mohanavamsi0614/vercel",
      deployedLink: ""
    },

    {
      title: "Chayoo – Real-Time Chat & Video App",
      description:
        "A peer-to-peer real-time chat and video calling application focused on low-latency communication and media sharing.",
      stack: "React, PeerJS, Socket.io, Express.js, MongoDB, Node.js",
      features: [
        "Peer-to-peer video and audio calls",
        "Real-time 1:1 chat using Socket.io",
        "Photo sharing between users",
        "Custom mic and camera controls",
        "Optimized for low-latency communication"
      ],
      image: chayo,
      githubLink: "https://github.com/kalviumcommunity/S60_Mohanavamsi_Chayo",
      deployedLink: "https://chayoo.vercel.app"
    },

    {
      title: "Instagram Clone",
      description:
        "A full-stack Instagram clone implementing core social media features with authentication and database-backed feeds.",
      stack: "React, SQL, Express.js, Node.js",
      features: [
        "User authentication system",
        "Post creation and feed rendering",
        "Like and comment functionality",
        "Backend API with SQL database"
      ],
      image: insta,
      githubLink: "https://github.com/mohanavamsi0614/insta-clone",
      deployedLink: "https://insta-clone-349q.onrender.com"
    },

    {
      title: "CodePen Clone",
      description:
        "A real-time code playground allowing users to write and preview HTML, CSS, and JavaScript instantly.",
      stack: "React",
      features: [
        "Live code editor",
        "Instant preview rendering",
        "Separate HTML, CSS, and JS panels",
        "Client-side performance optimization"
      ],
      image: codepen,
      githubLink: "https://github.com/mohanavamsi0614/codepen",
      deployedLink: "https://codepen2o.netlify.app/"
    },

    {
      title: "SpaceWars",
      description:
        "A browser-based game featuring keyboard-driven gameplay with multiple levels and score tracking.",
      stack: "React",
      features: [
        "Keyboard-based gameplay",
        "Level-based progression",
        "Score tracking system",
        "Optimized game loop rendering"
      ],
      image: dino,
      githubLink: "https://github.com/mohanavamsi0614/Space-wars",
      deployedLink: "https://s-pace-war.netlify.app"
    },

    {
      title: "Amrutha Vilas – Restaurant Menu Manager",
      description:
        "A lightweight web application for managing and updating restaurant menus dynamically for small businesses.",
      stack: "HTML, CSS, JavaScript",
      features: [
        "Dynamic menu creation",
        "Nested menu categories",
        "Real-time menu updates",
        "Simple and fast UI"
      ],
      image: amu,
      githubLink: "https://github.com/mohanavamsi0614/Amrutha-villas",
      deployedLink: "https://amrutha-vilas.netlify.app"
    }
  ];

  return (
    <div id="projects" className="min-h-screen py-20 w-full bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        Featured Projects
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 flex flex-col h-full border border-white/5 hover:border-amber-500/30"
          >
            {/* Image Container with Overlay */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-3 text-neutral-100 group-hover:text-amber-400 transition-colors">
                {project.title.split('–')[0]} {/* Shorten Title visual hack if needed, or just full title */}
              </h2>
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(',').slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {tech.trim()}
                    </span>
                  ))}
                  {project.stack.split(',').length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      +{project.stack.split(',').length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Separator Line */}
              <div className="h-px bg-white/10 w-full mb-6" />

              <div className="mt-auto flex items-center justify-between gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all hover:text-amber-400 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    Code
                  </a>
                )}

                {project.deployedLink && (
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    Demo
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
