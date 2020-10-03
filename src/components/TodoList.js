import React, { Component } from 'react';
import Header from './Header';
import Input from './Input';
import ListItems from './ListItems';
import { ToastContainer, toast } from 'react-toastify';
class TodoList extends Component {       
    state = {
        items:[],       
        currItem:{ key:'',text:'',checked:false}
    }
    handleChange=(e)=>{       
        this.setState({
            currItem:{
                text:e.target.value,
                key:Date.now(),
                checked:false
            }            
        });
    }    
    handleWork=()=>{       
        if(!this.state.currItem.text){
            toast('Oops! Field not empty!')        
            return;
            
        }
        const newItem = this.state.currItem;
        const newitems = [...this.state.items,newItem];       
        this.setState({items:newitems,currItem:{ key:'',text:'',checked:false}})   
    }
    handleCheckbox=(key)=>{  
        let items = [...this.state.items];        
        var index = items.findIndex(item => item.key === key)
        let item ={
            ...items[index],
            checked:!items[index].checked
        }
        items[index]=item;
        this.setState({items})           
    }             
    handleDelete=()=>{
        const items = this.state.items.filter(item => item.checked!==true);
        this.setState({items})
    }
    handleDeleteOne=(key)=>{
        const items = this.state.items.filter(item => item.key!==key);
        this.setState({items})
    }
    render() {
        
        return (
            <div className="container">                 
                <Header/>
                <div className="mt-3">
                <Input handleWork={this.handleWork} handleChange={this.handleChange} value={this.state.currItem.text}/>
                <table className="table table-stripeds m-2">
                <tbody>
                    <ListItems items={this.state.items} handleCheckbox={this.handleCheckbox} handleDeleteOne={this.handleDeleteOne} />
                </tbody>
                </table>
                <button className="btn btn-danger mt-2" onClick={this.handleDelete}>Delete</button>
                <ToastContainer position="top-left"autoClose={2000}/>
                </div>
            </div>
        );
    }
}

export default TodoList;