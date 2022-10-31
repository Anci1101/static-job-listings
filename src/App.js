import { useEffect, useState } from 'react';
import './scss/scss-style.js'
import CompanyList from './components/CompanyList.js';
import FilterMenu from './components/FilterMenu.js';

function App() {
  const [companies, setCompanies] = useState([])
  const [filteredItems, setFilteredItems] = useState('')


  useEffect(() => {

    fetch('http://localhost:8000/companies',{
    method: 'GET'
  })
  .then(res => res.json())
  .then(res => {
    setCompanies(res)
    if(res.error){
      throw(res.error)
    }
    return res
  })
  .catch(error => {
   console.log(error, 'error');
  })

  }, [])
  
  const handleFilterRole = (e, value) => {
    const filteredRole = companies.filter((item)=> item.role !== value)
    setFilteredItems(filteredRole)
  }

  const handleFilterLanguage = (e, value) => {
    const filteredLanguage = companies.filter((item)=>!item.languages.includes(value))
    setFilteredItems(filteredLanguage)
  }

  const clearFilters = () => {
    setFilteredItems('')
  }
  

  return (
    
    <div className='container'>

     <div className='header'></div>
      <FilterMenu handleFilterRole={handleFilterRole} handleFilterLanguage={handleFilterLanguage} clearFilters={clearFilters}/>
      <CompanyList companies={filteredItems ? filteredItems : companies} />
    </div>
  );
}

export default App;
