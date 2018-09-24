import { lodtask } from './lodtask';

const baseLink = "https://fund.mipt.ru/api/pages";

lodtask(baseLink)
    .then(answer => console.log(answer));
