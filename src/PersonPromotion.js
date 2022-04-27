import React from 'react'

function PersonPromotion() {

    const PromotionList = [
        {
            data: 1,
            imageUrl: "https://picsum.photos/id/10/500/500"
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

    function imageCover(url) {
        return {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 mt-12">
            <div className="flex w-full justify-end pt-4 px-2">
                <h2 className="grow text-4xl font-bold">Recommended People</h2>
                <a href="#top" className="grow-0 bg-gray-100 px-4 py-2 rounded-md text-lg hover:bg-gray-300 transition duration-250 ease-in-out">+ more</a>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-8 h-60">
                {
                    PromotionList.map((element, index) => {
                        return (
                            <a href="#top" key={index}>
                                <div className="relative flex items-center justify-center rounded-md h-full w-full hover:scale-105 transition ease-in-out overflow-hidden">
                                    <div className="w-full h-full bg-cover" style={imageCover(element.imageUrl)}>
                                        <div className="absolute bg-gradient-to-t from-gray-200/80 to-transparent w-full h-full">
                                            <div className="flex h-full px-4 pb-2 items-end">
                                                <p className="font-bold text-lg">Steve Steveson</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PersonPromotion