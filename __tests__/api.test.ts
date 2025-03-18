
import { app } from "../src"
import request from "supertest";
  function sum():Promise<number | undefined>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(undefined)
    },2000)
    })
        }

describe("API TESTING",()=>{

    it("should return 'Hello World!' text ", async()=>{
        const response = await request(app).get("/")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello World!")
        expect(response).toBeDefined()
    })

    // it("should check whether the function returns soham as string",async ()=>{
    //     const calledFunction = jest.fn().mockReturnValue("soham")
    //     calledFunction(); 
    //      const result = await sum()
    //      expect(result).toBeUndefined()
        
    // })

    // it("Mock test scenario",async()=>{
    //     const response = await request(app).get("/")
    //     expect(response.status).toBe(200)
    // })


    // it ("check object ",()=>{
    //     const data: {[key:string]:number} = {"one":1}
    //     data["two"] = 2;
    // })






})
