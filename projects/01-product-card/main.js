import './style.css'
import './components/Product-Card.js'

document.querySelector('#app').innerHTML = `
  <product-card
    img="./assets/nike-blue.png"
    tittle="Nike Zoom 2020"
    collection="Running Collection"
    description="Nike Zoom is an innovative and explosive cushioning system designed for speed and agility. The technology uses pressurized air and tightly stretched fibers to absorb impact and then snap back for fast movement and reduced stress on muscles, joints, and tendons 1"
    price="$120 US"
  />
`

