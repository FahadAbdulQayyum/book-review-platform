import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


interface FormProps {
    inputFor: string;
}


const Input: React.FC<FormProps> = ({ inputFor }) => {
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

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: { xs: '100%', sm: '100%' }
                    }
                }}
                // noValidate
                autoComplete="off"
            >
                {inputFor === 'password' ? <TextField
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
                /> : inputFor === 'email' ?
                    <TextField
                        error={emailError !== ""}
                        helperText={emailError}
                        id="email-field"
                        label="Email"
                        value={email}
                        onChange={onChangeEmail}
                        variant="standard"
                        required
                    /> : <TextField
                        error={usernameError !== ""}
                        helperText={usernameError}
                        id="username-field"
                        label="Username"
                        value={username}
                        onChange={onChangeUsername}
                        variant="standard"
                        required
                    />}
            </Box>
        </div>
    )
}

export default Input
