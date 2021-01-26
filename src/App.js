import React, { useEffect, useState } from 'react'
import './index.css'
import { ListItunes } from './Components'
import fetchItunes from './utils/itunesApiConsumer'

function App() {
    const [search, setSearch] = useState('')
    const [response, setResponse] = useState()

    useEffect(() => {
        if (!search) setResponse()
    }, [search])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchItunes(search).then(setResponse)
        }
    }

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 z-50">
            <h1 className="text-indigo-500 text-2xl mt-3">iTunes</h1>
            <div className="flex h-10 mt-3">
                <input
                    type="text"
                    name="search"
                    id="search-box"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-full"
                    placeholder="Que voulez vous écouter ?"
                    value={search}
                    onKeyPress={handleKeyDown}
                    onChange={(x) => setSearch(x.target.value)}
                />
                <button
                    onClick={() => {
                        fetchItunes(search).then(setResponse)
                    }}
                    type="button"
                    className="ml-1.5 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Zee partiiie
                </button>
            </div>
            {response ? (
                <ListItunes response={response} />
            ) : (
                <div className="flex justify-center">
                    <p className="mt-6">Aucun résulats</p>
                </div>
            )}
        </div>
    )
}

export default App
