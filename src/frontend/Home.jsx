import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Grid } from '@mui/material';

const Home = () => {
    return (
        <div >
            <div className='Banner' style={{
                marginTop: "50px"
            }}>
                <h1>Silver Spoon Catering</h1>
            </div>
            <div className='Banner'>
                <h3>"Where every event begins with elegance and ends with satisfaction."</h3>
            </div>
            <div className='desc' style={{ paddingBottom: "20px" }}>
                <p>At Silver Spoon Catering, we specialize in transforming meals into memorable experiences. Whether you're planning a luxurious wedding, a corporate gathering, or a private celebration, our team is dedicated to delivering impeccable service and gourmet cuisine tailored to your vision.
                    With a passion for detail, fresh ingredients, and flawless presentation, we go beyond just catering — we curate culinary moments that delight every guest. From customized menus to seamless event coordination, Silver Spoon Catering ensures your occasion is not only successful, but unforgettable.
                    Let us serve you excellence — one silver spoon at a time.</p>
            </div>
            <div style={{ width: "100%", height: "100px" }}>

            </div>

            <div className='service'>
                <h1>Our Services</h1><br />
                <Grid sx={{marginLeft:"50px"}} container spacing={4}>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Card sx={{  maxWidth: 345,backgroundColor:"AppWorkspace",color:"white" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://img.freepik.com/free-photo/elegant-wedding-table-setting-with-floral-centerpiece-candles_23-2151978920.jpg?ga=GA1.1.182746897.1750050140&semt=ais_hybrid&w=740"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} gutterBottom variant="h5" component="div">
                                        WEDDING
                                    </Typography>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} variant="body2" >
                                        Celebrate your big day with elegance — our exquisite catering brings flavor, style, and care to every moment.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Card sx={{  maxWidth: 345,backgroundColor:"AppWorkspace",color:"white" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://img.freepik.com/free-photo/boxing-day-celebration-with-balloons_23-2151013721.jpg?ga=GA1.1.182746897.1750050140&semt=ais_hybrid&w=740"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} gutterBottom variant="h5" component="div">
                                        BIRTHDAYS
                                    </Typography>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} variant="body2" >
                                        Make your special day unforgettable with our delicious food and personalized catering for all ages and party styles.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Card sx={{  maxWidth: 345,backgroundColor:"AppWorkspace",color:"white" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://img.freepik.com/free-photo/graduation-celebration-success-achievement-learning-combined-generated-by-ai_188544-24685.jpg?ga=GA1.1.182746897.1750050140&semt=ais_hybrid&w=740"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} gutterBottom variant="h5" component="div">
                                        CONVOCATION
                                    </Typography>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} variant="body2" >
                                        Honor academic achievement with tasteful catering that adds pride and flavor to your celebration.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Card sx={{  maxWidth: 345,backgroundColor:"AppWorkspace",color:"white" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://img.freepik.com/free-photo/navratri-decoration-with-candles_23-2151193769.jpg?ga=GA1.1.182746897.1750050140&semt=ais_hybrid&w=740"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} gutterBottom variant="h5" component="div">
                                        ANNIVERSARIES
                                    </Typography>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} variant="body2" >
                                        Celebrate years of togetherness with elegant catering that adds warmth, flavor, and charm to your special day.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Card sx={{  maxWidth: 345,backgroundColor:"AppWorkspace",color:"white" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://img.freepik.com/free-photo/cinematic-happy-people-celebrating-american-independence-day-holiday_23-2151479257.jpg?ga=GA1.1.182746897.1750050140&semt=ais_hybrid&w=740"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} gutterBottom variant="h5" component="div">
                                        REUNIONS
                                    </Typography>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} variant="body2" >
                                        Bring back memories and reconnect over delicious food tailored to make every moment unforgettable.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Card sx={{  maxWidth: 345,backgroundColor:"AppWorkspace",color:"white" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://img.freepik.com/free-photo/glowing-lanterns-festive-night-scene_23-2151983965.jpg?ga=GA1.1.182746897.1750050140&semt=ais_hybrid&w=740"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} gutterBottom variant="h5" component="div">
                                        FESTIVALS
                                    </Typography>
                                    <Typography sx={{fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"}} variant="body2" >
                                         Add joy and tradition to your celebrations with festive flavors that bring everyone together.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>




            </div>

        </div>
    )
}

export default Home
