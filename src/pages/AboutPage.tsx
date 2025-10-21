import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaHandshake,
  FaHeart,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";
import { itemVariants, containerVariants } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  // Section background and text styles
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
  const textSecondary =
    theme === "light" ? "text-[#64748b]" : "text-[#94a3b8]";
  const textGradient =
    "bg-gradient-to-r from-[#1f84d6] to-[#3b9df0] bg-clip-text text-transparent";

  // Hero Section Reference
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Core Values
  const coreValues = [
    {
      icon: FaCode,
      title: "Open Source First",
      description:
        "We believe in the power of open source software to drive innovation and collaboration across the globe. Every project we build is open and accessible.",
    },
    {
      icon: FaUsers,
      title: "Community Driven",
      description:
        "Our community is at the heart of everything we do. We empower developers, designers, and tech enthusiasts to connect, collaborate, and grow together.",
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      description:
        "With members from over 50 countries, we're building a truly global movement that transcends borders and brings technology to every corner of the world.",
    },
    {
      icon: FaRocket,
      title: "Innovation & Learning",
      description:
        "We foster a culture of continuous learning and innovation, encouraging experimentation and providing resources for skill development.",
    },
    {
      icon: FaHandshake,
      title: "Inclusive & Diverse",
      description:
        "We celebrate diversity and create an inclusive environment where everyone, regardless of background or experience level, feels welcome.",
    },
    {
      icon: FaHeart,
      title: "Passion & Purpose",
      description:
        "We're driven by passion for technology and the purpose of making a positive impact through open source collaboration and education.",
    },
  ];

  // Journey/Timeline
  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description:
        "Open Source World was founded with a vision to create a global community of developers passionate about open source.",
      icon: FaRocket,
    },
    {
      year: "2023",
      title: "Community Growth",
      description:
        "Reached 500+ active contributors from 30+ countries, launched our first major collaborative projects.",
      icon: FaUsers,
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Expanded to 50+ countries, hosted international hackathons, and launched regional chapters like Open Source Kashmir.",
      icon: FaGlobe,
    },
    {
      year: "2025",
      title: "Innovation Hub",
      description:
        "Established innovation programs, mentorship initiatives, and partnerships with leading tech organizations worldwide.",
      icon: FaRocket,
    },
  ];

  // Statistics
  const stats = [
    { number: "500+", label: "Active Contributors", icon: FaUsers },
    { number: "100+", label: "Open Source Projects", icon: FaGithub },
    { number: "50+", label: "Countries Represented", icon: FaMapMarkerAlt },
    { number: "1000+", label: "Community Members", icon: FaUsers },
  ];

  // Mission Pillars
  const missionPillars = [
    {
      icon: FaGlobe,
      title: "Democratize Technology",
      description:
        "Make technology education and resources accessible to everyone, regardless of geographic or economic barriers.",
    },
    {
      icon: FaHandshake,
      title: "Foster Collaboration",
      description:
        "Create spaces and opportunities for developers worldwide to collaborate on meaningful projects that solve real problems.",
    },
    {
      icon: FaRocket,
      title: "Drive Innovation",
      description:
        "Encourage experimentation, creativity, and breakthrough thinking in open source development and beyond.",
    },
    {
      icon: FaHeart,
      title: "Build Community",
      description:
        "Cultivate a supportive, inclusive community where everyone can learn, grow, and contribute to shared success.",
    },
  ];

  // Team Values/Culture
  const teamCulture = [
    {
      title: "Transparency",
      description:
        "We operate with complete transparency in our processes, decisions, and communications.",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Collaboration",
      description:
        "We believe the best solutions come from diverse perspectives working together.",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code quality to community engagement.",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Impact",
      description:
        "We measure success by the positive impact we make on developers and communities worldwide.",
      color: "from-orange-500 to-orange-700",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "Open Source World transformed my career. I went from a beginner to contributing to major projects, all thanks to this amazing community.",
      author: "Sarah Chen",
      role: "Software Engineer",
      location: "Singapore",
    },
    {
      quote:
        "The mentorship and support I received here is unparalleled. OSW truly lives up to its mission of democratizing technology.",
      author: "Raj Patel",
      role: "Full Stack Developer",
      location: "India",
    },
    {
      quote:
        "Being part of OSW connected me with talented developers from around the world. The collaborative spirit here is incredible.",
      author: "Maria Rodriguez",
      role: "DevOps Engineer",
      location: "Spain",
    },
  ];

  return (
    <div className={theme === "light" ? "bg-white" : "bg-[#0a0e14]"}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className='relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#073f70] to-[#1f84d6]'>
        {/* Background Animation */}
        <div className='absolute inset-0'>
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
            className='absolute inset-0 opacity-10'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className='container-max relative z-10 px-4'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={heroInView ? "visible" : "hidden"}
            className='text-center text-white'>
            <motion.div
              variants={itemVariants}
              className='w-20 h-20 bg-gradient-to-br from-[#3b9df0] to-[#1f84d6] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
              <FaGlobe size={48} className='text-white' />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              About{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e8f4fd]'>
                Open Source World
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Building a global community where developers collaborate, innovate,
              and create impact through open source technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={alternateBg}>
        <div className='container-max px-4'>
          <AnimatedSection>
            <div className='text-center mb-16'>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${textPrimary}`}>
                Our <span className={textGradient}>Mission</span>
              </h2>
              <div className='bg-gradient-to-r from-[#073f70] to-[#1f84d6] rounded-3xl p-8 sm:p-12 text-white shadow-2xl max-w-5xl mx-auto'>
                <p className='text-xl sm:text-2xl leading-relaxed mb-6'>
                  To democratize technology education, foster innovation through
                  collaboration, and create sustainable opportunities for
                  developers worldwide while maintaining strong local roots and
                  global perspectives.
                </p>
                <p className='text-lg sm:text-xl leading-relaxed opacity-90'>
                  We envision a world where every developer, regardless of
                  background or location, has access to the resources, community,
                  and opportunities needed to succeed and make meaningful
                  contributions to technology.
                </p>
              </div>
            </div>

            {/* Mission Pillars */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12'>
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`${cardBg} p-6 text-center rounded-2xl transition-all duration-300`}>
                  <div className='w-16 h-16 bg-gradient-to-br from-[#1f84d6] to-[#073f70] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl'>
                    <pillar.icon />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${textPrimary}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className={sectionBg}>
        <div className='container-max px-4'>
          <AnimatedSection>
            <div className='text-center mb-12 sm:mb-16'>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textPrimary}`}>
                Our <span className={textGradient}>Core Values</span>
              </h2>
              <p
                className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
                These fundamental principles guide everything we do and shape our
                community culture.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`${cardBg} p-6 sm:p-8 text-center group rounded-2xl transition-all duration-300`}>
                  <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1f84d6] to-[#073f70] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl group-hover:shadow-xl transition-all duration-300'>
                    <value.icon />
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${textPrimary}`}>
                    {value.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${textSecondary}`}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className={alternateBg}>
        <div className='container-max px-4'>
          <AnimatedSection>
            <div className='text-center mb-12 sm:mb-16'>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textPrimary}`}>
                Our <span className={textGradient}>Journey</span>
              </h2>
              <p
                className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
                From a small idea to a global movement - here's how we've grown
                together.
              </p>
            </div>

            <div className='max-w-4xl mx-auto'>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='mb-8 last:mb-0'>
                  <div
                    className={`${cardBg} p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6`}>
                    <div className='flex-shrink-0'>
                      <div className='w-16 h-16 bg-gradient-to-br from-[#1f84d6] to-[#073f70] rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg'>
                        <item.icon />
                      </div>
                    </div>
                    <div className='flex-grow'>
                      <div className='flex items-center gap-3 mb-3'>
                        <span className='text-2xl sm:text-3xl font-bold text-[#1f84d6]'>
                          {item.year}
                        </span>
                        <div className='flex-grow h-px bg-gradient-to-r from-[#1f84d6] to-transparent'></div>
                      </div>
                      <h3
                        className={`text-xl sm:text-2xl font-bold mb-2 ${textPrimary}`}>
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base leading-relaxed ${textSecondary}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics */}
      <section className={sectionBg}>
        <div className='container-max px-4'>
          <AnimatedSection>
            <div className='text-center mb-12'>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textPrimary}`}>
                Our <span className={textGradient}>Impact</span>
              </h2>
              <p
                className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
                Numbers that reflect our growing global community and collective
                achievements.
              </p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`${cardBg} p-6 sm:p-8 text-center rounded-2xl`}>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1f84d6] to-[#073f70] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-xl sm:text-2xl'>
                    <stat.icon />
                  </div>
                  <div className='text-3xl sm:text-4xl font-bold text-[#1f84d6] mb-2'>
                    {stat.number}
                  </div>
                  <div className={`text-sm sm:text-base font-medium ${textSecondary}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Culture */}
      <section className={alternateBg}>
        <div className='container-max px-4'>
          <AnimatedSection>
            <div className='text-center mb-12 sm:mb-16'>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textPrimary}`}>
                Our <span className={textGradient}>Culture</span>
              </h2>
              <p
                className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
                The principles that define how we work, collaborate, and grow
                together as a community.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto'>
              {teamCulture.map((culture, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${cardBg} p-8 rounded-2xl overflow-hidden relative`}>
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${culture.color} opacity-10 rounded-bl-full`}></div>
                  <h3
                    className={`text-2xl sm:text-3xl font-bold mb-4 ${textPrimary} relative z-10`}>
                    {culture.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg leading-relaxed ${textSecondary} relative z-10`}>
                    {culture.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className={sectionBg}>
        <div className='container-max px-4'>
          <AnimatedSection>
            <div className='text-center mb-12 sm:mb-16'>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textPrimary}`}>
                Community <span className={textGradient}>Voices</span>
              </h2>
              <p
                className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
                Hear from members of our global community about their experiences
                with Open Source World.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className={`${cardBg} p-6 sm:p-8 rounded-2xl`}>
                  <div className='text-4xl text-[#1f84d6] opacity-20 mb-4'>
                    "
                  </div>
                  <p
                    className={`text-base sm:text-lg leading-relaxed mb-6 italic ${textPrimary}`}>
                    "{testimonial.quote}"
                  </p>
                  <div className='border-t border-gray-200 dark:border-gray-700 pt-4'>
                    <p className={`font-bold text-lg ${textPrimary}`}>
                      {testimonial.author}
                    </p>
                    <p className={`text-sm ${textSecondary}`}>
                      {testimonial.role}
                    </p>
                    <p className='text-xs text-[#1f84d6] flex items-center gap-1 mt-1'>
                      <FaMapMarkerAlt /> {testimonial.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className={alternateBg}>
        <div className='container-max px-4'>
          <AnimatedSection>
            <div className='bg-gradient-to-r from-[#073f70] to-[#1f84d6] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl'>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6'>
                Join Our Global Community
              </h2>
              <p className='text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-90'>
                Whether you're a beginner or an experienced developer, there's a
                place for you in Open Source World. Start your journey today and
                be part of something bigger.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    (window.location.href = "/#contact")
                  }
                  className='bg-white text-[#073f70] hover:bg-[#e8f4fd] font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl text-lg min-h-[48px]'>
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open("https://github.com/theopensourceworld", "_blank")
                  }
                  className='bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg min-h-[48px]'>
                  View Projects
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
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}>
      {children}
    </motion.div>
  );
};

export default AboutPage;
