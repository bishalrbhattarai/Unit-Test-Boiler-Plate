export interface User {
    id: number;
    name: string;
    email: string;
}

export const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com'
    }
];

export const findUsersById= (users:User[],key:number)=>{
    const foundUser = users.find((user)=>user.id===key);
 return foundUser ? foundUser: undefined;
}

