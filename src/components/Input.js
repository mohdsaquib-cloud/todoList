import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (                             
            <div className="mt-2">
                <div className="row">
                    <div className="col-8"> 
                        <input value={this.props.value} className="form-control" onChange={this.props.handleChange} placeholder="Enter the Work"/>
                    </div>
                    <div className="col-4 ">
                        <button className="btn btn-success" onClick={this.props.handleWork}>Add</button>
                    </div>
                </div>
            </div>            
        );
    }
}

export default Input;