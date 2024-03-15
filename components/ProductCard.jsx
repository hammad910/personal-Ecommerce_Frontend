// import { getDiscountedPricePercentage } from "@/utils/helper";
import { getDiscountedPrice } from "@/utils/helper";
import img from '../images/assets/Air Jordan 1 Mid SE Craft/thumbnail.jpeg'
import Image from "next/image";
import Link from "next/link";
import React from "react";



const ProductCard = ({ data: { attributes: p, id } }) => {
  
        return (
            <Link
                href={`/product/${p.slug}`}
                className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
            >
                <Image
                    width={500}
                    height={500}
                    src={p.thumnail.data.attributes.url}
                    alt=''
                />
                <div className="p-4 text-black/[0.9]">
                    <h2 className="text-lg font-medium">{p.name}</h2>
                    <div className="flex items-center text-black/[0.5]">
                        <p className="mr-2 text-lg font-semibold">
                            &#8360;:{p.price}
                        </p>

                        <>
                            <p className="text-base  font-medium line-through">
                                &#8360;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPrice(p.original_price, p.price)}
                                %off
                            </p>
                        </>
                    </div>
                </div>
            </Link>
        );
};

export default ProductCard;