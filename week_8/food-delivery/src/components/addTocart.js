import React from 'react'

const addTocart = (props) => {
    console.log(props.data.index)    
        return (
            <ul class="list-group w-25 m-5">
                <li class="list-group-item d-flex justify-content-between align-items-center text-lead">
                    {props.data.name}
                    <span class="badge badge-primary badge-pill">{props.data.price}<span>/-</span></span>                
                    
                </li>
            </ul>
    
        )
    }
    
    

export default addTocart