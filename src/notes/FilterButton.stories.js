import React from 'react'
import { action } from '@storybook/addon-actions'
import FilterButton from './FilterButton'

export default {
  title: 'FilterButton'
}

export const filterButton = () => (
  <FilterButton
    tags={['started', 'advanced', 'completed']}
    onCLick={action('onClick')}
  ></FilterButton>
)
