import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event){
    event.preventDefault();
    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu)
    });
  }

  closeMenu(){
    this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  
  render(){
    return (
      <body>
        <section className="top">
            <header>
                <h1>Start Bootstrap</h1>
                <div className="nav">
                    <p>Services</p>
                    <p>Portfolio</p>
                    <p>About</p>
                    <p>Team</p>
                    <p>Contact</p>
                </div>
                <button className='menu-button' onClick={this.showMenu}>Menu</button>
            </header>
              {
                this.state.showMenu
                  ? (
                    <div className='drop-down'>
                      <p>Services</p>
                      <p>Portfolio</p>
                      <p>About</p>
                      <p>Team</p>
                      <p>Contact</p>
                    </div>
                  )
                  : (
                    null
                  )
              }
            <div className='top-content'>
              <h2>Welcome To Our Studio!</h2>
              <h1>IT'S NICE TO MEET YOU</h1>
              <button>TELL ME MORE</button>
            </div>
        </section>
        <div className='bottom'>
          <h1>SERVICES</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </body>
  );
  }
}

export default App;
