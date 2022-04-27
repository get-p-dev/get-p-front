import React from 'react'

function ProjectPromotion() {
    const PromotionList = [
        {
            featured: 1,
            data: 1,
            imageUrl: "https://picsum.photos/id/1/500/600"
        },
        {
            featured: 0,
            data: 2,
            imageUrl: "https://picsum.photos/id/2/500/500"
        },
        {
            featured: 0,
            data: 3,
            imageUrl: "https://picsum.photos/id/3/500/500"
        },
        {
            featured: 0,
            data: 4,
            imageUrl: "https://picsum.photos/id/4/500/500"
        },
        {
            featured: 0,
            data: 5,
            imageUrl: "https://picsum.photos/id/5/500/500"
        },
        {
            featured: 0,
            data: 6,
            imageUrl: "https://picsum.photos/id/6/500/500"
        },
        {
            featured: 0,
            data: 7,
            imageUrl: "https://picsum.photos/id/7/500/500"
        }
    ]

    return (
        <div className="max-w-6xl mx-auto px-4 mt-12">
            <h2 className="font-sans text-4xl font-bold mx-4">Trending Projects</h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8 h-72">
                {
                    PromotionList.map((element, index) => {
                        return (
                            (element.featured === 1) ?
                                <a href="#top" key={index} className="flex object-fill items-center justify-center row-span-2 rounded-md bg-gray-300 hover:scale-105 transition ease-in-out overflow-hidden">
                                    <div>
                                        <img className="bg-cover" src={element.imageUrl} alt={element.data}></img>
                                    </div>
                                </a>
                                :
                                <a href="#top" key={index} className="flex items-center justify-center rounded-md h-full bg-gray-300 hover:scale-105 transition ease-in-out overflow-hidden">
                                    <div>
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
        </div >
    )
}

export default ProjectPromotion