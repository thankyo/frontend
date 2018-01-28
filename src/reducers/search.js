import { promiseReducer } from "./util/promiseStates";
import { SEARCH_BY_TAG } from "./search.actions";

let INITIAL_STATE = [{
  "resource": { "type": "http", "uri": "zenpencils.com" },
  "project": {
    "id": "5a6b35b91305001305aa2c49",
    "firstName": "Gavin",
    "lastName": "Than",
    "avatar": "https://pbs.twimg.com/profile_images/493961823763181568/mb_2vK6y_400x400.jpeg",
    "link": "https://zenpencils.com",
    "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"]
  },
  "ogObj": {
    "url": "https://zenpencils.com/",
    "title": "ZEN PENCILS – Cartoon quotes from inspirational folks",
    "type": "website",
    "description": "Cartoon quotes from inspirational folks"
  },
  "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"],
  "thank": { "given": 1, "supporters": ["5a6d9aeda10200df029ee4ef"] },
  "created": "2018-01-28T12:41:40.731"
}, {
  "resource": { "type": "http", "uri": "zenpencils.com/comic/poe" },
  "project": {
    "id": "5a6b35b91305001305aa2c49",
    "firstName": "Gavin",
    "lastName": "Than",
    "avatar": "https://pbs.twimg.com/profile_images/493961823763181568/mb_2vK6y_400x400.jpeg",
    "link": "https://zenpencils.com",
    "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"]
  },
  "ogObj": { "url": "http/zenpencils.com/comic/poe" },
  "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"],
  "thank": { "given": 1, "supporters": ["5a6d9aeda10200df029ee4ef"] },
  "created": "2018-01-28T12:42:05.45"
}, {
  "resource": { "type": "http", "uri": "zenpencils.com/comic/hustle" },
  "project": {
    "id": "5a6b35b91305001305aa2c49",
    "firstName": "Gavin",
    "lastName": "Than",
    "avatar": "https://pbs.twimg.com/profile_images/493961823763181568/mb_2vK6y_400x400.jpeg",
    "link": "https://zenpencils.com",
    "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"]
  },
  "ogObj": {
    "url": "http://zenpencils.com/comic/hustle/",
    "title": "ZEN PENCILS » 220. CHRIS GUILLEBEAU: The art of the Side Hustle",
    "type": "website",
    "image": { "url": "https://cdn-zenpencils.netdna-ssl.com/wp-content/uploads/220_hustle.jpg" },
    "description": "Happy New Year! What’s your New Year’s resolution? Travel more? Maybe write that book? Perhaps run a marathon? Take up piano again? Start a Side Hustle? “What exactly is a Side Hustle?” I hear you ask. Well, it’s basically a way to generate extra income without quitting your job. The term was popula…"
  },
  "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"],
  "thank": { "given": 1, "supporters": ["5a6d9aeda10200df029ee4ef"] },
  "created": "2018-01-28T12:42:05.45"
}, {
  "resource": { "type": "http", "uri": "zenpencils.com/comic/poison" },
  "project": {
    "id": "5a6b35b91305001305aa2c49",
    "firstName": "Gavin",
    "lastName": "Than",
    "avatar": "https://pbs.twimg.com/profile_images/493961823763181568/mb_2vK6y_400x400.jpeg",
    "link": "https://zenpencils.com",
    "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"]
  },
  "ogObj": { "url": "http/zenpencils.com/comic/poison" },
  "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"],
  "thank": { "given": 1, "supporters": ["5a6d9aeda10200df029ee4ef"] },
  "created": "2018-01-28T12:42:05.442"
}, {
  "resource": { "type": "http", "uri": "zenpencils.com/comic/creative" },
  "project": {
    "id": "5a6b35b91305001305aa2c49",
    "firstName": "Gavin",
    "lastName": "Than",
    "avatar": "https://pbs.twimg.com/profile_images/493961823763181568/mb_2vK6y_400x400.jpeg",
    "link": "https://zenpencils.com",
    "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"]
  },
  "ogObj": {
    "url": "http://zenpencils.com/comic/creative/",
    "title": "ZEN PENCILS » 221. 8 tips to be more creative by Zen Pencils",
    "type": "website",
    "image": { "url": "https://cdn-zenpencils.netdna-ssl.com/wp-content/uploads/221_creativestruggle.jpg" },
    "description": "Today is the launch day of my new collection CREATIVE STRUGGLE: Illustrated Advice From Masters of Creativity! Besides including creative advice from greats like Einstein, Van Gogh, Curie and Hemingway, it also features an all-new comic by myself. The comic describes my eight tips to be more creativ…"
  },
  "tags": ["art", "quotes", "inspirational", "comics", "inspire", "motivational", "poetry", "inspiring", "cartoons", "webcomic"],
  "thank": { "given": 0, "supporters": [] },
  "created": "2018-01-28T14:04:23.086"
}];

export default promiseReducer(SEARCH_BY_TAG, []);