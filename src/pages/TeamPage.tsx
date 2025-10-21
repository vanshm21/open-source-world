import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaUsers,
  FaCode,
  FaGlobe,
  FaHeart,
  FaMapMarkerAlt,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";
import { Star, Award } from "lucide-react";
import { itemVariants, containerVariants } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const TeamPage: React.FC = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");

  // Section background styles
  const sectionBg =
    theme === "light"
      ? "section-padding bg-gradient-to-br from-[#f8fafc] to-[#e8f4fd]"
      : "section-padding bg-gradient-to-br from-[#0a0e14] to-[#1a2332]";

  const alternateBg =
    theme === "light"
      ? "section-padding bg-white"
      : "section-padding bg-[#1a2332]";

  const cardBg =
    theme === "light"
      ? "bg-white shadow-lg hover:shadow-xl border border-[#e2e8f0]"
      : "bg-[#1a2332] shadow-lg hover:shadow-2xl border border-[#334155]";

  const textPrimary = theme === "light" ? "text-[#1a2332]" : "text-white";
  const textSecondary = theme === "light" ? "text-[#64748b]" : "text-[#94a3b8]";
  const textGradient =
    "bg-gradient-to-r from-[#1f84d6] to-[#3b9df0] bg-clip-text text-transparent";

  // Hero Section Reference
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Core Team Members
  const coreTeam = [
    {
      name: "Athar Ramzan",
      role: "Founder & CEO",
      category: "leadership",
      bio: "Passionate about open source and community building. Committed to building a more inclusive and diverse tech community with a vision to democratize technology education globally.",
      avatar: "https://devpalsai.netlify.app/athar.jpg",
      location: "Kashmir, India",
      expertise: ["Community Building", "Open Source Strategy", "Leadership"],
      achievements: [
        "Founded OSW Global Initiative",
        "500+ Community Members",
        "Established OSK Regional Branch",
      ],
      social: {
        github: "https://github.com/oathar",
        linkedin: "https://www.linkedin.com/in/athar-ramzan/",
        twitter: "https://twitter.com",
        email: "eatharg@gmail.com",
      },
    },
    {
      name: "Ayaan Taimur",
      role: "Co-Founder & CTO",
      category: "leadership",
      bio: "Full-stack developer and open source advocate. Loves building scalable solutions and mentoring developers. Passionate about creating technology that makes a difference.",
      avatar: "https://avatars.githubusercontent.com/u/183049832?v=4",
      location: "Kashmir, India",
      expertise: ["Full-Stack Development", "System Architecture", "DevOps"],
      achievements: [
        "100+ Open Source Contributions",
        "Led 10+ Major Projects",
        "Mentored 200+ Developers",
      ],
      social: {
        github: "https://github.com/mat1018",
        linkedin: "https://www.linkedin.com/in/ayaan-taimur/",
        twitter: "https://twitter.com",
        email: "taimurayaan18@gmail.com",
      },
    },
    {
      name: "Agam Kundu",
      role: "Marketing Lead",
      category: "marketing",
      bio: "Leading the OSW marketing initiative. Expert in community outreach and content creation for tech ecosystem development. Building bridges between technology and people.",
      avatar: "/profiles/agam.jpg",
      location: "India",
      expertise: ["Digital Marketing", "Content Strategy", "Community Outreach"],
      achievements: [
        "50+ Marketing Campaigns",
        "Grew Community by 300%",
        "International Partnerships",
      ],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mohammed@opensource-kashmir.org",
      },
    },
  ];

  // Team Statistics
  const teamStats = [
    {
      icon: FaUsers,
      number: "15+",
      label: "Core Team Members",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: FaCode,
      number: "500+",
      label: "Active Contributors",
      color: "from-green-500 to-green-700",
    },
    {
      icon: FaGlobe,
      number: "50+",
      label: "Countries",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Award,
      number: "100+",
      label: "Projects",
      color: "from-orange-500 to-orange-700",
    },
  ];

  // Team Categories
  const categories = [
    { id: "all", label: "All Team", icon: FaUsers },
    { id: "leadership", label: "Leadership", icon: FaRocket },
    { id: "development", label: "Development", icon: FaCode },
    { id: "marketing", label: "Marketing", icon: FaGlobe },
    { id: "design", label: "Design", icon: Star },
  ];

  // Filter team members
  const filteredTeam =
    activeFilter === "all"
      ? coreTeam
      : coreTeam.filter((member) => member.category === activeFilter);

  // Team Values
  const teamValues = [
    {
      icon: FaHandshake,
      title: "Collaboration First",
      description:
        "We believe in the power of working together, sharing knowledge, and supporting each other's growth.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: FaHeart,
      title: "Passion Driven",
      description:
        "Every team member brings unique passion and energy, creating a vibrant and innovative environment.",
      color: "from-red-500 to-red-700",
    },
    {
      icon: FaRocket,
      title: "Innovation Focused",
      description:
        "We constantly push boundaries, explore new technologies, and challenge conventional thinking.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: FaGlobe,
      title: "Global Mindset",
      description:
        "With team members worldwide, we bring diverse perspectives and create truly global solutions.",
      color: "from-green-500 to-green-700",
    },
  ];

  // Social Link Component
  const SocialLink = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
  }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-blue-600 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-all duration-300 min-w-[44px] min-h-[44px]"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );

  return (
    <div className={theme === "light" ? "bg-white" : "bg-[#0a0e14]"}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#073f70] to-[#1f84d6]"
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-max relative z-10 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center text-white"
          >
            <motion.div
              variants={itemVariants}
              className="w-20 h-20 bg-gradient-to-br from-[#3b9df0] to-[#1f84d6] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <FaUsers size={48} className="text-white" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e8f4fd]">
                Amazing Team
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate individuals from around the world working together to build
              the future of open source collaboration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className={alternateBg}>
        <div className="container-max px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {/* Main Introduction */}
              <div className="text-center mb-12">
                <h2
                  className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${textPrimary}`}
                >
                  The People Behind <span className={textGradient}>Open Source World</span>
                </h2>
                <p
                  className={`text-lg sm:text-xl leading-relaxed mb-6 ${textSecondary}`}
                >
                  Open Source World is more than just a community—it's a family of
                  passionate technologists, innovators, and changemakers. Our team spans
                  continents, cultures, and skillsets, united by a common vision: to
                  democratize technology and make open source accessible to everyone.
                </p>
                <p
                  className={`text-base sm:text-lg leading-relaxed ${textSecondary}`}
                >
                  From our founding members who laid the groundwork to our growing
                  network of contributors who bring fresh ideas daily, every person
                  plays a vital role in shaping the future of collaborative technology.
                </p>
              </div>

              {/* Team Philosophy */}
              <div
                className={`${cardBg} rounded-2xl p-8 sm:p-12 mb-8`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1f84d6] to-[#073f70] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaHeart className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 ${textPrimary}`}>
                      Our Philosophy
                    </h3>
                    <p className={`text-base sm:text-lg leading-relaxed ${textSecondary}`}>
                      We believe that great things happen when talented people come
                      together with a shared purpose. Our team embodies diversity in
                      thought, background, and experience—because we know that the best
                      solutions emerge from different perspectives working in harmony.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaGlobe className="text-[#1f84d6]" size={16} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${textPrimary}`}>
                        Global Perspective
                      </h4>
                      <p className={`text-sm ${textSecondary}`}>
                        Team members from 50+ countries bringing unique cultural insights
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaHandshake className="text-green-600" size={16} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${textPrimary}`}>
                        Collaborative Spirit
                      </h4>
                      <p className={`text-sm ${textSecondary}`}>
                        Every voice matters, every contribution counts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaRocket className="text-purple-600" size={16} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${textPrimary}`}>
                        Innovation Driven
                      </h4>
                      <p className={`text-sm ${textSecondary}`}>
                        Constantly pushing boundaries and exploring new possibilities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCode className="text-orange-600" size={16} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${textPrimary}`}>
                        Open Source First
                      </h4>
                      <p className={`text-sm ${textSecondary}`}>
                        Committed to transparency, sharing, and community growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 max-w-5xl mx-auto">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`${cardBg} rounded-2xl p-6 text-center transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-white`}
                  >
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-[#1f84d6] mb-1">
                    {stat.number}
                  </div>
                  <div className={`text-sm font-medium ${textSecondary}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Values */}
      <section className={alternateBg}>
        <div className="container-max px-4">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textPrimary}`}
              >
                Our Team <span className={textGradient}>Values</span>
              </h2>
              <p
                className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}
              >
                The principles that unite us and drive our collective success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {teamValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`${cardBg} p-6 sm:p-8 text-center rounded-2xl transition-all duration-300`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    <value.icon size={28} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${textPrimary}`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members */}
      <section className={sectionBg}>
        <div className="container-max px-4">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textPrimary}`}
              >
                Core <span className={textGradient}>Team Members</span>
              </h2>
              <p
                className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}
              >
                Meet the dedicated individuals leading Open Source World's mission.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-[#1f84d6] to-[#3b9df0] text-white shadow-lg"
                      : theme === "light"
                      ? "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                      : "bg-[#1a2332] text-gray-300 hover:bg-gray-800 border border-gray-700"
                  }`}
                >
                  <category.icon size={18} />
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeam.map((member, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10 }}
                  className={`${cardBg} rounded-2xl overflow-hidden group`}
                >
                  {/* Avatar Section */}
                  <div className="relative h-64 bg-gradient-to-br from-[#1f84d6] to-[#073f70] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-full h-full"
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div
                        className={`w-full h-full flex items-center justify-center text-6xl font-bold text-white ${
                          theme === "light" ? "bg-gray-200" : "bg-gray-700"
                        }`}
                        style={{ display: "none" }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-1 ${textPrimary}`}>
                      {member.name}
                    </h3>
                    <p className="text-[#1f84d6] font-semibold mb-2 text-sm">
                      {member.role}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                      <FaMapMarkerAlt size={12} />
                      <span>{member.location}</span>
                    </div>
                    <p className={`text-sm leading-relaxed mb-6 ${textSecondary}`}>
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              theme === "light"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-blue-900/30 text-blue-400"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4
                        className={`text-sm font-semibold mb-3 flex items-center gap-2 ${textPrimary}`}
                      >
                        <Award className="text-[#1f84d6]" size={16} />
                        Key Achievements
                      </h4>
                      <ul className={`space-y-2 text-sm ${textSecondary}`}>
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#1f84d6] mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <SocialLink
                        href={member.social.github}
                        icon={<FaGithub size={18} />}
                        label={`${member.name}'s GitHub`}
                      />
                      <SocialLink
                        href={member.social.linkedin}
                        icon={<FaLinkedin size={18} />}
                        label={`${member.name}'s LinkedIn`}
                      />
                      <SocialLink
                        href={member.social.twitter}
                        icon={<FaTwitter size={18} />}
                        label={`${member.name}'s Twitter`}
                      />
                      <SocialLink
                        href={`mailto:${member.social.email}`}
                        icon={<FaEnvelope size={16} />}
                        label={`Email ${member.name}`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contributors Section */}
      <section className={alternateBg}>
        <div className="container-max px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textPrimary}`}
              >
                Our Amazing <span className={textGradient}>Contributors</span>
              </h2>
              <p
                className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}
              >
                Every contribution matters! Thank you to all the amazing developers
                who have helped build Open Source World.
              </p>
            </div>

            <div className={`${cardBg} rounded-3xl p-8 sm:p-12`}>
              {/* Contributors Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg mb-8"
              >
                <a
                  href="https://github.com/theopensourceworld/open-source-world/graphs/contributors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://contributors-img.web.app/image?repo=theopensourceworld/open-source-world"
                    alt="Contributors to Open Source World"
                    className="max-w-full h-auto rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDQwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2YjczODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+Q29udHJpYnV0b3JzPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                </a>
              </motion.div>

              {/* Contribution Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1f84d6] mb-2">
                    500+
                  </div>
                  <div className={`text-sm font-medium ${textSecondary}`}>
                    Total Contributors
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1f84d6] mb-2">
                    10,000+
                  </div>
                  <div className={`text-sm font-medium ${textSecondary}`}>
                    Commits
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1f84d6] mb-2">
                    50+
                  </div>
                  <div className={`text-sm font-medium ${textSecondary}`}>
                    Countries
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://github.com/theopensourceworld/open-source-world/graphs/contributors"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-3 min-h-[48px]"
                >
                  <FaGithub size={20} />
                  View All Contributors
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://github.com/theopensourceworld/open-source-world",
                      "_blank"
                    )
                  }
                  className="bg-gradient-to-r from-[#1f84d6] to-[#3b9df0] hover:from-[#073f70] hover:to-[#1f84d6] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-3 min-h-[48px]"
                >
                  <FaGithub size={20} />
                  Contribute Now
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className={sectionBg}>
        <div className="container-max px-4">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-[#073f70] to-[#1f84d6] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <FaRocket size={40} className="text-white" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Want to Join Our Team?
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-90">
                We're always looking for passionate individuals who share our vision
                of building a better world through open source technology. Whether
                you're a developer, designer, marketer, or community enthusiast,
                there's a place for you here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/#contact")}
                  className="bg-white text-[#073f70] hover:bg-[#e8f4fd] font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl text-lg min-h-[48px]"
                >
                  Get In Touch
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://github.com/theopensourceworld/open-source-world",
                      "_blank"
                    )
                  }
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg min-h-[48px]"
                >
                  Start Contributing
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

// Animated Section Wrapper Component
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default TeamPage;
