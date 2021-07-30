import React, { Component } from 'react';
import "./index.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import TableRow from "./TableRow";
import AuthHelper from '../auth/AuthHelper';

export default class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            confirmed: false
        };
    }

    AuthHelper = new AuthHelper();

    componentDidMount() {
        this.getData();
        if (this.AuthHelper.loggedIn()) {
            const confirm = this.AuthHelper.getConfirm();
            if (confirm) {
                this.setState({ confirmed: true })
            }
        }
    }

    getData = () => {
        axios.get(`http://localhost:4000/${this.props.t}`)
        .then(response => {
          this.setState({
              data: response.data.data
          })
        })
        .catch(err => console.log(err))
    }

    render() {
        const { t, fields } = this.props
        const { data } = this.state

        return (
            <div className="table table-bordered table-hover">
              <div id="lol" className="col-md-10 offset-md-1">
                {data === undefined ? null : (
                  <div>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          {/* <th scope="col">ID</th> */}
                          {fields.map(({ field, name }) => <th key={field}>{name || field}</th>)}
                          <th scope="col">
                            <Link
                              to={`/${t}/create`}
                              className="btn btn-sm btn-success"
                              title="Add a New Team"
                            >
                              Добавить
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(row => <TableRow data={row} t={t} fields={fields} key={row.id} onDelete={this.getData} />)}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
        )
    }
}
