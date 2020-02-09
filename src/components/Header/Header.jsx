import React from 'react';

const Header = (props) => {
    return (
        <div className="row">
            <header className="col d-flex align-items-center"><span>{props.id}</span></header>
        </div>
    )
}

export default Header;