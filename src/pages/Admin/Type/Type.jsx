import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrash, faTable } from '@fortawesome/free-solid-svg-icons';
import { variables } from '../../../Variables';
function Type() {
    const [producttypes, setProductTypes] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const [productTypeId, setProductTypeId] = useState(0);
    const [productTypeName, setProductTypeName] = useState('');

    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () => {
        axios
            .get(variables.API_URL + 'producttype')
            .then((response) => {
                setProductTypes(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const changeProductTypeName = (e) => {
        setProductTypeName(e.target.value);
    };

    const addClick = () => {
        setModalTitle('Thêm loại sản phẩm');
        setProductTypeId(0);
        setProductTypeName('');
    };

    const editClick = (type) => {
        setModalTitle('Sửa loại sản phẩm');
        setProductTypeId(type.ProductTypeId);
        setProductTypeName(type.ProductTypeName);
    };

    const createClick = () => {
        axios
            .post(
                variables.API_URL + 'producttype',
                {
                    ProductTypeName: productTypeName,
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
                refreshList();
            })
            .catch((error) => {
                alert('Failed');
            });
    };

    const updateClick = () => {
        axios
            .put(
                variables.API_URL + 'producttype',
                {
                    ProductTypeId: productTypeId,
                    ProductTypeName: productTypeName,
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
                refreshList();
            })
            .catch((error) => {
                alert('Failed');
            });
    };

    const deleteClick = (id) => {
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
                        refreshList();
                    },
                    (error) => {
                        alert('Failed');
                    },
                );
        }
    };
    return <h1>hihi</h1>;
}

export default Type;
