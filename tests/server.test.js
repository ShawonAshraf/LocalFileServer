import request from "supertest"
import expect from "expect"

import app from "../server"

describe("GET /", () => {
    it("Should fetch the nonempty response object on request", (done) => {
        request(app)
            .get("/")
            .expect(res => {
                expect(res.body).toBeTruthy()
                done()
            })
            .catch(err => done(err))
    })
})