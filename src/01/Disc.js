import Dis01 from './assets/dice01.svg';
import Dis02 from './assets/dice02.svg';
import Dis03 from './assets/dice03.svg';
import Dis04 from './assets/dice04.svg';
import Dis05 from './assets/dice05.svg';
import Dis06 from './assets/dice06.svg';

const DicNum = [
  Dis01,Dis02,Dis03,Dis04,Dis05,Dis06
]
function Disc({num}){
  const src = DicNum[num-1];
  const alt = `${num}`
  return (
    <img src={src} alt={alt} />
  )
}
export default Disc