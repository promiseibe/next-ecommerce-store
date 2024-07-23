"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import cookies from "js-cookie"
import  { createContext, ReactNode } from "react";
import {products,collections} from "@wix/stores"



const refreshToken = JSON.parse(cookies.get("refreshToken") || "{}")

const wixClient = createClient({
  modules: {
    products,
    collections,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
     refreshToken, accessToken: {value: "", expiresAt: 0}
    }
  })
})

  export type wixClient = typeof wixClient

  export const wixClientContext = createContext<wixClient>(wixClient)

  export const WixClientContextProvider = ({children}: {children: ReactNode}) => {
    return <wixClientContext.Provider value={wixClient}>{children}</wixClientContext.Provider>
  }