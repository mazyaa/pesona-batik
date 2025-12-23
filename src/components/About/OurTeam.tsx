import React from "react";
import { FaUserTie } from "react-icons/fa6";

const OURTEAM = [
  {
    name: "Muhamad Ridho Alfarizi",
    role: "Founder & CEO",
    icon: FaUserTie,
  },
  {
    name: "Muhamad Azi Sudarya",
    role: "Project Manager",
    icon: FaUserTie,
  },
  {
    name: "Mochamad Maftuhi",
    role: "Developer & UI/UX Designer",
    icon: FaUserTie,
  },
  {
    name: "Ahmad Hanir Nur'aidzin",
    role: "Developer",
    icon: FaUserTie,
  }

];

const OurTeam = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-6 md:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="inline-block text-secondary font-medium text-sm tracking-wider uppercase mb-4">
            Tim Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Orang-Orang di Balik Karya
          </h2>
          <p className="text-gray-600 text-lg">
            Tim berdedikasi yang bekerja dengan penuh passion untuk menghadirkan
            batik terbaik bagi Anda.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {OURTEAM.map((team, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center w-full max-w-xs"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <team.icon className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {team.name}
              </h3>
              <p className="text-secondary font-medium">{team.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
