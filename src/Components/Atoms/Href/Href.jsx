import React from 'react';

const Href = (props) => {
    return (
        <div>
            <a href={props.link}>{props.cont}</a>
        </div>
    );
};

export default Href;
