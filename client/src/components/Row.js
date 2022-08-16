import React from 'react';
import AddOrUpdate from "./AddOrUpdate";
import {Link} from "react-router-dom";

function Row({product, index}) {
    return (

        <tr>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>
                {/*<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i*/}
                {/*    className="material-icons" data-toggle="tooltip" title="Edit"></i></a>*/}
                <Link className="detail" to={`/products/detail/${product.id}`}>
                    <i className="fa fa-info-circle"
                       aria-hidden="true"/>
                </Link>
                <Link className="edit" to={`/products/update/${product.id}`}><i
                    className="material-icons" data-toggle="tooltip" title="Edit"></i>
                </Link>
                <Link className="delete" to={`/products/delete/${product.id}`}><i
                    className="material-icons" data-toggle="tooltip" title="Delete"></i>
                </Link>
                {/*<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i*/}
                {/*    className="material-icons" data-toggle="tooltip" title="Delete"></i></a>*/}
            </td>
        </tr>


    );
}

export default Row;