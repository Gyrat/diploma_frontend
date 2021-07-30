import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from '../Select';

export default class TableRow extends Component {
    delete = () => {
        axios.post(`http://localhost:4000/${this.props.t}/delete/${this.props.data.id}`)
            .then(() => this.props.onDelete && this.props.onDelete())
            .catch(err => console.error(err))
    }

    render() {
        const { data, t, fields } = this.props;
        const { id } = data
        return(
            <tr className="text-dark">
                {/* <td scope="row">{id}</td> */}
                {fields.map(({ field, type, vkey, nkeys, t }) => type === 'fk'
                    ? (<td key={field}>
                        <Select
                            vkey={vkey}
                            nkeys={nkeys}
                            value={data[field]}
                            t={t}
                            disabled
                        />
                    </td>)
                    : (<td key={field} scope={field}>{type === 'date' ? new Date(data[field]).toLocaleDateString('en-GB') : data[field]}</td>)
                )}
                <td>
                    <Link to={`/${t}/edit/${id}`} rel="noopener" className="btn btn-sm btn-success">
                        <i className="fa fa-pencil fa-lg" aria-hidden="true">Изменить</i>
                    </Link>
                    <a href="javascript:void(0);" onClick={this.delete} className="btn btn-sm btn-danger">Удалить</a>
                </td>
            </tr>
        )
    }
}
