import React from 'react'
import { throttledGet } from '../utils';
import axios from 'axios';

export default class Select extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/${this.props.t}`)
            .then(response => {
                this.setState({ data: response.data.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { vkey, nkeys, value, onChange, disabled } = this.props
        const { data } = this.state
        console.log(nkeys)

        return <select value={value} onChange={onChange} disabled={disabled}>
            {data && Array.isArray(data)
                ? data.map(item => <option key={item.id} value={item[vkey]}>{nkeys.map(nkey => item[nkey]).join(' ')}</option>)
                : null
            }
        </select>
    }
}
