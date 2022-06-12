/* eslint-disable @typescript-eslint/no-unused-vars */
import { FastifyPluginAsync } from "fastify"

const root: FastifyPluginAsync = (fastify, opts): Promise<void> => {
  fastify.get("/", function (request, reply) {
    return { root: true }
  })

  return Promise.resolve()
}

export default root;
