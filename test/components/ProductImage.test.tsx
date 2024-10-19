import React from "react";
import renderer from 'react-test-renderer'
import {  ProductCard, ProductImage } from "../../src/components";
import { product1 } from '../data/products'

describe('ProductImage', () => {
    test('must to show default image', () => {
        const wrapper = renderer.create(
            <ProductImage 
                img={'http://'}
            />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('must to show product card with image component', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {() => (
                    <ProductImage />
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})