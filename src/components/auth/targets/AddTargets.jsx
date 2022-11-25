import React from 'react';
import { TextField, Button } from '@mui/material';
import {Send} from '@mui/icons-material';
import '../../../styles.css';
import { useDispatch } from 'react-redux';
import{ addTarget, updateTarget }from '../../../store/actions/targetActions';


const AddTarget = ({target,setTarget}) => {
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()

        if(target._id){
            const id = target._id
            const updatedTarget = {
                name: target.name,
                isComplete: target.isComplete,
                date: target.date,
                author: target.author,
                uid:target.uid,
            }
            dispatch(updateTarget(updatedTarget, id))
        }else{
            const newTarget = {
                ...target, 
                date: new Date(),
            }
            dispatch(addTarget(newTarget))
        }        

        setTarget({
            name: '',
            isComplete: false
        })
    }
    return ( 
        <>
        <form className='formStyle' autoComplete='off' noValidate onSubmit={handleSubmit}>
        <TextField
                id="add-target"
                label="Add destination"
                variant='outlined'
                    autoFocus
                    fullWidth
                    value = {target.name}
                    onChange = {(e) => setTarget({...target, name: e.target.value})}
                />
            <Button color = "primary" variant='contained' type="submit" className='submitButton'>
                <Send/>
            </Button>
        </form>
        </>
     );
}

export default AddTarget;