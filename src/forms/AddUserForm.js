import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import * as Yup from 'yup';

const AddUserForm = props => {

  const Validation = Yup.object().shape({
    accountName: Yup.string()
        // .accountName()
        .required("Required")
        .max(10, "Password too long, max 10 characters"),
    accountNumber: Yup.string()
        // .accountNumber()
        .required("Required")
        .min(8, "Account number too short, min 8 characters"),
  });

	return (
    <Formik
      initialValues={{
        accountName: '',
        accountNumber: '',
        bankName: '',
        address: '',
        city: '',
        country: ''
      }}
      validationSchema={Validation}
      onSubmit={(values , { setSubmitting, resetForm }) => {
          // this.onSubmit(values);
          setSubmitting(true);
          console.log(values, 'ceebbb');
          props.addUser(values)
          
          setTimeout((done) => {                                                            
              resetForm();
              setSubmitting(false);
          }, 500);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (    
        <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <TextField 
            fullWidth 
            margin="dense" 
            label="Account Name" 
            type="text" 
            name="accountName" 
            value={values.accountName}
            onChange={handleChange}
            variant="outlined" 
            />
            {errors.accountName && touched.accountName ? (
              <div className="m--font-danger">{errors.accountName}</div>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField 
            fullWidth 
            margin="dense" 
            label="Account Number" 
            type="number" 
            name="accountNumber" 
            value={values.accountNumber} 
            onChange={handleChange} 
            variant="outlined" 
            />
            {errors.accountNumber && touched.accountNumber ? (
              <div className="m--font-danger">{errors.accountNumber}</div>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField 
            fullWidth 
            margin="dense" 
            label="Bank Name" 
            type="text" 
            name="bankName" 
            value={values.bankName} 
            onChange={handleChange} 
            variant="outlined" 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
            fullWidth 
            margin="dense" 
            label="Address" 
            type="text" 
            name="address" 
            value={values.address} 
            onChange={handleChange} 
            variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField 
            fullWidth 
            margin="dense" 
            label="City" 
            type="text" 
            name="city" 
            value={values.city} 
            onChange={handleChange} 
            variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField 
            fullWidth 
            margin="dense" 
            label="Country" 
            type="text" 
            name="country" 
            value={values.country} 
            onChange={handleChange} 
            variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" type="submit" variant="contained"> Add new account </Button>
          </Grid>
        </Grid>
      </form>
      )}
    </Formik>
	)
}

export default AddUserForm