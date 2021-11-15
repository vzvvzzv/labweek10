import React, { Component } from 'react'
import { Fragment } from 'react/cjs/react.production.min'

export default class DataEntryForm extends Component {
   
    
    constructor(props) {
        super(props)

        this.state = {
            submitted: false,
            email: "",
            name: "",
            addr1: "",
            addr2: "",
            city: "",
            province: "",
            postcode: "",
            
        }
    }

    readData = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault()
        this.setState({submitted:true})
        console.log(JSON.stringify(this.state))
    }

    provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia",
                "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]
    render() {
        return (
            <Fragment>
            <div style={{border: "4px solid green", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                
                <h3>E-mail</h3>
                <input name="email" onChange={this.readData} placeholder="Enter e-mail" type="text" />
                <h3>Full name</h3>
                <input name="name" onChange={this.readData} placeholder="Full name" type="text" />
                <h3>Address</h3>
                <input name="addr1" onChange={this.readData} placeholder="1234 Main St" type="text" />
                <h3>Address 2</h3>
                <input name="addr2" onChange={this.readData} placeholder="Apartment, studio or floor" type="text" />
                <h3>City</h3>
                <input name="city" onChange={this.readData} placeholder="Enter city" type="text" />
                <h3>Province</h3>
                <select name="province" onChange={this.readData}>
                    <option key="">Choose..</option>
                    {
                        this.provinces.map(v => {
                            return (<option key={v}>{v}</option>)
                        })
                    }
                </select>
                <h3>Postal Code</h3>
                <input name="postcode" onChange={this.readData} placeholder="Enter postal code" type="text" />
            </div>
            <div>
                <input type="checkbox" id="terms" name="conditions" value="Form"/>
                <label for="form">Agree terms and conditions? </label><br/>
            </div>
            <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                <br/>
                <button style={{border: "4px solid pink", background: "yellowgreen", display: "flex", justifyContent: "space-evenly", marginLeft: "auto", marginRight: "auto"}}id="submit" onClick={this.submitData}>Submit</button>
                <br/>
            </div>
            <div style={{border: "4px solid green", width: "50%", marginLeft: "auto", marginRight: "auto"}} >

                <h4>Email: {this.state.submitted?this.state.email:"No email"}</h4>
                <h4>Full name: {this.state.submitted?this.state.name:"No name"}</h4>
                <h4>Address: {this.state.submitted?this.state.addr1:"Address"}</h4>
                <h4>City: {this.state.submitted?this.state.city:"No name"}</h4>
                <h4>Province: {this.state.submitted?this.state.province:"No province"}</h4>
                <h4>Postal Code: {this.state.submitted?this.state.postcode: "No postal code"}</h4>
            </div>
            </Fragment>


            
        )
    }
}

