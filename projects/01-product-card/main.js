import './style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'
import { something } from './components/Product-Card.js'

document.querySelector('#app').innerHTML = `
  <product-card>
  </product-card>
`

something()