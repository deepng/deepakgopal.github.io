import { ProfilePic } from "@/components/view-source";
import Image from "next/image";

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto">
            <section className="mb-12">
                <h1 className="text-3xl font-bold mb-6">About Me</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <div className="aspect-square bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-6xl">
                            <Image
                                src={ProfilePic()}
                                alt="Profile Picture"
                                width={300}
                                height={300}
                                className="rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg mb-4">
                            Hello! I am Deepak Gopal, a Software Engineering Leader with 21 years of experience in helping
                            organizations ship high-quality, scalable products by building strong engineering teams,
                            processes, and frameworks.
                        </p>
                        <p className="text-lg mb-4">
                            In the last 5 years, I have helped product and client engineering teams become more efficient,
                            reduce production issues by 15% YOY, and increase CSAT scores from 3.4 to 4.5.
                        </p>
                        <p className="text-lg">
                            My career vision is to lead teams, initiatives, and people while delivering great products
                            for my clients. I aspire to be a technology and product owner who combines deep technical expertise with
                            strong leadership skills to drive innovation and excellence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Leadership</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Building & mentoring cross-functional teams</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Cross-geography team management</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Collaboration with stakeholders</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Engineering & release processes</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Java, Python, Typescript</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Appium, Cypress, Cucumber, Selenium, Playwright</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Node.js, React.js, TestNG</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>MongoDB, ElasticSearch, MySQL</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>AI Cients: Cursor, GitHub Co-pilot, Claude code, Roo code</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Experience</h2>
                <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">Lead Consultant</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">BCG through EqualExperts | Oct 2025 - Present</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
                            <li>Devising strategy and process as an innovation partner for BCG-Legal teams software practices</li>
                            <li>Building test frameworks for all software applications in the BCG-Legal team</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">Senior Engineering Manager</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Vymo (SaaS platform serving BFSI clients) | Jan 2018 - Sep 2025</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
                            <li>Improved CSAT from 3.4 to 4.5 by leading lending and insurance engineering efforts</li>
                            <li>Achieved 50% increase in engineering productivity through end-to-end automation framework</li>
                            <li>Enabled 100% faster, high-quality deliveries by automating release processes with CI/CD</li>
                            <li>Assisted in client base growth from 5 to 50 by strengthening quality initiatives</li>
                            <li>Implemented engineering-wide quality metrics influencing company OKRs</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">QA Manager</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Commonfloor (acquired by Quikr) | Aug 2014 - Dec 2017</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
                            <li>Reduced release regression time from 3 days to 4 hours through automation frameworks</li>
                            <li>Guided product direction through A/B testing metrics and analysis</li>
                            <li>Maximized web performance by implementing monitoring and reporting strategies</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">Project Lead</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Tech Mahindra | Mar 2004 - Aug 2014</p>
                        <ul className="mt-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
                            <li>Managed quality and release of multiple Google products including Chrome on Mac and ChromeOS</li>
                            <li>Maintained British Petroleum main ERP system using Oracle PL/SQL</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-semibold">Bachelor of Engineering in Telecommunication</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">SJCIT (VTU) | 1999 - 2003</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold">Cybersecurity for Leaders</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Indian School of Business (ISB) | 2025</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Leadership Philosophy</h2>
                    <p className="text-lg mb-4">
                        As a technology leader, I believe in leading by example while empowering teams to innovate and excel. My approach combines:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc">
                        <li className="text-zinc-700 dark:text-zinc-300">
                            <span className="font-semibold">Technical Excellence</span>: Building robust systems and processes that scale
                        </li>
                        <li className="text-zinc-700 dark:text-zinc-300">
                            <span className="font-semibold">People Development</span>: Mentoring and growing talent to reach their potential
                        </li>
                        <li className="text-zinc-700 dark:text-zinc-300">
                            <span className="font-semibold">Process Innovation</span>: Continuously improving how we work to deliver better results
                        </li>
                        <li className="text-zinc-700 dark:text-zinc-300">
                            <span className="font-semibold">Client Focus</span>: Understanding business needs to drive meaningful solutions
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}