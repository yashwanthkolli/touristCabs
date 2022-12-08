import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './DialogueBox.Styles.scss'
import axios from 'axios';
import validator from 'validator';

const DialogueBox = ({open, handleClose, selectedCar}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(null)

  const handleClick = (e) => {
    e.preventDefault()
    if(!validator.isAlpha(name.split(' ').join(''))) return toast.error('Enter valid Name')
    if(!validator.isMobilePhone(phone)) return toast.error('Enter valid Phone number')
    if(name && phone && fromDate && toDate){
      const id = toast.loading("Please wait...")
      axios.post(`http://68.183.89.137/5000/request/register`, { name, email, phone, car: selectedCar.name, from_date: fromDate, to_date: toDate })
      .then(async (res) => {
        toast.update(id, { 
          render: "Request Sent. We'll contact you soon.", 
          type: "success", 
          isLoading: false,
          icon: true,
          autoClose: true
        });
        handleClose()
      })
      .catch((err) => {
        toast.update(id, { 
          render: "Error! Please try later", 
          type: "error", 
          isLoading: false, 
          icon: true, 
          autoClose: true
        });
      })
    } else {
      toast.error('Enter valid details')
    }
  }

  return (
    <Dialog
        maxWidth='lg'
        fullWidth={true}
        open={open}
        onClose={handleClose}
    >
        <DialogTitle>{selectedCar.name}</DialogTitle>
        <DialogContent>
          <div className='dialogue-content'>
            <div className='form-container'>
              <form className='rent-form'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <div className='input-container-full'>
                    <TextField 
                      type='text' 
                      color='grey'
                      required 
                      label="Name" 
                      id='name-input'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth={true} />
                  </div>
                  <div className='input-container-full'>
                    <TextField 
                      type='email' 
                      color='grey'
                      label="Email" 
                      id='email-input'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth={true} />
                  </div>
                  <div className='input-container-full'>
                    <TextField 
                      type='text' 
                      color='grey'
                      required 
                      label="Phone Number" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      fullWidth={true} 
                      id='phone-input'
                    />
                  </div>
                  <div className='dates-container'>
                    <div className='input-container'>
                      <MobileDatePicker
                        label="From Date"
                        value={fromDate}
                        minDate={new Date()}
                        onChange={(newValue) => setFromDate(newValue)}
                        inputFormat='dd/MM/yyyy'
                        renderInput={(params) => <TextField color='grey' id='from-date-input' required {...params} />}
                      />
                    </div>
                    <div className='input-container'>
                      <MobileDatePicker
                        required
                        label="To Date"
                        value={toDate}
                        minDate={fromDate}
                        onChange={(newValue) => setToDate(newValue)}
                        inputFormat='dd/MM/yyyy'
                        renderInput={(params) => <TextField color='grey' id='to-date-input' required {...params} />}
                      />
                    </div>
                  </div>
                  <button onClick={handleClick} className='btn btn-primary'>Request a Quote</button>
                </LocalizationProvider>
              </form>
            </div>
            <div className='img-container'>
              <img src={selectedCar.image1} alt='carImage' />
            </div>
          </div>
        </DialogContent>

        <DialogActions>
            <Button onClick={handleClose}>Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default DialogueBox