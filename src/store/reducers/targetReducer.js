

const targetReducer = (state = [], action) => {
    switch(action.type){
        case "GET_TARGETS":
            return action.targets.data
        case "ADD_TARGET":
            //toast.success('A target was added.', {
            //    position: toast.POSITION.BOTTOM_RIGHT
            //})
            return [action.target.data, ...state];
        case "UPDATE_TARGET": 
        //toast.success('A target was updated.', {
         //   position: toast.POSITION.BOTTOM_RIGHT
        //});
            return state.map((target) => 
            target._id === action.target.data._id ? action.target.data : target
            );
        case "CHECK_TARGET": 
            //toast.success('A target was updated.', {
             //   position: toast.POSITION.BOTTOM_RIGHT
            //});
                return state.map((target) => 
                target._id === action.target.data._id ? action.target.data : target
                );
        case "DELETE_TARGET": 
            //toast.success('A target was updated.', {
            //   position: toast.POSITION.BOTTOM_RIGHT
            //});
                return state.filter((target) =>
                 target._id !== action.id 
                );
        default: 
            return state;
    }
}
export default targetReducer;