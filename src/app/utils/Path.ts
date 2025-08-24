import { environment } from "../../environment/environment";

export class Path {
    static BaseUrl = environment.apiUrl;

    static LOGIN = this.BaseUrl + 'login';
    static ADD_EMPLOYEE = this.BaseUrl + 'add-employee';
}