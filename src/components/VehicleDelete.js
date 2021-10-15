import React, { useEffect, useState } from 'react';
import { Container, Paper, Button } from '@material-ui/core';

export default function VehicleDelete() {
    const paperStyle = { padding: '50px 20px', width: 1000, margin: "20px auto", background: "#dcdee0" }
    const [id] = useState('')
    const [licenseplate] = useState('')
    const [owner] = useState('')
    const [address] = useState('')
    const [model] = useState('')
    const [year] = useState('')
    const [vehicle, setVehicle] = useState([])
  
    const handleClick = (e) => {
        e.preventDefault()
        const vehicle = {id, licenseplate, owner, address, model, year }
        console.log(vehicle)
        fetch("http://localhost:8082/vehicle/delete/{id}", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vehicle)

        }).then(() => {
            console.log("Delete vehicle details successfully")
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

                {vehicle.map(vehicle => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={vehicle.id}>

                        Vehicle License Plate:{vehicle.licenseplate}<br />
                        Owner:{vehicle.owner}<br />
                        Address:{vehicle.address}<br />
                        Model:{vehicle.model}<br />
                        Year:{vehicle.year}

                        <br></br><br></br>
                        <Button variant="contained" color="primary" onClick={handleClick}>Delete</Button>
                    </Paper>
                ))
                }
            </Paper>
        </Container>
    );
}