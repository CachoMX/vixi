declare namespace NodeJS {
  interface ProcessEnv {
    SENDGRID_API_KEY: string
    SLACK_WEBHOOK_URL: string
  }
}