import './Calc.css'
import React, { useState } from 'react'

let decimal = false

const Calc = () => {
    const [history, setHistory] = useState([])

    const [operator, setOperator] = useState("")

    const [num1, setNum1] = useState("0")
    const [num2, setNum2] = useState("")

    const clearResult = () => {
        setNum1("0")
    }

    const percentage = () => {
        setNum1(num1/100)
    }

    const deleteLast = () => {
        setNum1(num1.slice(0, -1))
    }

    const divide = () => {
        setOperator("/")
        setNum2(num1)
        setNum1("0")
    }

    const multiply = () => {
        setOperator("*")
        setNum2(num1)
        setNum1("0")
    }

    const subtract = () => {
        setOperator("-")
        setNum2(num1)
        setNum1("0")
    }

    const add = () => {
        setOperator("+")
        setNum2(num1)
        setNum1("0")
    }

    const zero = () => { 
        if(num1 === '0') {
            setNum1('0')
        } else {
            setNum1(num1+'0') 
        }
    }
    const one = () => { 
        if(num1 === '0') {
            setNum1('1')
        } else {
            setNum1(num1 + '1')
        }
    }
    const two = () => { 
        if(num1 === '0') {
            setNum1('2')
        } else {
            setNum1(num1 + '2')
        }
    }
    const three = () => { 
        if(num1 === '0') {
            setNum1('3')
        } else {
            setNum1(num1 + '3')
        }
    }
    const four = () => { 
        if(num1 === '0') {
            setNum1('4')
        } else {
            setNum1(num1 + '4')
        }
    }
    const five = () => { 
        if(num1 === '0') {
            setNum1('5')
        } else {
            setNum1(num1 + '5')
        }
    }
    const six = () => { 
        if(num1 === '0') {
            setNum1('6')
        } else {
            setNum1(num1 + '6')
        }
    }
    const seven = () => { 
        if(num1 === '0') {
            setNum1('7')
        } else {
            setNum1(num1 + '7')
        }
    }
    const eight = () => { 
        if(num1 === '0') {
            setNum1('8')
        } else {
            setNum1(num1 + '8')
        }
    }
    const nine = () => { 
        if(num1 === '0') {
            setNum1('9')
        } else {
            setNum1(num1 + '9')
        }
    }

    const dec = () => {
        if(!decimal) {
            decimal = true
            return setNum1(`${num1}.`)
        }
        else {
            decimal = false
            if(num1.includes('.')) {
                return setNum1(num1.slice(0, -1))
            }
        }
    }



    const equal = () => {
        if(operator === "+") {
            setNum1(Number(num1) + Number(num2))
        } else if(operator === "-") {
            setNum1(Number(num1) - Number(num2))
        } else if(operator === "*") {
            setNum1(Number(num1) * Number(num2))
        } else if(operator === "/") {
            setNum1(Number(num1) / Number(num2))
        }
    }

    return (
        <div className='calculator'>
            <h2 className='text'><span className='freak'>𝓯𝓻𝓮𝓪𝓴𝔂</span> calculator 👅</h2>
            <div className="main">
                <input type='text' value={num1} />
                <div className="butt">
                    <button onClick={clearResult} className='sing-butt'>C</button>
                    <button onClick={percentage} className='sing-butt'>%</button>
                    <button onClick={deleteLast} className='sing-butt'>Del</button>
                    <button onClick={divide} className='sing-butt'>÷</button>
                    <button onClick={seven} className='sing-butt'>7</button>
                    <button onClick={eight} className='sing-butt'>8</button>
                    <button onClick={nine} className='sing-butt'>9</button>
                    <button onClick={multiply} className='sing-butt'>×</button>
                    <button onClick={four} className='sing-butt'>4</button>
                    <button onClick={five} className='sing-butt'>5</button>
                    <button onClick={six} className='sing-butt'>6</button>
                    <button onClick={subtract} className='sing-butt'>-</button>
                    <button onClick={one} className='sing-butt'>1</button>
                    <button onClick={two} className='sing-butt'>2</button>
                    <button onClick={three} className='sing-butt'>3</button>
                    <button onClick={add} className='sing-butt'>+</button>
                    <button onClick={zero} className='last-butt sing-butt'>0</button>
                    <button onClick={dec} className='sing-butt'>.</button>
                    <button onClick={equal} className='sing-butt'>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calc
