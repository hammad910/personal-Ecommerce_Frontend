import Link from 'next/link';
import React from 'react'

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];
const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => (
                <React.Fragment key={item.id}>
                    {!!item.subMenu ? (
                        <li
                            className="cursor-pointer flex items-center gap-2 relative"
                            onMouseEnter={() => setShowCatMenu(true)}
                            onMouseLeave={() => setShowCatMenu(false)}
                        >
                            {item.name}
                            {showCatMenu ? (
                                <div className="flex justify-between items-center">
                                    <BsChevronUp size={14} />
                                </div>
                            ) : (
                                <div className="flex justify-between items-center">
                                    <BsChevronDown size={14} />
                                </div>
                            )}
                            {showCatMenu && (
                                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                    {categories?.map(({attributes: c, id}) => (
                                        <Link href={`/category/${c.slug}`} key={id} className='flex items-center justify-between hover:bg-black/[0.03]' onClick={() => setShowCatMenu(false)}>
                                            <li className="h-12 flex justify-between items-center px-3  rounded-md">{c.name}</li>
                                            <span className="opacity-50 text-sm">{c.data.products.length}</span>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>

                    ) : (
                        <li className="cursor-pointer">
                            <Link href={item.url}>{item.name}</Link>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    )
}

export default Menu