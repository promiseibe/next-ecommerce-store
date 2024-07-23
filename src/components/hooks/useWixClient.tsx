"use client"

import { wixClientContext } from "@/context/WixContext"
import { useContext } from "react"

export const useWixClient = () => {
 const wixContext = useContext(wixClientContext)   
 return wixContext
}

