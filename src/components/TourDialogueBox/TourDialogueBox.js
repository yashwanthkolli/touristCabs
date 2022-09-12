import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
import './TourDialogueBox.Styles.scss'

const TourDialogueBox = ({open, handleClose, selectedTour}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [fromDate, setFromDate] = useState(new Date())

    return (
        <Dialog
            maxWidth='sm'
            fullWidth={true}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{selectedTour}</DialogTitle>
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
                            </LocalizationProvider>
                            <button className='btn btn-primary'>Book Now</button>
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

export default TourDialogueBox
