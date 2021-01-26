import CustomPlayer from "./CustomPlayer";

function TileMusic({
    artistName,
    collectionName,
    trackName,
    previewUrl,
    artworkUrl100,
}) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-1 py-1 sm:px-6 font-bold">{trackName}</div>
            <div className="">
                <div className="flex">
                    <div>
                        <img src={artworkUrl100} />
                    </div>
                    <div>
                        <p className="ml-2">
                            <span className="font-bold">Artiste: </span>
                            {artistName}
                        </p>
                        <p className="ml-2">
                            <span className="font-bold">Album: </span>
                            {collectionName}
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-1 py-4 sm:px-6 flex justify-center">
                <audio className="w-full">
                    <source src={previewUrl} />
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                <CustomPlayer/>
            </div>
        </div>
    )
}

export default TileMusic
