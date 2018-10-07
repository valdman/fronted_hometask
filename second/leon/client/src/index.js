import { fetchItems, addCards } from "./getContents";
import { buyItem } from "./transactions";
import { showHint, fetchServer, myJSONstringify, getInputValue, getContainer} from "./utils";
import { attachListeners } from "./listeners";

const logUser = () => {

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: myJSONstringify({ login: getInputValue()}),
    };

    fetchServer("/login", myInit)
        .then(res => res.json())
        .then(res => {
            showHint(res.status)
            document.cookie = `token=${res.token};expires=${60 * 10}`;
        })
        .catch((err) => console.log(err));
};

const getUsers = () => {
    const myHeaders = new Headers({
        'Accept': 'application/json',
    });

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        credentials: "omit",
    };

    fetchServer("/users", myInit)
        .then(res => res.json())
        .then(res => {
            showHint("Список в консоли");
            console.log(res);
        });
};

const deleteUsers = () => {
    const myHeaders = new Headers({
        'Accept': 'text/plain',
    });

    const myInit = {
        method: 'DELETE',
        headers: myHeaders,
    };

    fetchServer("/users", myInit)
        .then(res => {
            console.log(res);
            showHint("Удален");
        })
        .catch((err) => {
            console.log(err);
            showHint("Ошибка");
        });
};

fetchItems()
    .then(cards => {
        addCards(cards, getContainer());
        attachListeners({logUser, getUsers, deleteUsers, buyItem});
    });

