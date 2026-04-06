import request from "supertest";
import app from "../src/app.js";

describe("Auth API", () => {
  it("should register a user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test",
        email: "test@example.com",
        password: "123456",
      });

    expect(res.statusCode).toBe(201);
  });
});