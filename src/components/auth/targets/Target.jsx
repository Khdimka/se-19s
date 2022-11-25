import React from "react";
import { useDispatch } from "react-redux";


import { Typography, ButtonGroup, Button } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";
import ListTargets from "./ListTargets";
import moment from 'moment';
import { checkTarget,deleteTarget } from "../../../store/actions/targetActions";


const Target = ({target, setTarget}) => {
    const dispatch = useDispatch()
    const handleUpdateCLick = () => {
        setTarget(target)
    
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
    })
}
const handleCheck = (id) => {
    dispatch(checkTarget(id))
}
const handleDelete = (id) => {
    dispatch(deleteTarget(id))
}
  
  return (
    <>
      <div className="targetStyle">
        <div>
            {target.isComplete ? 
                (<Typography variant="subtitle1" className="checked">
                {target.name}
                </Typography>) : (
                <Typography variant="subtitle1">
                    {target.name}
                </Typography>)
            }
            
          <Typography variant="body2" className="greyStyle">
                Author: Dima
          </Typography>
          <Typography variant="body2" className="greyStyle" >
                Added: { moment(target.date).fromNow()} 
          </Typography>
        </div>
        <div>
            <ButtonGroup
              size="small"
              aria-label="outlined primary button group"
            >
                <Button onClick={() => handleCheck(target._id)}>
                {target.isComplete ? ( 
                <CheckCircle color="action" className="isComplete"/>
                     ):(
                <CheckCircle color="action" />
                    )}
                </Button>
              <Button onClick={() => handleUpdateCLick()}>
                <Create color="primary" />
              </Button>
              <Button onClick={() => handleDelete(target._id)}>
                <Delete color="secondary" />
              </Button>
            </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Target;
