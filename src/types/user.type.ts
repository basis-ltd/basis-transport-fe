import { BaseEntity } from ".";

export interface User extends BaseEntity {
    name: string;
    email: string;
    role: string;
}
