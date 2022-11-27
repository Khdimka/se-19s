import React, {useState} from 'react';
import AddTarget from './AddTargets';
import ListTargets from './ListTargets';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Targets = () => {
    const auth = useSelector(state => state.auth)
    let navigate = useNavigate()
    const [target, setTarget] = useState({
        name: '',
        isComplete: false
    })

        if(!auth._id) return navigate('/signin/')

    return ( 
        <>
        <AddTarget target={target} setTarget={setTarget}/>
        <ListTargets setTarget={setTarget}/>
        </>
     );
}
 
export default Targets;