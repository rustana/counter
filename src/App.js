import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import {nanoid} from "nanoid";


function App() {
    const initialValue = [
        {id: nanoid(), value: 1, counterValue: 0}
    ]
    const [counters, setCounters] = useState(initialValue)
    const [counter, setCounter] = useState(0)
    const [inputNumber, setInputNumber] = useState(1)
    const calculate = (id, direction) => {
        console.log(direction)
        console.log(inputNumber)
        counters.map(el => el.id === id ? setCounter(counter + direction) : el)
        counters.map(el => el.id === id ? console.log(el.value) : el)
    }
    const addNewCounter = (inputNumber) => {
        setCounters([...counters, {id: nanoid(), value: inputNumber, counterValue: 0}])
        setInputNumber('')
        console.log(counters)
    }
    const deleteCounter = (id) => {
        setCounters(counters.filter(el => el.id !== id))
    }
    const reset = () => {
        setCounter(0)
    }
    return (
        <div className="App">
            <h1>Counter</h1>

            <div>
                <h2 id="counter"> {counter}</h2>
                <button id="btn-reset" onClick={reset}>Reset</button>
                {counters.sort((a, b) => (a.value - b.value)).map(el =>
                    <Counter key={el.id}
                             el={el}
                             calculate={calculate}
                             counter={counter}
                             number={inputNumber}
                             deleteCounter={deleteCounter}

                    />)}
                <input  value={inputNumber} type='number' min='1'
                       onChange={(e) => setInputNumber(+e.target.value)}/>
                <button onClick={() => addNewCounter(inputNumber===''?0:inputNumber)}>Create counter</button>
            </div>
        </div>
    );
}

export default App;
