import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Appbar() {

    return (
        <div> 
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        VEHICLE REGISTRATIONS APPLICATION
                    </Typography>

                </Toolbar>              
            </AppBar>
        </div>
    );
}