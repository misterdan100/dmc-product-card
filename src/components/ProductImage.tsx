import React, { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface ProductImageProps {
    img?: string
    className?: string
    style?: CSSProperties
}

export const ProductImage = ({img = '', className, style}: ProductImageProps) => {
    const { product } = useContext(ProductContext)
    const image = img ? img : product.img ? product.img : noImage
    return (
        <img className={`${styles.productImg} ${className}`} src={image} alt="product image" style={style}/>
    )
}