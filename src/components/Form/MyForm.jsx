import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Select from 'react-select';
import styles from "../../styles/Register.module.scss"
import citiesData from '../Form/states.json';
// import customStyles from "../../components/Form/customStyles"
import customStyles1 from "../../components/Form/customStyles1";
import customStyles from "../../components/Form/customStyles";
import statesData from '../Form/states.json';
const MyForm = () => {
  const [interestOptions, setInterestOptions] = useState(['']);
  const [eventsOptions, setEventsOptions] = useState(['']);
  const [collegeOptions, setCollegeOptions] = useState(['']);
  const [stateOptions, setStateOptions] = useState([]);
  const [succesfulRegistration, setSuccessfullRegistration] = useState(0);
  const [selectedState, setSelectedState] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [displayTest, setDisplayText]=useState('');
  useEffect(() => {
    axios.get('https://bits-apogee.org/2024/main/registrations/get_event_categories')
      .then(response => {
        setInterestOptions(response.data)
      })
        
      .catch(error => console.error('Error fetching interests:', error));
      
    axios.get('https://bits-apogee.org/2024/main/registrations/get_event')
      .then(response => setEventsOptions(response.data))
      .catch(error => console.error('Error fetching events:', error));
    axios.get('https://bits-apogee.org/2024/main/registrations/get_college')
      .then(response => setCollegeOptions(response.data))
      .catch(error => console.error('Error fetching colleges:', error));
      // setSuccessfullRegistration(false)
  }, []);

  // console.log(interestOptions.data)
  // console.log(eventsOptions)
  // console.log(collegeOptions)

  const initialValues = {
    name: '',
    email_id: '',
    phone: '',
    gender: '',
    interests: [],
    events: [],
    college_id: '',
    year: [],
    city: '',
    state:''
  };

  const [formData, setFormData] = useState(initialValues)
  // console.log(formData)

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email_id: Yup.string().email("Please enter a valid email").required("Please enter your email"),
    phone: Yup.string().required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    // interests: Yup.array().min(1, 'Select at least one interest'),
    // events: Yup.array().min(1, 'Select at least one event'),
    college_id: Yup.string().required('College is required'),
    // year: Yup.string().required("Year of Study is required"),
    state:Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
  });

  function handleNumericInput(event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    event.target.value = inputValue;
  }

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Register button clicked");
    try {
      const interestsIds = values.interests.map(interest => interest.value);
      const eventsIds = values.events.map(event => event.value);
console.log(interestsIds)
      // Create a new object with IDs
      const submitValues = {
        ...values,
        interests: interestsIds,
        events: eventsIds,
      };
    console.log('Form Values:',submitValues);

    const response = await axios.post(
      'https://bits-apogee.org/2024/main/registrations/Register/',submitValues);
      // console.log('Form Values:', values);
      // console.log(submitValues)
      // const response = await axios.post('https://bits-apogee.org/2024/main/registrations/Register/', submitValues);
      if (response) {
        console.log(response)
        console.log('Data sent successfully!');
        setSuccessfullRegistration(1);
      } else {
        console.error('Error submitting the form. Server response:', response);
        // setSuccessfullRegistration(true);
      }
    } catch (error) {
      console.error('Error submitting the form:', error.response.data.message);
      setSuccessfullRegistration(2);
      setDisplayText(error.response.data.message)
    } finally {
    }
  };

  const genderOptions = [
    { value: "M", label: "MALE", label1: "M" },
    { value: "F", label: "FEMALE", label1: "F" },
    { value: "O", label: "OTHER", label1: "O" },
  ];


  // const collegeOptions = [
  //   { value: 'college1', label: 'College 1' },
  //   { value: 'college2', label: 'College 2' },
  //   // Add more colleges as needed
  // ];

  const yearOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];
  useEffect(() => {
    const allStates = statesData.map(state => ({
      value: state.name,
      label: state.name,
    }));
    setStateOptions(allStates);
  }, []);
  useEffect(() => {
    const selectedStateCities = citiesData
      .find(state => state.name === selectedState)
      ?.cities.map(city => ({
        value: city.name,
        label: city.name,
      })) || [];
    setCityOptions(selectedStateCities);
  }, [selectedState]);

  // const allCities = citiesData.map(state => state.cities).flat();
  // const cityOptions = allCities.map(city => ({
  //   value: city.name,
  //   label: city.name,
  // }));

  // const handleStateChange = (selectedOption) => {
  //   const newState = selectedOption ? selectedOption.value : '';
  //   setFieldValue('state', newState);
  //   setSelectedState(newState);
  //   setFieldValue('city', ''); // Clear the city when the state changes
    
  // };
  // const customStyles = {  };
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
      setWindowHeight(typeof window !== 'undefined' ? window.innerHeight : 0);
    };

    // Initial call to set styles based on initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
        minWidth:"max-content",
        maxWidth: "100%",
        width: "100%",
        minWidth: "100%",
  display: "flex",
  justifyContent: "space-around"
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
        flexDirection:"row-reverse",
        maxWidth:"90%"
      }),
      ValueContainer2: (provided) => ({
        ...provided,
        maxWidth:"75% !important"
      }),
      indicatorsContainer: (provided) => ({
        ...provided,
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "#eee",
        fontSize: "1.1rem",
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
        // height:"300%",
        height:"7rem",
        overflow:"scroll",
        textAlign:"center",
        // paddingBottom:"10rem"
        // marginTop:"-50%",
      }),
      menuList: (provided) => ({
        ...provided,
        // paddingBottom: "1rem",
        backgroundColor: "transparent",
        height:"7rem",
        overflowY:"scroll",
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
        textShadow:"0px 0px 4.815px rgba(183, 255, 255, 0.8)",
        textTransform:"uppercase",
  fontSize:(windowWidth > 1100 ? "16px" : "14px"),
  fontWeight:"500"
      }),
      container: (provided) => ({
        ...provided,
        overflow: "visible",
        maxHeight:"20%"
      }),
      input: (provided) => ({
        ...provided,
        color: "#fff",
        fontSize: "1.1rem",
        fontFamily:"Space Grotesk",
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
      errorMessage:(provided)=>({
        ...provided,
        position:"absolute",
      })
    
}
  const customStyles3 =  {
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
        minWidth:"max-content",
        maxWidth: "100%",
        width: "100%",
        minWidth: "100%",
  display: "flex",
  justifyContent: "space-around",
        cursor: state.isDisabled ? "none" : "none",
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
        flexDirection:"row-reverse",
        maxWidth:"90%"
      }),
      ValueContainer2: (provided) => ({
        ...provided,
        maxWidth:"75% !important"
      }),
      indicatorsContainer: (provided) => ({
        ...provided,
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "#eee",
        fontSize: "1.1rem",
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
        // height:"300%",
        height:"7rem",
        overflow:"scroll",
        textAlign:"center",
        // paddingBottom:"10rem"
        marginTop:"-50%",
      }),
      menuList: (provided) => ({
        ...provided,
        // paddingBottom: "1rem",
        backgroundColor: "transparent",
        height:"7rem",
        overflowY:"scroll",
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
        textShadow:"0px 0px 4.815px rgba(183, 255, 255, 0.8)",
        textTransform:"uppercase",
  fontSize:(windowWidth > 1100 ? "16px" : "14px"),
  fontWeight:"500"
      }),
      container: (provided) => ({
        ...provided,
        overflow: "visible",
      }),
      input: (provided) => ({
        ...provided,
        color: "#fff",
        fontSize: "1.1rem",
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
const customStyles1 =  {
    
  control: (provided, state) => ({
      ...provided,
      minHeight: "2rem",
      // height: "2rem",
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

    }),
    indicatorSeparator: () => {},
    valueContainer: (provided) => ({
      ...provided,
      // height: "1.8rem",
      backgroundColor: "transparent",
      paddingLeft: 0,

    }),
    valueContainer: (provided) => ({
      ...provided,
      // height: "1.8rem",
      // backgroundColor: "transparent",
      // paddingLeft: 0,
      display:"flex",
      maxHeight:"100%",
      overflow:"scroll",
      padding:"0",
      // display:"flex",
      // flexDirection:"row-reverse"
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      // height: "1.8rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#eee",
      fontSize: "1.1rem",
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
      // maxHeight:"200%",
      overflow:"scroll",
      textAlign:"center",
      // position:"relative",
      // zIndex:"10000000"
      height:"5rem",
      marginTop:"-37%"
    }),
    menuList: (provided) => ({
      ...provided,
      // paddingTop: "1rem",
      paddingBottom: "1rem",
      backgroundColor: "transparent",
      overflow:"scroll",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "white",
      padding: "5px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      // fontSize: "1.2rem",
      color: "#A9A9A9",
      opacity: state.isFocused ? "0" : "1",
      fontFamily:"Space Grotesk",
      textShadow:"0px 0px 4.815px rgba(183, 255, 255, 0.8)",
      textTransform:"uppercase",
      position:"absolute",
      fontSize:(windowWidth > 1150 ? "16px" : "14px"),
      fontWeight:"500"
    }),
    container: (provided) => ({
      ...provided,
      overflow: "visible",
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
      fontSize: "1.1rem",
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
      // paddingLeft: ".25rem",
      alignItems: "center",
      // paddingRight: "3px",
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
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          // <Form>
          <Form className={styles.formContainer}>
            <div className={styles.leftSide}>
              <div className={styles.name}>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <img draggable={false} src="/images/name.svg" alt="" />
                <img
                  draggable={false}
                  src="/images/circularEnd.png"
                  alt=""
                  style={{
                    width: "5%",
                    position: "absolute",
                    right: "-3%",
                    bottom: "-11%",
                  }}
                />
                <label htmlFor="name">NAME</label>
                <ErrorMessage name="name" component="div" className={styles.errorMessage}/>
              </div>

              <div className={styles.email}>
                <Field type="email" id="email_id" name="email_id" placeholder="Your Email" />
                <img src="/images/email.svg" alt="" />
                <img src="/images/circularEnd.png" alt="" style={{
                  "width": "5%",
                  "position": "absolute",
                  "right": "-3%",
                  "bottom": "-16%"
                }} />
                <label htmlFor="email_id">EMAIL ID</label>
                <ErrorMessage name="email_id" component="div" className={styles.errorMessage}/>
              </div>

              <div className={styles.phone}>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  maxLength="10"
                  placeholder="Your Phone No"
                  onInput={(e) => handleNumericInput(e)}
                />
                <img src="/images/phone.svg" alt="" />
                <img src="/images/circularEnd.png" alt="" style={{
                  "width": "5%",
                  "position": "absolute",
                  "right": "-3%",
                  "bottom": "12%"
                }} />
                <label htmlFor="phone">PHONE</label>
                <ErrorMessage name="phone" component="div" className={styles.errorMessage}/>
              </div>

              <div className={styles.gender}>
                <div className={styles.checkboxContainer}>
                  {genderOptions.map((option) => (
                    <div key={option.value} className={styles.checkboxItem}>
                      <div
                        className={`${styles.customCheckbox} ${
                          values.gender === option.value ? styles.checked : ""
                        }`}
                        onClick={() => {
                          setFieldValue("gender", option.value);
                        }}
                      >
                        {values.gender === option.value && (
                          <div className={styles.checkmark}>&#10003;</div>
                        )}
                      </div>
                      <label
                        htmlFor={`gender-${option.value}`}
                        className={styles.genderLabel}
                      >
                        {/* {option.label} */}
                        {window.innerWidth > 1200
                          ? option.label
                          : option.label1}
                      </label>
                    </div>
                  ))}
                </div>
                <img src="/images/gender.svg" alt="" />
                <img src="/images/circularEnd.png" alt="" style={{
                  "width": "5%",
                  "position": "absolute",
                  "right": "-3%",
                  "top": "-14%"
                }} />
                <label htmlFor="gender">GENDER</label>
                <ErrorMessage name="gender" component="div" className={styles.errorMessage}/>
              </div>

              <div className={styles.interests}>
  <Select
    id="interests"
    name="interests"
    options={(Array.isArray(interestOptions.data) ? interestOptions.data : []).map(item => ({
      value: item.id,
      label: item.name
    }))}
    isMulti
    value={values.interests || []}  // Updated
    onChange={(selectedOptions) => {
      setFieldValue('interests', selectedOptions || []);
    }}
    className={styles.interestsWrapper}
    styles={customStyles1}
    placeholder="Choose Interests"
  />
  <img src="/images/interests.svg" alt="" />
  <img src="/images/circularEnd.png" alt="" style={{
    "width": "5%",
    "position": "absolute",
    "right": "-3%",
    "top": "-10%"
  }} />
  <label htmlFor="interests">Interests</label>
  <ErrorMessage name="interests" component="div" className={styles.errorMessage}/>
</div>

            </div>
            <div className={styles.rightSide}>
              <div className={styles.events}>
                <Select
                  id="events"
                  name="events"
                  options={(Array.isArray(eventsOptions.data)
                    ? eventsOptions.data
                    : []
                  ).map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                  isMulti
                  value={values.events || []}  // Updated
                  onChange={(selectedOptions) => {
                    setFieldValue('events', selectedOptions || []);
                  }}
                  className={styles.eventsWrapper}
                  styles={customStyles}
                  placeholder="Choose Events"
                />
                <img draggable={false} src="/images/events.svg" alt="" />
                <img
                  draggable={false}
                  src="/images/circularEnd.png"
                  alt=""
                  style={{
                    width: "5%",
                    position: "absolute",
                    left: "-2%",
                    bottom: "-13%",
                  }}
                />
                <label htmlFor="events">Events</label>
                <ErrorMessage name="events" component="div" className={styles.errorMessage}/>
              </div>

              <div className={styles.colleges}>
                <Select
                  id="college_id"
                  name="college_id"
                  options={(Array.isArray(collegeOptions.data) ? collegeOptions.data : []).map(item => ({
                    value: item.id,
                    label: item.name,
                  }))}
                  value={(Array.isArray(collegeOptions)
                    ? collegeOptions
                    : []
                  ).find((option) => option.value === values.college)}
                  onChange={(selectedOption) => {
                    setFieldValue('college_id', selectedOption ? selectedOption.value : '');
                  }}
                  className={styles.collegeWrapper}
                  styles={customStyles}
                  placeholder="Choose Your College"
                />
                <img src="/images/college.svg" alt="" />
                <img src="/images/circularEnd.png" alt="" style={{
                  "width": "5%",
                  "position": "absolute",
                  "left": "-2%",
                  "bottom": "-20%"
                }} />
                <label htmlFor="college_id">College</label>
                <ErrorMessage name="college_id" component="div" className={styles.errorMessage}/>
              </div>

              <div className={styles.year}>
                {/* <label>Year of Study</label>
            {yearOptions.map(option => (
              <div key={option.value}>
                <Field
                  type="radio"
                  id={`year-${option.value}`}
                  name="year"
                  value={option.value}
                  checked={values.year === option.value}
                  onChange={() => {
                    setFieldValue('year', option.value);
                  }}
                />
                <label htmlFor={`year-${option.value}`}>{option.label}</label>
              </div>
            ))} */}
                <div className={styles.checkboxContainer}>
                  {yearOptions.map(option => (
                    <div key={option.value} className={styles.checkboxItem}>
                      <div
                        className={`${styles.customCheckbox} ${values.year === option.value ? styles.checked : ''}`}
                        onClick={() => {
                          setFieldValue('year', option.value);
                        }}
                      >
                        {values.year === option.value && <div className={styles.checkmark}>&#10003;</div>}
                      </div>
                      <label htmlFor={`year-${option.value}`} className={styles.yearLabel}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                <img src="/images/year.svg" alt="" />
                <img src="/images/circularEnd.png" alt="" style={{
                  "width": "5%",
                  "position": "absolute",
                  "left": "-1%",
                  "top": "-23%"
                }} />
                <label>Year of Study</label>
                <ErrorMessage name="year" component="div" className={styles.errorMessage}/>
              </div>
              <div className={styles.state}>
              <Select
                id="state"
                name="state"
                options={stateOptions}
                value={stateOptions.find(option => option.value === values.state)}
                onChange={(selectedOption) => {
                  setFieldValue('state', selectedOption ? selectedOption.value : '');
                  setFieldValue('city', ''); // Clear the city when the state changes
                  setSelectedState(selectedOption ? selectedOption.value : '');
                }}
                className={styles.stateWrapper}
                styles={customStyles}
                placeholder="Your State"
              // />
              //  value={stateOptions.find(option => option.value === values.state)}
              //    onChange={(selectedOption) => handleStateChange(selectedOption)}
              //    className={styles.stateWrapper}
              //    styles={customStyles}
              //    placeholder="Your State"
               />
              <img src="/images/state.svg" alt="" />
              <img
                src="/images/circularEnd.png"
                alt=""
                style={{
                  "width": "5%",
                  "position": "absolute",
                  "left": "-2%",
                  "top": "-12%"
                }}
              />
              <label htmlFor="state">State</label>
              <ErrorMessage name="state" component="div" className={styles.errorMessage}/>
            </div>
              <div className={styles.city}>
                {/* <Select
              id="city"
              name="city"
              options={cityOptions}
              value={cityOptions.find(option => option.value === values.city)}
              onChange={(selectedOption) => {
                setFieldValue('city', selectedOption ? selectedOption.value : '');
              }}
            /> */}
                <Select
                  id="city"
                  name="city"
                  options={cityOptions}
                //   value={cityOptions.find(option => option.value === values.city)}
                //   onChange={(selectedOption) => {
                //     setFieldValue('city', selectedOption ? selectedOption.value : '');
                //   }}
                //   className={styles.cityWrapper}
                //   styles={customStyles}
                //   placeholder="Your City"
                // />
                value={cityOptions.find(option => option.value === values.city)}
                onChange={(selectedOption) => {
                  setFieldValue('city', selectedOption ? selectedOption.value : '');
                }}
                isDisabled={!selectedState} // Disable city selection if no state is selected
                className={styles.cityWrapper}
                styles={customStyles3}
                placeholder="Your City"
              />
                <img src="/images/city.svg" alt="" />
                <img src="/images/circularEnd.png" alt="" style={{
                  "width": "5%",
                  "position": "absolute",
                  "left": "-2%",
                  "top": "-9%"
                }} />
                <ErrorMessage name="city" component="div"  className={styles.errorMessage}/>
                <label htmlFor="city">City</label>
              </div>
            </div>
{/* {!succesfulRegistration ? (
            <div>
                <button type='submit' className={styles.registerBtn}
                disabled={isSubmitting}
                >
                  <span>REGISTER</span>
                </button>
  </div>
): (
  <span className={styles.successText}>A verification mail has been sent to your email id.</span>
  )} */}
  {
  (() => {
    switch (true) {
      case succesfulRegistration===0:
        return (
          <div>
            <button
              type='submit'
              className={styles.registerBtn}
              disabled={isSubmitting}
            >
              <span>REGISTER</span>
            </button>
          </div>
        );
        case succesfulRegistration===1:
        return (
          <span className={styles.successText}>
            A verification mail has been sent to your email id.
          </span>
        );
        case succesfulRegistration===2:
        return (
          <span className={styles.successText}>
            {displayTest}
          </span>
        );
    }
  })()
}
            {/* <div className={styles.mobileForm}>
            
          </div> */}
            {/* <button type="submit">Submit</button> */}
          </Form>
          // </Form>
        )}
      </Formik>
    </>
  );
};

export default MyForm;