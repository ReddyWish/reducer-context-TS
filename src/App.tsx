import Counter from "./Counter"
import {CounterProvider} from "./context/CounterContext";


function App() {

    return (
        <>
            <CounterProvider>
                <Counter>
                    {(num) => <>Current Count: {num}</>}
                </Counter>
            </CounterProvider>
        </>
    )
}

export default App
