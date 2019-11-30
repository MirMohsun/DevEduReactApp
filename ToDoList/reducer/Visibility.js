import { VisibilityFilters } from '../actions/actions'

const TurtleVisibilityFilter = (state = VisibilityFilters.Show_all, action) => {
  switch (action.type) {
    case 'Set_Visibility':
      return action.filter
    default:
      return state
  }
}

export default TurtleVisibilityFilter