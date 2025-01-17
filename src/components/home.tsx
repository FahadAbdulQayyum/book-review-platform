import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Loader from './loader';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchData } from '../features/counter/bookSlice';
import { BookResponse } from './form';

import { useNavigate } from 'react-router-dom';
import { API } from '../config/constants';
import Toast from './toast';
import { increment } from '../features/counter/counterSlice';

export interface SearchProps {
    _id: string;
    userId: string;
    bookName: string;
    bookId: string;
    bookAuthor: string;
    bookReviewText: string;
    bookRating: string;
    createdAt: string;
}

const Home = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const books = useSelector((state: RootState) => state.books.books);
    const status = useSelector((state: RootState) => state.books.status);

    const [data, setData] = useState<SearchProps[]>([]);
    const [displayData, setDisplayData] = useState<SearchProps[]>([]);
    const [, setValue] = useState<number | null>(2);
    const [, setHover] = useState(-1);
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState("");

    const [open, setOpen] = useState(false);
    const [message,] = useState("");
    const [severity,] = useState<'success' | 'error'>('success');

    const [page, setPage] = useState(1);

    const [searching, setSearching] = useState(false);
    const itemsPerPage = 5;

    const isInitialMount = useRef(true);

    useEffect(() => {

        if (isInitialMount.current) {
            isInitialMount.current = false;
            !localStorage.getItem('token') && dispatch(increment())
        }
    }, [dispatch, navigate, status]);

    const fetchDataIfIdle = async () => {
        if (status === 'idle') {
            const url = `${API}/api/review/getallreviews`;
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
                setData(payload.data);
            }
        }
    };


    useEffect(() => {

        fetchDataIfIdle();
    }, []);

    useEffect(() => {
        if (Array.isArray(books) && books?.length > 0) {
            setData(books);
            setPage(1);
        }
    }, [books]);

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        if (Array.isArray(data)) {
            setDisplayData(data.slice(startIndex, endIndex));
        } else {
            setDisplayData([]);
        }
    }, [page, data]);

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        event.preventDefault()
        setPage(value);
    };

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isValid = validateInput();

        if (isValid) {
            setSearching(true)
            let searchedData = data.filter((v: SearchProps) =>
                (v.bookAuthor && v.bookAuthor.toLowerCase().includes(search.toLowerCase())) ||
                (v.bookName && v.bookName.toLowerCase().includes(search.toLowerCase()))
            );
            console.log('searchData', searchedData);
            setData(searchedData);
            setPage(1);
        } else {
            search?.length === 0 && setSearchError("Type something to search");
        }
        setSearch("");
    };

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (searching) {
            fetchDataIfIdle()
            setSearching(false)
        }
        setSearch(e.target.value);
        if (e.target.value?.length >= 6) {
            setSearchError("");
        } else {
            setSearchError("Search should have more than 5 characters.");
        }
    };

    const validateInput = (): boolean => {
        if (!search?.length) {
            return false;
        }
        return true;
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='space-y-1 px-2 mt-16'>
            <Box
                className='flex'
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: { xs: '100%', sm: '100%' }
                    }
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    error={searchError !== ""}
                    helperText={searchError}
                    id="search-field"
                    label="Search"
                    value={search}
                    onChange={onChangeSearch}
                    variant="standard"
                    required
                />
                <div className='mt-3 ml-2 text-center'>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#EAB308',
                            '&:hover': {
                                backgroundColor: '#EAB30899',
                            },
                        }}
                        className='w-full bg-yellow-500'
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </div>
            </Box>
            {
                !displayData?.length ? <Loader /> : displayData.map((v: SearchProps) =>
                    <div key={v._id} className='bg-tertiary flex justify-between items-center px-5 rounded-full' >
                        <div>
                            <p>{v.bookName ? v.bookName.toUpperCase() : ''}</p>
                            <small>{v.bookAuthor}</small>
                        </div>
                        <Rating
                            name="hover-feedback"
                            value={+v.bookRating}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                console.log('event0', event)
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                console.log('event1', event)
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Toast open={open} message={message} onClose={handleClose} severity={severity} />
                    </div>
                )
            }
            <Pagination
                className='flex justify-center'
                count={Math.ceil(data?.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#EAB308',
                    },
                    '& .MuiPaginationItem-page.Mui-selected': {
                        backgroundColor: '#EAB308',
                        color: '#ffffff',
                    },
                    '& .MuiPaginationItem-page:hover': {
                        backgroundColor: '#EAB30899'
                    },
                }}
            />
        </div >
    );
}

export default Home;