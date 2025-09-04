import { createContext } from "react";

export interface Site {
    id: number
    title: string
    da: number
    url: string
    contact: string
}

interface SiteContextType {
    siteList: Site[]
    setSiteList: React.Dispatch<React.SetStateAction<Site[]>>
}

export const SiteContext = createContext<SiteContextType>({
    siteList: [],
    setSiteList: ()=>{}
})