import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductsArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export function useProduct({product, onChange, value = 0, initialValues}: useProductsArgs) {
    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)

    const increaseBy = (value: number) => {
        
        let newValue = Math.max(counter + value, 0)
        if(initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter( newValue)

        if(onChange) {
            onChange({product, count: newValue})
        }
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if(!isMounted.current ) return
        setCounter(value)
    }, [value])

    // useEffect( () => {
    //     isMounted.current = true
    // }, [])


    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}