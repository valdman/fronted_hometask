import {lodtask} from './lodtask';

lodtask("https://fund.mipt.ru/api/pages")
    .then(answer => console.log(answer));
