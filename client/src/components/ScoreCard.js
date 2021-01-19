import React, { Component } from 'react';
import { Card, Typography, CardContent, CardActions, Button, Grid} from "@material-ui/core";
const ScoreCard=({match})=>{

    const getCard=()=>{
        return (
            <Card>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography>{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="h2" align="center">VS</Typography>
                        </Grid>
                        <Grid item>
                        <Typography>{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                    <Button>
                      Show Details
                    </Button>
                    <Button>
                        {match["date"]}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    };

    return getCard();

}

export default ScoreCard;