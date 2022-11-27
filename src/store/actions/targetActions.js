import axios from "axios";
import { url, setHeaders } from "../../api/indexi";
//import { toast } from 'react-toastify';

export const getTargets = () => {
    return (dispatch) => {
    axios
    .get(`${url}/targets`, setHeaders())
    .then(targets => {
        dispatch({
            type: "GET_TARGETS",
            targets
        })
    })
    .catch(error => {
        console.log(error.responce)
        alert("Error");
    })
}
}
export const addTarget = (newTarget) =>{
    return (dispatch,getState) => {
        const author = getState().auth.name
        const uid = getState().auth._id
        axios
        .post(`${url}/targets`,{...newTarget, author, uid}, setHeaders())
        .then(target => {
            dispatch({
                type: "ADD_TARGET",
                target
            })
        })
        .catch(error => {
            console.log(error.responce)
            alert("Add Target Error");
            //toast.error(error.responce.data, {
            //    position: toast.POSITION.BOTTOM_RIGHT
            //})
        })
    }
} 
export const updateTarget = (updatedTarget, id) => {
    return (dispatch) => {
        axios
        .put(`${url}/targets/${id}`, updatedTarget, setHeaders())
        .then(target => {
            dispatch({
                type: "UPDATE_TARGET",
                target
            })
        })
        .catch(error => {
            console.log(error.responce)
            alert("Update Target Error");
            //toast.error(error.responce.data, {
            //    position: toast.POSITION.BOTTOM_RIGHT
            //})
        })
    }
}
export const checkTarget = (id) => {
    return (dispatch) => {
        axios
        .patch(`${url}/targets/${id}`, {}, setHeaders())
        .then(target => {
            dispatch({
                type: "CHECK_TARGET",
                target
            })
        })
        .catch(error => {
            console.log(error.responce)
            alert("Check Target Error")
            //toast.error(error.responce.data, {
            //    position: toast.POSITION.BOTTOM_RIGHT
            //})
        })
    }
}
export const deleteTarget = (id) => {
    return (dispatch) => {
        axios
        .delete(`${url}/targets/${id}`, setHeaders())
        .then(() => {
            dispatch({
                type: "DELETE_TARGET",
                id
            })
        })
        .catch(error => {
            console.log(error.responce)
            alert("Delete Target Error")
            //toast.error(error.responce.data, {
            //    position: toast.POSITION.BOTTOM_RIGHT
            //})
        })
    }
}