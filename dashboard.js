
document.addEventListener('DOMContentLoaded', () => {
    const mainContentTitle = document.getElementById('main-content-title');
    const mainContentSubtitle = document.getElementById('main-content-subtitle');
    
    const logoutButton = document.getElementById('logout-button');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const contentSections = document.querySelectorAll('.content-section');
    
    const profileAvatarSidebar = document.getElementById('profile-avatar-sidebar');
    const profileNameSidebar = document.getElementById('profile-name-sidebar');
    const profileDetailSidebar = document.getElementById('profile-detail-sidebar');

    const profileAvatarMain = document.getElementById('profile-avatar-main');
    const infoNameLarge = document.getElementById('info-name-large');
    const infoProgramYear = document.getElementById('info-program-year');
    
    const infoRollElement = document.getElementById('info-roll');
    const infoEmailElement = document.getElementById('info-email');
    const infoProgramElement = document.getElementById('info-program');
    const infoYearElement = document.getElementById('info-year');

    const resultTableBody = document.getElementById('result-table-body');

    const loggedInUser = localStorage.getItem('loggedInUser');
    const loggedInUserRoll = localStorage.getItem('loggedInUserRoll');
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    
    const loggedInUserProgram = 'Software Engineering'; // Yahan apna program likhein
    const loggedInUserYear = '2'; // aapka naya year



    const loggedInUserAvatar = localStorage.getItem('loggedInUserAvatar');


    if (!loggedInUser) {
        window.location.href = 'index.html';
        return;
    }

    if (profileAvatarSidebar) profileAvatarSidebar.textContent = loggedInUserAvatar || loggedInUser.charAt(0);
    if (profileNameSidebar) profileNameSidebar.textContent = loggedInUser;
    if (profileDetailSidebar) profileDetailSidebar.textContent = loggedInUserEmail;

    if (profileAvatarMain) profileAvatarMain.textContent = loggedInUserAvatar || loggedInUser.charAt(0);
    if (infoNameLarge) infoNameLarge.textContent = loggedInUser;
    if (infoProgramYear) infoProgramYear.textContent = `${loggedInUserProgram} - Year ${loggedInUserYear}`;
    
    if (infoRollElement) infoRollElement.textContent = loggedInUserRoll;
    if (infoEmailElement) infoEmailElement.textContent = loggedInUserEmail;
    if (infoProgramElement) infoProgramElement.textContent = loggedInUserProgram;
    if (infoYearElement) infoYearElement.textContent = loggedInUserYear;


    
 
 
 
 
 
    const studentMarksData = {
        "Ahsan Mureed": { SRE: { midterm: 5, finalterm: 0 }, Database: { midterm: 12, finalterm: 0 }, OS: { midterm: 10, finalterm: 0 }, AoA: { midterm: 12, finalterm: 0 }, Stats: { midterm: 0, finalterm: 0 } },
        "Shoaib Ghazi": { SRE: { midterm: 6, finalterm: 0 }, Database: { midterm: 13, finalterm: 0 }, OS: { midterm: 10, finalterm: 0 }, AoA: { midterm: 15, finalterm: 0 }, Stats: { midterm: 0, finalterm: 0} },
        "Muneeb Khalid": { SRE: { midterm: 5, finalterm: 0 }, Database: { midterm: 14, finalterm: 0 }, OS: { midterm: 11, finalterm: 0 }, AoA: { midterm: 13, finalterm: 0 }, Stats: { midterm: 0, finalterm: 0 } },
        "Hafiz Muhammad Saim": { SRE: { midterm: 6, finalterm: 0 }, Database: { midterm: 14, finalterm: 0 }, OS: { midterm: 11, finalterm: 0 }, AoA: { midterm: 14, finalterm: 0 }, Stats: { midterm: 0, finalterm: 0 } },
        "Alisher": { SRE: { midterm: 6, finalterm: 0 }, Database: { midterm: 15, finalterm: 0 }, OS: { midterm: 12, finalterm: 0 }, AoA: { midterm: 15, finalterm: 0 }, Stats: { midterm: 0, finalterm: 0 } },
        "Umar Mukhtar": { SRE: { midterm: 6, finalterm: 0 }, Database: { midterm: 15, finalterm: 0 }, OS: { midterm: 12, finalterm: 0 }, AoA: { midterm: 16, finalterm: 0 }, Stats: { midterm: 0, finalterm: 0 } },
        "Shahzaib Sohail": { SRE: { midterm: 9, finalterm: 0 }, Database: { midterm: 15, finalterm: 0 }, OS: { midterm: 12, finalterm: 0 }, AoA: { midterm: 17, finalterm: 0 }, Stats: { midterm: 0, finalterm: 0 } },
        "Usman Shahid": { SRE: { midterm: 10, finalterm: 0 }, Database: { midterm: 15, finalterm: 0 }, OS: { midterm: 12, finalterm: 0 }, AoA: { midterm: 16, finalterm: 0 }, Stats: { midterm: 0, finalterm:0 } }
    };

    function populateResults() {
        if (!resultTableBody || !studentMarksData[loggedInUser]) return;
        
        const userMarks = studentMarksData[loggedInUser];
        const rows = resultTableBody.querySelectorAll('tr');

        rows.forEach(row => {
            const subjectCellText = row.cells[0].textContent;
            let subjectKey = '';

            if (subjectCellText.includes("SRE")) subjectKey = "SRE";
            else if (subjectCellText.includes("Database")) subjectKey = "Database";
            else if (subjectCellText.includes("Operating System")) subjectKey = "OS";
            else if (subjectCellText.includes("Analysis of Algorithm")) subjectKey = "AoA";
            else if (subjectCellText.includes("Statistics")) subjectKey = "Stats";


            if (userMarks[subjectKey]) {
                row.cells[1].textContent = userMarks[subjectKey].midterm;
                row.cells[2].textContent = userMarks[subjectKey].finalterm;
            } else {
                row.cells[1].textContent = '-';
                row.cells[2].textContent = '-';
            }
        });
    }
    
    const sectionTitles = {
        "personal-info": "Personal Information",
        "result": "Academic Results",
        "notes": "My Notes",
        "attendance": "Attendance Record"
    };

    const sectionSubtitles = {
        "personal-info": "Your personal details and profile.",
        "result": "Check your midterm and final term marks.",
        "notes": "Coming soon: Keep your notes organized here.",
        "attendance": "Coming soon: Track your attendance."
    };


    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const sectionId = link.getAttribute('data-section');
            
            contentSections.forEach(section => {
                if (section.id === sectionId + '-section') {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            if(mainContentTitle) mainContentTitle.textContent = sectionTitles[sectionId] || "Dashboard";
            if(mainContentSubtitle) mainContentSubtitle.textContent = sectionSubtitles[sectionId] || "Welcome to your portal.";

            if (sectionId === 'result') {
                populateResults();
            }
        });
    });

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            localStorage.removeItem('loggedInUserRoll');
            localStorage.removeItem('loggedInUserEmail');
            localStorage.removeItem('loggedInUserProgram');
            localStorage.removeItem('loggedInUserYear');
            localStorage.removeItem('loggedInUserAvatar');
            window.location.href = 'index.html';
        });
    }

    const defaultSectionLink = document.querySelector('.sidebar-nav a[data-section="personal-info"]');
    if (defaultSectionLink) {
        defaultSectionLink.click();
    }
});
  

document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    console.log("Logged In User:", loggedInUser); // Debug

    const studentEmails = {
        "Shoaib Ghazi": "itsshoaibghazi@gmail.com",
        "Ahsan Mureed": "ach162753@gmail.com",
        "Muneeb Khalid": "munibkhalid151@gmail.com",
        "Hafiz Muhammad Saim": "hafizsaim@gmail.com",
        "Alisher": "alisher@gmail.com",
        "Umar Mukhtar": "umar@gmail.com",
        "Shahzaib Sohail": "ranashahzaibsohail1@gmail.com",
        "Usman Shahid": "usman@gmail.com"
    };

    const loggedInUserEmail = studentEmails[loggedInUser];
    const infoEmailElement = document.getElementById("info-email");
    const sidebarEmailElement = document.getElementById("profile-detail-sidebar");

    if (!loggedInUser) {
        console.warn("No loggedInUser found in localStorage.");
    }

    if (!loggedInUserEmail) {
        console.warn("No matching email found for user:", loggedInUser);
    }

    if (infoEmailElement) {
        infoEmailElement.textContent = loggedInUserEmail || "Email not found";
    }

    if (sidebarEmailElement) {
        sidebarEmailElement.textContent = loggedInUserEmail || "Email not found";
    }
});