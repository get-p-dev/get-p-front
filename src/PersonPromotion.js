import React from 'react'

function PersonPromotion() {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-12">
            <h2 className="text-4xl font-bold mx-4">Recommended People</h2>
            <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-8 h-60">
                <div className="flex items-center justify-center rounded-md bg-gray-300">1</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">2</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">3</div>
                <div className="flex items-center justify-center rounded-md bg-gray-300">4</div>
            </div>
            <div className="flex w-full justify-end pt-4">
                <a href="#top" className="bg-gray-100 px-4 py-2 rounded-md text-lg">+ more</a>
            </div>
        </div>
    )
}

export default PersonPromotion