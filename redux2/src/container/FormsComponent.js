import React, {Component} from 'react';
import {connect} from 'react-redux';
import { postData } from '../actions';
import { bindActionCreators } from 'redux';

class FormComponent extends Component{
    constructor(){
        super()

        this.state={
            fname:'John',
            lname:'Bill'
        }
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>FirstName</label>
                        <input type="text"
                            className="form-control"
                            value ={this.state.fname}
                            id="fname"
                        />
                    </div>
                    <div className="form-group">
                        <label for="lname">LastName</label>
                        <input type="text"
                            className="form-control"
                            value ={this.state.lname}
                            id="lname"
                            name="lname"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({postData}, dispatch)
}

export default connect(null, mapDispatchToProps)(FormComponent)