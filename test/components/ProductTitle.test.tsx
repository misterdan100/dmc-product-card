import React from "react";
import renderer from "react-test-renderer";
import {ProductTitle, ProductCard} from '../../src/components'
import { product1 } from "../data/products";


describe('ProductTitle', () => {
    test('show component with custom title', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom title" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('must showing the component with product name', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })
})