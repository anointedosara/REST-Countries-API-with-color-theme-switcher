"use client"
import { DataContext } from "@/contexts/DataContext"
import { useContext } from "react"

export default function Loading() {
    const {data} = useContext(DataContext)
    return (
        <div className="grid w-full grid-cols-1 gap-10 m-auto max-w-75 md:max-w-325 md:grid-cols-3 lg:grid-cols-4 md:gap-15 lg:gap-17">
            {
                data.map((item, i) => 
                <div className="w-full bg-white rounded-md shadow-md dark:bg-blue-900 h-85" key={i}>
                </div>)
            }
        </div>
    )
}