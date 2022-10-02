import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React  from "react";

const Search = (props) => {

  const input = props.input
  const onChangeInput = props.onChangeInput

    return(
 
        <TextField className="search"
            label={'Pesquise pelo nome'}
            variant={'outlined'}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                )
            }}
            style={{
                backgroundColor:"white",
                width: "100vw"
            }}
            value={input}
            onChange={onChangeInput}
        /> 
    )
}

export default Search;