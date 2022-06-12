import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place your custom code here!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: opts
  })

  await Promise.resolve()
};

/*
const app: FastifyPluginAsync<AppOptions> = (
  fastify,
  opts
): Promise<void> => {
  return new Promise<void>(resolve => {
    // Place your custom code here!

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    void fastify.register(AutoLoad, {
      dir: join(__dirname, "plugins"),
      options: opts
    })

    // This loads all plugins defined in routes
    // define your routes in one of these
    void fastify.register(AutoLoad, {
      dir: join(__dirname, "routes"),
      options: opts
    })

    resolve()
  })
};
*/

export default app;
export { app }
