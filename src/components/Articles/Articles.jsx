import React from 'react';
import Article from './Article/Article';

const Articles = (props) => {
    return (
        <div className="row justify-content-center">
            <Article />
            <Article />
        </div>
    )
}

export default Articles;