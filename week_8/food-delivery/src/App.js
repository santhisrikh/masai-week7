import React from 'react';
import Homepage from './components/homepage'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css"
import Faq from './components/faq'
import Lassishop from './components/lassishop'
import AddTocart from "./components/addTocart"
const Landingpage = () => { 
  return (
    <React.Fragment>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="/img1.webp" className="d-block w-50 " height=" 400px" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src="/img2.webp" className="d-block w-50" height=" 400px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img3.webp" className="d-block w-50" height=" 400px" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="/img4.jpeg" className="d-block w-50" height=" 400px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img5.webp" className="d-block w-50" height=" 400px" alt="..." />
          </div>
        </div>

      </div>

    </React.Fragment>
  )
}
let item = [];
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }
  getCart = (incoming) => {
    this.setState({ value: this.state.value + 1 })
    item.push(incoming)
    console.log(incoming)

  }

  render() {
    // console.log(this.state.value)
    // console.log(item)
    return (
      <React.Fragment>
        <div className="sticky-top">
          <nav className="navbar navbar-expand navbar-light bg-light  ">
            <Link to="/" className="navbar-brand  "><img src="/index.png" width="40" height="40" alt=""></img></Link>
            <Link to="/home" className="navbar-brand text-primary mx-5">Home</Link>
            <Link to="/faq" className="navbar-brand text-primary mx-5">Faq</Link>
            <Link to="/cart" className="navbar-brand text-primary mx-5 "><img src="/cart.jpg" width="30" height="30"></img>
              <span class="badge badge-light text-primary">{this.state.value}</span>
              <span class="sr-only">unread messages</span></Link>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>


          </nav>
        </div>
        <Route path="/" exact component={Landingpage} />
        <Route path="/home" exact component={Homepage} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/home/lassishop" exact render={() => <Lassishop func={(incoming) => { this.getCart(incoming) }} />} />
        <Route path="/cart" exact render={() => item.map((item) => <AddTocart data={item} />)} />
      </React.Fragment>
    )
  }
}

export default App;
