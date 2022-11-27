
//export const url = "http://localhost:5001/api";
export const url = "https://se-19-b.onrender.com";
export const setHeaders = () => {
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
  
    return headers;
  };