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
            name:"",
            brand:"",
            ram:"",
            storage:"",
            price:"",
            description:"",
            imgLink:"",
            stock:"",
            processStatus: false,
            processStatusAlert: "",
            processStatusMessage: "",
        }
    };

    componentDidMount() {
        this.props.fetchItemById(this.props.match.params.itemid)
        this.setState({name:this.props.item.name})

        // const updatedItem =
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
            name:this.state.name,
            brand:this.state.brand,
            ram:this.state.ram,
            storage:this.state.storage,
            price:this.state.price,
            description:this.state.description,
            imgLink:this.state.imgLink,
            stock:this.state.price,
            user:{id:this.props.user.id},
            sellarName:this.props.user.username
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
                                        value={this.state.name}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label >Brand</label>
                                    <select id="inputState" name="brand" className="form-control"
                                            onChange={(e) => {
                                                this.onValueChange(e);
                                            }}
                                    >
                                        <option selected>Choose...</option>
                                        <option value="Samsung">Samsung</option>
                                        <option value="Apple">Apple</option>
                                        <option value="Oppo">Oppo</option>
                                        <option value="Nokia">Nokia</option>
                                        <option value="Huawei">Huawei</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label >Price</label>
                                    <input type="number" name="price" className="form-control"  placeholder="Price"
                                           onChange={(e) => {
                                               this.onValueChange(e);
                                           }}
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <label >RAM</label>
                                    <input type="number" name="ram" className="form-control"  placeholder="Brand"
                                           onChange={(e) => {
                                               this.onValueChange(e);
                                           }}
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <label >Storage</label>
                                    <input type="number" name="storage" className="form-control"  placeholder="Storage"
                                           onChange={(e) => {
                                               this.onValueChange(e);
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Description</label>
                                <input type="text" name="description" className="form-control" placeholder="Description"
                                       onChange={(e) => {
                                           this.onValueChange(e);
                                       }}
                                />
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
