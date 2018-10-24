const url = "http://localhost:3001";

export const logUser = (value) => {

    return fetch(url + "/login", {
        method: "POST",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify({
            "login": value
        }),
    })
    .then(res => res.json())
}

export const getItems = () => {
    return fetch(url + "/items")
      .then(res => res.json());
  }

export const getCart = () => {
    return fetch(url + "/cart", {
      method: "GET",
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    })
      .then(res => res.json())
      .catch(() => [])
  }

export const buyGood = (id) => {
    return fetch(url + "/buy", {
            method: "POST",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({
                itemId: id
            }),
        })
}