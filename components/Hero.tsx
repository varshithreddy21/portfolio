import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ['Backend', 'Frontend','Devops'],
        loop: true,
        delaySpeed: 2000
      })
    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        {/* <Typewriter words={['Hiii em pikutunav', 'ra fulka']} loop={0}/> */}
    
        <BackgroundCircles/>
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src='https://media-exp1.licdn.com/dms/image/C4D03AQHMNIovdZPeNg/profile-displayphoto-shrink_800_800/0/1636427711412?e=1672272000&v=beta&t=klB0iky6V0gs-muXBiWyfcBPdpAmGUQyEu5PgzyNv_c'/>
        <div className='z-20 flex flex-col items-center'>
            <h2 className='lg:pb-0 text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[10px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold'>
                <span>{text}</span>
                <Cursor cursorColor='#F7ABA0A'></Cursor>
            </h1>
            <div className='flex flex-row items-center pt-5'>
                <Link href="#about"><div className='herobutton'>About</div></Link>
                <Link href="#experience"><div className='herobutton'>Experience</div></Link>
                <Link href="#skills"><div className='herobutton'>Skills</div></Link>
                <Link href="#projects"><div className='herobutton'>Projects</div></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero