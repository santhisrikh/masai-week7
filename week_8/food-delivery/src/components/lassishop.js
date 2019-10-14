import React from "react"
// import { Link } from 'react-router-dom';


class Lassi extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick =(e,index)=>{
        e.preventDefault();
        this.props.func(index)
    }
    render(){
    //    console.log(this.props) 
        return (
            <React.Fragment>              
                <div className="card-deck col-4">
                    <div className="card m-2">
                        <img className="m-auto" src={this.props.lassidata.image} height="200" width="200" ></img>
                        <div className="card-body m-auto">
                            <h5 className="card-title text-white bg-danger p-2">{this.props.lassidata.name}</h5>
                            <div className='row'>
                                <p className="card-text text-primary">Price:{this.props.lassidata.price} </p>
                                <button class="btn btn-outline-secondary text-success" onClick = {(e,index)=>this.handleClick(e,this.props.lassidata)}>Add</button>
                            </div>    
                        </div>
                    </div>
                </div>               
            </React.Fragment>
        )
    }
}

// const item = [];
class Lassishop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            LassishopDetails: [
                { name: "Saffronlassi", price: 50, image: '/lassi1.jpeg', index:1},
                { name: "dryfruitlassi", price: 60, image: '/lassi2.jpeg',index:2 },
                { name: "sweetlassi", price: 40, image: '/lassi3.jpeg',index:3 },
                { name: "starwberrylassi", price: 80, image: '/lassi4.jpeg',index:4 },
                { name: "fruitsalad", price: 70, image: '/lassi5.jpeg',index:5},
                { name: "falooda", price: 60, image: '/lassi6.jpeg',index:6 }
            ]
        }
    }
    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                <div class="card  m-3 bg-dark" >
                    <div class="row no-gutters">
                        <div class="col-md-3">
                            <img src="/lassi0.webp" class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body ">
                                <h5 class="card-title text-white">Lassi Shop</h5>
                                <p class="card-text text-white">Juices Icecreams Desserts</p>
                                <p class="card-text text-white">Basavanagudi</p>
                                <div className='row'>
                                    <p class="card-text text-muted col-4"><span>4.0 <br></br>1000+ ratings</span></p>
                                    <p class="card-text text-muted"><span>50 min <br></br>DeliveryTime</span></p>
                                </div>  {/* <AddTocart /> */}

                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="m-5">Recommended</h3>
                <div className='row'>                    
                    {this.state.LassishopDetails.map((item) => <Lassi lassidata={item} func = {(incoming)=>{this.props.func(incoming)}} />)}                    
                </div>
                
            </React.Fragment>
                )
            }
        }
export default Lassishop