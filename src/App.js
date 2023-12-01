
import './App.css';
import Button from './Button';
import ButtonBox from './ButtonBox';
import CalcProvider from './CalcContext';
import Wrapper from './components/Wrapper';
import Screen from './Screen';

const btnvalue = [
  ["C", "+-", "%","/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <h1 className='nm'>Bunny Calculator </h1>
      <img className='bunny' src={require('../src/bunny.gif')} alt='bunny' />
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnvalue.flat().map((btn, i) => (
            <Button 
            value={btn}
            key={i}/>
          ))}
        </ButtonBox>
      </Wrapper>

    </CalcProvider>
  );
}

export default App;
