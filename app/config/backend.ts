import SuperTokens from 'supertokens-node'
import EmailPasswordNode from 'supertokens-node/recipe/emailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import type { TypeInput } from 'supertokens-node/types'
import { appInfo } from './appInfo'

export const backendConfig = (): TypeInput => {
  return {
    framework: 'custom',
    supertokens: {
      // These values should be set in your .env file
      connectionURI: process.env.SUPERTOKENS_CONNECTION_URI || 'http://localhost:3567',
      apiKey: process.env.SUPERTOKENS_API_KEY,
    },
    appInfo,
    recipeList: [
      EmailPasswordNode.init(),
      SessionNode.init(),
    ],
    isInServerlessEnv: true,
  }
}

let initialized = false

export function ensureSuperTokensInit() {
  if (!initialized) {
    SuperTokens.init(backendConfig())
    initialized = true
  }
}
