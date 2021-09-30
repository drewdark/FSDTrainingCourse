function firstname_OC() {
    let firstname = document.getElementById("firstname").value;
    let firstnameLabel = document.getElementById("firstnameLabel");
    !firstname ? firstnameLabel.classList.add("required-label") : firstnameLabel.classList.remove("required-label");
};
function lastname_OC() {
    let lastname = document.getElementById("lastname").value;
    let lastnameLabel = document.getElementById("lastnameLabel");
    !lastname ? lastnameLabel.classList.add("required-label") : lastnameLabel.classList.remove("required-label");
};
function dateOfBirth_OC() {
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let dateOfBirthLabel = document.getElementById("dateOfBirthLabel");
    !dateOfBirth ? dateOfBirthLabel.classList.add("required-label") : dateOfBirthLabel.classList.remove("required-label");
};
function area_OC() {
    let area = document.getElementById("area").value;
    area == "-- None --" ? area = null : null; // Ensuring '-- None --' is a null value
    let areaLabel = document.getElementById("areaLabel");
    !area ? areaLabel.classList.add("required-label") : areaLabel.classList.remove("required-label");
};
function teamName_OC() {
    let teamName = document.getElementById("teamName").value;
    let teamNameLabel = document.getElementById("teamNameLabel");
    !teamName ? teamNameLabel.classList.add("required-label") : teamNameLabel.classList.remove("required-label");
};
function office_OC() {
    let office = document.getElementById("office").value;
    office == "-- None --" ? office = null : null; // Ensuring '-- None --' is a null value
    let officeLabel = document.getElementById("officeLabel");
    !office ? officeLabel.classList.add("required-label") : officeLabel.classList.remove("required-label");
};
function access_OC() {
    let selectedAccesses = document.querySelectorAll("input[id^='accessRequired']:checked"); //Array of selected checkboxes
    let accessLabel = document.getElementById("accessLabel");
    selectedAccesses.length <= 0 ? accessLabel.classList.add("required-label") : accessLabel.classList.remove("required-label");
};

function form_OS() {
    let accesses = [];
    let selectedAccesses = document.querySelectorAll("input[id^='accessRequired']:checked");
    for (let i = 0; i < selectedAccesses.length; i++) {
        accesses.push(selectedAccesses[i].value);

    }
    
    let data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        dateOfBirth: document.getElementById("dateOfBirth").value,
        area: document.getElementById("area").value,
        teamName: document.getElementById("teamName").value,
        office: document.getElementById("office").value,
        access: accesses
    };

    console.log(data);
    
    fetch('https://6144a2a5411c860017d255cc.mockapi.io/employees', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })

    return false;
    /*
    let response = await fetch("https://6144a2a5411c860017d255cc.mockapi.io/employees");
    let json = await response.json;
    console.log(json);
    */
}