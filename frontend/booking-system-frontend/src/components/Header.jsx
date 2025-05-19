import React from 'react'
import SplitText from './SplitText'
function Header() {
    const handleAnimationComplete = () => {

  console.log('All letters have animated!');

};
  return (
    <div className='flex flex-row justify-center items-center text-4xl font-extrabold'>
        <SplitText
            text="Schedulo Lite "
            className="text-blue-500"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            onLetterAnimationComplete={handleAnimationComplete}/>
    </div>
  )
}

export default Header