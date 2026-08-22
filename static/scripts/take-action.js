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

    const emailBody = `I urge the Board of Supervisors (BOS) to prohibit the procurement, installation, maintenance, and operation of automatic license plate recognition systems (ALPRs), terminate any contracts, cease use, and remove ALPRs from Fairfax County.

These AI-powered cameras monitor our neighbors' movements in an unprecedented manner by creating unique profiles of every vehicle and storing a history of its movements. Data entries can be in the billions. ALPRs are being marketed to law enforcement and lawmakers by private companies funded by Peter Thiel and other tech billionaires. They aim to create a seamless system of surveillance nationwide. These systems were implemented in Fairfax County without community consent.  

ALPRs violate your constituents' privacy, civil liberties, and democratic freedoms. Fairfax BOS should join the dozens of other governing bodies across the country, including Harrisonburg, Charlottesville, and a number of other Virginia localities that have canceled their ALPR contracts.

Bipartisan majorities in the Virginia General Assembly have repeatedly rejected proposals to expand ALPR surveillance to state highways. The Virginia State Crime Commission has acknowledged that ALPR deployment disproportionately targets Black and Brown communities.  

ALPRs have been used to surveil people because of political views, religious views, right to bear arms, sexual orientation, immigration status, and ethnicity. 

ALPRs have been used to spy on protesters exercising their First Amendment rights and women seeking reproductive healthcare

ALPRs have been used to stalk women, children, and intimate partners.

ALPR databases have been accessed by federal agencies to include ICE, DHS, ATF, CBP, and other out-of-state law enforcement and government agencies.

ALPRs frequently relay false positives, misreads, and other errors that have contributed to high risk traffic stops; innocent people held at gunpoint, wrongfully accused, incarcerated, mauled, and permanently disabled.

It is not enough to regulate ALPRs. The Virginia State Crime Commission reported that police departments broke a 2025 law regulating ALPRs. Departments shared data with out-of-state and federal agencies and broke other regulations. No departments faced consequences for operating ALPRs illegally. Full removal is the only way forward.

ALPRs don't make us safer, they make us vulnerable targets and erode community trust. The BOS must act swiftly to protect the people you represent, not predatory private companies. Take immediate action to deactivate, cancel, remove, and prohibit ALPR systems in Fairfax County.

To connect with a broad group of community members in opposition to ALPRs visit deflockfairfax.com.`;

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