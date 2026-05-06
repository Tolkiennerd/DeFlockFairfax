if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeElements);
} else {
    initializeElements();
}

function initializeElements() {
    initializeDropdown();
    initializeNameInput();
}

function initializeDropdown() {
    const dropdown = getSupervisorsDropdown();
    dropdown.value = "select";
    dropdown.addEventListener('change', (event) => {
        const nameInput = getNameInput();
        const name = nameInput.value;
        const supervisor = event.currentTarget.value;
        populateEmail(name, supervisor);
    });
}

function initializeNameInput() {
    const nameInput = getNameInput();
    nameInput.value = "";
    nameInput.addEventListener('keyup', (event) => {
        const dropdown = getSupervisorsDropdown();
        const name = event.currentTarget.value;
        const supervisor = dropdown.value;
        populateEmail(name, supervisor);
    });
}

const showEmailTemplate = () => {
    const name = getName();
    const supervisor = getSupervisor();
    if (supervisor === "select" || name === "") {
        hideMessage();
        return;
    }

    populateEmail(name, supervisor);
    showMessage();
}

const sendEmail = () => {
    // Get email body.
    const textarea = document.getElementById('email-template');
    let userEditedBody = textarea.value;
    if (!userEditedBody.trim()) {
        alert("The email body cannot be empty.");
        return;
    }
    const finalEncodedBody = userEditedBody.replace(/\n/g, '%0D%0A');

    // Get email subject.
    const subject = "Remove Flock Cameras From Fairfax County";
    const encodedSubject = encodeURIComponent(subject);

    // Get email recipient.
    const supervisor = getSupervisor();
    const emailRecipient = getEmailForSupervisor(supervisor);

    // Open the email client
    const mailtoLink = `mailto:${emailRecipient}?subject=${encodedSubject}&body=${finalEncodedBody}`;
    window.location.href = mailtoLink;
}

const populateEmail = (name, supervisor) => {
    const textarea = document.getElementById('email-template');

    if (supervisor === "select" || name === "") {
        hideMessage();
        return;
    }

    const emailBody = `I request that Fairfax County remove its Flock cameras. Contract 4400012268 with Insight Public Sector should be amended to remove Flock Camera Systems and related Flock Group Inc. goods and services.

Flock cameras are an invasion of civil liberties because they monitor all traffic to uniquely profile each vehicle and create a history of its movements without a warrant.

Across the country, Flock cameras have been used to spy on immigrants, No Kings protesters, police officers' ex-girlfriends, and a Texas woman getting an abortion. False positives from Flock's cameras have resulted in innocent people and families held at gunpoint. Russian hackers have acquired Flock camera footage. ICE uses Flock data. Of all immigration-related Flock searches in Virginia, over half occurred in Fairfax County. Even if FCPD doesn't give ICE this data, ICE can access our neighbors' data from any of the 160+ agencies we share with.

Virginia passed a law regulating Flock cameras, but the Virginia State Crime Commission reported that police departments broke the law. The report didn't say which departments broke the law, and no departments faced consequences for operating Flock cameras illegally.

Other Virginia police departments have removed their Flock cameras. As Charlottesville city council member Michael Payne said, \"It's a huge problem to have a privately-owned company building a national surveillance system of vehicles and vehicle locations.\"

I urge the Board of Supervisors to remove Flock cameras. Thank you for your time and consideration.`;

    let greeting = "";
    let districtText = "";

    // Map supervisor values to emails and greetings
    switch(supervisor) {
        case "smith":
            greeting = "Hello Supervisor Kathy Smith,";
            districtText = "As a Sully District resident,";
            break;
        case "heizer":
            greeting = "Hello Supervisor Rachna Sizemore Heizer,";
            districtText = "As a Braddock District resident,";
            break;
        case "bierman":
            greeting = "Hello Supervisor James Bierman,";
            districtText = "As a Dranesville District resident,";
            break;
        case "lusk":
            greeting = "Hello Supervisor Rodney Lusk,";
            districtText = "As a Franconia District resident,";
            break;
        case "alcorn":
            greeting = "Hello Supervisor Walter Alcorn,";
            districtText = "As a Hunter Mill District resident,";
            break;
        case "jimenez":
            greeting = "Hello Supervisor Andres Jimenez,";
            districtText = "As a Mason District resident,";
            break;
        case "storck":
            greeting = "Hello Supervisor Daniel Storck,";
            districtText = "As a Mount Vernon District resident,";
            break;
        case "palchik":
            greeting = "Hello Supervisor Dalia Palchik,";
            districtText = "As a Providence District resident,";
            break;
        case "herrity":
            greeting = "Hello Supervisor Pat Herrity,";
            districtText = "As a Springfield District resident,";
            break;
        case "mckay":
            greeting = "Hello Chairman Jeffrey McKay,";
            districtText = "As a Fairfax County resident,";
            break;
        case "select":
            hideMessage();
            return;
        default:
            return;
    }    
    textarea.value = `${greeting}\n\n${districtText} ${emailBody}\n\n${name}`;

    const emailRecipient = getEmailForSupervisor(supervisor);
    let fallbackDiv = document.getElementById('fallback-message');
    fallbackDiv.innerHTML = `
        <strong>If this button doesn't open your email client with the above message:</strong><br>
        Copy/paste this message into your email and send it to your District Supervisor at <a href="mailto:${emailRecipient}">${emailRecipient}</a>.
    `;
}

const showMessage = () => {
    const sendMessageDiv = document.getElementById('send-message-div');
    sendMessageDiv.classList.remove("hide");
    sendMessageDiv.classList.add("show");
}

const hideMessage = () => {
    const sendMessageDiv = document.getElementById('send-message-div');
    sendMessageDiv.classList.remove("show");
    sendMessageDiv.classList.add("hide");
}

const getEmailForSupervisor = (supervisor) => {
    switch(supervisor) {
        case "smith": return "sully@fairfaxcounty.gov";
        case "heizer": return "braddock@fairfaxcounty.gov";
        case "bierman": return "dranesville@fairfaxcounty.gov";
        case "lusk": return "franconia@fairfaxcounty.gov";
        case "alcorn": return "huntermill@fairfaxcounty.gov";
        case "jimenez": return "mason@fairfaxcounty.gov";
        case "storck": return "mtvernon@fairfaxcounty.gov";
        case "palchik": return "providence@fairfaxcounty.gov";
        case "herrity": return "springfield@fairfaxcounty.gov";
        case "mckay": return "chairman@fairfaxcounty.gov";
        default: return "";
    }
}

const getName = () => {
    const nameInput = getNameInput();
    const name = nameInput.value.trim();
    return name;
}

const getSupervisor = () => {
    const dropdown = getSupervisorsDropdown();
    const supervisor = dropdown.value;
    return supervisor;
}

const getSupervisorsDropdown = () => {
    const dropdown = document.getElementById('supervisors-dropdown');
    if (!dropdown) {
        console.error('Supervisor dropdown element not found');
        return;
    }
    return dropdown;
}

const getNameInput = () => {
    const nameInput = document.getElementById('email-template-name');
    if (!nameInput) {
        console.error('Name input element not found');
        return;
    }
    return nameInput;
}