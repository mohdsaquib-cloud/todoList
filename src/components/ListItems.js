import React, { Component } from 'react';
class Work extends Component {      
    render() {
        return (
            this.props.items.map(item=>
                <tr key={item.key}>
                    <td><input checked={item.checked} onChange={()=>this.props.handleCheckbox(item.key)} type="checkbox"/></td>
                    <td className="col-6"><label className="col-sm-2" htmlFor="gridCheck">{item.text}</label> </td>
                    <td><button onClick={()=>this.props.handleDeleteOne(item.key)} className="btn"><i className="fa fa-trash"></i> </button>            </td>
                </tr>                                        
            )           
        );
    }
}

export default Work;