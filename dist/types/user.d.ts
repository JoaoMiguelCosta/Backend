export interface User {
    id: string;
    name: string;
    email: string;
    role: 'User' | 'Admin';
}