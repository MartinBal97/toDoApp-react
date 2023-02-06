import './Category.css'


export default function Category({allCategories}) {

    console.log(allCategories)

    
    return (
        <div className='containerCategory'>
        <h2 className='titleCateg'>Categories</h2>
        {
            allCategories.map((category, i) => {
                return (
                <button className='categ' key={i} >{category}</button>
            )})
        }
    </div>
    )
}


