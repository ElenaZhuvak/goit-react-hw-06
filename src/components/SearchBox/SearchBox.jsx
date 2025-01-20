import { useDispatch, useSelector } from "react-redux"
import { changeFilter, selectFilter } from "../../redux/filtersSlice"

const SearchBox = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" 
              value={filter} 
              onChange={(event) => dispatch(changeFilter(event.target.value))} />
    
    </div>
  )
}

export default SearchBox