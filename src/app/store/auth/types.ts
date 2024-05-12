export interface User { 
    _id: string,
    displayName: string,
    memberId: string,
    email: string,
    mobile: string,
    name: string,
    location: string,
    pic: string,
}

export interface Signup {
    email: string,
    displayName: string,
    password: string
}

export interface Login {
    userName: string,
    password: string
}