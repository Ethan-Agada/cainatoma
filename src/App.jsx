import ASCIIText from './utils/ASCIIText';
import DecryptedText from './utils/DecryptedText';
import BlurText from "./utils/BlurText";
import './App.css'
import FuzzyText from './utils/FuzzyText';
import PixelTransition from './utils/PixelTransition';
import old from './assets/old.JPG';
import DecayCard from './utils/DecayCard';
import black from './assets/black.jpg';
import newlogo from './assets/new.JPG'


function App() {
  
  const handleAnimationComplete = () => {
  
};

  return (

    <>
  <div className='welcomebanner'>
          <BlurText
      text="Welcome to"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="blur"
    />
  </div>
    <div className='welcomebanner1'>
        <FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
  fontFamily='inherit'
  fontSize='200px'
  className="fuzzy-text"
>
  Cainatoma
</FuzzyText>
</div>
    <div className='aboutus'>
        <DecryptedText
    text="At Cainatoma, 
we believe in the power of 
creativity and innovation. 
we're built different"

    animateOn="view"
    revealDirection="center"
    className='dtext'
    encryptedClassName='dtext'
    speed={40}
    sequential={true}
  />
    </div>
<div className='cardcontainer'>
<div className='card'>
<DecayCard width={200} height={300} image={newlogo}>
  
</DecayCard>
</div>
</div>
    </>
  )
}

export default App
