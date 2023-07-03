import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomeList } from './components/HomeLists';
import { GoalSettingTemplate } from './components/templates/GoalSettingTemplate';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GoalSettingTemplate/>
    </>
  )
}

export default App
