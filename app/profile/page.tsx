import Image from "next/image";

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto">
            <section className="mb-12">
                <h1 className="text-3xl font-bold mb-6">About Me</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <div className="aspect-square bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-6xl">
                            DG
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg mb-4">
                            Hello! I am Deepak Gopal, a passionate software developer with expertise in frontend and backend technologies.
                            I enjoy creating efficient, scalable, and user-friendly applications that solve real-world problems.
                        </p>
                        <p className="text-lg mb-4">
                            With several years of experience in the industry, I have worked on various projects ranging from web applications
                            to mobile apps and enterprise solutions.
                        </p>
                        <p className="text-lg">
                            When I am not coding, you can find me exploring new technologies, contributing to open-source projects,
                            or sharing my knowledge through blog posts and technical articles.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>React.js / Next.js</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>TypeScript / JavaScript</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>HTML5 / CSS3</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Tailwind CSS / SCSS</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Backend</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Node.js / Express</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Python / Django</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>RESTful APIs / GraphQL</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>MongoDB / PostgreSQL</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Experience</h2>
                <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">Senior Software Developer</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Company Name | 2022 - Present</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
                            <li>Led the development of a high-traffic web application using Next.js and TypeScript</li>
                            <li>Implemented CI/CD pipelines to streamline the deployment process</li>
                            <li>Mentored junior developers and conducted code reviews</li>
                        </ul>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">Software Developer</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Previous Company | 2019 - 2022</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
                            <li>Developed and maintained multiple web applications using React.js</li>
                            <li>Collaborated with UX/UI designers to implement responsive designs</li>
                            <li>Integrated third-party APIs and services</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">University Name | 2015 - 2019</p>
                    <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                        Graduated with honors. Specialized in software engineering and data structures.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold">AWS Certified Developer</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Amazon Web Services | 2023</p>
                    </div>
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold">Professional Scrum Master I</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Scrum.org | 2022</p>
                    </div>
                </div>
            </section>
        </div>
    );
}