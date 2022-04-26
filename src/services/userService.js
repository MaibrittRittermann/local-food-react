import http from './httpService';

const apiEndpoint = "user/";

export function getUsers() {
    return http.get(apiEndpoint);
}

export function getUser(id) {
    return http.get(apiEndpoint + id);
}

export function saveUser(user) {
    console.log(user);
    if(user._id) {
        const body = { ...user };
        delete body._id;
        return http.put(apiEndpoint + user._id, body);
    }
    return http.post(apiEndpoint, user);
}

export function deleteUser(id) {
    return http.delete(apiEndpoint + id);
}
