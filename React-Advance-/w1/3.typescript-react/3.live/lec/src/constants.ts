export enum Todotype {
    Learned = "Learned",
    Learning = "Learning",
    Pending ="Pending",
    Revision= "Revision",
}

export type Todo = {
    id: number;
    type: Todotype;
    message: string;
    likes: number;
}