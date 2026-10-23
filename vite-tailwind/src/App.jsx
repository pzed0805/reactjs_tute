// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-950 text-black p-4 rounded-xl'>tailwind test</h1>
        <Card Name="Emma" btnText="Read More" imageUrl="https://picsum.photos/seed/picsum/200/300"/>
        <Card Name="Jane" imageUrl="https://picsum.photos/id/237/200/300"/>
    </>
  )
}

export default App
