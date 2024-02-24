import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import Cart from "@/pages/cart";
const CartItem = ({ data }) => {
    const [cartQuantity, setCartQuantity] = useState(1)

    const quantityDec = () => {
        if (cartQuantity > 1) {
            setCartQuantity(cartQuantity - 1)
        }
    }
    const quantityInc = () => {
        setCartQuantity(cartQuantity + 1)
    }
    const dispatch = useDispatch()
    const p = data.attributes;

    return (
        <>
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <Image
                    src={p.thumbnail.data.attributes.url}
                    alt=''
                    width={120}
                    height={120}
                />
            </div>
            {/* IMAGE END */}

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {p.name}
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {p.subtitle}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        &#8360;{p.price}
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    {p.subtitle}
                </div>

                <div className="flex items-center justify-between mt-4" >
                    <div className="w-fit flex border border-gray-100 h-8 mb-2">
                        <span className="text-sm w-8 flex items-center justify-center cursor-pointer border-r border-gray-100" onClick={quantityDec}>-</span>
                        <span className="text-sm w-10 flex items-center justify-center">{cartQuantity}</span>
                        <span className="text-sm w-8 flex items-center justify-center cursor-pointer border-l border-gray-100" onClick={quantityInc}>+</span>
                    </div>
                    <RiDeleteBin6Line
                        onClick={() => dispatch(removeFromCart({id : data.id}))}
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default CartItem;