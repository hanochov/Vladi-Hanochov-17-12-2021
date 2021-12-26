import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import { autocompleteApiActions } from "../../store/autocompleteApi-slice";
import { currenWeatherApiActions } from "../../store/currenWeatherApi-slice";
import { useDispatch } from "react-redux";

const SearchCity = () => {
    const dispatch = useDispatch();
    const cities = useSelector(
        (state) => state.currenWeatherApi.cities
      );
    return (
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        renderInput={(params) => <TextField {...params} label="City" />}
        onChange={(event, newValue) => {
          dispatch(currenWeatherApiActions.setCurrentKey(newValue));
        }}
        onInputChange={(event, newInputValue) => {
          dispatch(autocompleteApiActions.setCurrentInput(newInputValue));
        }}
      />
    );
  };
  
  export default SearchCity;