import React, {createContext, useEffect, useState} from 'react';
import {PRODUCTS} from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}