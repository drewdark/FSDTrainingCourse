import { useState, useEffect } from 'react'
import axios from 'axios';

const useForm = (validate) => {


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
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [quote, setQuote] = useState('');

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
                const endpointURL = `http://localhost:8080/requests`;
                axios.post(endpointURL, values)
                    .then(response => setQuote(response.data.quote))
                    .then(setOpenSuccess(true))
                    .catch(err => console.log(err));


            }
            else if (isSubmitting) {
                setOpenError(true);
            }
        },
        [errors]
    );



    return { handleChange, values, handleSubmit, errors, openError, setOpenError, openSuccess, setOpenSuccess, quote };
}

export default useForm;