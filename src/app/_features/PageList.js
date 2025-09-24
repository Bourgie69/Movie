const PageList = (props) => {
    const {} = props
    return(
        <>
            <div className="flex gap-2.5 p-10 justify-end">
                <button>&#8592; Previous</button>
                <button className="flex justify-center items-center border border-gray-400 h-[30px] w-[30px] rounded-sm">1</button>
                <button className="flex justify-center items-center border border-gray-400 h-[30px] w-[30px] rounded-sm">2</button>
                ...
                <button className="flex justify-center items-center border border-gray-400 h-[30px] w-[30px] rounded-sm">5</button>
                <button>Next &#8594;</button>
            </div>
        </>
    )
}

export default PageList