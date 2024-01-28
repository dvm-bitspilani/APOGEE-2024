import React from 'react'

const customStyles =  {
    control: (provided, state) => ({
        ...provided,
        minHeight: "2rem",
        backgroundColor: "transparent",
        border: "none",
        borderBottom: state.isFocused ? "none" : "none",
        "&:hover": {
          borderColor: "#9AF0F4",
        },
        outline: "none",
        boxShadow: "none",
        borderRadius: "0px",
        height:"100%",
        width:"100%",
        minWidth:"max-content"

      }),
      indicatorSeparator: () => {},
      valueContainer: (provided) => ({
        ...provided,
        backgroundColor: "transparent",
        paddingLeft: 0,
  
      }),
      valueContainer: (provided) => ({
        ...provided,
        display:"flex",
        maxHeight:"100%",
        overflow:"scroll",
        padding:"0",
        // display:"flex",
        flexDirection:"row-reverse"
      }),
      indicatorsContainer: (provided) => ({
        ...provided,
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "#eee",
        fontSize: "1.5rem",
        fontWeight: 700,
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "white" : "#9AF0F4",
        backgroundColor: state.isSelected ? "transparent" : "transparent",
        fontSize: "1.2rem",
        fontWeight: 500,
        zIndex: 1002,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textShadow:" 0px 0px 14.815px rgba(154, 240, 244, 0.7)",
        fontFamily:"",
        textTransform:"uppercase",
        "&:hover": {
          backgroundColor: "#9AF0F4",
          color: "black",
          cursor:"pointer"
        },
      }),
      menu: (provided) => ({
        ...provided,
        zIndex: 1002,
        backgroundColor: "black",
        color:"#9AF0F4",
        border:"0.1px solid #9AF0F4",
        paddingTop: "0px",
        paddingBottom: "0px",
        // maxHeight:"300%",
        height:"7rem",
        overflow:"scroll",
        textAlign:"center"
      }),
      menuList: (provided) => ({
        ...provided,
        // paddingBottom: "1rem",
        backgroundColor: "transparent",
      }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        color: "white",
        padding: "5px",
      }),
      placeholder: (provided, state) => ({
        ...provided,
        opacity: "1",
        color: "#A9A9A9",
        opacity: state.isFocused ? "0" : "1",
        fontFamily:"Space Grotesk",
        textShadow:"0px 0px 14.815px rgba(183, 255, 255, 1)",
        textTransform:"uppercase",
  fontSize:(window.innerWidth > 1100 ? "12px" : "14px"),
  fontWeight:"700"
      }),
      container: (provided) => ({
        ...provided,
        overflow: "visible",
      }),
      input: (provided) => ({
        ...provided,
        color: "#fff",
        fontSize: "1.5rem",
        fontWeight: 700,
        zIndex: 1002,
        margin: "0",
        paddingTop: "0",
        paddngBottom: "0",
        marginLeft: "2px",
      }),
      noOptionsMessage: (provided) => ({
        ...provided,
        color: "#fff",
        fontSize: "1.2rem",
        paddingLeft: "1rem",
        backgroundColor: "#222222",
        paddingTop: "0px",
        paddingBottom: "0px",
      }),
      multiValue: (provided) => ({
        ...provided,
        color: "#fff",
        fontSize: "1.2rem",
        fontWeight: 700,
        backgroundColor: "transparent",
        border: "1px solid #5db3f1",
        alignItems: "center",
      }),
      multiValueLabel: (provided) => ({
        ...provided,
        color: "#ffffff !important",
        backgroundColor: "transparent",
      }),
      multiValueRemove: (provided) => ({
        ...provided,
        color: "#fff",
        padding: "0",
        paddingLeft: "0",
        marginRight: "3px",
        width: "14px",
        height: "100%",
        "&:hover": {
          backgroundColor: "#5db3f1",
          color: "#000",
        },
      }),
      clearIndicator: (provided) => ({
        ...provided,
        color: "#fff",
        "&:hover": {
          color: "#5db3f1",
        },
      }),
    
    
}

export default customStyles



