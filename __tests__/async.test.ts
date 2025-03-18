import { users,findUsersById } from "../src/async"
describe("--DB--MOCKING--",()=>{

    it("should return a user with actual value",()=>{
        expect(findUsersById(users,1)).toEqual({
            id:1,
            name:expect.any(String),
            email:expect.any(String)
    })
})


it("should return a user and return undefined",()=>{
    expect(findUsersById(users,5)).toBeUndefined();
})


})