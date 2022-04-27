import React from 'react'

function PersonPromotion() {

    const PromotionList = [
        {
            data: 1,
            imageUrl: "https://picsum.photos/id/10/500/600"
        },
        {
            data: 2,
            imageUrl: "https://picsum.photos/id/11/500/500"
        },
        {
            data: 3,
            imageUrl: "https://picsum.photos/id/12/500/500"
        },
        {
            data: 4,
            imageUrl: "https://picsum.photos/id/13/500/500"
        }
    ]

    return (
        <div className="max-w-6xl mx-auto px-4 mt-12">
            <h2 className="text-4xl font-bold mx-4">Recommended People</h2>
            <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-8 h-60">
                {
                    PromotionList.map((element, index) => {
                        return (
                            <a href="#top" key={index}>
                                <div className="flex items-center justify-center rounded-md h-full bg-gray-300 hover:scale-105 transition ease-in-out overflow-hidden">
                                    <img className="bg-cover" src={element.imageUrl} alt={element.data}></img>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="flex w-full justify-end pt-4">
                <a href="#top" className="bg-gray-100 px-4 py-2 rounded-md text-lg hover:bg-gray-300 transition duration-250 ease-in-out">+ more</a>
            </div>
        </div>
    )
}

export default PersonPromotion