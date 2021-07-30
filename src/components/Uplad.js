import React from 'react'
import Mammonth from 'mammoth'

export default class Upload extends React.Component {
    onChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        
        reader.onload = (loadEvent) => {
            const arrayBuffer = loadEvent.target.result;
            Mammonth.convertToHtml({ arrayBuffer })
                .then(({ value }) => {
                    this.props.onChange({ target: { value } })
                })
                .done()
        }
        
        reader.readAsArrayBuffer(file)
    }

    render() {
        return <input type="file" onChange={this.onChange} accept=".doc,.docx" />
    }
}