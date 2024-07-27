import React, { useState, useEffect, ChangeEvent } from 'react';
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

interface SearchProps {
    id: string;
    book: string;
    author: string;
    rate: number;
}

const Home = () => {
    const dispatch: AppDispatch = useDispatch();
    const books = useSelector((state: RootState) => state.books.books);
    const status = useSelector((state: RootState) => state.books.status);
    const error = useSelector((state: RootState) => state.books.error);

    const [data, setData] = useState<SearchProps[]>([]);
    const [displayData, setDisplayData] = useState<SearchProps[]>([]);
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState("");

    const [page, setPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        if (status === 'idle') {
            const url = 'data/data.json'
            dispatch(fetchData({ url }));
        }
        console.log('books:', books);
    }, []);

    useEffect(() => {
        setData(books);
        setPage(1);
    }, [books]);

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setDisplayData(data.slice(startIndex, endIndex));
    }, [page, data]);

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        console.log('valueeee', value)
        setPage(value);
    };

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isValid = validateInput();

        if (isValid) {
            console.log(`Search: ${search}`);
            console.log('data:', data, search);
            let searchedData = books.filter((v: SearchProps) =>
                v.author.toLowerCase().includes(search.toLowerCase()) ||
                v.book.toLowerCase().includes(search.toLowerCase())
            );
            setData(searchedData);
            setPage(1);
            console.log('searchedData:', searchedData);
        } else {
            search.length === 0 && setSearchError("Type something to search");
        }

        console.log('handleSearch', search);
        setSearch("");
    };

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        if (e.target.value.length >= 6) {
            setSearchError("");
        } else {
            setSearchError("Search should have more than 5 characters.");
        }
    };

    const validateInput = (): boolean => {
        if (!search.length) {
            return false;
        }
        return true;
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
                !displayData.length ? <Loader /> : displayData.map((v: SearchProps) =>
                    <div key={v.id + v.rate} className='bg-tertiary flex justify-between items-center px-5 rounded-full' >
                        <div>
                            <p>{v.book.toUpperCase()}</p>
                            <small>{v.author}</small>
                        </div>
                        <div>{v.rate}</div>
                        <Rating
                            name="hover-feedback"
                            value={v.rate}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </div>
                )
            }
            <Pagination
                className='flex justify-center'
                count={Math.ceil(data.length / itemsPerPage)}
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
        </div>
    );
}

export default Home;