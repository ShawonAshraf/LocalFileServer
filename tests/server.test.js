import request from "supertest"
import expect from "expect"

import app from "../server"

describe("GET /", () => {
    it("Should return 200 as status", (done) => {
        request(app)
            .get("/status")
            .expect(200)
            .expect((res) => {
                expect(res.body).toExist()
                done()
            })
            .catch(err => done(err))
    })
})