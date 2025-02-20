import React from 'react'

interface PartnersProps { 
  name: string;
  logo: string
}

const PartnersDesktop = ( { partners }: { partners: PartnersProps[]}) => {
  console.log(partners)
  return (
    <div>PartnersDesktop</div>
  )
}

export default PartnersDesktop