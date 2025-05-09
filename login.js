
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessageElement = document.getElementById('error-message');

    const users = {
      "Ahsan Mureed": "60927",
      "Shoaib Ghazi": "60926",
      "Muneeb Khalid": "60933",
      "Hafiz Muhammad Saim": "60931",
      "Alisher": "60944",
      "Umar Mukhtar": "60937",
      "Shahzaib Sohail": "60940",
      "Usman Shahid": "60941"
    };
    
    const studentDetails = {
      "Ahsan Mureed": { roll: "60927", email: "ahsan.mureed@example.com", program: "Computer Science", year: "3", avatarInitials: "AM" },
      "Shoaib Ghazi": { roll: "60926", email: "shoaib.ghazi@example.com", program: "Software Engineering", year: "4", avatarInitials: "SG" },
      "Muneeb Khalid": { roll: "60933", email: "muneeb.khalid@example.com", program: "Data Science", year: "2", avatarInitials: "MK" },
      "Hafiz Muhammad Saim": { roll: "60931", email: "saim.hafiz@example.com", program: "Cyber Security", year: "4", avatarInitials: "HS" },
      "Alisher": { roll: "60944", email: "alisher.student@example.com", program: "Information Technology", year: "3", avatarInitials: "A" },
      "Umar Mukhtar": { roll: "60937", email: "umar.mukhtar@example.com", program: "Software Engineering", year: "4", avatarInitials: "UM" },
      "Shahzaib Sohail": { roll: "60940", email: "shahzaib.sohail@example.com", program: "Computer Science", year: "2", avatarInitials: "SS" },
      "Usman Shahid": { roll: "60941", email: "usman.shahid@example.com", program: "Data Science", year: "3", avatarInitials: "US" }
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();

            if (users[username] && users[username] === password) {
                localStorage.setItem('loggedInUser', username);
                const details = studentDetails[username];
                if (details) {
                    localStorage.setItem('loggedInUserRoll', details.roll);
                    localStorage.setItem('loggedInUserEmail', details.email);
                    localStorage.setItem('loggedInUserProgram', details.program);
                    localStorage.setItem('loggedInUserYear', details.year);
                    localStorage.setItem('loggedInUserAvatar', details.avatarInitials);
                }
                window.location.href = 'dashboard.html';
            } else {
                errorMessageElement.textContent = 'Invalid username or password. Please try again.';
            }
        });
    }
});
  