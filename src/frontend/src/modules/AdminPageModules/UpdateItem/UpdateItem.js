import React, {Component} from 'react';
import * as actions from "../../../actions/ItemActions";
import {connect} from "react-redux";

class UpdateItem extends Component {
    constructor(props) {
        super(props);
        this.onUpdateItem = this.onUpdateItem.bind(this)
        this.state={
            ram:this.props.singleItem.ram,
            storage:this.props.singleItem.storage,
            price:this.props.singleItem.price,
            description:this.props.singleItem.description,
            imgLink:this.props.singleItem.imgLink,
            singleItem:this.props.singleItem,
            processStatus: false,
            processStatusAlert: "",
            processStatusMessage: "",
        }
    }

    onUpdateItem(e){
        e.preventDefault();
        this.setState({
            processStatus: true,
            processStatusAlert: "alert alert-warning",
            processStatusMessage: "Please Wait...",
        });

        const updatedItem={
            id:this.state.singleItem.id,
            name:this.state.singleItem.name,
            brand:this.state.singleItem.brand,
            ram:this.state.ram,
            storage:this.state.storage,
            price:this.state.price,
            description:this.state.description,
            imgLink:this.state.imgLink,
            stock:this.state.singleItem.stock,
            sellarName:this.props.user.username,
        }
        this.props.updateItem(updatedItem, ()=>{
            this.setState({
                processStatusAlert: "alert alert-success",
                processStatusMessage: "Item updated successfully",
            });
        },()=>{
            this.setState({
                processStatusAlert: "alert alert-danger",
                processStatusMessage:
                    "Item updated failed.Please try again.",
            });
        })
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onUpdateItem}>
                    <div className="form-group formDiv">
                        {this.state.processStatus ? (
                            <div className={this.state.processStatusAlert} role="alert">
                                {this.state.processStatusMessage}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" disabled value={this.state.singleItem.name}/>
                    </div>
                    <div className="form-group">
                        <label >Brand</label>
                        <input type="text" className="form-control" disabled value={this.state.singleItem.brand}/>
                    </div>
                    <div className="form-group">
                        <label >Sellar</label>
                        <input type="text" className="form-control"  disabled value={this.state.singleItem.sellarName}/>
                    </div>


                    <div className="form-group">
                        <label >Ram</label>
                        <input type="text" className="form-control" onChange={(e)=>{this.setState({ram:e.target.value})}} value={this.state.ram}/>
                    </div>
                    <div className="form-group">
                        <label >Storage</label>
                        <input type="text" className="form-control" onChange={(e)=>{this.setState({storage:e.target.value})}} value={this.state.storage}/>
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="text" className="form-control" onChange={(e)=>{this.setState({price:e.target.value})}} value={this.state.price}/>
                    </div>
                    <div className="form-group">
                        <label >imgLink</label>
                        <input type="text" className="form-control" onChange={(e)=>{this.setState({imgLink:e.target.value})}} value={this.state.imgLink}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.authReducer.user,

});

const mapActionToProps = {
    updateItem:actions.updateItem,
};

export default connect(mapStateToProps, mapActionToProps)(UpdateItem);
