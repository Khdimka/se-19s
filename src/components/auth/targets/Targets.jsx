import React, {useState} from 'react';
import AddTarget from './AddTargets';
import ListTargets from './ListTargets';
const Targets = () => {
    const [target, setTarget] = useState({
        name: '',
        isComplete: false
    })
    return ( 
        <>
        <AddTarget target={target} setTarget={setTarget}/>
        <ListTargets setTarget={setTarget}/>
        </>
     );
}
 
export default Targets;