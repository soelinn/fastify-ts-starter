/* eslint-disable @typescript-eslint/no-unused-vars */
import fp from "fastify-plugin"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  void fastify.decorate("someSupport", function () {
    return "hugs"
  })

  await Promise.resolve()
})

// When using .decorate you have to specify added properties for Typescript
declare module "fastify" {
  export interface FastifyInstance {
    someSupport(): string;
  }
}
