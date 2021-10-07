import React from 'react'
import "./App.css";
import {Card,CardContent,Typography} from "@material-ui/core"
function InfoBox({title,cases,total}) {
    return (
        <div>
            <Card className="infoBox">
                <CardContent>
                    <Typography color="textSecondary">{title}</Typography>
                    <h2 className="infoBox_cases"> {cases} </h2>
                    <Typography color="textSecondary">{total}  total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
