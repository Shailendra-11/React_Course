import { useState } from "react"


const useFilter = (dataList ,callback) => {
    const [query , setquery] = useState('')
    
    const filterData = dataList.filter((data)=>{
        callback(data).toLowerCase.include(query)
    })

    return [filterData ,setquery];
}

export default useFilter
