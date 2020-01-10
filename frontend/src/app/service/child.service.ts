import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ChildService {
// Child Services

    constructor(private http: HttpClient) {
    }

    getChildren() {
        return this.http.get('/api/child/list');
    }

    getChild(cid) {
        return this.http.get('/api/child/' + cid + '/get');
    }

    createChild(child) {
        return this.http.post('/api/child/create', child);
    }

    updateChild(child) {
        return this.http.put('/api/child/' + child.cid + '/update', child);
    }

    deleteChild(child) {
        return this.http.delete('/api/child/' + child.cid + '/delete', child);
    }
}
