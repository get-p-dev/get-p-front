import React from 'react'

function ProjectPromotion() {
    const PromotionList = [
        {
            featured: 1,
            data: 'Project 1',
            imageUrl: "https://picsum.photos/id/1/800/450"
        },
        {
            featured: 0,
            data: 'Project 2',
            imageUrl: "https://picsum.photos/id/35/800/450"
        },
        {
            featured: 0,
            data: 'Project 3',
            imageUrl: "https://picsum.photos/id/11/800/450"
        },
        {
            featured: 0,
            data: 'Project 4',
            imageUrl: "https://picsum.photos/id/135/800/450"
        },
        {
            featured: 0,
            data: 'Project 5',
            imageUrl: "https://picsum.photos/id/512/800/450"
        },
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
            <div className="flex w-full pt-4 px-2">
                <h2 className="grow text-4xl font-bold">Trending Projects</h2>
                <a href="#top" className="grow-0 bg-gray-100 px-4 py-2 rounded-2xl text-lg hover:bg-gray-300 transition duration-250 ease-in-out">+ more</a>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8 h-96">
                {
                    PromotionList.map((element, index) => {
                        return (
                            (element.featured === 1) ?
                                <a href="#top" key={index} className="relative flex object-fill items-center justify-center row-span-2 col-span-2 rounded-2xl bg-gray-300 hover:scale-105 transition ease-in-out overflow-hidden">
                                    <div className="h-full w-full" style={imageCover(element.imageUrl)}>
                                        <div className="absolute bg-gradient-to-t from-gray-900/80 to-transparent w-full h-full">
                                            <div className="flex h-full px-4 pb-4 items-end">
                                                <p className="font-bold text-3xl text-white">Steve Steveson</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                :
                                <a href="#top" key={index} className="relative flex items-center justify-center rounded-2xl h-full bg-gray-300 hover:scale-105 transition ease-in-out overflow-hidden">
                                    <div className="h-full w-full" style={imageCover(element.imageUrl)}>
                                        <div className="absolute bg-gradient-to-t from-gray-900/80 to-transparent w-full h-full">
                                            <div className="flex h-full px-3 pb-2 items-end">
                                                <p className="font-bold text-white text-lg">Steve Steveson</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default ProjectPromotion