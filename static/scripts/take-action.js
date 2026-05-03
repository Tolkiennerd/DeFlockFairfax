// Wait for DOM to be fully loaded before attaching event listeners
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDropdown);
} else {
  // DOM is already ready (e.g., if script is deferred or loaded late)
  initializeDropdown();
}

function initializeDropdown() {
  const dropdown = document.getElementById('supervisors-dropdown');
  if (!dropdown) {
    console.error('Supervisor dropdown element not found');
    return;
  }
  const nameInput = document.getElementById('email-template-name');
  if (!nameInput) {
    console.error('Name input element not found');
    return;
  }

  dropdown.value = "select"; // Set default value to "select"
  nameInput.value = "";
}

function showEmailTemplate() {
    const textarea = document.getElementById('email-template');
    const sendEmailButton = document.getElementById('send-email-button');
    const sendMessageDiv = document.getElementById('send-message-div');
    const nameInput = document.getElementById('email-template-name');
    const dropdown = document.getElementById('supervisors-dropdown');
    
    const name = nameInput.value.trim();
    const supervisor = dropdown.value;

    // 1. Validation: Ensure a supervisor is selected and a name is entered
    if (supervisor === "select" || name === "") {
        // Hide the send section if validation fails
        sendMessageDiv.classList.remove("show");
        sendMessageDiv.classList.add("hide");
        alert("Please select a District Supervisor and enter your name.");
        return;
    }

    const emailBody = `I request that Fairfax County remove its Flock cameras. Contract number 4400012268 with Insight Public Sector should be amended to remove Flock Camera Systems and related Flock Group Inc. goods and services.

Flock cameras are a troubling invasion of civil liberties because they constantly monitor all traffic to uniquely profile each vehicle and create an easily searchable history of its movements without a warrant. ICE uses Flock cameras to spy on immigrants all over America, and also here in Fairfax County. According to a 2025 VPM article, of all immigration-related Flock searches in Virginia, over half occurred in Fairfax County. Even if FCPD does not directly give ICE this data, the wide network of data-sharing allows ICE to easily gain sensitive surveillance data about our immigrant community.

The nature of Flock cameras allows for a multitude of civil liberties violations. Across the country, Flock cameras have been used to surveil No Kings protesters, police officers' ex-girlfriends, and even a Texas woman getting an abortion. False positives from Flock's cameras have resulted in innocent people and families held at gunpoint. Russian hackers have acquired Flock camera footage due to Flock's weak security.

Because of the network of Flock data-sharing, our everyday travel history is spread across all sorts of departments and agencies that we can't keep track of. Charlottesville city council member Michael Payne raised an excellent point by saying, \"It's a huge problem to have a privately-owned company building a national surveillance system of vehicles and vehicle locations.\"

Virginia passed a law regulating Flock cameras, but in a report by the Virginia State Crime Commission, police departments were shown to be breaking this law. Several Virginia police departments are sharing data with out-of-state and/or federal agencies, in violation of the law. The report didn't say which departments broke the law. There were no consequences for any departments operating Flock cameras illegally.

Because of the numerous abuses by Flock cameras and because attempts to regulate them have failed, I urge the Board of Supervisors to amend Fairfax County's contract with Insight Public Sector to remove Flock Camera Systems. Other Virginia police departments have removed their Flock cameras, and it's time for Fairfax County to do the same.

Thank you for your time and consideration.`;

    let emailRecipient = "";
    let greeting = "";
    let districtText = "";

    // Map supervisor values to emails and greetings
    switch(supervisor) {
        case "smith":
            emailRecipient = "sully@fairfaxcounty.gov";
            greeting = "Hello Supervisor Kathy Smith,";
            districtText = "As a Sully District resident,";
            break;
        case "heizer":
            emailRecipient = "braddock@fairfaxcounty.gov";
            greeting = "Hello Supervisor Rachna Sizemore Heizer,";
            districtText = "As a Braddock District resident,";
            break;
        case "bierman":
            emailRecipient = "dranesville@fairfaxcounty.gov";
            greeting = "Hello Supervisor James Bierman,";
            districtText = "As a Dranesville District resident,";
            break;
        case "lusk":
            emailRecipient = "franconia@fairfaxcounty.gov";
            greeting = "Hello Supervisor Rodney Lusk,";
            districtText = "As a Franconia District resident,";
            break;
        case "alcorn":
            emailRecipient = "huntermill@fairfaxcounty.gov";
            greeting = "Hello Supervisor Walter Alcorn,";
            districtText = "As a Hunter Mill District resident,";
            break;
        case "jimenez":
            emailRecipient = "mason@fairfaxcounty.gov";
            greeting = "Hello Supervisor Andres Jimenez,";
            districtText = "As a Mason District resident,";
            break;
        case "storck":
            emailRecipient = "mtvernon@fairfaxcounty.gov";
            greeting = "Hello Supervisor Daniel Storck,";
            districtText = "As a Mount Vernon District resident,";
            break;
        case "palchik":
            emailRecipient = "providence@fairfaxcounty.gov";
            greeting = "Hello Supervisor Dalia Palchik,";
            districtText = "As a Providence District resident,";
            break;
        case "herrity":
            emailRecipient = "springfield@fairfaxcounty.gov";
            greeting = "Hello Supervisor Pat Herrity,";
            districtText = "As a Springfield District resident,";
            break;
        case "mckay":
            emailRecipient = "chairman@fairfaxcounty.gov";
            greeting = "Hello Chairman Jeffrey McKay,";
            districtText = "As a Fairfax County resident,";
            break;
        default:
            return;
    }

    // Construct the initial email body
    const fullBody = `${greeting}\n\n${districtText} ${emailBody}\n\n${name}`;

    // 2. Populate the textarea (allowing user to edit)
    textarea.value = fullBody;

    // 3. Create or Update the Fallback Message
    // We create a div with ID 'fallback-message' if it doesn't exist, or update it if it does
    let fallbackDiv = document.getElementById('fallback-message');
    if (!fallbackDiv) {
        fallbackDiv = document.createElement('div');
        fallbackDiv.id = 'fallback-message';
        
        // Insert it right before the textarea
        sendEmailButton.parentNode.insertBefore(fallbackDiv, textarea);
    }

    fallbackDiv.style.marginBottom = "10px";
    fallbackDiv.style.padding = "10px";
    fallbackDiv.style.borderLeft = "4px solid #007bff";
    fallbackDiv.style.fontSize = "0.9em";

    // Update the content of the fallback message
    fallbackDiv.innerHTML = `
        <strong>If this button doesn't open your email client with the above message:</strong><br>
        Copy/paste this message into your email and send it to your District Supervisor at <a href="mailto:${emailRecipient}">${emailRecipient}</a>.
    `;

    // 4. Reveal the "Send Email" section
    sendMessageDiv.classList.remove("hide");
    sendMessageDiv.classList.add("show");
}

