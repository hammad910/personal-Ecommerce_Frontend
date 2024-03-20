import Image from "next/image";
import checkImg from '@/images/assets/Air Jordan 1 Mid SE Craft/thumbnail.jpeg'
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button"
import { BsCart } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToWishlist, removeWishlist } from "@/store/wishlistSlice";

const WishlistItem = ({ data }) => {
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
    const notify = () => {
        toast.success("Item added to your cart.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    // const c = data.attributes;
    const p = data.attributes;
    console.log(p);

    return (
        <>
            <div className="flex py-5 gap-3 md:gap-5 border-b">
                <ToastContainer />
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
                        <div className="text-lg md:text-md flex items-center gap-6 font-bold text-black/[0.5] mt-2">
                            &#8360;{p.price}
                            <RiDeleteBin6Line
                                onClick={() => dispatch(removeWishlist({ id: data.id }))}
                                className="cursor-pointer text-black/[0.5] hover:text-black text-md md:text-lg"
                            />
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

                        <Button
                            onClick={() => {
                                dispatch(
                                    addToWishlist({
                                        ...p?.data?.[0],
                                    })
                                );
                                notify()
                            }}>
                            <BsCart className="mr-2 h-4 w-4" /> add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WishlistItem