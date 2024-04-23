import data from '../../../../articles.json'

const ArticleList = () => {
    return(
        <div className='mt-5 grid gap-5 m-auto max-w-2xl sm:mt-0 md:grid-cols-2 md:max-w-[850px] lg:grid-cols-3 lg:max-w-[1200px]'>
            {data.map(article => {
                return(
                <div className='p-5 bg-gray-200   dark:bg-slate-700 sm:rounded-xl sm:shadow-lg flex flex-col items-center text-center' key={article.id}>
                    <h4 className='text-xl font-bold dark:text-gray-200'>{article.title}</h4>
                    <div className='flex gap-3'>
                        {article.tags.map((tag, index)=>{
                            return(
                                <span className=' bg-sky-950 text-gray-100 p-2 my-4 rounded-xl dark:bg-gray-500 dark:text-gray-200' key={index}>{tag}</span>
                            )
                        })}
                    </div>
                   
                    <p className='text-sky-950 line-clamp-4 md:line-clamp-none dark:text-gray-300'>{article.text}</p>
                </div>
                )
               
            })}
        </div>
    )
}

export default ArticleList