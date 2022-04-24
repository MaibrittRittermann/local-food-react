import http from './httpService';

const apiEndpoint = "seller/";

export function getSellers() {
    return http.get(apiEndpoint);
}

export function getSeller(id) {
    return http.get(apiEndpoint + id);
}

export function getProducts(id) {
    return http.get(apiEndpoint + '/products/' + id);
}

// TODO: getProduct() & saveProduct()
export function getProduct(sellerId, productId) {
    
}

export function saveProduct(sellerId, product) {
    // TODO: implement
    console.log("saveProduct " + product.title);
}

export function saveSeller(seller) {
    if(seller._id) {
        const body = { ...seller };
        delete body._id;
        return http.put(apiEndpoint + seller._id, body);
    }
    return http.post(apiEndpoint, seller);
}

export function deleteSeller(id) {
    return http.delete(apiEndpoint + id);
}
