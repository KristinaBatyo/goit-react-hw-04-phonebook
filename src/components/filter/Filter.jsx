
import PropTypes from "prop-types";
import {FilterText, FilterContainer, FilterInput} from "./Filter.styled"

    export const  Filter = ({onChange, value}) =>{
        return (
            <FilterContainer>
                <FilterText>
            Find contacts by name
                </FilterText>
            <FilterInput type="search" value={value} onChange={onChange}/>
            </FilterContainer>
        )

    }


    Filter.propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
    }