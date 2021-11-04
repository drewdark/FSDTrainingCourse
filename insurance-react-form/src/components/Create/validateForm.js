export default function validateInfo(values){

    let errors = {}; 
    const phoneRegex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    const postcodeRegex = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

    if(!values.prefix.trim()){
        errors.prefix = "Prefix is a required field.";
    }
    if(!values.firstname.trim()){
        errors.firstname = "First name is a required field.";
    }   
    if(!values.lastname.trim()){
        errors.lastname = "Last name is a required field.";
    }
    if(!values.phone.trim()){
        errors.phone = "Phone is a required field.";
    } else if (!values.phone.trim().match(phoneRegex)){ 
        errors.phone = 'Phone number is not in a valid format.';
    }
    if(!values.addressLine1.trim()){
        errors.addressLine1 = "Address Line 1 is a required field.";
    }
    if(!values.city.trim()){
        errors.city = "City is a required field.";
    }
    if(!values.postcode.trim()){
        errors.postcode = "Postcode is a required field.";
    } else if (!values.postcode.trim().match(postcodeRegex)){ 
        errors.postcode = 'Postcode is not in a valid format.';
    }
    if(values.vehicleType.trim() === '-- None --'){
        errors.vehicleType = "Vehicle Type is a required field.";
    }
    if(values.engineSize.trim() === '-- None --'){
        errors.engineSize = "Engine Size is a required field.";
    }
    if(values.additionalDrivers.trim() === '-- None --'){
        errors.additionalDrivers = "Additional Drivers is a required field.";
    }
    console.log(typeof(values.dateRegistered));
    if(!values.dateRegistered){
        errors.dateRegistered = "Date Registered is a required field.";
    } else if(Date.parse(values.dateRegistered) >= Date.now()){
        errors.dateRegistered = "Date Registered cannot be a future date.";
    }
    if(!values.currentValue.trim()){
        errors.currentValue = "Current Value is a required field.";
    }
    else if(parseInt(values.currentValue) < 0 || parseInt(values.currentValue) > 50000){
        errors.currentValue = "Current Value must be between £0 and £50,000.";
    }
    return errors;
}