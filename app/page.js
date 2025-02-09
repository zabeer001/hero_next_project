import HeroSection from "./components/HeroSection/HeroSection";
import OtherSection from './components/Othersection/OtherSection';

export default function RoundedSections() {
  return (
    <div className="h-[200vh] relative">
      <HeroSection className ="z-[1]" />
     <OtherSection className="z-50 h-screen bg-white" />

     <div className="z-40 h-screen bg-white" >

      
     </div >

    </div>
    
  );
}
