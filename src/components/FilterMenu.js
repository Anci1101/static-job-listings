import removeIcon from '../images/icon-remove.svg'

const FilterMenu = ({handleFilterRole, handleFilterLanguage, clearFilters}) => {

 return (
        <div className="filters-wrapper">
          <div className='filters'>
        
            <div className='single-filter-wrapper'>
                  <p className='filter'>Frontend</p>
                   <button  onClick={(e)=>handleFilterRole(e, 'Frontend')} className='filter-btn' >
                    <img src={removeIcon} alt="aaa" />
                   </button>
            </div>
            <div className='single-filter-wrapper'>
                  <p className='filter'>CSS</p>
                   <button  onClick={(e)=>handleFilterLanguage(e, 'CSS')} className='filter-btn' >
                    <img src={removeIcon} alt="aaa" />
                   </button>
            </div>
            <div className='single-filter-wrapper'>
                  <p className='filter'>JavaScript</p>
                   <button  onClick={(e)=>handleFilterLanguage(e, 'JavaScript')} className='filter-btn' >
                    <img src={removeIcon} alt="aaa" />
                   </button>
            </div>
        
          </div>
          <div>
           <button onClick={clearFilters} className='filter-clear-btn'>Clear</button>
          </div>
        </div>

  )
}

export default FilterMenu