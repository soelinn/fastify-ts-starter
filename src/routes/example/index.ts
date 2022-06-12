/* eslint-disable @typescript-eslint/no-unused-vars */
import {FastifyPluginAsync} from "fastify"

const example: FastifyPluginAsync = (fastify, opts): Promise<void> => {
  fastify.get("/", function (request, reply) {
    return "this is an example"
  })

  return Promise.resolve()
}

export default example;
