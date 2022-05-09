import React from 'react'

function PersonPromotion() {

    const PromotionList = [
        {
            data: 'Harry Potter',
            imageUrl: "https://picsum.photos/id/902/500/500"
        },
        {
            data: 'Harry Styles',
            imageUrl: "https://picsum.photos/id/860/500/500"
        },
        {
            data: 'Bruno Mars',
            imageUrl: "https://picsum.photos/id/822/500/500"
        },
        {
            data: 'Elon Musk',
            imageUrl: "https://picsum.photos/id/823/500/500"
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
        <div className="max-w-4xl mx-auto px-4 pt-10">
            <div className="flex w-full justify-end pt-4 px-2">
                <h2 className="grow text-4xl font-bold">Recommended People</h2>
                <a href="#top" className="grow-0 bg-gray-200 px-4 py-2 rounded-2xl text-lg hover:bg-gray-300 transition duration-250 ease-in-out">+ more</a>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-8 h-60">
                {
                    PromotionList.map((element, index) => {
                        return (
                            <a href="#top" key={index}>
                                <div className="relative flex items-center justify-center rounded-2xl h-full w-full hover:scale-105 transition ease-in-out overflow-hidden">
                                    <div className="w-full h-full bg-cover" style={imageCover(element.imageUrl)}>
                                        <div className="absolute bg-gradient-to-t from-gray-900/80 to-transparent w-full h-full">
                                            <div className="flex h-full px-4 pb-2 items-end">
                                                <p className="font-bold text-lg text-white">{element.data}</p>
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