import React from 'react'
import { action } from '@storybook/addon-actions'
import TagFilter from './TagFilter'

export default {
  title: 'TagFilter'
}

export const tagFilter = () => (
  <TagFilter
    tags={['started', 'advanced', 'completed']}
    onCLick={action('onClick')}
  ></TagFilter>
)
