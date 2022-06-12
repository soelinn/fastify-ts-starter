/* eslint-disable @typescript-eslint/no-unused-vars */
import { FastifyPluginAsync, FastifySchema } from "fastify"
import { Static, Type } from "@sinclair/typebox"

// ===== Payload
// @see https://github.com/fastify/fastify/blob/main/docs/Reference/TypeScript.md#json-schema
// @see https://github.com/sinclairzx81/typebox#strict
// NOTE: TypeBox uses the properties kind and modifier internally.
//       These properties are not strictly valid JSON schema which will
//       cause AJV@7 and newer versions to throw an invalid schema error.
//       To remove the error it's either necessary to omit the properties
//       by using Type.Strict() or use the AJV options for adding custom keywords.
const LoginPostPayload = Type.Strict(Type.Object({
  username: Type.String(),
  password: Type.String(),
}))

type LoginPostPayloadType = Static<typeof LoginPostPayload>;
const loginPostSchema: FastifySchema = {
  body: LoginPostPayload
};

const login: FastifyPluginAsync = (fastify, opts): Promise<void> => {
  // ===== GET
  interface LoginViewModel {
    foo: string;
  }

  fastify.get("/", function (req, resp) {
    const model = {
      foo: "bar@email.com",
    }

    return resp.view<LoginViewModel>("/views/login/login.ejs", model)
  })

  // ===== POST
  fastify.post<{
    Body: LoginPostPayloadType,
    Reply: string
  }>("/", { schema: loginPostSchema }, function (req, resp) {
    // const { username, password } = req.body // read payload

    return "TO BE IMPLEMENTED"
  })

  return Promise.resolve()
}

export default login;
