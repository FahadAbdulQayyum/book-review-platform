// import React, { useState } from 'react'
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// import { styled } from '@mui/material/styles';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Typography from '@mui/material/Typography';

// const labels: { [index: string]: string } = {
//     0.5: 'Useless',
//     1: 'Useless+',
//     1.5: 'Poor',
//     2: 'Poor+',
//     2.5: 'Ok',
//     3: 'Ok+',
//     3.5: 'Good',
//     4: 'Good+',
//     4.5: 'Excellent',
//     5: 'Excellent+',
// };

// function getLabelText(value: number) {
//     return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }


// const StyledRating = styled(Rating)({
//     '& .MuiRating-iconFilled': {
//         color: '#ff6d75',
//     },
//     '& .MuiRating-iconHover': {
//         color: '#ff3d47',
//     },
// });

// const Home = () => {

//     const [data, setData] = useState([
//         {
//             userName: 'Fahad', book: 'A flying kite', author: 'Khalid Hussain', rate: 4
//         },
//         {
//             userName: 'Fahad1', book: 'A flying kite1', author: 'Khalid Hussain', rate: 3
//         },
//         {
//             userName: 'Fahad2', book: 'A flying kite2', author: 'Khalid Hussain', rate: 5
//         },
//         {
//             userName: 'Fahad3', book: 'A flying kite3', author: 'Khalid Hussain', rate: 2
//         },
//         { userName: 'Fahad4', book: 'A flying kite4', author: 'Khalid Hussain', rate: 1 },
//     ])

//     const [value, setValue] = useState<number | null>(2);
//     const [hover, setHover] = useState(-1);

//     return (
//         <div className='space-y-1'>
//             {data.map(v =>
//                 <div className='bg-primary flex justify-between items-center px-5'>
//                     <div>
//                         <h2>{v.userName}</h2>
//                         <p>{v.book}</p>
//                         <small>{v.author}</small>
//                     </div>
//                     <div>{v.rate}</div>
//                     <Box
//                         sx={{
//                             '& > legend': { mt: 2 },
//                         }}
//                     >
//                         <Typography component="legend">Custom icon and color</Typography>
//                         <StyledRating
//                             name="customized-color"
//                             defaultValue={2}
//                             getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
//                             precision={0.5}
//                             icon={<FavoriteIcon fontSize="inherit" />}
//                             emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
//                         />
//                         <Typography component="legend">10 stars</Typography>
//                         <Rating name="customized-10" defaultValue={2} max={10} />
//                     </Box>
//                     {value !== null && (
//                         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//                     )}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Home


















import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import axios from 'axios';
import Loader from './loader';

const Home = () => {

const [data, setData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            try {
                const dt = await axios.get("/data/data.json")
                console.log('dtt', dt.data)
                setData(dt.data)
            } catch (err) {
                console.error('Error fetching data:', err)
            }
        }
        setTimeout(() => {
            fetchData()
        }, 1500);
    }, [])

    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);
    const [search, setSearch] = useState("");

    useEffect(() => { console.log('search useEffect performed') }, [search])

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('handleSearch', search)
        setSearch("")
    }

    return (
        <div className='space-y-1 px-2'>
            <form className='flex space-x-2'>
                <input placeholder='Search for book' className='border w-full p-1' value={search} onChange={e => setSearch(e.target.value)} />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#EAB308',
                        '&:hover': {
                            backgroundColor: '#EAB30899',
                        },
                    }}
                    className=' bg-yellow-500'
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </form>
            {!data.length ? <Loader /> : data.map(v =>
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
                            setValue(value);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </div>
            )
            }
        </div>
    )
}

export default Home
