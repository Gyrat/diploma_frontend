import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import AuthHelper from '../auth/AuthHelper';
import Select from '../Select';
import Upload from '../Uplad';

        
export default class Edit extends Component {
    state = {
        data: {},
        statusCode: null,
        confirmed: false,
    }

    AuthHelper = new AuthHelper();

    componentDidMount() {
        if (this.props.edit) {
            this.get();
        }

        if (this.AuthHelper.loggedIn()) {
            const confirm = this.AuthHelper.getConfirm();
            if (confirm) {
                this.setState({
                    confirmed: true
                })
            }
        }
    }

    get() {
        const id = this.props.match.params.id;
        const { t } = this.props
        axios.get(`http://localhost:4000/${t}/${id}`)
            .then(response => {
            this.setState({
                data: response.data.data[0]
            })
            })
            .catch(err => console.log(err))
    }

    onChange = (key) => (e) => {
        this.setState({
            data : {
                ...this.state.data,
                [key]: e.target.value
            }
        });
    }

    onSubmit = (e) => {
        const { t, edit } = this.props

        e.preventDefault();

        axios.post(edit ? `http://localhost:4000/${t}/edit/${this.state.data.id}` : `http://localhost:4000/${t}/create`, this.state.data)
            .then((response) => {
                console.log(response.data)
                this.setState({ statusCode: response.status })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { t, edit, fields } = this.props
        const { statusCode } = this.state

        if (statusCode === 200 || statusCode === 204) {
            if (edit) {
                return <Redirect from={`/${t}/edit/${this.state.data.id}`} to={`/${t}`} />
            } else {
                return <Redirect from={`/${t}/create`} to={`/${t}`} />
            }
        }

        let errorBlock

        if (statusCode === 400) {
            errorBlock = <p className="text">This {t} is already exist!</p>
        } else if (statusCode === 500) {
            errorBlock = <p className="text">There is error processing editing. Try again later.</p>
        }

        return(
            <div className="container">
                {errorBlock}
                <form id="player_form" onSubmit={this.onSubmit} encType="multipart/form-data">
                    {fields.map(({ field, type, vkey, nkeys, t, withUpload, name }) => type === 'fk'
                        ? (
                            <Select
                                key={field}
                                vkey={vkey}
                                nkeys={nkeys}
                                value={this.state.data[field]}
                                onChange={this.onChange(field)}
                                t={t}
                            />
                        ) : (
                            <div className="form-group" key={field}>
                                <div className="col-sm-5">
                                    <label htmlFor={field} className="col text edit-label">{name || field}</label>
                                    <input
                                        type={type}
                                        className="form-control"
                                        name={field}
                                        id={field}
                                        value={this.state.data[field]}
                                        onChange={this.onChange(field)}
                                        required
                                    />
                                    {withUpload && <Upload onChange={this.onChange(field)} />}
                                </div>
                                <div className="col-sm-5 messages"></div>
                            </div>
                        )
                    )}
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-success float-right" id="submit-player-button">
                            {edit ? 'Изменить' : 'Добавить'}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
