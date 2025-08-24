export interface LoginReq {
    username: string;
    password: string;
}

export interface loginRes {
    data: string[];
    token: string;
}