export interface User { 
    displayName: string,
    memberId: string,
    token: string
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