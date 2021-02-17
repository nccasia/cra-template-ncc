import React, {
  createContext,
  useContext,
  useMemo,
} from "react"
import { useAppConfig } from "../AppConfig"

const SessionContext = createContext({ })

export const SessionProvider = ({ children }) => {
  const { appConfig, fromConfig } = useAppConfig()

  const contextValue = useMemo(
    () => ({

    }),
    []
  )

  return (
    <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)

export default useSession
