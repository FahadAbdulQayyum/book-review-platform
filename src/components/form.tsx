import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

interface FormProps {
    isNew: boolean;
}

const Form: React.FC<FormProps> = ({ isNew }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Initialize error states
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
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
        if (!email.length && !emailRegex.test(email)) {
            return false
        }

        if (!(username.length > 5)) {
            return false
        }

        if (!(password.length > 5)) {
            return false
        }

        return true;
    }

    const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isValid = validateInput();
        if (isValid) {
            console.log(`Email: ${email}, Username: ${username} Password: ${password}`);
        } else {
            email.length === 0 && setEmailError("Enter your email")
            username.length === 0 && setUsernameError("Enter your username")
            password.length === 0 && setPasswordError("Enter your email")
        }
    };

    return (
        <div className='text-white sm:flex sm:flex-col md:flex-row justify-between items-center w-full h-screen'>
            <div className='flex flex-col items-center justify-center bg-primary w-full h-64 sm:h-full bg-hero-pattern bg-cover bg-blend-soft-light'>
                <h2 className='uppercase text-5xl backdrop-blur-sm p-10'>Review<small className='text-slate-600'> Books</small></h2>
                <small className='mx-6 text-sm'>Spend your quality time with quality books after getting the contentful reviews.</small>
            </div>
            <div className='justify-center sm:w-[60%] sm:h-full bg-tertiary text-black flex items-center'>
                <div className='m-10 sm:m-6 md:m-20 lg:m-28 overflow-hidden'>
                    <h1 className='text-3xl font-bold tracking-tight'>{isNew ? 'Sign Up' : 'Log In'}</h1>
                    <div className='w-20 h-1 bg-primary mt-3'></div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': {
                                    m: 1,
                                    width: { xs: '100%', sm: '40ch' }
                                }
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            {isNew && <TextField
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
                            <TextField
                                error={usernameError !== ""}
                                helperText={usernameError}
                                id="username-field"
                                label="Username"
                                value={username}
                                onChange={onChangeUsername}
                                variant="standard"
                                required
                            />
                            <br />
                            <TextField
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
                                        // className='flex'
                                        >
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            // className='flex justify-start items-start'
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                }}
                                required
                            />
                            <br />
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
                                    {isNew ? 'Signup' : 'Login'}
                                </Button>
                                <small>{!isNew ? 'Not registered yet?' : 'Already registered?'} <a href={isNew ? '/login' : '/signup'}>{isNew ? 'Login' : 'Signup'}</a></small>
                            </div>
                        </Box>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Form;