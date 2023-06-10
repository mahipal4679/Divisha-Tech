
import './App.css';
import BModel from './component/B-Model/BModel';
import Bnature from './component/B-Nature/Bnature';
import Body from './component/Body/Body';
import Ftype from './component/F-Type/Ftype';
import Footer from './component/Footer/Footer';
import Inature from './component/I-Nature/Inature';
import InterestIn from './component/Intersted-In/InterestIn';
import Stage from './component/Stage/Stage';
function App() {
  return (
    <div className="">
    <Body/>
    <BModel/>
    <InterestIn/>
    <Stage/>
    <Ftype/>
    <Bnature/>
    <Inature/>
    <Footer/>
    </div>
  );
}

export default App;
