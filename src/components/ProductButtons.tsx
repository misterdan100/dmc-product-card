import React, { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface ProductButtonsProps {
    className?: string
    style?: CSSProperties
}


export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
    const { increaseBy, counter, maxCount } = useContext(ProductContext)

    const isMaxReached = useCallback(() => {
        if(maxCount) {
            return counter >= maxCount
        }
        return false
    }, [counter, maxCount])
    
    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                >-</button>

            <div className={styles.countLabel}> {counter} </div>

                <button
                    className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
                    onClick={() => increaseBy(1)}
                    // onClick={onChange}
                >+</button>
        </div>
    )
}