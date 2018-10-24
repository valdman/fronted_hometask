import fetchServer from "./fetchServer";

const loginUser = (login) => {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
  
    const myInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ login: login}),
    };
  
    fetchServer("/login", myInit)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        document.cookie = `token=${res.token};expires=${60 * 10}`;
      })
      .catch((err) => console.log(err));
  }

  export default loginUser;