import ExploreMore from "./ExploreMore/ExploreMore"
import FlightFilterBar from "./FlightFilterBar/FlightFilterBar"
import { FlightListWrapper } from "./FlightListStyle"
import {useSelector} from 'react-redux'

const FlightList = () => {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <FlightListWrapper theme={theme} className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <FlightFilterBar />
          </div>
          <ExploreMore />
        </div>
      </div>
    </FlightListWrapper>
  )
}

export default FlightList