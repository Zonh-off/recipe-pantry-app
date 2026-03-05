export class Collection {
    constructor(
        public readonly id: string,
        public readonly userId: string,
        public readonly name: string,
        public readonly recipeIds: number[],
        public readonly createdAt?: Date,
        public readonly updatedAt?: Date,
    ) { }
}

export interface ICollectionRepository {
    create(data: Partial<Collection>): Promise<Collection>;
    update(id: string, data: Partial<Collection>): Promise<Collection>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Collection | null>;
    findByUserId(userId: string): Promise<Collection[]>;
    findByName(userId: string, name: string): Promise<Collection | null>;
}
