import { getLocaleOnServer } from '@/i18n/server'
import { SuperTokensProvider } from './components/supertokensProvider'
import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        <SuperTokensProvider>
          <div className="overflow-x-auto">
            <div className="w-screen h-screen min-w-[300px]">
              {children}
            </div>
          </div>
        </SuperTokensProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
