import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { Navigate } from "react-router-dom";
import Target from './Target';
import { getTargets } from '../../../store/actions/targetActions';

const ListTargets = ({setTarget}) => {
    const dispatch = useDispatch()
    const targets = useSelector((state) => state.targets)

    useEffect(() => {
        dispatch(getTargets())
    }, [dispatch])
    return ( 
        <>
        <div className='targetsStyle'>
        <Typography variant="h5">
            {targets.lenght >= 0 ? "" : ""}
        </Typography> 
              {targets && targets.map((target) => {
                return( 
                    <Target
                    target = {target}
                    key = {target._id}
                    setTarget = {setTarget}
                    />
                )
              })}
        </div>
        </>
     );
}
 
export default ListTargets;