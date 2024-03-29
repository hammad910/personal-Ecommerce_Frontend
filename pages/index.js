import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { useSession } from "next-auth/react";
import { fetchDataFromApi } from "@/utils/api";
import { useRouter } from "next/router";
// import { mongoDBConnect } from "@/db/user.db";

export default function home({ products }) {
    const session = useSession()
    const router = useRouter()
    // useEffect(() => {
    //     console.log("Session:", session);
    //     if (session.data === null) {
    //         router.push('/login') 
    //     }else{
    //         router.push('/')
    //     }
        
    // }, [session, router])
    
    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* heading and paragraph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
                {/* products grid end */}
            </Wrapper>
        </main>
    )
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}

// mongoDBConnect()
