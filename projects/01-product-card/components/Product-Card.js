export class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'})
  }

  static get observedAttributes() {
    return [
      'img',
      'tittle',
      'price',
      'description',
      'collection'
    ]
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    if (attribute === 'img' && oldValue !== newValue) {
      this.img = newValue
    }

    if (attribute === 'tittle') {
      this.tittle = newValue
    }

    if (attribute === 'price') {
      this.price = newValue
    }

    if (attribute === 'description') {
      this.description = newValue
    }

    if (attribute === 'collection') {
      this.collection = newValue
    }
  }

  getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = `
      ${this.getStyle()}
      <main class="container">
        <section class="container--img">
          <img src="${this.img}" alt="Running shoes"/>
        </section>

        <section class="container--details">
          <div>
            <h2>${this.tittle}</h2>
            <p>${this.description}</p>
            <h3>${this.price}</h3>
            <button>Purchase</button>
          </div>
        </section>
      </main>
    `

    return template
  }

  getStyle() {
    return `
      <style>
        :host {
          width: 80%;
          max-width: 900px;
          min-width: 280px;
          margin: 0 auto;
        }

        .container {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 900px;
          height: 600px;
          margin: 20px;
          border-radius: 8px;
          background-color: #1a1a1a;
        }

        .container--img {
          position: relative;
          display: flex;
          justify-content: center;
          width: 50%;
          height: 100%;
          background-color: var(--primary-background)
        }

        .container--img:before {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 8em;
          font-weight: 800;
          color: #000;
          content: 'Nike';
          opacity: 0.1;
        }

        .container--img img {
          position: relative;
          top: 100px;
          left: -50px;
          width: 720px;
          height: 480px;
          transform: rotate(-30deg);
        }
        
        .container--details {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 40px;
        }

        .container--details h2 {
          margin-bottom: 25px;
          font-size: 2.5em;
          line-height: 0.8em;
          color: #444;
        }

        .container--details span {
          font-size: 0.4em;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #999;
        }
        
        .container--details p {
          max-width: 85%;
          margin-left: 15%;
          margin-bottom: 35px;
          color: #333;
          font-size: 15px;
        }
        
        .container--details h3 {
          float: left;
          font-size: 2.5em;
          color: #a2a2a2;
        }
        
        .container--details button {
          margin-top: 35px;
          float: right;
          padding: 15px 20px;
          font-size: 16px;
          color: #fff;
          letter-spacing: 1px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 40px;
          background-color: #5a6cb2;
          cursor: pointer;
        }
        
        @media (max-width: 1080px) {
          .container {
            height: auto;
            width: auto;
          }
      
          .container--img {
            padding: 40px;
            width: 100%;
            box-sizing: border-box;
            height: auto;
            text-align: center;
          }
      
          .container--img img {
            left: initial;
            width: 100%;
            height: auto;
            transform: rotate(0deg);
          }

          .container--details {
            width: 100%;
            height: auto;
            padding: 20px;
          }

          .container--details p {
            max-width: 100%;
            margin-left: 0;
          }
        }
      </style>
    `
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('product-card', ProductCard)