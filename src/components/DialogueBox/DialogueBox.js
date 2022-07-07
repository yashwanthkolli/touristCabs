import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';

const DialogueBox = ({open, handleClose, selectedCar}) => {
  return (
    <Dialog
        maxWidth='lg'
        fullWidth={true}
        open={open}
        onClose={handleClose}
    >
        <DialogTitle>{selectedCar.name}</DialogTitle>
        <DialogContent>
            
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default DialogueBox