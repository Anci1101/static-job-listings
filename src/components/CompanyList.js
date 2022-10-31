import React from 'react'
import Company from './Company'

const CompanyList = ({companies}) => {

  return (
    <div>
      {companies.map((company)=>(
        <Company key={company.id}
                 id={company.id}
                 logo={company.logo}
                 companyName={company.company}
                 position={company.position}
                 postedAt={company.postedAt}
                 contract={company.contract}
                 location={company.location}
                 role={company.role}
                 level={company.level}
                 languages={company.languages}
                 tools={company.tools}
          />
     
      ))}
     </div>
  )
}

export default CompanyList