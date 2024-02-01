import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "react-select";
import styles from "../../styles/Register2.module.scss";
import citiesData from "../Form/states.json";
import customStyles from "../../components/Form/customStyles";
import customStyles1 from "../../components/Form/customStyles1";
import customStyles2 from "../../components/Form/customStyles2";
import statesData from "../Form/states.json";
const MyForm2 = () => {
  const [stateOptions, setStateOptions] = useState([]);
  const [succesfulRegistration, setSuccessfullRegistration] = useState(0);
  const [selectedState, setSelectedState] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [displayTest, setDisplayText]=useState('');

  const [isCityDisabled, setCityDisabled] = useState(true);
  const initialValues = {
    name: "",
    email_id: "",
    phone: "",
    gender: "",
    interests: [],
    events: [],
    college_id: "",
    year: [],
    city: "",
    state:""
  };
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
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email_id: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    phone: Yup.string().required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    // interests: Yup.array().min(1, "Select at least one interest"),
    // events: Yup.array().min(1, "Select at least one event"),
    college_id: Yup.string().required("College is required"),
    year: Yup.string()
      .required("Please select your year of study")
      .oneOf(["1", "2", "3", "4", "5"], "Invalid Year of Study"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
  });

  function handleNumericInput(event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    event.target.value = inputValue;
  }

  // const handleSubmit = async (values, { resetForm, setSubmitting }) => {
  //   try {
  //     await axios.post('your-api-endpoint', values);
  //     console.log('Data sent successfully!');
  //     resetForm();
  //   } catch (error) {
  //     console.error('Error submitting the form:', error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const genderOptions = [
    { value: "M", label: "MALE", label1:"M" },
    { value: "F", label: "FEMALE", label1:"F" },
    { value: "O", label: "OTHER", label1:"O"},
  ];
  const [interestOptions, setInterestOptions] = useState([""]);
  const [eventsOptions, setEventsOptions] = useState([""]);
  const [collegeOptions, setCollegeOptions] = useState([""]);
  // const [stateOptions, setStateOptions] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://bits-apogee.org/2024/main/registrations/get_event_categories"
      )
      .then((response) => setInterestOptions(response.data))
      .catch((error) => console.error("Error fetching interests:", error));
    axios
      .get("https://bits-apogee.org/2024/main/registrations/get_event")
      .then((response) => setEventsOptions(response.data))
      .catch((error) => console.error("Error fetching events:", error));
    axios
      .get("https://bits-apogee.org/2024/main/registrations/get_college")
      .then((response) => setCollegeOptions(response.data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);
  const yearOfStudyOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  const allCities = citiesData.map((state) => state.cities).flat();
  // const cityOptions = allCities.map((city) => ({
  //   value: city.name,
  //   label: city.name,
  // }));
  const handleSubmit = async (values, { resetForm }) => {
    console.log('Register button clicked')
    try {
      const interestsIds = (values.interests || []).map(interest => interest.value);
      const eventsIds = (values.events || []).map(event => event.value);
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
  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className={styles.mobileForm}>
          <div className={styles.formWrapper}>
            <div className={styles.mobileName}>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
              <img src="/images/phone.png" alt="" />
              <label htmlFor="name">NAME</label>
              <ErrorMessage name="name" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.mobileEmail}>
              <Field
                type="email"
                id="email_id"
                name="email_id"
                placeholder="Your Email"
              />
              <img src="/images/phone.png" alt="" />
              <label htmlFor="email_id">EMAIL ID</label>
              <ErrorMessage name="email_id" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.mobilePhone}>
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Phone No"
                onInput={(e) => handleNumericInput(e)}
                maxLength="10"
              />
              <img src="/images/phone.png" alt="" />
              <label htmlFor="phone">PHONE</label>
              <ErrorMessage name="phone" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.mobileGender}>
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
                      {window.innerWidth > 360 ? option.label : option.label1}
                    </label>
                  </div>
                ))}
              </div>
              <img src="/images/phone.png" alt="" />
              <label htmlFor="gender">GENDER</label>
              <ErrorMessage name="gender" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.mobileInterests}>
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
                className={styles.mobileInterestsWrapper}
                styles={customStyles1}
                placeholder="Choose Interests"
              />
              <img src="/images/phone.png" alt="" />
              <label htmlFor="interests">Interests</label>
              <ErrorMessage name="interests" component="div" className={styles.errorMessage}/>
            </div>
            <div className={styles.mobileEvents}>
              <Select
                id="events"
                name="events"
                options={(Array.isArray(eventsOptions.data) ? eventsOptions.data : []).map(item => ({
                  value: item.id,
                  label: item.name
                }))}
                isMulti
                value={values.events || []}  // Updated
                onChange={(selectedOptions) => {
                  setFieldValue('events', selectedOptions || []);
                }}
                className={styles.mobileEventsWrapper}
                styles={customStyles1}
                placeholder="Choose Events"
              />
              <img src="/images/phone.png" alt="" />
              <label htmlFor="events">Events</label>
              <ErrorMessage name="interests" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.mobileColleges}>
              <Select
                id="college_id"
                name="college_id"
                options={(Array.isArray(collegeOptions.data)
                  ? collegeOptions.data
                  : []
                ).map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                value={(Array.isArray(collegeOptions)
                  ? collegeOptions
                  : []
                ).find((option) => option.value === values.college)}
                onChange={(selectedOption) => {
                  setFieldValue(
                    "college_id",
                    selectedOption ? selectedOption.value : ""
                  );
                }}
                className={styles.mobileCollegeWrapper}
                styles={customStyles1}
                placeholder="Choose Your College"
              />
              <img src="/images/phone.png" alt="" />
              <label htmlFor="college_id">College</label>
              <ErrorMessage name="college_id" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.mobileYear}>
              <div className={styles.checkboxContainer}>
                {yearOfStudyOptions.map((option) => (
                  <div key={option.value} className={styles.checkboxItem}>
                    <div
                      className={`${styles.customCheckbox} ${
                        values.year === option.value
                          ? styles.checked
                          : ""
                      }`}
                      onClick={() => {
                        setFieldValue("year", option.value);
                      }}
                    >
                      {values.year === option.value && (
                        <div className={styles.checkmark}>&#10003;</div>
                      )}
                    </div>
                    <label
                      htmlFor={`year-${option.value}`}
                      className={styles.yearLabel}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              <img src="/images/phone.png" alt="" />
              <label htmlFor="year">Year of Study</label>
            </div>
            <div className={styles.mobileState}>
              <Select
                id="state"
                name="state"
              //   options={stateOptions}
              //   value={stateOptions.find(
              //     (option) => option.value === values.state
              //   )}
              //   onChange={(selectedOption) => {
              //     setFieldValue(
              //       "state",
              //       selectedOption ? selectedOption.value : ""
              //     );
              //     setFieldValue("city", ""); // Clear the city when the state changes
              //   }}
              //   className={styles.stateWrapper}
              //   styles={customStyles2}
              //   placeholder="Your State"
              // />
              // options={stateOptions}
              //   value={stateOptions.find(
              //     (option) => option.value === values.state
              //   )}
              //   onChange={(selectedOption) => {
              //     setFieldValue("state", selectedOption ? selectedOption.value : "");
              //     setFieldValue("city", ""); // Clear the city when the state changes
              //     setCityDisabled(!selectedOption); // Disable city field if no state is selected
              //   }}
              options={stateOptions}
              value={stateOptions.find(option => option.value === values.state)}
              onChange={(selectedOption) => {
                setFieldValue('state', selectedOption ? selectedOption.value : '');
                setFieldValue('city', ''); // Clear the city when the state changes
                setSelectedState(selectedOption ? selectedOption.value : '');
              }}
                className={styles.stateWrapper}
                styles={customStyles2}
                placeholder="Your State"
              />
              <img src="/images/phone.png" alt="" />
              <label htmlFor="state">State</label>
              <ErrorMessage name="state" component="div" className={styles.errorMessage}/>
            </div>
            <div className={styles.mobileCity}>
              <Select
                id="city"
                name="city"
                options={cityOptions}
              //   options={cityOptions}
              //   value={cityOptions.find(
              //     (option) => option.value === values.city
              //   )}
              //   onChange={(selectedOption) => {
              //     setFieldValue(
              //       "city",
              //       selectedOption ? selectedOption.value : ""
              //     );
              //   }}
              //   className={styles.mobileCityWrapper}
              //   styles={customStyles2}
              //   placeholder="Your City"
              // />
              value={cityOptions.find(option => option.value === values.city)}
              onChange={(selectedOption) => {
                setFieldValue('city', selectedOption ? selectedOption.value : '');
              }}
              isDisabled={!values.state}
                className={styles.mobileCityWrapper}
                styles={customStyles2}
                placeholder="Your City"
              />
              <img src="/images/phone.png" alt="" />
              <label htmlFor="city">City</label>
              <ErrorMessage name="city" component="div" className={styles.errorMessage}/>
            </div>
          </div>
          {
  (() => {
    switch (true) {
      case succesfulRegistration===0:
        return (
          // <div>
            <button
              type="submit"
              className={styles.registerBtn}
              disabled={isSubmitting}
            >
              <span>REGISTER</span>
            </button>
          // </div>
        );
        case succesfulRegistration===1:
        return (
          <span className={styles.successText}  style={{
            fontSize: windowWidth<400 ? "12px" : (windowWidth<500?"13px":"16px")
          }}>
            A verification mail has been sent to your email id.
          </span>
        );
        case succesfulRegistration===2:
        return (
          <span className={styles.successText}>
            {displayTest}
            
          </span>
        );
        default: return null;
    }
  })()
}

          </Form>
      )}
    </Formik>
          </>
    // </>s
  );
};

export default MyForm2;
