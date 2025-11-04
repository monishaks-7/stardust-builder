import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      color: 'from-primary to-primary/50',
    },
    {
      title: 'Programming',
      skills: ['Java', 'Problem Solving', 'Data Structures', 'Algorithms'],
      color: 'from-secondary to-secondary/50',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'SkillRack', 'Web Development', 'UI/UX'],
      color: 'from-accent to-accent/50',
    },
    {
      title: 'Soft Skills',
      skills: ['Teamwork', 'Leadership', 'Multitasking', 'Communication'],
      color: 'from-primary via-secondary to-accent',
    },
  ];

  const languages = [
    { name: 'Telugu', level: 100 },
    { name: 'English', level: 95 },
    { name: 'Tamil', level: 90 },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 h-full card-glow hover:border-primary/50 transition-all duration-300 group">
                <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-6`} />
                <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                      <span className="text-foreground/80">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Languages</span>
            </h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted-foreground">{language.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${language.level}%` } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default SkillsSection;
