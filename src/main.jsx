// ** React Imports
import { createRoot } from 'react-dom/client'

// ** App Import
import App from './App'

// ** Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css'

// ** Custom styles
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
