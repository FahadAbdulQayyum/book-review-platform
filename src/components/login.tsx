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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const handleSignUp = () => {
        console.log(`Email: ${email}, Username: ${username}, Password: ${password}`);
    };

    return (
        <div className='text-white flex justify-between items-center w-full h-screen'>
            <div className='w-[40%] h-full bg-primary'>L</div>
            <div className='w-[60%] h-full bg-tertiary text-black'>
                <div className='m-6 overflow-hidden'>
                    <h1 className='text-3xl font-bold tracking-tight'>Sign Up</h1>
                    <div className='w-20 h-1 bg-primary mt-3'></div>
                    <div>
                        <Box
                            component="form"
                            // sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' } }}
                            sx={{ '& .MuiTextField-root': { m: 1, width: '130ch' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="email-field" label="Email" value={email} onChange={e => setEmail(e.target.value)} variant="standard" />
                            <br />
                            <TextField id="username-field" label="Username" value={username} onChange={e => setUsername(e.target.value)} variant="standard" />
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
                                    variant="contained" color="primary"
                                    className='w-full'
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                                </Button>
                                <small>Already registered? <a href="/login">Sign in</a></small>
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
