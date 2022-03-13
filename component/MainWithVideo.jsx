import React from 'react';
import Box from "@mui/material/Box";
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { Button } from "@mui/material";
import Zoom from 'react-reveal/Zoom';

function MainWithVideo() {
    return (
        <Zoom >
        <Box
            sx={{
                position: 'relative', m: 0, p: 0
            }}
        >
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='/video/video.mp4'
                    width='100%'
                    height='100%'
                    // controls={true}
                    muted={true}
                    playing={true}
                    loop={true}
                    volume={0.7}
                />
            </div>
            <Link href="/main">
                <a id='main-link' >
                    <Button
                        className={'connect-button'}
                        sx={{
                            color: "#88E9FC",
                            borderRadius: "10px",
                            border: "5px solid #88E9FC",
                            fontFamily:'"Cinzel Decorative", cursive',
                            fontWeight: 700,
                            lineHeight: "30px",
                            fontSize: "30px",
                            position: 'relative',
                            py: 2,
                            px: 4,
                            zIndex: 999,
                            mr: {
                                xs: '8px',
                                sm: 0,
                                md: 0,
                                lg: '8px',

                            },
                            "&:hover": {
                                backgroundColor: '#88E9FC',
                                border: "5px solid #88E9FC",
                                color: 'black'
                            },
                        }}
                        variant="outlined"

                    >
                        Go to NFT's
                    </Button>
                </a>
            </Link>
        </Box>
        </Zoom>
    )
}

export default MainWithVideo