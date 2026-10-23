
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import User from './User.jsx'
import Counter from './Counter.jsx'

createRoot(document.getElementById('root')).render(

  <>
    <App />
    <User />
    <h3>This is a test heading  </h3>
    <br />
    <Counter />
    
  </>

)
