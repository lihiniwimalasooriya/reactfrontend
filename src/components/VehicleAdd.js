import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

export default function VehicleAdd() {
    const paperStyle = { padding: '50px 20px', width: 1000, margin: "20px auto", background: "#dcedfc" }
    const textfield = { margin: "5px auto", background: "#ffffff" }
    const [licenseplate, setLicensePlate] = useState('')
    const [owner, setOwner] = useState('')
    const [address, setAddress] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [vehicle, setVehicle] = useState([])
  
    const handleClick = (e) => {
        e.preventDefault()
        const vehicle = { licenseplate, owner, address, model, year }
        console.log(vehicle)
        fetch("http://localhost:8082/vehicle/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vehicle)

        }).then(() => {
            console.log("Add vehicle details successfully")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8082/vehicle/getAll")
            .then(res => res.json())
            .then((result) => {
                setVehicle(result);
            }
            )
    }, [])

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}>Vehicle Details</h1>

                <form noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Vehicle license plate" style={textfield} variant="outlined" fullWidth
                        value={licenseplate}
                        onChange={(e) => setLicensePlate(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Owner" style={textfield} variant="outlined" fullWidth
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Adress" style={textfield} variant="outlined" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Model" style={textfield} variant="outlined" fullWidth
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Year" style={textfield} variant="outlined" fullWidth
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    
                    <Button variant="contained" color="primary" onClick={handleClick}>Submit</Button>
                </form>
            </Paper>
        </Container>
    );
}