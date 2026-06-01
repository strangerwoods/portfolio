
import { useState } from "react";
import {
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiPhp,
} from "react-icons/si";
import { FaCss3Alt, FaLinkedin, FaGithub, FaLink } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function App() {
  const resume = {
    name: "Alessandro Calianu",
    title: "Full Stack Web Developer",
    email: "alessandrocalianu3@gmail.com",
    phone: "+39 327 224 0524",
    location: "Provincia di Pordenone, Italia",
    linkedin: "https://www.linkedin.com/in/alessandro-calianu-217199214/",
    github: "https://github.com/fedstrial",
    github2: "https://github.com/strangerwoods",
    summary:
      "Appassionato di Linux e open source fin da giovane, sono una persona che ama imparare concetti nuovi e sono sempre disponibile ad acquisire nuove conoscenze. Lavoro bene in team, comunico con chiarezza e mi trovo a mio agio nella gestione agile dei progetti, con interesse a condividere il sapere e contribuire attivamente.",
    experience: [
      {
        id: 1,
        company: "Mediaprofili S.r.l.",
        position: "Operaio in linea di produzione",
        duration: "Ottobre 2023 - Febbraio 2025",
        description:
          "Responsabile alla lavorazione di pannelli di legno per la produzione di mobili, con attenzione alla qualita' e alla sicurezza. Ho acquisito competenze nella gestione di macchinari industriali, nel controllo qualita' e nella collaborazione con il team per garantire un flusso di lavoro efficiente.",
      },
    ],
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34C26" },
      { name: "JavaScript", icon: SiJavascript, color: "#FF9500" },
      { name: "Express.js", icon: SiExpress, color: "#90C53F" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
    languages: [
      { name: "Italiano", proficiency: "Madrelingua" },
      { name: "Rumeno", proficiency: "Madrelingua" },
      { name: "Inglese", proficiency: "B2 - Certificazione cambridge" },
      { name: "Francese", proficiency: "A1" },
    ],
    education: [
      {
        id: 1,
        school: "Boolean Academy Online - Milano",
        degree:
          "Conseguito il corso di formazione intensivo in Web Development",
        year: "2026",
        description:
          "Completato un corso intensivo di sviluppo web full-stack con React per il front-end e PHP/Laravel per il back-end, acquisendo competenze pratiche nella creazione di applicazioni web moderne.",
      },
      {
        id: 2,
        school: "Isis Mattiussi Pertini - Pordenone",
        degree: "Concluso il terzo anno di superiori con indirizzo economico ed informatico",
        year: "2023",
        description:
          "Primo approccio al mondo dell'informatica, con studio di programmazione in Java, C#, HTML, CSS e JavaScript, oltre a nozioni di economia aziendale e diritto.",
      },
    ],
    projects: [
      {
        id: 2,
        title: "Chronobox",
        description:
          "Progetto collaborativo per la gestione di un'azienda di scatole del tempo, con funzionalita' di gestione ordini e magazzino tramite un'interfaccia web user-friendly. Il progetto e' stato sviluppato con React per il front-end, Node.js ed Express per il back-end, e MySQL come database, implementando funzionalita' di autenticazione, gestione dei dati e interazione con l'utente.",
        tech: "React, Node.js, Express, MySQL",
        link: "https://github.com/Matteo-Ciardi/fe-chronobox",
      },
      {
        id: 3,
        title: "My-Mangas",
        description:
          "Web app per la gestione di una collezione personale di manga, con funzionalita' di aggiunta, modifica e rimozione dei titoli. Il progetto e' stato sviluppato con Laravel per il back-end, MySQL come database, Blade per il templating e Bootstrap per lo styling, offrendo un'interfaccia intuitiva per organizzare e visualizzare la propria collezione di manga.",
        tech: "Laravel, MySQL, Blade, Bootstrap",
        link: "https://github.com/strangerwoods/my-mangas-backend",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-slate-900 border-r border-slate-700 overflow-y-auto shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700 sticky top-0 bg-slate-900 z-10">
            <div className="flex gap-1">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-400 mb-1">{resume.name}</h1>
            <p className="text-sm text-emerald-400 mb-4 font-medium">
              $ {resume.title}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${resume.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm"
              >
                <MdEmail className="shrink-0" />
                <span className="truncate">{resume.email}</span>
              </a>
              <a
                href={`tel:${resume.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm"
              >
                <MdPhone className="shrink-0" />
                <span>{resume.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MdLocationOn className="shrink-0" />
                <span>{resume.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-blue-400 hover:text-blue-300"
              >
                <FaLinkedin />
              </a>
              <a
                href={resume.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-300 hover:text-emerald-400"
              >
                <FaGithub />
              </a>
              <a
                href={resume.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-300 hover:text-emerald-400"
              >
                <FaGithub />
              </a>
            </div>

            {/* Summary */}
            <div className="pt-6 border-t border-slate-700">
              <p className="text-xs text-slate-300 leading-relaxed">
                {resume.summary}
              </p>
            </div>

            {/* Languages */}
            {resume.languages.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h3 className="text-sm font-bold text-blue-400 mb-3">Lingue</h3>
                <div className="space-y-2">
                  {resume.languages.map((lang, idx) => (
                    <div key={idx} className="text-xs">
                      <p className="font-semibold text-emerald-400">{lang.name}</p>
                      <p className="text-slate-400">
                        {lang.proficiency}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Skills Section */}
          <section className="p-8 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="text-emerald-400">[</span> Skills{" "}
              <span className="text-emerald-400">]</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {resume.skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-800 border border-slate-700 rounded-lg p-3 hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-1 cursor-pointer group"
                    style={{
                      borderColor: skill.color + "40",
                    }}
                  >
                    <Icon
                      className="text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform"
                      style={{ color: skill.color }}
                    />
                    <p className="text-xs font-semibold text-slate-300 text-center group-hover:text-blue-400">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Education Section */}
          <section className="p-8 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="text-emerald-400">[</span> Educazione{" "}
              <span className="text-emerald-400">]</span>
            </h2>
            <div className="space-y-4">
              {resume.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-slate-800 border-l-4 border-emerald-400 p-4 hover:bg-slate-700 transition-colors"
                >
                  <p className="text-emerald-400 font-semibold text-sm mb-1">
                    {edu.degree}
                  </p>
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <p className="text-blue-400 font-bold">{edu.school}</p>
                    <p className="text-slate-400 text-sm">
                      {edu.year}
                    </p>
                  </div>
                  {edu.description && (
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="p-8 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="text-emerald-400">[</span> Progetti{" "}
              <span className="text-emerald-400">]</span>
            </h2>
            <div className="space-y-4">
              {resume.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800 border-l-4 border-emerald-400 p-4 hover:border-blue-400 transition-colors group"
                >
                  <h3 className="text-lg font-bold text-blue-400 mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <p className="text-xs text-slate-400 font-mono">
                      {project.tech}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <FaLink className="text-xs" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="p-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="text-emerald-400">[</span> Esperienza{" "}
              <span className="text-emerald-400">]</span>
            </h2>
            <div className="space-y-4">
              {resume.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-slate-800 border-l-4 border-emerald-400 p-4 hover:bg-slate-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <p className="text-blue-400 font-bold">{exp.company}</p>
                    <p className="text-slate-400 text-sm">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="text-emerald-400 font-semibold text-sm mb-2">
                    {exp.position}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

