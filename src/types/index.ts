import { UUID } from "crypto";

export interface BaseEntity {
    id: UUID;
    createdAt: Date;
    updatedAt: Date;
}

