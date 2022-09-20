// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import pageInfo from './pageInfo'
import skill from './skill'
import project from './project'
import experience from './experience'
import social from './social'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    project,
    skill,
    experience,
    social,
  ]),
})
