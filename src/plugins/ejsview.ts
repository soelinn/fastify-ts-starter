/* eslint-disable @typescript-eslint/no-unused-vars */
import fp from "fastify-plugin"
import fastifyView, { PointOfViewOptions } from "@fastify/view";
import * as ejs from "ejs";

/**
 * This plugins registers EJS templating engine
 *
 * @see https://github.com/fastify/point-of-view
 * @see https://ejs.co
 */
export default fp<PointOfViewOptions>(async (fastify, opts) => {
  void fastify.register(fastifyView, {
    engine: {
      ejs: ejs,
    },
  })

  await Promise.resolve()
})
