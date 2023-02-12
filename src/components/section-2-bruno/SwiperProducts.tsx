import React from "react";

export default function SwiperProducts() {
    return (
        <div>
            <div className="flex flex-col border-[1px] border-gray-200 items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxXVQVxKwcVaaIh9hdZpF0BVsZjQKt1SmPg&usqp=CAU" alt="product" className="w-32 h-32" />
                <p className="font-bold">Product Name</p>
                <p className="font-light">25%</p>
            </div>
        </div>
    );
}