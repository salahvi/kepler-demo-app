import { addDataToMap } from "kepler.gl/actions";
import sampleTripData from "../data/sample-trip-data";

export function addData() {
  return dispatch => {
    dispatch(
      addDataToMap({
        // datasets
        datasets: {
          info: {
            label: "Sample Taxi Trips in New York City",
            id: "test_trip_data"
          },
          data: sampleTripData
        },
        // option
        option: {
          centerMap: true,
          readOnly: false
        },
        // config
        config: {
          mapStyle: { styleType: "dark" }
        }
      })
    );
  };
}
