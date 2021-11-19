import http from "./http-common";
class BookDataService {
    getAll() {
      return http.get("/books");
    }

    save(data) {
        return http.post("/book", data);
    }

    delete(id) {
        return http.delete("/book/"+id);
    }
    get(id) {
        return http.get("/book/"+id);
    }
    update(id, data) {
        return http.put("/book/"+id, data);
    }

    
}
export default new BookDataService();
