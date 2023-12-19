import { useEffect, useState } from "react";

const WithLoadingx = (WrappedComponent) => {
    return function WithLoadingx (props){
        const [ IsLoading, setIsLoading ] = useState(true)

        useEffect(() => {
            setTimeout (() => {
                    setIsLoading(false)
            }, 2000)
        }, [])
        return IsLoading ? (
        <>
            Loading
        </>) : (
            <WrappedComponent {...props}/>
        )
    }
}

export default WithLoadingx;