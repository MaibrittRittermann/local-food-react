import http from './httpService';
import Products from '../components/routes/SellerProducts';

const apiEndpoint = "product/";

export function getProducts() {
    try {
        const res = http.get(apiEndpoint);
        console.log(res.status);
        if (res.status === 200) {
            return res.data;
        }
    } catch(e) {
        return null;
    }
}

export function getProduct(id) {
    return http.get(apiEndpoint + id);
}

export function getProductsBySeller(id) {
    return http.get(apiEndpoint + "seller/" + id);
}

export function saveProduct(Product) {
    if(Product._id) {
        const body = { ...Product };
        delete body._id;
        return http.put(apiEndpoint + Product._id, body);
    }
    return http.post(apiEndpoint, Product);
}

export function deleteProduct(id) {
    return http.delete(apiEndpoint + id);
}
