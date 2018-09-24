import {choosePageName, getJson} from './parseJson'
import {outPutJson} from './output'
getJson('/tree')
.then(json => choosePageName(json, ""))
.then(array => (outPutJson(array)))
.then(res => console.log(res)); 