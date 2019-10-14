
import React from 'react'
import './home.module.css'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = (props) => {    
    return (
        <React.Fragment>                  
            <div  className="card-deck col-4 ">
                <div  className="card m-2">
                    <img className = "m-auto" src={props.homedata.images} height="200" width="200" ></img>
                    <div  className="card-body  m-auto">
                        <h5  className="card-title text-white bg-danger p-2">{props.homedata.name}</h5>
                        <p  className="card-text text-success">Rating:{props.homedata.rating}</p>
                        <p  className="card-text text-primary">Price:{props.homedata.price}<span> <Link to = "/home/lassishop" class="btn btn-primary">order Now</Link></span></p>
                        
                    </div>
                </div>
            </div>         
        </React.Fragment>
    )
}
class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RestaurentDetails: [
                { name: "Lassi Shop", cuisine: 'icecream', price: 100, rating: 4.5, images: '/lassi0.webp' ,id:1},
                { name: "Lunch box", cuisine: "south north continental", price: 200, rating: 3.4, images: '/images2.jpg',id:2 },
                { name: "Foodys", cuisine: "northIndian southIndian chinese", price: 250, rating: 3.2, images: '/image3.jpeg',id:3 },
                { name: "RASTA", cuisine: "indian chinese", price: 200, rating: 3.5, images: '/image4.jpeg',id:4 },
                { name: "Madhura shop", cuisine: 'icecream', price: 100, rating: 4.5, images: '/images5.jpeg', id:5},
                { name: "Truffles", cuisine: "south north continental", price: 200, rating: 3.4, images: '/images6.jpeg',id:6 },
                { name: "MTR", cuisine: "northIndian southIndian hinese", price: 250, rating: 3.2, images: '/images7.jpeg',id:7 },
                { name: "Udupi Park", cuisine: "Indian chinese", price: 300, rating: 3.5, images: '/images8.jpeg',id:8 },
                { name: "Eat fit", cuisine: "Indian chinese", price: 500, rating: 3.5, images: '/images9.jpeg',id:9 }
             ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="bg-secondary m-5">Popular Brands</h1>
                <div className='row'>
                    {this.state.RestaurentDetails.map((item) => <Home homedata={item} />)}
                </div>
                 
            </React.Fragment>

        )
    }
}
export default Homepage;
