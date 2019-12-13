import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  
  const handleInputChange = event => {
    const { id, value } = event.target

    setUser({ ...user, [id]: value })
  }

  return (
    <form
			onSubmit={event => {
				event.preventDefault()

				props.updateUser(user.id, user)
			}}
		>
			<Grid container>
        <Grid item xs={12}>
          <TextField 
          fullWidth 
          margin="dense" 
          label="Account Name" 
          type="text" 
          id="accountName" 
          value={user.accountName} 
          onChange={handleInputChange} 
          variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          fullWidth 
          margin="dense" 
          label="Account Number" 
          type="number" 
          id="accountNumber" 
          value={user.accountNumber} 
          onChange={handleInputChange} 
          variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          fullWidth 
          margin="dense" 
          label="Bank Name" 
          type="text" 
          id="bankName" 
          value={user.bankName} 
          onChange={handleInputChange} 
          variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          fullWidth 
          margin="dense" 
          label="Address" 
          type="text" 
          id="address" 
          value={user.address} 
          onChange={handleInputChange} 
          variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          fullWidth 
          margin="dense" 
          label="City" 
          type="text" 
          id="city" 
          value={user.city} 
          onChange={handleInputChange} 
          variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          fullWidth 
          margin="dense" 
          label="Country" 
          type="text" 
          id="country" 
          value={user.country} 
          onChange={handleInputChange} 
          variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" type="submit" variant="contained"> Update account </Button>
          &nbsp;
          <Button color="primary" type="submit" variant="contained" onClick={() => props.setEditing(false)}> Cancel </Button>
        </Grid>
      </Grid>
		</form>
  )
}

export default EditUserForm