function sendEmail() {
    const textarea = document.getElementById('email-template');
    const dropdown = document.getElementById('supervisors-dropdown');
    
    const supervisor = dropdown.value;
    const emailSubject = "Remove Flock Cameras From Fairfax County";
    
    // Get the CURRENT content of the textarea (after user edits)
    let userEditedBody = textarea.value;
    
    if (!userEditedBody.trim()) {
        alert("The email body cannot be empty.");
        return;
    }

    // Determine recipient based on selection
    let emailRecipient = "";
    switch(supervisor) {
        case "smith": emailRecipient = "sully@fairfaxcounty.gov"; break;
        case "heizer": emailRecipient = "braddock@fairfaxcounty.gov"; break;
        case "bierman": emailRecipient = "dranesville@fairfaxcounty.gov"; break;
        case "lusk": emailRecipient = "franconia@fairfaxcounty.gov"; break;
        case "alcorn": emailRecipient = "huntermill@fairfaxcounty.gov"; break;
        case "jimenez": emailRecipient = "mason@fairfaxcounty.gov"; break;
        case "storck": emailRecipient = "mtvernon@fairfaxcounty.gov"; break;
        case "palchik": emailRecipient = "providence@fairfaxcounty.gov"; break;
        case "herrity": emailRecipient = "springfield@fairfaxcounty.gov"; break;
        case "mckay": emailRecipient = "chairman@fairfaxcounty.gov"; break;
        default: return;
    }

    // Encode the subject (standard encoding is fine for subject)
    const encodedSubject = encodeURIComponent(emailSubject);
    
    // We already replaced newlines, so we just need to encode the rest of the body
    // Note: Since we manually inserted %0D%0A, we must ensure we don't double-encode them.
    // The safest way is to encode the whole string, but since we manually inserted %0D%0A,
    // we should encode the string *before* inserting the manual newlines, OR
    // simply construct the URL parts carefully.
    
    // Better approach: Encode the raw text, then replace the encoded newline (%0A) with %0D%0A
    const encodedRawBody = encodeURIComponent(userEditedBody);
    const finalEncodedBody = userEditedBody.replace(/\n/g, '%0D%0A');

    // Construct the mailto URL
    const mailtoLink = `mailto:${emailRecipient}?subject=${encodedSubject}&body=${finalEncodedBody}`;

    // Open the email client
    window.location.href = mailtoLink;
}