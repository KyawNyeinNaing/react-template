import React, { useState } from 'react'
import Advertisement from '../ads'
import { adsKey } from '../../key'
import { InputGroup, Input, Label, Button } from '../core'
import { SideBarContainer, SideBarFilter, FilterTitle } from './style/sidebarstyle'
import { RiFilter2Fill } from 'react-icons/ri'

const { side_ads } = adsKey

const Sidebar = props => {
  const { data, handleFilter } = props
  const [state, setState] = useState({
    min: '',
    max: ''
  })

  const handleTextChange = (key, value) => {
    setState({
      ...state,
      [key]: value
    })
  }


  return (
    <SideBarContainer>
      {data?.brandData?.length > 0 &&
        <SideBarFilter>
          <FilterTitle>Brand Filter</FilterTitle>
          {
            data?.brandData.map((x, i) => (
              <InputGroup className="custom-check" key={i}>
                <Input type="checkbox" name="check" id={`brand-check-${i}`} checkbox />
                <Label htmlFor={`brand-check-${i}`}>{x.brand_name}</Label>
              </InputGroup>
            ))
          }
        </SideBarFilter>
      }

      <SideBarFilter price>
        <FilterTitle>Filter by price</FilterTitle>
        <div className="flex">
          <InputGroup>
            <Input type="number" min="1" placeholder="min" value={state?.min} onChange={e => handleTextChange('min', e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Input type="number" min="1" placeholder="max" value={state?.max} onChange={e => handleTextChange('max', e.target.value)} />
          </InputGroup>
          <Button primary onClick={() => handleFilter('price', { min: state.min, max: state.max })}>
            <RiFilter2Fill />
          </Button>
        </div>
      </SideBarFilter>

      {data?.countryData?.length > 0 &&
        <SideBarFilter>
          <FilterTitle>Country of origin</FilterTitle>
          {
            data?.countryData?.map((x, i) => (
              <InputGroup className="custom-check" key={i}>
                <Input type="checkbox" name="check" id={`country-check-${i}`} checkbox />
                <Label htmlFor={`country-check-${i}`}>{x.country_name}</Label>
              </InputGroup>
            ))
          }
        </SideBarFilter>
      }
      <Advertisement position_code={side_ads} />
    </SideBarContainer>
  )
}

export default Sidebar
