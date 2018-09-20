import {lodtask} from './lodtask';

lodtask({link: "https://fund.mipt.ru/api/pages"})
    .then(answer => console.log(answer));
