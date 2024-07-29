import React, { ChangeEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchData } from '../features/counter/bookSlice';
import { API } from '../config/constants';
import Toast from './toast';

import { useNavigate } from 'react-router-dom';
import { decrement } from '../features/counter/counterSlice';


interface updateDataInfo {
    bookName: string;
    bookId: string;
    bookAuthor: string;
    bookReviewText: string;
    bookRating: string;
    _id: string;
}

interface FormProps {
    isNew?: boolean;
    isFor: string;
    additionalInputs?: updateDataInfo
}
export interface BookResponse {
    success: boolean;
    message: string;
    token: string;
    user?: { _id: string }
    data?: any; // Adjust the type based on your actual data structure
}
const Form: React.FC<FormProps> = ({ isFor, additionalInputs }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [bookName, setBookName] = useState("");
    const [bookId, setBookId] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookReviewText, setBookReviewText] = useState("");
    const [bookRating, setBookRating] = useState<number>(0);
    const [id, setId] = useState("");

    // Initialize error states
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [bookNameError, setBookNameError] = useState("");
    const [bookIdError, setBookIdError] = useState("");
    const [bookAuthorError, setBookAuthorError] = useState("");
    const [bookReviewTextError, setBookReviewTextError] = useState("");
    const [bookRatingError, setBookRatingError] = useState("");


    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error'>('success');

    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    // const books = useSelector((state: RootState) => state.books.books);
    // const status = useSelector((state: RootState) => state.books.status);
    // const error = useSelector((state: RootState) => state.books.error);

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    useEffect(() => {
        if (additionalInputs) {
            console.log('addtionalInputssss...', additionalInputs)
            setBookName(additionalInputs.bookName)
            setBookId(additionalInputs.bookId)
            setBookAuthor(additionalInputs.bookAuthor)
            setBookReviewText(additionalInputs.bookReviewText)
            setBookRating(+additionalInputs.bookRating)
            setId(additionalInputs._id)
        }
    }, [])

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const onChangeBookName = (e: ChangeEvent<HTMLInputElement>) => {
        setBookName(e.target.value);
        if (bookName.length > 1) {
            setBookNameError("");
        } else {
            setBookNameError("Please enter a book name.");
        }
    };

    const onChangeBookId = (e: ChangeEvent<HTMLInputElement>) => {
        setBookId(e.target.value);
        if (bookId.length > 1) {
            setBookIdError("");
        } else {
            setBookIdError("Please enter book id.");
        }
    };

    const onChangeBookAuthor = (e: ChangeEvent<HTMLInputElement>) => {
        setBookAuthor(e.target.value);
        if (bookAuthor.length > 1) {
            setBookAuthorError("");
        } else {
            setBookAuthorError("Please enter book author name.");
        }
    };

    const onChangeBookReviewText = (e: ChangeEvent<HTMLInputElement>) => {
        setBookReviewText(e.target.value);
        if (bookReviewText.length > 5) {
            setBookReviewTextError("");
        } else {
            setBookReviewTextError("Please type a sentence at least.");
        }
    };

    const onChangeBookRating = (e: ChangeEvent<HTMLInputElement>) => {
        setBookRating(+e.target.value);
        if (!bookRating) {
            setBookRatingError("");
        } else {
            setBookRatingError("Please enter your rating.");
        }
    };

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (emailRegex.test(e.target.value)) {
            setEmailError("");
        } else {
            setEmailError("Please enter a valid email.");
        }
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.length >= 6) {
            setPasswordError("")
        } else {
            setPasswordError("Password should have more than 5 characters.");
        }
    };

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        if (e.target.value.length >= 6) {
            setUsernameError("")
        } else {
            setUsernameError("Username should have more than 5 characters.");
        }
    };

    function validateInput(): boolean {
        if (isFor.replace(" ", "").toLowerCase() === "login") {
            if (email.length < 5) {
                return false
            }

            if (password.length < 5) {
                return false
            }

            return true;
        }

        if (isFor.replace(" ", "").toLowerCase() === "signup") {
            if (email.length < 5) {
                return false
            }

            if (username.length < 5) {
                return false
            }

            if (password.length < 5) {
                return false
            }

            return true;
        }
        if (isFor.replace(" ", "").toLowerCase() === "reviewforme" || isFor.replace(" ", "").toLowerCase() === "updateprofile") {
            // if (email.length < 5) {
            //     return false
            // }

            // if (username.length < 5) {
            //     return false
            // }

            // if (password.length < 5) {
            //     return false
            // }

            return true;
        }
        if (!email.length && !emailRegex.test(email) && isFor.replace(" ", "").toLowerCase() !== "reviewform") {
            return false
        }

        if (username.length < 5 && isFor.replace(" ", "").toLowerCase() !== "reviewform") {
            return false
        }

        if (password.length < 5 && isFor.replace(" ", "").toLowerCase() !== "reviewform") {
            return false
        }

        return true;
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isValid = validateInput();
        if (isValid) {
            console.log(`
                Email: ${email},
                Username: ${username},
                Password: ${password},
                Book Name: ${bookName},
                Book Id: ${bookId},
                Book Author: ${bookAuthor},
                Book Review Text: ${bookReviewText},
                Book Rating: ${bookRating},
                `);

            if (isFor.replace(" ", "").toLowerCase() === 'login') {
                let data = { email, password }
                const url = `${API}/api/user/login`
                const resultAction = await dispatch(fetchData({ url, method: 'POST', data }));
                if (fetchData.fulfilled.match(resultAction)) {
                    const payload = resultAction.payload as BookResponse;
                    console.log('pyaloaddd...', payload)
                    if (payload.success) {
                        localStorage.setItem('token', payload.token)
                        localStorage.setItem('userId', payload.user?._id ?? 'undefined')
                        setMessage(payload.message);
                        setSeverity('success');
                        setTimeout(() => {
                            navigate('/');
                            dispatch(decrement())
                        }, 1000);
                    } else {
                        setMessage(payload.message);
                        setSeverity('error');
                    }
                    setOpen(true);
                } else {
                    setMessage('Signup failed!');
                    setOpen(true);
                }

            }

            if (isFor.replace(" ", "").toLowerCase() === 'signup') {

                const url = `${API}/api/user/signup`
                let data = { email, password, name: username }

                const resultAction = await dispatch(fetchData({ url, method: 'POST', data }));

                if (fetchData.fulfilled.match(resultAction)) {
                    const payload = resultAction.payload as BookResponse;
                    if (payload.success) {
                        setMessage(payload.message);
                        setSeverity('success');
                    } else {
                        setMessage(payload.message);
                        setSeverity('error');
                    }
                    setOpen(true);
                } else {
                    setMessage('Signup failed!');
                    setOpen(true);
                }
            }

            if (isFor.replace(" ", "").toLowerCase() === 'reviewform') {

                let data = {
                    bookName, bookId, bookAuthor, bookReviewText, bookRating, userId: localStorage.getItem('userId')
                }
                const url = `${API}/api/review/add`
                // const resultAction = await dispatch(fetchData({ url, method: 'POST', data }));
                const resultAction = await dispatch(fetchData({
                    url, method: 'POST', data, headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                }));
                if (fetchData.fulfilled.match(resultAction)) {
                    const payload = resultAction.payload as BookResponse;
                    console.log('pyaloaddd...', payload)
                    if (payload.success) {
                        setMessage(payload.message);
                        setSeverity('success');
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                    } else {
                        setMessage(payload.message);
                        setSeverity('error');
                    }
                    setOpen(true);
                } else {
                    setMessage('Signup failed!');
                    setOpen(true);
                }

            }

            if (isFor.replace(" ", "").toLowerCase() === 'reviewforme') {

                console.log('reviewforme clled...')
                let data = {
                    bookName, bookId, bookAuthor, bookReviewText, bookRating, userId: localStorage.getItem('userId')
                }
                console.log('id...', id)
                const url = `${API}/api/review/update/${id}`
                console.log('urrrlll...', url)
                // const resultAction = await dispatch(fetchData({ url, method: 'POST', data }));
                const resultAction = await dispatch(fetchData({
                    url, method: 'PUT', data, headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                }));
                if (fetchData.fulfilled.match(resultAction)) {
                    const payload = resultAction.payload as BookResponse;
                    console.log('pyaloaddd...', payload)
                    if (payload.success) {
                        setMessage(payload.message);
                        setSeverity('success');
                        setTimeout(() => {
                            navigate('/myreview');
                        }, 2000);
                    } else {
                        setMessage(payload.message);
                        setSeverity('error');
                    }
                    setOpen(true);
                } else {
                    setMessage('Signup failed!');
                    setOpen(true);
                }

            }

            if (isFor.replace(" ", "").toLowerCase() === 'updateprofile') {

                console.log('updateprofile clled...')
                let data = {
                    // bookName, bookId, bookAuthor, bookReviewText, bookRating, userId: localStorage.getItem('userId')
                    email, username
                }
                console.log('id...', id)
                const url = `${API}/api/user/update/${localStorage.getItem('userId')}`
                console.log('udpate urrrlll...', url)
                // const resultAction = await dispatch(fetchData({ url, method: 'POST', data }));
                const resultAction = await dispatch(fetchData({
                    url, method: 'PUT', data, headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                }));
                if (fetchData.fulfilled.match(resultAction)) {
                    const payload = resultAction.payload as BookResponse;
                    console.log('pyaloaddd...', payload)
                    if (payload.success) {
                        setMessage(payload.message);
                        setSeverity('success');
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                    } else {
                        setMessage(payload.message);
                        setSeverity('error');
                    }
                    setOpen(true);
                } else {
                    setMessage('Signup failed!');
                    setOpen(true);
                }

            }

            setEmail("")
            setUsername("")
            setPassword("")
            setBookName("")
            setBookId("")
            setBookAuthor("")
            setBookReviewText("")
            setBookRating(0)

        } else {
            email.length === 0 && setEmailError("Enter your email")
            username.length === 0 && setUsernameError("Enter your username")
            password.length === 0 && setPasswordError("Enter your email")
            bookName.length === 0 && setBookNameError("Enter book name")
            bookId.length === 0 && setBookIdError("Enter book id")
            bookAuthor.length === 0 && setBookAuthorError("Enter Author name")
            bookReviewText.length === 0 && setBookReviewTextError("Type your reviews")
            bookRating === 0 && setBookRatingError("Enter your ratings")
        }
    };

    return (
        <div className='text-white sm:flex sm:flex-col md:flex-row justify-between items-center w-full h-screen'>
            <div className='flex flex-col items-center justify-center bg-primary md:w-[40%] w-full h-64 sm:h-full bg-hero-pattern bg-cover bg-blend-soft-light'>
                <h2 className='uppercase text-5xl backdrop-blur-sm p-10'>Review<small className='text-slate-600'> Books</small></h2>
                <small className='mx-6 text-sm'>Spend your quality time with quality books after getting the contentful reviews.</small>
            </div>
            <div className='justify-center w-full md:w-[60%] sm:h-full bg-tertiary text-black flex items-center'>
                <div className='m-10 w-full sm:m-6 md:m-10 lg:m-16 overflow-hidden'>
                    {/* <h1 className='text-3xl font-bold tracking-tight'>{isNew ? 'Sign Up' : 'Log In'}</h1> */}
                    <h1 className='text-3xl font-bold tracking-tight'>{isFor}</h1>
                    <div className='w-20 h-1 bg-primary mt-3'></div>
                    <div>
                        <Box
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
                            {/* {isNew && <TextField */}
                            {((isFor.replace(" ", "").toLowerCase() === 'signup' || (isFor.replace(" ", "").toLowerCase() === 'updateprofile') || isFor.replace(" ", "").toLowerCase() === 'login') && (isFor.replace(" ", "").toLowerCase() !== 'reviewform' || isFor.replace(" ", "").toLowerCase() !== 'reviewforme')) && <TextField
                                error={emailError !== ""}
                                helperText={emailError}
                                id="email-field"
                                label="Email"
                                value={email}
                                onChange={onChangeEmail}
                                variant="standard"
                                required
                            />}
                            <br />
                            {(isFor.replace(" ", "").toLowerCase() === 'signup' || (isFor.replace(" ", "").toLowerCase() === 'updateprofile')) && (isFor.replace(" ", "").toLowerCase() !== 'reviewform' || isFor.replace(" ", "").toLowerCase() !== 'reviewforme') && <TextField
                                error={usernameError !== ""}
                                helperText={usernameError}
                                id="username-field"
                                label="Username"
                                value={username}
                                onChange={onChangeUsername}
                                variant="standard"
                                required
                            />}
                            <br />
                            {(isFor.replace(" ", "").toLowerCase() !== 'updateprofile' && isFor.replace(" ", "").toLowerCase() !== 'reviewforme' && isFor.replace(" ", "").toLowerCase() !== 'reviewform') && <TextField
                                error={passwordError !== ""}
                                helperText={passwordError}
                                id="password-field"
                                label="Password"
                                value={password}
                                onChange={onChangePassword}
                                variant="standard"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end"
                                        >
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                }}
                                required
                            />}
                            {/* <br /> */}
                            {
                                (isFor.replace(" ", "").toLowerCase() === "reviewform" || isFor.replace(" ", "").toLowerCase() === "reviewforme") &&
                                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                                    <TextField
                                        error={bookNameError !== ""}
                                        helperText={bookNameError}
                                        id="email-field"
                                        label="Book Name"
                                        value={bookName}
                                        onChange={onChangeBookName}
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        error={bookIdError !== ""}
                                        helperText={bookIdError}
                                        id="bookid-field"
                                        label="Book ID"
                                        value={bookId}
                                        onChange={onChangeBookId}
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        error={bookAuthorError !== ""}
                                        helperText={bookAuthorError}
                                        id="bookauthor-field"
                                        label="Book Author"
                                        value={bookAuthor}
                                        onChange={onChangeBookAuthor}
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        error={bookReviewTextError !== ""}
                                        helperText={bookReviewTextError}
                                        id="bookreview-field"
                                        label="Review Text"
                                        value={bookReviewText}
                                        onChange={onChangeBookReviewText}
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        error={bookRatingError !== ""}
                                        helperText={bookRatingError}
                                        id="bookrating-field"
                                        label="Book Rating"
                                        value={bookRating}
                                        onChange={onChangeBookRating}
                                        variant="standard"
                                        required
                                    />
                                    {/* <TextField
                                        error={emailError !== ""}
                                        helperText={emailError}
                                        id="email-field"
                                        label="Book Name"
                                        value={email}
                                        onChange={onChangeEmail}
                                        variant="standard"
                                        required
                                    /> */}
                                </div>

                            }
                            <div className='mt-6 ml-2 text-center'>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#EAB308',
                                        '&:hover': {
                                            backgroundColor: '#EAB30899',
                                        },
                                    }}
                                    className='w-full bg-yellow-500'
                                    onClick={handleSignUp}
                                >
                                    {isFor.replace(" ", "").toLowerCase() === "login" ? 'Login' : isFor.replace(" ", "").toLowerCase() === "signup" ? 'Signup' : (isFor.replace(" ", "").toLowerCase() === "reviewforme" || (isFor.replace(" ", "").toLowerCase() === 'updateprofile')) ? "Update" : "Submit"}
                                </Button>
                                {/* <small>{!isNew ? 'Not registered yet?' : 'Already registered?'} <a href={isNew ? '/login' : '/signup'}>{isNew ? 'Login' : 'Signup'}</a></small> */}
                                <small>{isFor.replace(" ", "").toLowerCase() === "login" ? 'Not registered yet?' : isFor.replace(" ", "").toLowerCase() === "signup" ? 'Already registered?' : ""} <Link to={isFor.replace(" ", "").toLowerCase() === "login" ? '/signup' : isFor.replace(" ", "").toLowerCase() === "signup" ? '/login' : "/myreview"}>{isFor.replace(" ", "").toLowerCase() === "login" ? 'Signup' : isFor.replace(" ", "").toLowerCase() === "signup" ? 'Login' : isFor.replace(" ", "").toLowerCase() === 'updateprofile' ? "" : "My Review"}</Link></small>
                            </div>
                            <Toast open={open} message={message} onClose={handleClose} severity={severity} />
                        </Box>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Form;