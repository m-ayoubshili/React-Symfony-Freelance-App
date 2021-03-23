import React from 'react';
import PropTypes from 'prop-types';

const Test = ({onclick}) => {

    return (<div><button onClick={onclick}  className="btn">test btn</button>
        <button onClick={onclick}  className="btn">test btn</button>
    </div>
    )

}
export default Test
