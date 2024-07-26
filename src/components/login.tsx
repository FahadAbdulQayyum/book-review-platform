import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const handleSignUp = () => {
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className='text-white sm:flex sm:flex-col md:flex-row justify-between items-center w-full h-screen'>
            <div className='flex flex-col items-center justify-center bg-primary w-full h-64 sm:h-full bg-hero-pattern bg-cover bg-blend-soft-light'>
                <h2 className='uppercase text-5xl backdrop-blur-sm p-10'>Review<small className='text-yellow-500'> Books</small></h2>
                <small className='mx-6 text-sm'>Spend your quality time with quality books after getting the contentful reviews.</small>
            </div>
            <div className='sm:w-[60%] sm:h-full bg-tertiary text-black flex items-center'>
                <div className='m-10 sm:m-6 md:m-20 lg:m-28 overflow-hidden'>
                    <h1 className='text-3xl font-bold tracking-tight'>Log In</h1>
                    <div className='w-20 h-1 bg-primary mt-3'></div>
                    <div>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '130ch' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="email-field" label="Email" value={email} onChange={e => setEmail(e.target.value)} variant="standard" />
                            <br />
                            <TextField
                                id="password-field"
                                label="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                variant="standard"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                }}
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
                                    className='w-full'
                                    onClick={handleSignUp}
                                >
                                    Login
                                </Button>
                                <small>Not registered yet? <a href="/signup">Sign up</a></small>
                            </div>
                        </Box>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login;











// import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => {
//         setShowPassword((showPassword) => !showPassword);
//     };
//     return (
//         <div className='text-white flex justify-between items-center w-full h-screen'>
//             <div className='w-[40%] h-full bg-primary'>L</div>
//             <div className='w-[60%] h-full bg-tertiary text-black'>
//                 <div className='m-6'>
//                     <h1 className='text-3xl font-bold tracking-tight'>Sign Up</h1>
//                     <div className='w-20 h-1 bg-primary mt-3'></div>

//                     <div>
//                         <Box
//                             component="form"
//                             sx={{
//                                 '& .MuiTextField-root': { m: 1, width: '25ch' },
//                             }}
//                             noValidate
//                             autoComplete="off"
//                         >
//                             <TextField id="email-field" label="Email" variant="standard" />
//                             <TextField id="username-field" label="Username" variant="standard" />
//                             <TextField
//                                 id="password-field"
//                                 label="Password"
//                                 variant="standard"
//                                 type={showPassword ? "text" : "password"}
//                                 InputProps={{
//                                     endAdornment:
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 aria-label="toggle password visibility"
//                                                 onClick={handleClickShowPassword}
//                                             >
//                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                 }}
//                             />
//                         </Box>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login
