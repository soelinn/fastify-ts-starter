/* eslint-disable @typescript-eslint/no-unused-vars */
import fp from "fastify-plugin"
import fastifySensible, { SensibleOptions } from "@fastify/sensible"

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<SensibleOptions>(async (fastify, opts) => {
  void fastify.register(fastifySensible, {})

  await Promise.resolve()
})
