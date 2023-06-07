import HeaderAdmin from '~/components/HeaderAdmin/header';
// import {tsConstructorType} from '@babel/types'
import './ProductType.scss';
import { variables } from '../../../Variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPencil, faPlus, faTable } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export class ProductType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            producttypes: [],
            modalTitle: '',
            ProductTypeName: '',
            ProductTypeId: 0,
            CreateAt: '',
            UpdateAt: '',
        };
    }

    //Lay dư liệu trả về JSON
    refreshList() {
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

    changeProductTypeName = (e) => {
        this.setState({ ProductTypeName: e.target.value });
    };

    addClick() {
        this.setState({
            modalTitle: 'Thêm loại sản phẩm',
            ProductTypeId: 0,
            ProductTypeName: '',
        });
    }

    editClick(type) {
        this.setState({
            modalTitle: 'Sửa loại sản phẩm',
            ProductTypeId: type.ProductTypeId,
            ProductTypeName: type.ProductTypeName,
        });
    }

    createClick() {
        axios
            .post(
                variables.API_URL + 'producttype',
                {
                    ProductTypeName: this.state.ProductTypeName,
                },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            )
            .then((response) => {
                alert(response.data);
                this.refreshList();
            })
            .catch((error) => {
                alert('Failed');
            });
    }

    updateClick() {
        axios
            .put(
                variables.API_URL + 'producttype',
                {
                    ProductTypeId: this.state.ProductTypeId,
                    ProductTypeName: this.state.ProductTypeName,
                },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            )
            .then((response) => {
                alert(response.data);
                this.refreshList();
            })
            .catch((error) => {
                alert('Failed');
            });
    }

    // createClick() {
    //     fetch(variables.API_URL + 'producttype', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             ProductTypeName: this.state.ProductTypeName,
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 alert(result);
    //                 this.refreshList();
    //             },
    //             (error) => {
    //                 alert('Failed');
    //             },
    //         );
    // }

    // updateClick() {
    //     fetch(variables.API_URL + 'producttype', {
    //         method: 'PUT',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             ProductTypeId: this.state.ProductTypeId,
    //             ProductTypeName: this.state.ProductTypeName,
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 alert(result);
    //                 this.refreshList();
    //             },
    //             (error) => {
    //                 alert('Failed');
    //             },
    //         );
    // }

    deleteClick(id) {
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            fetch(variables.API_URL + 'producttype/' + id, {
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

    render() {
        const { producttypes, modalTitle, ProductTypeId, ProductTypeName, CreateAt, UpdateAt } = this.state;
        return (
            <div className="producttype_wrapper">
                <HeaderAdmin />
                <div className="producttype-page__outer">
                    <div className="producttype-page__inner">
                        {/* Page Title */}
                        <div className="producttype-page__title-wrapper mb-5">
                            <span>
                                <FontAwesomeIcon className="producttype-page__title-icon" icon={faBriefcase} />
                            </span>
                            <div className="producttype-page__title-heading">
                                <div className="producttype-page__title-subheading">
                                    <h1>Danh sách loại sản phẩm</h1>
                                    <h3>Hiển thị toàn bộ danh sách loại sản phẩm của bạn.</h3>
                                </div>
                            </div>
                        </div>

                        <div className="producttype-page__tabs">
                            <div className="producttype-page__card card">
                                <div className="producttype-page__card-header card-header">
                                    <FontAwesomeIcon className="producttype-page__title-icon" icon={faTable} />
                                    Table Loại Sản phẩm
                                </div>
                                <div className="producttype-page__card-body card-body">
                                    <button
                                        type="button"
                                        className="float-start mb-4 producttype-page__add"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.addClick()}
                                    >
                                        <FontAwesomeIcon className="" icon={faPlus} />
                                        Thêm loại
                                    </button>

                                    <table
                                        id="tblProducts"
                                        className="table table-bordered table-hover table-responsive-lg table-striped"
                                    >
                                        <thead className="text-center thead-dark">
                                            <tr>
                                                <th>Số thứ tự</th>
                                                <th>Tên loại sản phẩm</th>
                                                <th>Ngày tạo</th>
                                                <th>Ngày cập nhật</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {producttypes.map((type, idx) => (
                                                <tr key={type.ProductTypeId}>
                                                    <td>{idx + 1}</td>
                                                    <td>{type.ProductTypeName}</td>
                                                    <td>{type.CreateAt}</td>
                                                    <td>{type.UpdateAt}</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning mr-1 producttype-page__btn--warning"
                                                            // Modal
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                            onClick={() => this.editClick(type)}
                                                        >
                                                            <FontAwesomeIcon className="mr-2" icon={faPencil} />
                                                            Sửa
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger mr-1 "
                                                            onClick={() => this.deleteClick(type.ProductTypeId)}
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
                                                    <h5 className="modal-title">{modalTitle}</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text">Loại sản phẩm</span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={ProductTypeName}
                                                            onChange={this.changeProductTypeName}
                                                        />
                                                    </div>

                                                    {ProductTypeId == 0 ? (
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary float-start"
                                                            onClick={() => this.createClick()}
                                                        >
                                                            Thêm sản phẩm
                                                        </button>
                                                    ) : null}

                                                    {ProductTypeId != 0 ? (
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary float-start"
                                                            onClick={() => this.updateClick()}
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

export default ProductType;
