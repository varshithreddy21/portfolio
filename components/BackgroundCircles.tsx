import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function BackgroundCircles(props: Props) {
    return (
        <motion.div
            className='relative flex justify-center items-center'
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.3, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 2.5
            }}
        >
            <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
            <div className='border border-[#333333] rounded-full  h-[300px] w-[300px] absolute mt-52 '></div>
            <div className='border border-[#333333] rounded-full h-[500px] w-[500px] absolute mt-52 '></div>
            <div className='absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] opacity-20 mt-52 animate-pulse'></div>
            <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'></div>
        </motion.div>
    );
}
export default BackgroundCircles