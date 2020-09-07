import React from 'react';
import CenterCard from './centerCard'
import { CenterListWrapper } from './centerListStyle'

const CenterList = ({ centers, deleteCenter }) => {
  const emptyMessage = (
    <p>There are no centers yet in your collection.</p>
  )

  const centerList = (
    <>
      <CenterListWrapper className="center list">
        {centers.map((center, idx) => {
          return (
            <CenterCard
              id={idx}
              center={center}
              key={idx}
              deleteCenter={deleteCenter}
            />
          )
        })}
      </CenterListWrapper>
    </>
  )
  return (
    <div>
      {centers.length === 0 ? emptyMessage : centerList}
    </div>
  )
}
export default CenterList;