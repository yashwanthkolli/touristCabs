import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import validator from 'validator';
import { toast } from 'react-toastify';
import axios from 'axios';
import './AirportDropDialogue.scss'

const AirportDropDialogue = ({open, handleClose, type}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [drop, setDrop] = useState('')
    const [fromDate, setFromDate] = useState(new Date())

    const handleClick = (e) => {
        e.preventDefault()
        if(!validator.isAlpha(name.split(' ').join(''))) return toast.error('Enter valid Name')
        if(!validator.isEmail(email)) return toast.error('Enter valid Email')
        if(!validator.isMobilePhone(phone)) return toast.error('Enter valid Phone number')
        if(name && email && phone && fromDate){
          const id = toast.loading("Please wait...")
          axios.post(`${process.env.REACT_APP_API}/tours/register`, { name, email, phone, from_date: fromDate })
          .then(async (res) => {
            console.log(res)
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
            maxWidth='sm'
            fullWidth={true}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Airport Pick up and Drop</DialogTitle>
            <DialogContent>
                <div className='tour-dialogue-content'>
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
                                        required 
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
                                <div className='input-container-full'>
                                    <TextField 
                                        type='text' 
                                        color='grey'
                                        required 
                                        label={type === 'drop' ? "Drop Location" : "Duration in hours"}
                                        value={drop}
                                        onChange={(e) => setDrop(e.target.value)}
                                        fullWidth={true} 
                                        id='phone-input'
                                    />
                                </div>
                                <div className='input-container'>
                                    <DateTimePicker
                                        label="Pick up Date and Time"
                                        value={fromDate}
                                        minDate={new Date()}
                                        onChange={(newValue) => setFromDate(newValue)}
                                        inputFormat='dd/MM/yyyy hh:mm'
                                        renderInput={(params) => <TextField color='grey' id='from-date-input' required {...params} />}
                                    />
                                </div>
                            </LocalizationProvider>
                            <button onClick={handleClick} className='btn btn-primary'>Book Now</button>
                        </form>
                    </div>
                </div>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AirportDropDialogue
