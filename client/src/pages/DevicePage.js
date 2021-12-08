import { Grid, Box, Button } from '@mui/material';
import React from 'react';

const DevicePage = () => {
    const device = {id:1, model:"12 pro", releaseDate:"2021-03-05", guaranteePeriod:"12 месяцев", price:"3049", img:"https://shop.by/images/apple_iphone_12_pro_dual_sim_256gb_blue_1.jpg", deviceNameId:"2", manufacturerId:"2"}
    const deviceName = {id:1, name:"Смартфоны"}
    const consignment = {id:1, consignmentDate:"2021-03-05"}
    const manufacturer = {id:1, name:"Apple"}
    const provider = {id:1, name:"АСБИС"}
    const country = {id:1, name:"Япония",code:"JPN"}

    
    
    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            paddingTop={3}
            mt={3}
            >
            <Grid 
                item
                direction='column'
                display='flex'
                alignItems='center'
                justifyContent='center'
                md={4}
                >
            <Box
                component='img'
                sx={{
                height: 300,
                width: 300,
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'center'
                }}
                alt='device.img'
                src={device.img}
            />
            </Grid>
            <Grid 
                item
                direction='column'
                md={4}>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems:'center'
                }}>
                    <h2>{device.model}</h2>
                    <div 
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'center'
                    }}>
                    {"Дата релиза: " + device.releaseDate}
                    </div>
                    <div 
                    sx={{
                        fontSize:64,
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'center'
                    }}>
                    {"Гарантия: " + device.guaranteePeriod}
                    </div>
                </Box>
            </Grid>
            <Grid 
                item
                display="flex"
                flexDirection="column"
                alignItems="center" 
                justufyContent="around"
                sx={{
                        fontSize:64,
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'around'
                    }}
                md={4}>
                <h3>{"Цена: " + device.price + " BYN"}</h3>
                <Button variant="outlined" color="success">Приобрести</Button>
            </Grid>

            <Grid
                item
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    m:3
                }}
            >
                <Grid 
                container
                display='block'
                justifyContent='center'
                m={3}
                >
                    <Grid sx={{
                        color: 'primary.main',
                        fontSize:32
                    }}>
                    {"Название техники: " + deviceName.name}
                    </Grid>
                    <Grid sx={{
                        background:'lightBlue',
                        color: 'primary.main',
                        fontSize:32

                    }}>
                    {"Партия товара: " + consignment.consignmentDate}
                    </Grid>
                    <Grid sx={{
                        color: 'primary.main',
                        fontSize:32
                        
                    }}>
                    {"Производитель: " + manufacturer.name}
                    </Grid>
                    <Grid sx={{
                        background:'lightBlue',
                        color: 'primary.main',
                        fontSize:32
                        
                    }}>
                    {"Поставщик: " + provider.name}
                    </Grid>
                    <Grid sx={{
                        color: 'primary.main',
                        fontSize:32
                        
                    }}>
                    {"Страна: " + country.name + "(" + country.code + ")"}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DevicePage;