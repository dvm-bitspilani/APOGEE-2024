// MyForm.js
import React, {useState, useEffect} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Select from 'react-select';
import styles from "../../styles/Register2.module.scss"
import citiesData from '../Form/states.json';
const MyForm2 = () => {
  // const [interestOptions, setInterestOptions] = useState([]);
  // const [eventsOptions, setEventsOptions] = useState([]);
  // const [collegeOptions, setCollegeOptions] = useState([]);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    interests: [],
    events: [],
    college: '',
    yearOfStudy: [],
    city: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
    phone: Yup.string().required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    interests: Yup.array().min(1, 'Select at least one interest'),
    events: Yup.array().min(1, 'Select at least one event'),
    college: Yup.string().required('College is required'),
    yearOfStudy:Yup.string().required("Please select your year of study").oneOf(['1', '2', '3', '4', '5'], 'Invalid Year of Study'),
    city: Yup.string().required('City is required'),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await axios.post('your-api-endpoint', values);
      console.log('Data sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const genderOptions = [
    { value: 'male', label: 'MALE' },
    { value: 'female', label: 'FEMALE' },
    { value: 'other', label: 'OTHER' },
  ];

  const interestOptions = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'reading', label: 'Reading' },
    // Add more interests as needed
  ];

  const eventsOptions = [
    { value: 'event1', label: 'Event 1' },
    { value: 'event2', label: 'Event 2' },
    // Add more events as needed
  ];

  const collegeOptions = [
    { value: 'college1', label: 'College 1' },
    { value: 'college2', label: 'College 2' },
    // Add more colleges as needed
  ];
  // useEffect(() => {
  //   axios.get('http://localhost:1369/registrations/get_event_categories')
  //     .then(response => setInterestOptions(response.data))
  //     .catch(error => console.error('Error fetching interests:', error));
  //   axios.get('http://localhost:1369/registrations/get_college')
  //     .then(response => setEventsOptions(response.data))
  //     .catch(error => console.error('Error fetching events:', error));
  //   axios.get('http://localhost:1369/registrations/get_event')
  //     .then(response => setCollegeOptions(response.data))
  //     .catch(error => console.error('Error fetching colleges:', error));
  // }, []);
  const yearOfStudyOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];

  const allCities = citiesData.map(state => state.cities).flat();
  const cityOptions = allCities.map(city => ({
    value: city.name,
    label: city.name,
  }));
  const customStyles = {
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
      maxHeight:"500%",
      overflow:"scroll",
    }),
    menuList: (provided) => ({
      ...provided,
      // paddingTop: "1rem",
      paddingBottom: "1rem",
      backgroundColor: "transparent",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "white",
      padding: "5px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      // fontSize: "1.2rem",
      opacity: "1",
      color: "#A9A9A9",
      opacity: state.isFocused ? "0" : "1",
      fontFamily:"Space Grotesk",
      textShadow:"0px 0px 14.815px rgba(183, 255, 255, 1)",
      textTransform:"uppercase"

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
      marginRIght: "3px",
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
  
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        // <Form>
        <>
          <div className={styles.formWrapper}>
          <div className={styles.mobileName}>
            <Field type="text" id="name" name="name" placeholder="Your Name"/>
            <img src="/images/phone.png" alt="" />
            <label htmlFor="name">NAME</label>
            {/* <ErrorMessage name="name" component="div" /> */}
          </div>

          <div className={styles.mobileEmail}>
            <Field type="email" id="email" name="email" placeholder="Your Email"/>
            <img src="/images/phone.png" alt="" />
            <label htmlFor="email">EMAIL ID</label>
            {/* <ErrorMessage name="email" component="div" /> */}
          </div>

          <div className={styles.mobilePhone}>
            <Field type="text" id="phone" name="phone" placeholder="Your Phone No"/>
            <img src="/images/phone.png" alt="" />
            <label htmlFor="phone">PHONE</label>
            {/* <ErrorMessage name="phone" component="div" /> */}
          </div>

          <div className={styles.mobileGender}>
            <div className={styles.checkboxContainer}>
          {genderOptions.map(option => (
  <div key={option.value} className={styles.checkboxItem}>
    <div
      className={`${styles.customCheckbox} ${values.gender === option.value ? styles.checked : ''}`}
      onClick={() => {
        setFieldValue('gender', option.value);
      }}
    >
      {values.gender === option.value && <div className={styles.checkmark}>&#10003;</div>}
    </div>
    <label htmlFor={`gender-${option.value}`} className={styles.genderLabel}>
      {option.label}
    </label>
  </div>
))}
        </div>
            <img src="/images/phone.png" alt="" />
              <label htmlFor="gender">GENDER</label>
            <ErrorMessage name="gender" component="div" />
          </div>

          <div className={styles.mobileInterests}>
            <Select
              id="interests"
              name="interests"
              options={interestOptions}
              isMulti
              value={interestOptions.filter(option => values.interests.includes(option.value))}
              onChange={(selectedOptions) => {
                setFieldValue('interests', selectedOptions ? selectedOptions.map((option) => option.value) : []);
              }}
              className={styles.mobileInterestsWrapper}
              styles={customStyles}
              placeholder="Choose Interests"
            />
                        <img src="/images/phone.png" alt="" />
              <label htmlFor="interests">Interests</label>
          </div>
          <div className={styles.mobileEvents}>
            <Select
              id="events"
              name="events"
              options={eventsOptions}
              isMulti
              value={eventsOptions.filter(option => values.events.includes(option.value))}
              onChange={(selectedOptions) => {
                setFieldValue('events', selectedOptions ? selectedOptions.map((option) => option.value) : []);
              }}
              className={styles.mobileEventsWrapper}
              styles={customStyles}
              placeholder="Choose Events"
            />
                                    <img src="/images/phone.png" alt="" />
            <label htmlFor="events">Events</label>
            <ErrorMessage name="events" component="div" />
          </div>

          <div className={styles.mobileColleges}>
            <Select
              id="college"
              name="college"
              options={collegeOptions}
              value={collegeOptions.find(option => option.value === values.college)}
              onChange={(selectedOption) => {
                setFieldValue('college', selectedOption ? selectedOption.value : '');
              }}
              className={styles.mobileCollegeWrapper}
              styles={customStyles}
              placeholder="Choose Your College"
            />
                                                <img src="/images/phone.png" alt="" />
            <label htmlFor="college">College</label>
            <ErrorMessage name="college" component="div" />
          </div>

          <div className={styles.mobileYear}>
  <div className={styles.mobileCheckboxContainer}>
    {yearOfStudyOptions.map(option => (
      <div key={option.value} className={styles.checkboxItem}>
        <div
          className={`${styles.customCheckbox} ${values.yearOfStudy === option.value ? styles.checked : ''}`}
          onClick={() => {
            setFieldValue('yearOfStudy', option.value);
          }}
        >
          {values.yearOfStudy === option.value && <div className={styles.checkmark}>&#10003;</div>}
        </div>
        <label htmlFor={`yearOfStudy-${option.value}`} className={styles.yearLabel}>
          {option.label}
        </label>
      </div>
    ))}
  </div>
  <img src="/images/phone.png" alt="" />
                        <label>Year of Study</label>
          </div>

          <div className={styles.mobileCity}>
            <Select
  id="city"
  name="city"
  options={cityOptions}
  value={cityOptions.find(option => option.value === values.city)}
  onChange={(selectedOption) => {
    setFieldValue('city', selectedOption ? selectedOption.value : '');
  }}
  className={styles.mobileCityWrapper}
  styles={customStyles}
  placeholder="Your City"
/>
<img src="/images/phone.png" alt="" />
            <label htmlFor="city">City</label>
          </div>
          </div>
          </>
      )}
    </Formik>
  );
};

export default MyForm2;
