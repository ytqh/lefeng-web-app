'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react'
import { frontendConfig, setRouter } from '../config/frontend'

if (typeof window !== 'undefined')
  SuperTokensReact.init(frontendConfig())

export const SuperTokensProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  setRouter(useRouter(), usePathname() || window.location.pathname)
  return <SuperTokensWrapper>{children}</SuperTokensWrapper>
}
