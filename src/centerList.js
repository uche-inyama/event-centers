import React from 'react';
import CenterCard from './centerCard'

const CenterList = ({ centers, deleteCenter }) => {
  const emptyMessage = (
    <p>There are no centers yet in your collection.</p>
  )

  const centerList = (
    <>
      <p>centers list</p>
      <div className="center list">
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
      </div>
    </>
  )
  return (
    <div>
      {centers.length === 0 ? emptyMessage : centerList}
    </div>
  )
}
export default CenterList;