import React from 'react';

const List = ({breed,fact1,fact2,fact3}) => {
    return (
        <div className='dog-facts'>
            <h2><i className='fa fa-paw'></i> {breed} <i className='fa fa-paw'></i></h2>
            <ul>
                <li><i className='fa fa-bone'></i>  {fact1}</li>
                <li><i className='fa fa-bone'></i>  {fact2}</li>
                <li><i className='fa fa-bone'></i>  {fact3}</li>
            </ul>
        </div>
    )
}

export default List;