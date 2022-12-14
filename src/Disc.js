import Rea01 from './assets/red1.svg';
import Rea02 from './assets/red2.svg';
import Rea03 from './assets/red3.svg';
import Rea04 from './assets/red4.svg';
import Rea05 from './assets/red5.svg';
import Rea06 from './assets/red6.svg';
import Blue01 from './assets/blue1.svg';
import Blue02 from './assets/blue2.svg';
import Blue03 from './assets/blue3.svg';
import Blue04 from './assets/blue4.svg';
import Blue05 from './assets/blue5.svg';
import Blue06 from './assets/blue6.svg';
const DicName ={
  red:[Rea01,Rea02,Rea03,Rea04,Rea05,Rea06],
  blue:[Blue01,Blue02,Blue03,Blue04,Blue05,Blue06]
}

function Disc({color,num=1}){
 const src = DicName[color][num-1];
 const alt = `${color}${num}`
  return (
   <img src={src} alt={alt} />
  )
}
export default Disc