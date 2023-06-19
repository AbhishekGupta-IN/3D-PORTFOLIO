import React from 'react';

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper} from '../hoc';
import { projects } from '../constants';
import { github, launch } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const ProjectCard = ({index, name, description, tags, image, source_code_link, project_link = false}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1'
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain'/>
            </div>
            { project_link &&
              <div
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                onClick={() => window.open(project_link, '_blank')}
              >
                <img src={launch} alt='launch' className='w-[70%] h-[70%] object-contain'/>
              </div>
            }
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-secondary text-[14px] mt-2'>{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 mt-4'>
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work');