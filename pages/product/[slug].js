import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import { fetchDataFromApi } from "@/utils/api";
// import { getDiscountedPricePercentage } from "@/utils/helper";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "@/store/cartSlice";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {

    const p = product?.data?.[0].attributes;

    return (
        <div className="w-full md:py-20">
            {/* <ToastContainer /> */}
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={p.img.data}/>
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Product Name
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Product Subtitle
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                &#8360;3999
                            </p>
                            <>
                                <p className="text-base  font-medium line-through">
                                    &#8360;5999
                                </p>
                                <p className="ml-auto text-base font-medium text-green-500">
                                    70%off
                                </p>
                            </>
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                <div
                                    className={`border rounded-md text-center py-3 font-medium`}
                                >
                                    20
                                </div>
                                <div
                                    className={`border rounded-md text-center py-3 font-medium`}
                                >
                                    30
                                </div>
                                <div
                                    className={`border rounded-md text-center py-3 font-medium`}
                                >
                                    40
                                </div>
                                <div
                                    className={`border rounded-md text-center py-3 font-medium`}
                                >
                                    50
                                </div>
                                <div
                                    className={`border rounded-md text-center py-3 font-medium`}
                                >
                                    60
                                </div>
                                <div
                                    className={`border rounded-md text-center py-3 opacity-50 bg-black/[0.1] cursor-not-allowed font-medium`}
                                >
                                    70
                                </div>
                                <div
                                    className={`border rounded-md text-center py-3 opacity-50 bg-black/[0.1] cursor-not-allowed font-medium`}
                                >
                                    80
                                </div>
                                <div
                                    className={`border rounded-md text-center py-3 opacity-50 bg-black/[0.1] cursor-not-allowed font-medium`}
                                >
                                    90
                                </div>
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            {/* {showError && ( */}
                            <div className="text-red-600 mt-1">
                                Size selection is required
                            </div>
                            {/* )} */}
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                            }}
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Wishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>
                            <div className="markdown text-md mb-5">
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>
                {/* <RelatedProducts /> */}
            </Wrapper >
        </div >
    );
};

export default ProductDetails


export async function getStaticPaths() {
    const product = await fetchDataFromApi('/api/products?populate=*')

    const paths = product?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`)
    const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`)
    return {
        props: {
           product,
           products,
        }
    }

}