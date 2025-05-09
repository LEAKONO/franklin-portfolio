import { FiAward, FiBook } from 'react-icons/fi'
import { memo } from 'react';


const education = [
  {
    degree: "MA. International Peace Studies",
    institution: "United Nations University for Peace",
    year: "2010",
    description: "Thesis: Private Peace Private War: PMFs role in future UN PKO ops and the prospects of a UN standing Army. Valedictorian class of 2010.",
    icon: <FiAward className="text-purple-400" />
  },
  {
    degree: "BSc. International Business Administration",
    institution: "United States International University-Africa",
    year: "2005",
    description: "Second Class Upper division. Minor in International Relations. Dean's List 2002-2004.",
    icon: <FiBook className="text-blue-400" />
  }
]

const certifications = [
  "Integrated Mission Planning Course - EASF, IPSTC (2024)",
  "SSR/DDR SWISS International Defense - IPSTC (2024)",
  "United Nations Civil Military Coordination - BPST (2019)",
  "Conflict Analysis & Prevention Course - IPSTI (2017)",
  "Preventive Diplomacy & Early Warning - IPSTI (2013)",
  "IPT Specialization Course on Women in Armed Conflict - ASPR (2010)"
]

const EducationCard = memo(({ edu }) => {
  return (
    <div className="p-6 bg-gray-800/80 rounded-xl border-l-4 border-purple-600">
      <div className="flex items-start mb-4">
        <div className="p-3 mr-4 rounded-full bg-purple-600/20">
          {edu.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-purple-300">{edu.institution}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">{edu.year}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-300">{edu.description}</p>
    </div>
  )
});

const School = memo(() => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Education & Certifications</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {education.map((edu) => (
          <EducationCard key={edu.degree} edu={edu} />
        ))}
      </div>
      
      <div className="bg-gray-800/80 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">Professional Certifications</h2>
        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li key={cert} className="text-gray-300 flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
});

export default School;