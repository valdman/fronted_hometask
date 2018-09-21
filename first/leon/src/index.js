import { lodtask } from './lodtask';

export const baseLink = "https://fund.mipt.ru/api/pages";

lodtask()
    .then(answer => console.log(answer));
