document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[name="contact"]');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('contact-name-textbox').value,
            email: document.getElementById('contact-email-textbox').value,
            message: document.getElementById('message').value
        };
        
        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'contact',
                    templateParams: formData
                })
            });
            
            if (response.ok) {
                alert('Thank you! Your message has been sent.');
                contactForm.reset();
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        }
    });
});
