declare module 'process' {
  declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string

        APP_PORT: number
        APP_HOST_URL: string
        APP_CONTAINER_NAME: string
      }
    }
  }
}
