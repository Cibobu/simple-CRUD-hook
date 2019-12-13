import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import UserCard from './user/UserCard'
import Grid from '@material-ui/core/Grid';

const App = () => {
	// Data
	const usersData = [
		{ 
			id: 1, 
			accountName: 'Tania A', 
      accountNumber: 12345,
      bankName: 'BCA',
			address: 'California', 
			city: 'Malang', 
			country: 'Indonesia' 
    },
    { 
			id: 2, 
			accountName: 'Tania B', 
      accountNumber: 9008, 
      bankName: 'Mandiri',
			address: 'Jalan', 
			city: 'Solo', 
			country: 'Japan' 
		},
	]

  const initialFormState = { id: null, accountName: '', accountNumber: '', bankName: '', address: '', city: '', country: '' }
  const initialGuestState = { Name: 'Guest' }

  // Setting state
  const [ guest, setGuest ] = useState(initialGuestState)
  const [editGuest, setEditingGuest] = useState(false)
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)
  

	// CRUD
	const addUser = user => {
    if (guest.Name === 'Guest' || guest.Name === ''){
      alert("Change input the user first");
      return
    }
    // NotificationManager.success('Success message1', 'Title here');
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
  }


	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  
  const updateGuest = (updateGuest) => {
    setEditingGuest(false)

		setGuest({Name : updateGuest})
	}

	const editRow = user => {
		setEditing(true)

    setCurrentUser({ 
      id: user.id, 
      accountName: user.accountName, 
      accountNumber: user.accountNumber,
      bankName: user.bankName,
      address: user.address,
      city: user.city,
      country: user.country 
    })
  }

	return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Grid 
            container 
            spacing={3} 
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={6}>
              <div>
                <UserCard 
                guest={guest} 
                updateGuest={updateGuest} 
                editGuest={editGuest} 
                setEditingGuest={setEditingGuest}/>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                {editing ? (
                  <Fragment>
                    <h2>Edit user</h2>
                    <EditUserForm
                      editing={editing}
                      setEditing={setEditing}
                      currentUser={currentUser}
                      updateUser={updateUser}
                    />
                  </Fragment>
                ) : (
                  <Fragment>
                    <h2>Add user</h2>
                    <AddUserForm addUser={addUser} />
                  </Fragment>
                )}
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h2>View users</h2>
              <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
	)
}

export default App
