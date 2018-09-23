import fetch from 'node-fetch';
import {request} from './network';
import {getPageInfo,getPaths,arrayOfPaths, CollectData} from './infoFunc';

const url = "https://fund.mipt.ru/api/pages";
const arrayOfPagesInfo = [];

CollectData({url : url, addUrl: "/tree"})
.then(r => console.log(r));











