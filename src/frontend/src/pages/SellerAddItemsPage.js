import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/ItemActions";
import { storage } from "../firebase";
import Progress from "./Progress";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import NoItemImg from "../assets/img/SellerPage/noitem.jpg";

class SellerAddItemsPage extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.state = {
      name: "",
      brand: "",
      ram: "",
      storage: "",
      price: "",
      description: "",
      imgLink: "",
      stock: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
      //Firebase Image Upload States
      file: null,
      uploadPercentage: 0,
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onAddItem(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    if (!this.state.imgLink) {
      this.setState({
        processStatus: true,
        processStatusAlert: "alert alert-warning",
        processStatusMessage: "Please Upload an Image",
      });
      return false;
    }

    const newItem = {
      name: this.state.name,
      brand: this.state.brand,
      ram: this.state.ram,
      storage: this.state.storage,
      price: this.state.price,
      description: this.state.description,
      imgLink: this.state.imgLink,
      stock: this.state.stock,
      user: { id: this.props.user.id },
      sellarName: this.props.user.username,
    };

    this.props.addItem(
      newItem,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Product added successfully",
        });
        window.location = "/seller";
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Something went wrong",
        });
      }
    );
  }

  uploadImage(e) {
    if (e.target.files[0] !== null) {
      this.setState({
        processStatus: true,
        processStatusAlert: "alert alert-warning",
        processStatusMessage: "Image Uploading...",
      });
      const uploadTask = storage
        .ref(`products/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ uploadPercentage: progress });
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("products")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ imgLink: url });
              this.setState({
                processStatusAlert: "alert alert-success",
                processStatusMessage: "Image uploaded successfully",
              });
            });
        }
      );
    } else {
      this.setState({
        processStatusAlert: "alert alert-danger",
        processStatusMessage: "Something went wrong",
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-muted text-center font-weight-bold mt-3">
          ADD PRODUCT
        </h1>
        <div className="card m-4" style={{ backgroundColor: "#ebebeb" }}>
          <div className="card-body">
            <form onSubmit={this.onAddItem}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) => {
                      this.onValueChange(e);
                    }}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Brand</label>
                  <select
                    id="inputState"
                    name="brand"
                    className="form-control"
                    onChange={(e) => {
                      this.onValueChange(e);
                    }}
                    required
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
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    onChange={(e) => {
                      this.onValueChange(e);
                    }}
                    required
                  />
                </div>
                <div className="form-group col-md-2">
                  <label>RAM</label>
                  <input
                    type="number"
                    name="ram"
                    className="form-control"
                    placeholder="Brand"
                    onChange={(e) => {
                      this.onValueChange(e);
                    }}
                    required
                  />
                </div>
                <div className="form-group col-md-2">
                  <label>Storage</label>
                  <input
                    type="number"
                    name="storage"
                    className="form-control"
                    placeholder="Storage"
                    onChange={(e) => {
                      this.onValueChange(e);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) => {
                    this.onValueChange(e);
                  }}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label>Stock</label>
                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    onChange={(e) => {
                      this.onValueChange(e);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  {this.state.imgLink ? (
                    <img
                      src={this.state.imgLink}
                      alt="productImg"
                      style={{ width: "150px" }}
                    />
                  ) : (
                    <img
                      src={NoItemImg}
                      alt="productImg"
                      style={{ width: "150px" }}
                    />
                  )}

                  <label style={{ fontSize: "12px", marginLeft: "15px" }}>
                    Image
                  </label>
                  <div className="row mt-2">
                    <div className="col-md-9">
                      <input
                        className="form-control "
                        type="file"
                        id="exampleInputEmail"
                        name="Image"
                        style={{ padding: "2px" }}
                        onChange={(e) => {
                          this.setState({ file: e.target.files[0] });
                          this.uploadImage(e);
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <Progress percentage={this.state.uploadPercentage} />
              </div>

              <div className="form-group mb-0">
                {this.state.processStatus ? (
                  <div className={this.state.processStatusAlert} role="alert">
                    {this.state.processStatusMessage}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <button type="submit" className="btn btn-primary mt-0">
                ADD PRODUCT
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapActionToProps = {
  addItem: actions.addItem,
};

export default connect(mapStateToProps, mapActionToProps)(SellerAddItemsPage);
