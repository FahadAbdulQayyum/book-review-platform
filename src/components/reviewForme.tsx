import React from 'react'
import Form from './form'
import { useLocation } from 'react-router-dom';

const ReviewForme = () => {
    const location = useLocation();
    const { state } = location;

    console.log('...location.state...', state)
    return (
        <div>
            <Form isFor={'Review Forme'} additionalInputs={state} />
        </div>
    )
}

export default ReviewForme
