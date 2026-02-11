import { workExperience } from "../../data/workExperience";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// Generate static params for all work experiences
export async function generateStaticParams() {
    return workExperience.map((work) => ({
        id: work.id,
    }));
}

export default async function WorkPage(props: PageProps) {
    const params = await props.params;
    const work = workExperience.find((w) => w.id === params.id);

    if (!work) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Home
                </Link>

                <header className="mb-12 border-b border-zinc-800 pb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2">
                                {work.title}
                            </h1>
                            <h2 className="text-xl text-gray-400 font-medium">
                                {work.role} <span className="text-zinc-600 mx-2">|</span> {work.company}
                            </h2>
                        </div>
                        <div className="text-zinc-500 font-mono text-lg">
                            {work.year}
                        </div>
                    </div>
                </header>

                <section className="prose prose-invert max-w-none mb-12">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Overview</h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        {work.overview}
                    </p>

                    {work.responsibilities && work.responsibilities.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Key Responsibilities</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {work.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {work.achievements && work.achievements.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Key Achievements</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {work.achievements.map((ach, index) => (
                                    <li key={index}>{ach}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                {work.skills && work.skills.length > 0 && (
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 text-white">Skills & Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {work.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-gray-300 text-sm hover:border-zinc-700 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {work.transcript && (
                    <section className="mt-12">
                        <h3 className="text-2xl font-semibold mb-6 text-white">Academic Transcript</h3>
                        <div className="space-y-8">
                            {work.transcript.map((semester, index) => (
                                <div key={index} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                                    <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
                                        <h4 className="text-lg font-medium text-white">{semester.name}</h4>
                                        <span className="text-sm text-zinc-400">QCA: <span className="text-white font-mono">{semester.qca}</span></span>
                                    </div>
                                    <div className="grid gap-2">
                                        {semester.modules.map((module, modIndex) => (
                                            <div key={modIndex} className="flex justify-between items-center text-sm">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-mono text-zinc-500 w-16">{module.code}</span>
                                                    <span className="text-gray-300">{module.title}</span>
                                                </div>
                                                <span className={`font-mono font-medium ${module.grade.startsWith('A') ? 'text-green-400' :
                                                    module.grade.startsWith('B') ? 'text-blue-400' :
                                                        'text-zinc-400'
                                                    }`}>{module.grade}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
