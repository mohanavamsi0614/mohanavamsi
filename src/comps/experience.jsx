function Experience() {
    const experiences = [
        {
            role: "Software Engineer Intern",
            company: "Xavir AI",
            duration: "FEB 2025 - OCT 2025",
            description: [
                "Built large-scale web scraping pipelines to extract stock and financial data from multiple online sources.",
                "Implemented microservices-based architecture for scalable and maintainable data processing systems.",
                "Integrated MLflow to track machine learning experiments, models, and performance metrics.",
                "Worked extensively with AWS services including EC2, S3, DynamoDB, RDS, Lambda, and IAM.",
                "Optimized data pipelines for performance, fault tolerance, and production reliability.",
                "Designed and implemented end-to-end ETL workflows to clean, transform, and normalize raw market data.",
                "Loaded processed data into AWS DynamoDB for high-throughput access and AWS RDS for relational querying.",
                "Developed a custom SERP API to dynamically discover company websites and relevant financial data sources.",
            ],
            stack: "Python, Node.js, Web Scraping, ETL, AWS (EC2, S3, DynamoDB, RDS), Microservices, MLflow",
            color: "purple"
        },
        {
            role: "Software Engineer",
            company: "schmooze media",
            duration: "",
            description: [
                "Developed and maintained client websites using MERN and Golang.",
                "Ensured cross-browser compatibility and mobile responsiveness.",
                "Managed content updates and deployed sites to hosting platforms."
            ],
            stack: "MERN, Golang",
            color: "blue"
        }
    ];

    return (
        <div id="experience" className="min-h-screen w-full py-20 bg-black text-white relative overflow-hidden flex flex-col items-center">
            {/* Background Details */}
            <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Work Experience
            </h1>

            <div className="max-w-4xl w-full px-6 flex flex-col gap-8">
                {experiences.map((exp, index) => (
                    <div key={index} className={`relative pl-8 border-l-2 border-white/10 hover:border-${exp.color}-500 transition-colors duration-300`}>
                        <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-${exp.color}-500 shadow-[0_0_10px_rgba(${exp.color === 'purple' ? '168,85,247' : '59,130,246'},0.5)]`} />

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <span className={`text-${exp.color}-400 font-mono mt-2 md:mt-0`}>{exp.duration}</span>
                            </div>
                            <h4 className="text-xl text-neutral-300 mb-4">{exp.company}</h4>
                            <ul className="list-disc list-inside text-neutral-400 space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-6">
                                {exp.stack.split(',').map((tech, i) => (
                                    <span key={i} className={`px-3 py-1 bg-${exp.color}-500/20 text-${exp.color}-300 rounded-full text-sm border border-${exp.color}-500/30`}>
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
