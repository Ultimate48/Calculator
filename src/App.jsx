import React, { useContext } from 'react'
import { EquationProvider, EquationContext } from './EquationContext';
function NumberButton({width = '70px', height = '65px', number = 0}) {

  const { equation, setEquation, darkMode } = useContext(EquationContext);

  const handleClick = (e) => {
    e.preventDefault()
    if (number === 'CE') {
      setEquation('')
      return
    }
    if (equation.length === 12){
      return
    }
    setEquation(equation.toString() + number.toString())
  }

  const base = "border border-solid rounded-md flex justify-center items-center text-[40px] font-[cursive]"

  const colorStyle = darkMode ? 'text-white border-white' : 'text-black border-black'

  const widthStyle = width === 'full' ? 'w-full' : `w-[${width}]`

  const heightStyle = height === 'full' ? 'h-full' : `h-[${height}]`

  const style = `${base} ${widthStyle} ${heightStyle} ${colorStyle}`

  return (
    <button className={style} onClick={(e) => handleClick(e)}>
      {number}
    </button>
  )
}

function NumberGroup(props) {
  return (
    <div className='h-[88px] flex justify-around items-center'>
      <NumberButton number={props.number[0]} />
      <NumberButton number={props.number[1]} />
      <NumberButton number={props.number[2]} />
    </div>
  )
}


function Display(){

  const { equation, setEquation, darkMode } = useContext(EquationContext);

  const base = 'h-[85px] md:h-[100px] w-[280px] md:w-[560px] border border-solid border-black rounded-md mx-auto mt-2 text-right my-auto text-[70px] font-[cursive] flex justify-end items-center pr-4'

  const colorStyle = darkMode ? 'text-white border-white' : 'text-black border-black'

  const style = `${base} ${colorStyle}`
  return(
    <div className={style}>
      {equation}
      </div>
  )
}

function Operations(){
  return(
    <>
      <div className='h-[88px] w-full p-3 flex justify-between'>
        <NumberButton number='+'/>
        <NumberButton number='-'/>
      </div>
      <div className='h-[88px] w-full p-3 flex justify-between'>
        <NumberButton number='x'/>
        <NumberButton number='÷'/>
      </div>
    </>
  )
}

function EnterButton(){

  const { equation, setEquation, darkMode } = useContext(EquationContext);

  const handleClick = (e) => {
    e.preventDefault()

    const finalEquation = equation.replace('x', '*').replace('÷', '/')
    const result = eval(finalEquation)

    //Only 9 digits are allowed
    if (result.toString().length > 12) {
      setEquation(result.toString().slice(0, 12))
      return
    }

    setEquation(result)
  }

  const base = `h-full w-[70px] border border-solid border-black rounded-md flex flex-col items-center text-[20px] font-[cursive]`
  
  const colorStyle = darkMode ? 'text-white border-white' : 'text-black border-black'

  const style = `${base} ${colorStyle}`

  return(
    <button className={style}
    onClick={(e) => handleClick(e)}>
      <div>E</div>
      <div>N</div>
      <div>T</div>
      <div>E</div>
      <div>R</div>
    </button>
  )
}

function PrimaryNumbers(){
  return(
    <div className='h-full w-[276px]'>
              <NumberGroup number={[1, 2, 3]} />
              <NumberGroup number={[4, 5, 6]} />
              <NumberGroup number={[7, 8, 9]} />
            </div>
  )
}

function OperatrionsAndZero(){
  return (
    <div className='h-full w-[284px] flex'>
      <div className='h-full w-[66%]'>
        <div className='h-[88px] flex justify-between items-center p-3'>
          <NumberButton number={0}/>
          <NumberButton number='.'/>
        </div>
        <Operations />
      </div>
      <div className='h-full w-[34%] p-3 flex flex-col justify-between'>
        <div className='h-[88px] md:mb-[23px]'><NumberButton number={'CE'}/>
        </div>
        <EnterButton />
      </div>
    </div>
  )
}

function TouchPad(){

  const { darkMode } = useContext(EquationContext);

  const base = 'md:h-[265px] w-[280px] md:w-[560px] border border-solid rounded-md mx-auto mt-2 text-right my-auto md:flex'

  const colorStyle = darkMode ? 'border-white' : 'border-black'

  const style = `${base} ${colorStyle}`

  return(
    <div className={style}>
      <PrimaryNumbers />
      <OperatrionsAndZero />
    </div>
  )
}

function Caculator(){

  const { darkMode } = useContext(EquationContext);

  const base = 'h-[650px] md:h-[400px] w-[300px] md:w-[600px] border border-solid rounded-md flex justify-center items-center'

  const colorStyle = darkMode ? 'border-white' : 'border-black'

  const style = `${base} ${colorStyle}`

  const base2 = 'h-[640px] md:h-[390px] w-[290px] md:w-[590px] border border-solid border-black rounded-md'

  const style2 = `${base2} ${colorStyle}`

  const base3 = 'h-screen w-screen flex justify-center items-center'

  const colorStyle3 = darkMode ? 'bg-black' : 'bg-white'

  const style3 = `${base3} ${colorStyle3}`

  return(
    <div className={style3}>
    <div className={style}>
      <div className={style2}>
        <Display />
        <TouchPad/>
      </div>
    </div>
    </div>
  )
}

function CalculatorPage() {

  const { darkMode, setDarkMode } = useContext(EquationContext);

  const handleClick = (e) => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  const buttonStyle = 'h-[70px] w-[100px] border border-solid rounded-md font-[cursive] text-[20px] absolute top-0 right-0 m-4'

  const colorStyle = darkMode ? 'border-white text-white' : 'border-black text-black'

  const text = darkMode ? 'Light Mode' : 'Dark Mode'

  const style = `${buttonStyle} ${colorStyle}`

  return (
    <div className='flex bg-black justify-center items-center'>
      <Caculator />
      <button className={style}
      onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    </div>
  )
}

export default function App() {

  return (
    <EquationProvider>
    
    <div>
      <CalculatorPage />
    </div>
    </EquationProvider>
  )
}

