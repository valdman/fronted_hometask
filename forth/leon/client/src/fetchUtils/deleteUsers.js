import fetchServer from "./fetchServer";

const deleteUsers = () => {
    const myHeaders = new Headers({
        'Accept': 'application/json',
      });
    
      const myInit = {
        method: 'DELETE',
        headers: myHeaders,
      };
    
      fetchServer("/users", myInit)
        .then(res => {
          console.log(res);
        })
        .catch((err) => console.log(err));
};

export default deleteUsers;