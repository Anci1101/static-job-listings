import React from 'react'

const Company = ({id,
                  logo,
                  companyName,
                  position,
                  postedAt,
                  contract,
                  location,
                  role,
                  level,
                  languages,
                  tools,
                  newTag,
                  featuredTag}) => {
  return (
    <div className='company-wrapper' key={id}>
        <div className={featuredTag ? 'company-card-border' : 'company-card'}>
        <div className="logo"><img src={logo} alt={logo} /></div>
        <div className='job'>
          <div className='company-tag-wrapper'>
            <div className="company">{companyName}</div>
            <div className='tagWrapper'>
              {newTag && (<div className='newTag'>NEW!</div>)}
              {featuredTag && (<div className='featuredTag'>FEATURED</div>)}
            </div>
          </div>
       
            <div className="position">{position}</div>
                <div className="job-info">
                <p className='postedAt'>{postedAt}</p>
                <p>&#x2022;</p>
                <p className='contract'>{contract}</p>
                <p>&#x2022;</p>
                <p className='location'>{location}</p>
                </div>
        </div>
        <hr className='break-line'/>
        <div className='qualifications'>
            <div className='role'>{role}</div>
            <div className="level">{level}</div>
            {languages.map((language)=>(
              <div className='language' key={language}>{language}</div>
            ))}
            {tools.map((tool)=>(
              <div className='tool' key={tool}>{tool}</div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Company