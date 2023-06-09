import HeaderAdmin from '~/components/HeaderAdmin/header';
import './Product.scss';
import { variables } from '../../../Variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPencil, faPlus, faTable } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            producttypes: [],
            modalTitle: '',
            ProductId: 0,
            ProductName: '',
            ProductPrice: 0,
            ProductType: '',
            ProductFileName: 'default.png',
            CreateAt: '',
            UpdateAt: '',
            PhotoPath: variables.PHOTO_URL,
        };
    }

    //Modal
    changeProductName = (e) => {
        this.setState({ ProductName: e.target.value });
    };
    changeProductType = (e) => {
        this.setState({ ProductType: e.target.value });
    };
    changeProductPrice = (e) => {
        this.setState({ ProductPrice: e.target.value });
    };

    //Lay dư liệu trả về JSON
    refreshList() {
        axios
            .get(variables.API_URL + 'product')
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get(variables.API_URL + 'producttype')
            .then((response) => {
                this.setState({ producttypes: response.data });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    addClick() {
        this.setState({
            modalTitle: 'Thêm sản phẩm',
            ProductId: 0,
            ProductName: '',
            ProductPrice: 0,
            ProductType: '',
            ProductFileName: 'default.png',
        });
    }

    editClick(product) {
        this.setState({
            modalTitle: 'Sửa sản phẩm',
            ProductId: product.ProductId,
            ProductName: product.ProductName,
            ProductPrice: product.ProductPrice,
            ProductType: product.ProductType,
            ProductFileName: product.ProductFileName,
        });
    }

    createClick() {
        fetch(variables.API_URL + 'product', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ProductName: this.state.ProductName,
                ProductPrice: this.state.ProductPrice,
                ProductType: this.state.ProductType,
                ProductFileName: this.state.ProductFileName,
            }),
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    alert(result);
                    this.refreshList();
                },
                (error) => {
                    alert('Failed');
                },
            );
    }

    updateClick() {
        fetch(variables.API_URL + 'product', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ProductId: this.state.ProductId,
                ProductName: this.state.ProductName,
                ProductPrice: this.state.ProductPrice,
                ProductType: this.state.ProductType,
                ProductFileName: this.state.ProductFileName,
            }),
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    alert(result);
                    this.refreshList();
                },
                (error) => {
                    alert('Failed');
                },
            );
    }

    deleteClick(id) {
        if (window.confirm('Bạn có chắc muốn xóa?')) {
            fetch(variables.API_URL + 'product/' + id, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then(
                    (result) => {
                        alert(result);
                        this.refreshList();
                    },
                    (error) => {
                        alert('Failed');
                    },
                );
        }
    }

    imageUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', e.target.files[0], e.target.files[0].name);

        fetch(variables.API_URL + 'product/savefile', {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ ProductFileName: data });
            });
    };
    render() {
        //Khai báo
        const {
            producttypes,
            products,
            modalTitle,
            ProductId,
            ProductName,
            ProductPrice,
            ProductType,
            PhotoPath,
            ProductFileName,
            CreateAt,
            UpdateAt,
        } = this.state;
        return (
            <div className="product_wrapper">
                <HeaderAdmin />
                <div className="product-page__outer">
                    <div className="product-page__inner">
                        {/* Page Title */}
                        <div className="product-page__title-wrapper mb-5">
                            <span>
                                <FontAwesomeIcon className="product-page__title-icon" icon={faBriefcase} />
                            </span>
                            <div className="product-page__title-heading">
                                <div className="product-page__title-subheading">
                                    <h1>Danh sách sản phẩm</h1>
                                    <h3>Hiển thị toàn bộ danh sách sản phẩm của bạn.</h3>
                                </div>
                            </div>
                        </div>

                        <div className="product-page__tabs">
                            <div className="product-page__card card">
                                <div className="product-page__card-header card-header">
                                    <FontAwesomeIcon className="product-page__title-icon" icon={faTable} />
                                    Table Sản phẩm
                                </div>
                                <div className="product-page__card-body card-body">
                                    <button
                                        type="button"
                                        className="float-start mb-4 product-page__add"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.addClick()}
                                    >
                                        <FontAwesomeIcon className="" icon={faPlus} />
                                        Thêm sản phẩm
                                    </button>

                                    <table
                                        id="tblProducts"
                                        className="table table-bordered table-hover table-responsive-lg table-striped"
                                    >
                                        <thead className="text-center thead-dark">
                                            <tr>
                                                <th>Số thứ tự</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Giá sản phẩm /kg</th>
                                                <th>Loại sản phẩm</th>
                                                <th>Hình ảnh</th>
                                                <th>Ngày tạo</th>
                                                <th>Ngày cập nhật</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product, idx) => (
                                                <tr key={product.ProductId}>
                                                    <td>{idx + 1}</td>
                                                    <td>{product.ProductName}</td>
                                                    <td>{product.ProductPrice} $</td>
                                                    <td>{product.ProductType}</td>
                                                    <td>
                                                        <img
                                                            src={PhotoPath + product.ProductFileName}
                                                            alt={product.ProductFileName}
                                                            width="150"
                                                            height="150"
                                                        />
                                                    </td>
                                                    <td>{product.CreateAt}</td>
                                                    <td>{product.UpdateAt}</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning mr-1 producttype-page__btn--warning"
                                                            // Modal
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                            onClick={() => this.editClick(product)}
                                                        >
                                                            <FontAwesomeIcon className="mr-2" icon={faPencil} />
                                                            Sửa
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger mr-1 "
                                                            onClick={() => this.deleteClick(product.ProductId)}
                                                        >
                                                            <FontAwesomeIcon className="mr-2" icon={faTrash} />
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                                        <div className="modal-dialog modal-lg modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" style={{ fontSize: '1.4rem' }}>
                                                        {modalTitle}
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="d-flex flex-row bd-highlight mb-3">
                                                        <div className="p-2 w-50 bd-highlight">
                                                            <div className="input-group mb-3">
                                                                <span
                                                                    className="input-group-text"
                                                                    style={{ fontSize: '1.6rem' }}
                                                                >
                                                                    Tên sản phẩm
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={ProductName}
                                                                    onChange={this.changeProductName}
                                                                    style={{ height: '40px', fontSize: '1.6rem' }}
                                                                />
                                                            </div>

                                                            <div className="input-group mb-3">
                                                                <span
                                                                    className="input-group-text"
                                                                    style={{ fontSize: '1.6rem', marginTop: '20px' }}
                                                                >
                                                                    Giá sản phẩm / Kg
                                                                </span>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    min="0"
                                                                    value={ProductPrice}
                                                                    onChange={this.changeProductPrice}
                                                                    style={{
                                                                        height: '40px',
                                                                        marginTop: '20px',
                                                                        fontSize: '1.6rem',
                                                                    }}
                                                                />
                                                            </div>

                                                            <div className="input-group mb-3">
                                                                <span
                                                                    className="input-group-text"
                                                                    style={{ fontSize: '1.6rem', marginTop: '20px' }}
                                                                >
                                                                    Loại sản phẩm
                                                                </span>
                                                                <select
                                                                    className="form-select"
                                                                    onChange={this.changeProductType}
                                                                    value={ProductType}
                                                                    style={{
                                                                        height: '40px',
                                                                        marginTop: '20px',
                                                                        fontSize: '1.6rem',
                                                                    }}
                                                                >
                                                                    {producttypes.map((type) => (
                                                                        <option
                                                                            key={type.ProductTypeId}
                                                                            style={{
                                                                                fontSize: '1.6rem',
                                                                                marginTop: '20px',
                                                                            }}
                                                                        >
                                                                            {type.ProductTypeName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="p-2 w-50 bd-highlight">
                                                            <img
                                                                width="250px"
                                                                height="250px"
                                                                src={PhotoPath + ProductFileName}
                                                                alt="No Img Choose"
                                                            />
                                                            <input
                                                                className="m-2"
                                                                type="file"
                                                                onChange={this.imageUpload}
                                                            />
                                                        </div>
                                                    </div>
                                                    {ProductId == 0 ? (
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary float-start"
                                                            onClick={() => this.createClick()}
                                                            style={{
                                                                marginTop: '20px',
                                                                fontSize: '1.6rem',
                                                            }}
                                                        >
                                                            Thêm sản phẩm
                                                        </button>
                                                    ) : null}

                                                    {ProductId != 0 ? (
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary float-start"
                                                            onClick={() => this.updateClick()}
                                                            style={{
                                                                marginTop: '20px',
                                                                fontSize: '1.6rem',
                                                            }}
                                                        >
                                                            Cập nhật
                                                        </button>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
