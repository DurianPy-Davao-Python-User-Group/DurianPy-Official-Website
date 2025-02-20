import React from 'react'

interface PartnersProps {
  name: string;
  logo: string;
}

const PartnersMobile = ({ partners }: { partners: PartnersProps[]}) => {
  console.log(partners)
  return (
    <div>PartnersMobile</div>
  )
}

export default PartnersMobile