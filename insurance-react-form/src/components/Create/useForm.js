import { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

const useForm = (validate) => {

    
  let history = useHistory();

    const [values, setValues] = useState({
        prefix: '',
        firstname: '',
        lastname: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postcode: '',
        vehicleType: '-- None --',
        engineSize: '-- None --',
        additionalDrivers: '-- None --',
        commercialPurposes: false,
        usedOutsideState: false,
        dateRegistered: null,
        currentValue: '',
        comments: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        if (e.target.name === 'commercialPurposes' || e.target.name === 'usedOutsideState') {
            setValues({
                ...values,
                [e.target.name]: e.target.checked
            })
        }
        else {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                const endpointURL = "https://615d6dee12571a001720760b.mockapi.io/car-insurance";
                axios.post(endpointURL, values)
                    .then(() => history.push("/"))
                    .catch(err => console.log(err));
            }
        },
        [errors]
    );



    return { handleChange, values, handleSubmit, errors };
}

export default useForm;