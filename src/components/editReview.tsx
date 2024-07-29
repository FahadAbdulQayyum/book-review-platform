import Form from './form'
import { useLocation } from 'react-router-dom';

const EditReview = () => {
    const location = useLocation();
    const { state } = location;

    console.log('...location.state...', state)
    return (
        <div>
            <Form isFor={'Edit Review'} additionalInputs={state} />
        </div>
    )
}

export default EditReview
