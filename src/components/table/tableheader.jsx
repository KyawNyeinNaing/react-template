import React from 'react'
import { Tr, Th } from '../core'

const TableHeader = ({ data }) => {

  return (
    <thead>
      <Tr>
        {
          data?.length > 0 && data?.map((x, i) => (
            <Th key={i} halign='center' valign='middle' className={x?.sp_display ? 'd-none' : ''}>
              <span className={x?.sp_title ? 'dsk-title' : ''}>{x.title}</span>
              {x?.sp_title &&
                <span className="sp-title">{x.sp_title}</span>
              }
            </Th>
          ))
        }
      </Tr>
    </thead>
  )
}

TableHeader.defaultProps = {
  data: []
}

export default TableHeader