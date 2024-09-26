import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Header from './components/Header';
import InputField from './components/InputField';
import SelectField from './components/SelectField';
import RadioButtonField from './components/RadioButtonField';
import ButtonComponent from './components/ButtonComponent';
import TableComponent from './components/TableComponent';
import countryStateData from './data/countriesStates.json';

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('ZIP Code is required'),
  country: Yup.string().required('Country is required'),
  cardNumber: Yup.string().required('Card Number is required'),
  expiration: Yup.string().required('Expiration is required'),
  securityCode: Yup.string().required('Security Code is required'),
  nameOnCard: Yup.string().required('Name on Card is required'),
});

const App: React.FC = () => {
  const [states, setStates] = useState<string[]>([]);

  const handleCountryChange = (country: string, setFieldValue: any) => {
    const selectedCountry = countryStateData.find(c => c.country === country);
    setStates(selectedCountry ? selectedCountry.states : []);
    setFieldValue('state', ''); // Reset state field when country changes
  };

  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    cardNumber: '',
    expiration: '',
    securityCode: '',
    nameOnCard: '',
    paymentMethod: 'Credit Card'
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form Data:', values);
  };

  return (
    <>
      <Header />
      <Container>
        <Row >
          <Col md="7" className="border-end border-right pt-4" >
            <h2>Contact</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >            
              {({ values, setFieldValue }) => (
                <FormikForm>
                  <InputField label="Email Address" name="email" type="email" />
                  <h2>Delivery</h2>
                  <Row form>
                    <Col md={6}>
                      <InputField label="First Name" name="firstName" type="text" />
                    </Col>
                    <Col md={6}>
                      <InputField label="Last Name" name="lastName" type="text" />
                    </Col>
                  </Row>
                  <InputField label="Address" name="address" type="text" />
                  <Row form>
                    <Col md={5}>
                      <InputField label="City" name="city" type="text" />
                    </Col>
                    <Col md={4}>
                      <SelectField
                        label="State"
                        name="state"
                        options={states}
                        disabled={!states.length}
                        onChange={(e) => setFieldValue('state', e.target.value)}
                      />
                    </Col>
                    <Col md={3}>
                      <InputField label="ZIP Code" name="zip" type="text" />
                    </Col>
                  </Row>
                  <SelectField
                    label="Country"
                    name="country"
                    options={countryStateData.map(c => c.country)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFieldValue('country', value);
                      handleCountryChange(value, setFieldValue);
                    }}
                  />
                  <h2>Payment</h2>
                  <p><small className="text-secondary">All transactions are secure and encrypted</small></p>
                  <RadioButtonField label="Credit Card" name="paymentMethod" value="Credit Card" />
                  <InputField label="Card Number" name="cardNumber" type="text" />
                  <Row form>
                    <Col md={6}>
                      <InputField label="Expiration (MM/YY)" name="expiration" type="text" />
                    </Col>
                    <Col md={6}>
                      <InputField label="Security Code" name="securityCode" type="text" />
                    </Col>
                  </Row>
                  <InputField label="Name on Card" name="nameOnCard" type="text" />
                  <ButtonComponent label="COMPLETE ORDER" />
                </FormikForm>
              )}
            </Formik>
          </Col>
          <Col md="5">
            <TableComponent productName="Product Name" price="$229.97" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
