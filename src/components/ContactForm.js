import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import Support from "../components/Support"
import ContactInfo from "../components/ContactInfo"
import Error from "../components/Error"

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Please enter your name."),
  company: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255"),
  email: Yup.string()
    .email("Must be a valid email addres")
    .max(255, "Must be shorter than 255")
    .required("Please enter a valid email."),
})

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        //
        // TO DO: Handle Form Submission
        //
        setSubmitting(true)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FormWrapper>
          <div className="formContainer">
            <div>
              <ContactInfo />
            </div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <h2>How can we help you?</h2>
                <div className="halfLabelContainer">
                  <label className="halflabel">
                    Full Name <small>*</small>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.name && errors.name ? "has-error" : null
                      }
                    />
                    <Error touched={touched.name} message={errors.name} />
                  </label>
                  <label className="halflabel">
                    Company
                    <input
                      type="text"
                      name="company"
                      id="company"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company}
                      className={
                        touched.company && errors.company ? "has-error" : null
                      }
                    />
                  </label>
                </div>
                <div className="halfLabelContainer">
                  <label className="halflabel">
                    Email Address <small>*</small>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        touched.email && errors.email ? "has-error" : null
                      }
                    />
                    <Error touched={touched.email} message={errors.email} />
                  </label>
                  <label className="halflabel">
                    Phone Number
                    <input
                      type="tel"
                      name="telephone"
                      id="telephone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                  </label>
                </div>
                <div>
                  <label className="fulllabel">
                    Message
                    <textarea cols="30" rows="5"></textarea>
                  </label>
                </div>
                <div>
                  <label>How did you hear about us?</label>
                  <br />
                  <label className="checkLabel">
                    <input type="checkbox" name="awareness" value="Referral" />
                    Referral
                  </label>
                  <label className="checkLabel">
                    <input
                      type="checkbox"
                      name="awareness"
                      value="Web Search"
                    />
                    Web Search
                  </label>
                  <label className="checkLabel">
                    <input type="checkbox" name="awareness" value="Web Ad" />
                    Web Ad
                  </label>
                  <label className="checkLabel">
                    <input type="checkbox" name="awareness" value="Print Ad" />
                    Print Ad
                  </label>
                  <label className="checkLabel">
                    <input type="checkbox" name="awareness" value="Other" />
                    Other
                  </label>
                </div>
                <div>
                  <button
                    className="button-dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Send Message
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="supportContainer">
            <Support />
          </div>
        </FormWrapper>
      )}
    </Formik>
  )
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem auto;
  .formContainer,
  .contactContainer {
    padding: 2rem;
  }
  .supportContainer {
    display: flex;
    background: linear-gradient(45deg, #21235d, #5dc4b8);
    padding: 1rem 4rem;
  }
  .formContainer {
    h2 {
      font-weight: lighter;
    }
    h6 {
      font-size: 0.7rem;
      font-weight: bold;
    }
  }
  .button-dark {
    font-size: 0.7rem;
    color: var(--mainWhite);
    background-color: var(--primaryColor);
    padding: 0.8rem 1.2rem;
    margin-top: 2rem;
    border-radius: 1px;
    border: 1px solid var(--primaryColor);
    transition: ease 0.3s;
    &:hover {
      text-decoration: none;
      background: none;
      color: var(--primaryColor);
      border-color: var(--primaryColor);
    }
  }
  fieldset {
    padding: 0em 1em 1em 1em;
    width: 70vw;
    margin: 1rem auto;
  }
  form {
    margin: 4rem 0rem;
  }
  .halfLabelContainer {
    display: flex;
    justify-content: space-between;
  }
  .halflabel {
    width: 49%;
    margin-bottom: 0rem;
  }
  .fulllabel {
    width: 100%;
  }
  label {
    font-weight: bold;
    margin: 1em 0;
    color: var(--mainGray);
    textarea,
    select,
    input[type="text"],
    input[type="email"],
    input[type="search"],
    input[type="tel"],
    input[type="url"],
    input[type="password"],
    input[type="color"],
    input[type="file"],
    input[type="color"],
    input[type="number"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"] {
      display: block;
      width: 100%;
      padding: 0.4rem 0.2rem;
    }
  }
  input[type="checkbox"] {
    font-size: 0.7rem;
    margin-right: 0.5rem;
  }
  .checkLabel {
    font-weight: normal;
    margin-top: 0rem;
    margin-right: 1rem;
  }

  textarea,
  select,
  input[type="text"],
  input[type="email"],
  input[type="search"],
  input[type="tel"],
  input[type="url"],
  input[type="password"],
  input[type="color"],
  input[type="file"],
  input[type="color"],
  input[type="number"],
  input[type="range"],
  input[type="date"],
  input[type="month"],
  input[type="week"],
  input[type="time"],
  input[type="datetime"],
  input[type="datetime-local"] {
    margin: 0.2em 0;
    padding: 0.25em 0.4em;
    border: 1px solid #ddd;
    max-width: 100%;
  }
  input[type="search"] {
    box-sizing: border-box;
  }
  input[type="file"] {
    border-width: 0;
    padding: 0;
  }

  input[type="image"] {
    vertical-align: bottom;
  }
  @media (max-width: 973px) {
    fieldset {
      width: 80vw;
    }
  }
  @media (max-width: 666px) {
    .halfLabelContainer {
      flex-direction: column;
    }
    .halflabel {
      width: 100%;
    }
    fieldset {
      width: 80vw;
    }
  }
`

export default ContactForm
