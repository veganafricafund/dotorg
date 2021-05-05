import React from 'react'
import Link from 'next/link'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {Box, Typography, Grid, Divider, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import CryptoButton from '../components/CryptoButton'
import {buttons} from '../store/buttons'

require('dotenv').config()

const useStyles = makeStyles(theme => ({
    grid: {
        width: "90%",
        margin: "1rem auto",
        [theme.breakpoints.down('sm')] : {
            width: "100%"
          }
    },
    button: {
        border: "1px solid #88a384"
    }
}))


const Donate = () => {

    const classes = useStyles();

    const createOrder = (data: any, actions: any) => {
        console.log(data)
        return actions.order.create({
            purchase_units: [
                {
                amount: {
                    value: "0.2"
                }
            }]
        })
    }

    const onApprove = (data: any, actions: any) => {
        console.log(data)
        return actions.order.capture();
    }

    return (
        <Box>
            <Box position= "relative" top="2rem" left="2rem">
                <Link href="/">
                    <IconButton className={classes.button} color="primary">
                        <CloseIcon />
                    </IconButton>
                </Link>
            </Box>
        <Typography variant="h4" align="center">Donate</Typography>
        <Grid container spacing={1} className={classes.grid}>
           {buttons.map(button => (
               <Grid item xs={3} sm={2} key={button.id}>
                   <Box display="flex" justifyContent="center" py="0.5rem">
                    <CryptoButton btn={button.name} icon={button.url} address={button.address} />
                   </Box>
               </Grid>
           ))}
        </Grid>
        <Divider />
        <Box mt="1rem">
        <PayPalScriptProvider options={{ "client-id": `${process.env.CLIENT_ID}` }}>
            <Box width="50%" mx="auto" mt="0.7rem">
                <PayPalButtons 
                createOrder={(data: any, actions: any) => createOrder(data, actions)}
                onApprove={(data: any, actions: any) => onApprove(data, actions)}/>
            </Box>
        </PayPalScriptProvider>
        </Box>
        </Box>
    )
}

export default Donate