import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://api.twitter.com/1.1/search'
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// instance.defaults.headers.common['Authorization'] = 'Bearer AAAAAAAAAAAAAAAAAAAAALf9DgEAAAAA9TgreZfbY0DuKStBv3tOFzqEXmg%3D5KKGnpIKtZfHUvsKMwd2Kn0PAK7bSMyd34u5b5ascyfN2z7Dmr';
// instance.defaults.headers.common['Accept'] = 'application/json';
// instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;
