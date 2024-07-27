import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface FormProps {
    btnName: string;
    onClickFunc: () => void;
}

const CustomButton: React.FC<FormProps> = ({ btnName, onClickFunc }) => {
    return (
        <div className='ml-1.5'>
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
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#EAB308',
                        '&:hover': {
                            backgroundColor: '#EAB30899',
                        },
                    }}
                    className='w-full bg-yellow-500'
                    // onClick={handleSignUp}
                    onClick={onClickFunc}
                >
                    {btnName}
                </Button>
                {/* <small>{!isNew ? 'Not registered yet?' : 'Already registered?'} <a href={isNew ? '/login' : '/signup'}>{isNew ? 'Login' : 'Signup'}</a></small> */}
            </Box >
        </div >
    )
}

export default CustomButton
