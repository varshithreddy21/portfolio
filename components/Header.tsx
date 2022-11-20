import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            className='flex flex-row items-center'
            initial={{
                x: -500,
                scale: 0.2,
                opacity: 0.5
            }}
            animate={{
                x: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            >
            <SocialIcon 
                url="https://www.youtube.com/channel/UCavHVaCNLfxvnlzMpf4V7lw"
                fgColor='gray'
                bgColor='transparent'
            />
             <SocialIcon 
                url="https://www.youtube.com/channel/UCavHVaCNLfxvnlzMpf4V7lw"
                fgColor='gray'
                bgColor='transparent'
            />
             <SocialIcon 
                url="https://www.youtube.com/channel/UCavHVaCNLfxvnlzMpf4V7lw"
                fgColor='gray'
                bgColor='transparent'
            />
        </motion.div>
        <motion.div 
            className='flex flex-row items-center text-gray-300 cursor-pointer'
            initial={{
                x: 500,
                scale: 0.2,
                opacity: 0.5
            }}
            animate={{
                x: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}>
            <SocialIcon 
                url="https://www.youtube.com/channel/UCavHVaCNLfxvnlzMpf4V7lw"
                fgColor='gray'
                network='email'
                bgColor='transparent'
            />
             <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </motion.div>
       
    </header>
  )
}