import React from 'react'

function ProjectPromotion() {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-12">
            <h2 className="text-4xl font-bold mx-4">Trending Projects</h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8 h-72">
                <div className="flex items-center justify-center row-span-2 rounded-md bg-gray-300">1</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">2</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">3</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">4</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">5</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">6</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">7</div>
            </div>
            <div className="flex w-full justify-end pt-4">
                <a href="#top" className="bg-gray-100 px-4 py-2 rounded-md text-lg">+ more</a>
            </div>
        </div>
    )
}

export default ProjectPromotion