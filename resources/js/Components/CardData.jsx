import React from 'react'

const CardData = ({mount, text}) => {
    return (

        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold dark:text-white">{mount}</dt>
                <dd className="text-gray-500 dark:text-gray-400">{text}</dd>
            </div>
        </div>

    )
}
export default CardData
