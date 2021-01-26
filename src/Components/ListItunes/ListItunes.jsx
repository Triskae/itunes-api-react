import React from 'react'
import TileMusic from './TileMusic'

const ListItunes = ({ response }) => {
    const { results, resultCount } = response

    return (
        <div className="grid md:grid-cols-3 md:gap-4 md:mt-3 m-3 gap-4 grid-cols-1">
            {response.results.map((x, i) => {
                return <TileMusic key={i} {...x} />
            })}
        </div>
    )
}

export default ListItunes
