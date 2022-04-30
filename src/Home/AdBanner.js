import React from 'react'

function AdBanner() {
    function imageCover(url) {
        return {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }

    const AdList = [
        {
            data: 1,
            text: "Advertisement 1",
            imageUrl: "https://picsum.photos/id/100/800/450"
        },
        {
            data: 2,
            text: "Advertisement 2",
            imageUrl: "https://picsum.photos/id/102/800/450"
        },
        {
            data: 3,
            text: "Advertisement 3",
            imageUrl: "https://picsum.photos/id/103/800/450"
        },
        {
            data: 4,
            text: "Advertisement 4",
            imageUrl: "https://picsum.photos/id/104/800/450"
        },
    ]
    return (
        <div className="max-w-6xl mx-auto">
            <div className="w-auto mx-4 mt-8 overflow-scroll rounded-md">
                <div className="relative flex flex-row bg-gray-300 w-full h-96">
                    {
                        AdList.map((element, index) => {
                            return (
                                <div key={index} className="shrink-0 h-auto w-full" style={imageCover(element.imageUrl)}>
                                    <div className="absolute bg-gradient-to-t from-gray-200/80 to-transparent w-full h-full">
                                        <div className="flex h-full px-6 pb-4 items-end">
                                            <p className="font-bold text-3xl">{element.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AdBanner