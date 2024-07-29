import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

import { useNavigate } from 'react-router-dom';

import { API } from '../config/constants';
import Toast from './toast';


import { fetchData } from '../features/counter/bookSlice';
import { BookResponse } from './form';
import { SearchProps } from './home';
import { Rating } from '@mui/material';
import { StarIcon } from '@heroicons/react/24/outline';

const MyReview = () => {

    const [data, setData] = useState([])
    const [value, setValue] = useState("")

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error'>('success');

    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const status = useSelector((state: RootState) => state.books.status);

    useEffect(() => {
        const fetchDataIfIdle = async () => {
            if (status === 'idle') {
                const url = `${API}/api/review/getmyreview/${localStorage.getItem('userId')}`;
                console.log('url...', url)
                const resultAction = await dispatch(fetchData({
                    url, method: 'GET',
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                }));

                if (fetchData.fulfilled.match(resultAction)) {
                    const payload = resultAction.payload as BookResponse;
                    console.log('payloadddddData', payload.data);
                    setData(payload.data);
                }
            }
        };

        fetchDataIfIdle();
        // }, [dispatch, status]);
    }, []);

    const deleteReview = async (id: string) => {
        // const url = `${API}/api/review/deletereview/${localStorage.getItem('userId')}/${v._id}`;
        const url = `${API}/api/review/delete/${id}`;
        console.log('url...', url)
        const resultAction = await dispatch(fetchData({
            url, method: 'DELETE',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            }
        }));

        if (fetchData.fulfilled.match(resultAction)) {
            const payload = resultAction.payload as BookResponse;
            console.log('payloadddddData', payload.data);
            // if (payload.success) {
            // navigate('/myreview')
            setMessage('Delete Successfully!');
            setSeverity('error');
            setOpen(true)
            // }
        }
    }

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='mt-16'>
            {data.map((v: SearchProps) =>
                <div key={v._id} className='m-2 bg-tertiary flex justify-between items-center px-5 rounded-full' >
                    <div>
                        <p>{v.bookName ? v.bookName.toUpperCase() : ''}</p>
                        <small>{v.bookAuthor}</small>
                    </div>
                    <Rating
                        name="hover-feedback"
                        value={+v.bookRating}
                        precision={0.5}
                        // onChange={(event, newValue) => {
                        //     setValue(newValue);
                        // }}
                        // onChangeActive={(event, newHover) => {
                        //     setHover(newHover);
                        // }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <div className='space-x-2'>
                        <button
                            onClick={() => navigate('/reviewforme', { state: v })}
                            className='bg-green-400 p-2 px-4 rounded active:scale-75 transition-all duration-500'>Edit</button>
                        <button
                            onClick={() => deleteReview(v._id)}
                            className='bg-red-400 p-2 px-4 rounded active:scale-75 transition-all duration-500'>Delete</button>
                    </div>
                    <Toast open={open} message={message} onClose={handleClose} severity={severity} />
                </div>
            )}
        </div >
    )
}

export default MyReview