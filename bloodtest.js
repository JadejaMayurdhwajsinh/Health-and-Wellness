document.getElementById('bloodTestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const hemoglobin = parseFloat(document.getElementById('hemoglobin').value);

    let message = '';
    let messageColor = '#2a5d94';

    if (age < 18) {
        if (hemoglobin < 11.5) {
            message = `${name}, your hemoglobin level is below normal. Please consult a doctor.`;
            messageColor = 'red';
        } else {
            message = `${name}, your hemoglobin level is normal.`;
        }
    } else {
        if (hemoglobin < 12.0) {
            message = `${name}, your hemoglobin level is below normal. Please consult a doctor.`;
            messageColor = 'red';
        } else {
            message = `${name}, your hemoglobin level is normal.`;
        }
    }

    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    messageDiv.style.color = messageColor;
});