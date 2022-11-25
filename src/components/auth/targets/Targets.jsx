import React, {useState} from 'react';
import AddTarget from './AddTargets';
import ListTargets from './ListTargets';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Targets = () => {
    const auth = useSelector(state => state.auth)
    const [target, setTarget] = useState({
        name: '',
        isComplete: false
    })

        if(!auth._id) return <useNavigate to='/signin/'/>

    return ( 
        <>
        <AddTarget target={target} setTarget={setTarget}/>
        <ListTargets setTarget={setTarget}/>
        </>
     );
}
 
export default Targets;