import { useEffect } from "react"

const Usetitle =(title)=>{
    useEffect(()=>{
        document.title = `${title}-photography` 
    },[title])
}

export default Usetitle