import React, {Component} from 'react';
import * as actions from "../../../actions/ItemActions";
import {connect} from "react-redux";

class UpdateStockModal extends Component {
    constructor(props) {
        super(props);
        this.onUpdateStockSellar = this.onUpdateStockSellar.bind(this)
        this.state={
            qty:"",
            singleItem:this.props.singleItem,
            processStatus: false,
            processStatusAlert: "",
            processStatusMessage: "",
        }
    }

    onUpdateStockSellar(e){
        e.preventDefault();
        this.setState({
            processStatus: true,
            processStatusAlert: "alert alert-warning",
            processStatusMessage: "Please Wait...",
        });

        this.props.updateStockSeller(this.state.qty,this.state.singleItem.id, ()=>{
            this.props.fetchAllItemsBySellarID(this.props.user.id)
            this.setState({
                processStatusAlert: "alert alert-success",
                processStatusMessage: "Stock updated successfully",
            });
        },()=>{
            this.setState({
                processStatusAlert: "alert alert-danger",
                processStatusMessage:
                    "Stock updated failed.Please try again.",
            });
        })
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onUpdateStockSellar}>
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
                        <label >Quantity</label>
                        <input type="text" className="form-control" onChange={(e)=>{this.setState({qty:e.target.value})}}/>
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
    updateStockSeller:actions.updateStockSeller,
    fetchAllItemsBySellarID:actions.fetchAllItemsBySellarID
};

export default connect(mapStateToProps, mapActionToProps)(UpdateStockModal);
