import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const UserCard = props => {
    const [ guest, editGuest ] = useState(props.guest)

    useEffect(
      () => {
        editGuest(props.guest)
      },
      [ props ]
    )

    const handleInputChange = event => {
        const { value } = event.target
        editGuest(value)
    }
    return (
    <div className={useStyles.root}>
        {props.editGuest===false ?
        <Card className={useStyles.card}>
        <CardContent>
            <Typography variant="h5" component="h2">
            Hello : {props.guest.Name}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="secondary" type="submit" variant="contained" 
                onClick={event => {
                event.preventDefault()
        
                props.setEditingGuest(true)
                }}>Change User</Button>
        </CardActions>
        </Card> :
        <Card className={useStyles.card}>
            <CardContent>
            <Typography variant="h5" component="h2">
                <TextField 
                    fullWidth 
                    margin="dense" 
                    label="Account Name" 
                    type="text" 
                    id="accountName" 
                    value={guest.Name} 
                    onChange={handleInputChange} 
                    variant="outlined" />
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" 
                onClick={event => {
                event.preventDefault()
                props.updateGuest(guest)
                props.setEditingGuest(false)
                }}>Change User</Button>
            </CardActions>
        </Card>}
    </div>)
}

export default UserCard