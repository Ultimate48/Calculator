import React from 'react'

function NumberButton({width = '70px', height = '65px', number = 0}) {

  const handleClick = () => {
    console.log(number)
  }

  const base = "border border-solid border-black rounded-md flex justify-center items-center text-[40px] font-[Orbitron]"

  const widthStyle = width === 'full' ? 'w-full' : `w-[${width}]`

  const heightStyle = height === 'full' ? 'h-full' : `h-[${height}]`

  const style = `${base} ${widthStyle} ${heightStyle}`

  console.log(style)

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
  return(
    <div className='h-[100px] w-[560px] border border-solid border-black rounded-md mx-auto mt-2 text-right my-auto text-[70px] font-[Orbitron] flex justify-center items-center text-gray-700/25'>
        888888888
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
  return(
    <div className="h-full w-[70px] border border-solid border-black rounded-md flex flex-col items-center text-[20px] font-[Orbitron]">
      <div>E</div>
      <div>N</div>
      <div>T</div>
      <div>E</div>
      <div>R</div>
    </div>
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
        <div className='h-[88px] flex justify-around items-center p-3'>
          <NumberButton width='full' number={0}/>
        </div>
        <Operations />
      </div>
      <div className='h-full w-[34%] p-3 flex flex-col justify-between'>
        <div className='h-[88px] mb-[23px]'><NumberButton number={'CE'}/>
        </div>
        <EnterButton />
      </div>
    </div>
  )
}

function TouchPad(){
  return(
    <div className='h-[265px] w-[560px] border border-solid border-black rounded-md mx-auto mt-2 text-right my-auto flex'>
            <PrimaryNumbers />
            <OperatrionsAndZero />
          </div>
  )
}

function Caculator(){
  return(
    <div className='h-[400px] w-[600px] border border-solid border-black rounded-md flex justify-center items-center'>
      <div className='h-[390px] w-[590px] border border-solid border-black rounded-md'>
        <Display />
        <TouchPad />
      </div>
    </div>
  )
}

export default function App() {
  return (
    
    <div className='h-screen flex justify-center items-center'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
      </style>
      <Caculator />
    </div>
  )
}
