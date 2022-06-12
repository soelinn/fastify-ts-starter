import { test } from "tap"
import { build } from "../helper"

void test("login GET route", async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: "/login"
  })

  t.ok(res.payload.includes("<h1>Login</h1>", 0), "login HTML view renders successfully")
})

void test("login POST route", async (t) => {
  const app = await build(t)

  const res = await app.inject({
    method: "POST",
    url: "/login",
    payload: {
      username: "foobarbaz",
      password: "password"
    }
  })

  t.equal(res.payload, "TO BE IMPLEMENTED")
})

void test("login POST route validates empty payload with 400", async (t) => {
  const app = await build(t)

  const res = await app.inject({
    method: "POST",
    url: "/login",
    payload: {}
  })

  t.equal(res.statusCode, 400) // bad request due to validation failure
})
