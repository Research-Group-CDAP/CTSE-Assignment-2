import React, {Component} from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import * as actions from "../actions/ItemActions";
import {connect} from "react-redux";

class SellerUpdateItemsPage extends Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this)
        this.onUpdateItem = this.onUpdateItem.bind(this)

        this.state = {
            productTitle: "",
            imageUrl: "",
            price: "",
            categoryId: "",
            quantity: "",
            processStatus: false,
            processStatusAlert: "",
            processStatusMessage: "",
        }
    };

    componentDidMount() {
        this.props.fetchItemById(this.props.singleItem.id);
        this.setState({productTitle:this.props.singleItem.productTitle});
    }

    onValueChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onUpdateItem(e) {
        e.preventDefault();

        this.setState({
            processStatus: true,
            processStatusAlert: "alert alert-warning",
            processStatusMessage: "Please Wait...",
        });

        const updatedItem = {
            productTitle: this.state.productTitle,
            imageUrl: this.state.imageUrl,
            price: this.state.price,
            categoryId: "testId",
            quantity: this.state.quantity,
        };

        this.props.updateItem(
            updatedItem,
            () => {
                this.setState({
                    processStatusAlert: "alert alert-success",
                    processStatusMessage: "Account created successfully",
                });
            },
            () => {
                this.setState({
                    processStatusAlert: "alert alert-danger",
                    processStatusMessage:
                        "Something went wrong. Please try again with different username",
                });
            }
        );
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="card m-4">
                    <div className="card-body">
                        <form onSubmit={this.onAddItem}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Name</label>
                                    <input type="text" name="name" className="form-control"  placeholder="Name"
                                           onChange={(e) => {
                                               this.onValueChange(e);
                                           }}
                                        value={this.state.productTitle}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label >Price</label>
                                    <input type="number" name="price" className="form-control"  placeholder="Price"
                                           onChange={(e) => {
                                               this.onValueChange(e);
                                           }}
                                           value={this.state.price}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label>Stock</label>
                                    <input type="number" name="stock" className="form-control"
                                           onChange={(e) => {
                                               this.onValueChange(e);
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group ">
                                    <div className="form-check">
                                        <label >Image</label>
                                        <input type="text" name="imgLink" className="form-control"
                                               onChange={(e) => {
                                                   this.onValueChange(e);
                                               }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    item: state.itemReducer.singleItem,
    items:state.itemReducer.itemList
});

const mapActionToProps = {
    fetchItemById:actions.fetchItemById,
    fetchAllItems:actions.fetchAllItems,
    updateItem:actions.updateItem


};

export default connect(mapStateToProps, mapActionToProps)(SellerUpdateItemsPage);
