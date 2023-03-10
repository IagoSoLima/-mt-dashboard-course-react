import * as dotenv from 'dotenv'
dotenv.config()

export const NODE_ENV = process.env.NODE_ENV
export const APP_PORT = Number(process.env.APP_PORT) ?? 5000
export const APP_HOST_URL = process.env.APP_HOST_URL ?? '0.0.0.0'
export const APP_CONTAINER_NAME = process.env.APP_CONTAINER_NAME
