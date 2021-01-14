import React from 'react';
const ZipCode = props => {
    if (props.zipcode) {
        const details = props.zipcode.map((detail, index) => {
            return (
                <div key={index} style={{ margin: '100px' }}>
                    <h3>Zipcode#{index}:{detail}</h3>
                </div>

            )
        })
        return (
            <div style={{ textAlign: 'center' }}>
                Found Results: {props.zipcode.length}
                {details}
            </div>
        )
    }
    return null;
}

export default ZipCode;