export default function validateInfo(values){

    let errors = {};

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
    }
    if(!values.addressLine1.trim()){
        errors.addressLine1 = "Address Line 1 is a required field.";
    }
    if(!values.city.trim()){
        errors.city = "City is a required field.";
    }
    if(!values.postcode.trim()){
        errors.postcode = "Postcode is a required field.";
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
    if(!values.dateRegistered){
        errors.dateRegistered = "Date Registered is a required field.";
    }
    if(!values.currentValue.trim()){
        errors.currentValue = "Current Value is a required field.";
    }
    return errors;
}