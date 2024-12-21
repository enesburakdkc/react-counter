import styles from './Counter.module.css'
import { useState } from 'react'

function Counter() {

    let [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1)
    }

    function decreaseCounter() {
        setCounter(counter - 1)
    }

    function resetCounter() {
        setCounter(counter = 0)
    }

    return (
        <section className={styles.mainContainer}>
            <h1>Counter</h1>
            <p className={styles.counter}>{counter}</p>
            <div className={styles.buttonContainer}>
                <button onClick={decreaseCounter}>Decrease</button>
                <button onClick={resetCounter}>Reset</button>
                <button onClick={increaseCounter}>Increase</button>
            </div>
        </section>
    )
}

export default Counter