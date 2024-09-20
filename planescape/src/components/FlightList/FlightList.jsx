import ExploreMore from "./ExploreMore/ExploreMore"
import FlightFilterBar from "./FlightFilterBar/FlightFilterBar"
import { FlightListWrapper } from "./FlightListStyle"
import {useSelector} from 'react-redux'
import AdvancedFilters from './AdvancedFilters/AdvancedFilters'
import Flights from "./Flights/Flights"

const FlightList = () => {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <FlightListWrapper theme={theme} className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <FlightFilterBar />
            <div className="row mt-4">
              <Flights />
              <AdvancedFilters />
            </div>
          </div>
          <ExploreMore />
        </div>
      </div>
    </FlightListWrapper>
  )
}

export default FlightList