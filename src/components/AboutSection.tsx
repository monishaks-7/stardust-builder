import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.E. Computer Science - CGPA: 8.66/10',
      detail: 'Velammal Institute of Technology',
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Ranked 1st on SkillRack',
      detail: '1500+ Problems Solved',
    },
    {
      icon: Code,
      title: 'Experience',
      description: 'Front-End Developer',
      detail: 'Interactive Science Learning Website',
    },
    {
      icon: Briefcase,
      title: 'Internship',
      description: 'MAESTROMINDS - Fresh Farm',
      detail: 'Web Development Intern 2025',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground text-center leading-relaxed"
          >
            Motivated Computer Science Engineering student seeking a challenging role to apply my skills in software development and problem-solving. 
            Committed to continuous learning and professional growth, with a goal to make a meaningful impact in the tech industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full card-glow hover:border-primary/50 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/80 mb-1">{item.description}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certification Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Certifications</h3>
            <div className="space-y-2">
              <p className="text-lg">Programming in Java - NPTEL (81% - Elite+Silver Medal)</p>
              <p className="text-muted-foreground">20+ Certifications on SkillRack</p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default AboutSection;
