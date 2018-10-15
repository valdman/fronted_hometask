import fetchServer from "./fetchServer";

const getUsers = () => {
    const myHeaders = new Headers({
        'Accept': 'application/json',
      });
    
      const myInit = {
        method: 'GET',
        headers: myHeaders,
      };
    
      fetchServer("/users", myInit)
        .then(res => res.json())
        .then(res => {
          console.log(res);
        })
        .catch((err) => console.log(err));
};

export default getUsers;