// Health Data
const healthConditions = [{
    name: "Diabetes Management",
    expert: "Dr.Bijoy chandra chatrjee",
    desc: "Comprehensive diabetes care plans",
    videoUrl: "https://example.com/diabetes_video"
},
{
    name: "Cardiac Care",
    expert: "Dr.siddharth ",
    desc: "Advanced heart health monitoring",
    videoUrl: "https://example.com/cardiac_video"
},
{
    name: "Mental Wellness",
    expert: "Dr.saksham",
    desc: "Stress and anxiety management",
    videoUrl: "https://example.com/mental_video"
},
{
    name: "Pediatric Care",
    expert: "Dr. Arjun Mehta",
    desc: "Child health specialists",
    videoUrl: "https://example.com/pediatric_video"
},
{
    name: "Women's Health",
    expert: "Dr. Neha Sharma",
    desc: "Complete women's wellness",
    videoUrl: "https://www.youtube.com/embed/E4EaRk6r_SM?si=OCdyPG9eGIQB9N3G"
},
{
    name: "Chronic Pain",
    expert: "Dr. Amit Patel",
    desc: "Pain management solutions",
    videoUrl: "https://example.com/pain_video"
},
{
    name: "Respiratory Care",
    expert: "Dr. Deepak Joshi",
    desc: "Lung health specialists",
    videoUrl: "https://example.com/respiratory_video"
},
{
    name: "Nutrition Guidance",
    expert: "Dr. Sneha Reddy",
    desc: "Dietary planning experts",
    videoUrl: "https://example.com/nutrition_video"
},
{
    name: "Sleep Disorders",
    expert: "Dr. Vikram Gupta",
    desc: "Sleep quality improvement",
    videoUrl: "https://example.com/sleep_video"
},
{
    name: "Bone Health",
    expert: "Dr. Anjali Kapoor",
    desc: "Osteoporosis prevention",
    videoUrl: "https://example.com/bone_video"
}
];

// Medicine Data
const trendingMedicines = [{
    name: "Paracetamol",
    description: "Relieves fever and pain.",
    videoUrl: "https://example.com/paracetamol_video"
},
{
    name: "Amoxicillin",
    description: "Treats bacterial infections.",
    videoUrl: "https://example.com/amoxicillin_video"
},
{
    name: "Loratadine",
    description: "Antihistamine for allergies.",
    videoUrl: "https://example.com/loratadine_video"
},
{
    name: "Omeprazole",
    description: "Reduces stomach acid production.",
    videoUrl: "https://example.com/omeprazole_video"
},
{
    name: "Simvastatin",
    description: "Lowers cholesterol levels.",
    videoUrl: "https://example.com/simvastatin_video"
},
{
    name: "Metformin",
    description: "Manages blood sugar levels.",
    videoUrl: "https://example.com/metformin_video"
},
{
    name: "Aspirin",
    description: "Pain relief and anti-inflammatory.",
    videoUrl: "https://example.com/aspirin_video"
},
{
    name: "Ibuprofen",
    description: "Reduces pain and inflammation.",
    videoUrl: "https://example.com/ibuprofen_video"
},
{
    name: "Cetirizine",
    description: "Treats allergy symptoms.",
    videoUrl: "https://example.com/cetirizine_video"
},
{
    name: "Vitamin D",
    description: "Supports bone health.",
    videoUrl: "https://example.com/vitamin_d_video"
}
];

// Passwords (for demonstration purposes only, store securely in a real application)
const passwords = {
    patient: "patient123",
    doctor: "doctor456"
};

// Initialize App
function initializeApp() {
    // Hide splash screen after 2 seconds
    setTimeout(() => {
        document.getElementById('splashScreen').style.display = 'none';
        document.getElementById('loginPage').style.display = 'flex';
    }, 2000);

    // Initialize health boxes
    initializeHealthBoxes();
    // Initialize medicine boxes
    initializeMedicineBoxes();
}

// Show Consultation
 // Show Consultation (Video and Expert Info)
 function showConsultation(condition) {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <button class="close-btn" onclick="closeConsultationModal()">×</button>
        <h3 id="diseaseTitle">${condition.name}</h3>
        <div class="video-container">
            <iframe 
                width="100%" 
                height="315" 
                src="${condition.videoUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="expert-info">
            <h4>Verified by:</h4>
            <p id="expertName">${condition.expert}</p>
            <p id="expertCredentials">MD, General Medicine</p>
            <p>12+ years experience</p>
        </div>
        <button class="role-btn patient-btn" onclick="showConsultationForm()">
            Get Consultation
        </button>
        <div id="consultationFormContainer"></div>
    `;

    document.getElementById('consultationModal').style.display = 'flex';
}

// Function to close the modal when "X" is clicked
function closeConsultationModal() {
    document.getElementById('consultationModal').style.display = 'none';
}


// Function to close the modal when "Cancel" is clicked
function closeConsultationModal() {
    document.getElementById('consultationModal').style.display = 'none';
}


    


// Show Consultation Form
function showConsultationForm() {
    const formContainer = document.getElementById('consultationFormContainer');
    formContainer.innerHTML = `
        <form class="consultation-form" onsubmit="scheduleConsultation(event)">
            <h4>Schedule Consultation</h4>
            <div class="form-group">
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" placeholder="Full Name" required>
                <div id="fullNameError" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" placeholder="Age" min="1" required>
                <div id="ageError" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" required>
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <div id="genderError" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="concerns">Health Concerns:</label>
                <textarea id="concerns" placeholder="Describe your health concerns..." rows="3" required></textarea>
                <div id="concernsError" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="dateTime">Date and Time:</label>
                <input type="datetime-local" id="dateTime" required>
                <div id="dateTimeError" class="error-message"></div>
            </div>
            <button type="submit" class="role-btn patient-btn">
                Schedule Consultation
            </button>
        </form>
    `;
}

// Schedule Consultation Form Submission
function scheduleConsultation(event) {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const concerns = document.getElementById('concerns').value;
    const dateTime = document.getElementById('dateTime').value;

    // Format date and time
    const formattedDateTime = new Date(dateTime).toLocaleString();

    // Set confirmation popup values
    document.getElementById('confirmName').textContent = fullName;
    document.getElementById('confirmAge').textContent = age;
    document.getElementById('confirmGender').textContent = gender;
    document.getElementById('confirmConcerns').textContent = concerns;
    document.getElementById('confirmDateTime').textContent = formattedDateTime;

    // Show confirmation popup
    document.getElementById('confirmationPopup').style.display = 'block';

    // Optionally hide modal
    document.getElementById('consultationModal').style.display = 'none';
}

// Form Validation
function validateForm() {
    let isValid = true;

    // Reset error messages
    resetErrorMessages();

    // Full Name validation
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        displayErrorMessage('fullName', 'Full Name is required');
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        displayErrorMessage('fullName', 'Full Name must contain only letters and spaces');
        isValid = false;
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age === '') {
        displayErrorMessage('age', 'Age is required');
        isValid = false;
    } else if (isNaN(age) || age < 1 || age > 120) {
        displayErrorMessage('age', 'Age must be a number between 1 and 120');
        isValid = false;
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        displayErrorMessage('gender', 'Gender is required');
        isValid = false;
    }

    // Concerns validation
    const concerns = document.getElementById('concerns').value.trim();
    if (concerns === '') {
        displayErrorMessage('concerns', 'Health Concerns are required');
        isValid = false;
    }

    // Date and Time validation
    const dateTime = document.getElementById('dateTime').value;
    if (dateTime === '') {
        displayErrorMessage('dateTime', 'Date and Time are required');
        isValid = false;
    } else if (new Date(dateTime) <= new Date()) {
        displayErrorMessage('dateTime', 'Date and Time must be in the future');
        isValid = false;
    }

    return isValid;
}

// Display Error Message
function displayErrorMessage(fieldId, message) {
    const errorDivId = fieldId + 'Error';
    document.getElementById(errorDivId).textContent = message;
}

// Reset Error Messages
function resetErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
    });
}

// Close Confirmation Popup
function closeConfirmation() {
    document.getElementById('confirmationPopup').style.display = 'none';
    document.getElementById('consultationModal').style.display = 'none';
}

// Create medicine Boxes
function initializeMedicineBoxes() {
    const container = document.getElementById('medicineScroll');
    trendingMedicines.forEach(medicine => {
        const box = document.createElement('div');
        box.className = 'medicine-box';
        box.innerHTML = `
            <h4>${medicine.name}</h4>
            <p style="margin: 10px 0; color: #666">${medicine.description}</p>
        `;
        box.onclick = () => showConsultation(medicine); // You can create a separate showMedicineDetails function if needed
        container.appendChild(box);
    });
}

// Create Health Boxes
function initializeHealthBoxes() {
    const container = document.getElementById('healthScroll');
    healthConditions.forEach(condition => {
        const box = document.createElement('div');
        box.className = 'health-box';
        box.innerHTML = `
            <h4>${condition.name}</h4>
            <p style="margin: 10px 0; color: #666">${condition.desc}</p>
            <div style="color: var(--primary-blue); font-size: 0.9rem">
                <span class="material-icons" style="vertical-align: middle">verified</span>
                ${condition.expert}
            </div>
        `;
        box.onclick = () => showConsultation(condition);
        container.appendChild(box);
    });
}

// Show Main Page
function showMainPage(role) {
    const password = document.getElementById('password').value;
    if (passwords[role] === password) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

// Search Suggestions
 // Debounce function to delay processing while typing
function debounce(func, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Improved search handler using debounce
  function handleSearchInput(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = ''; // Clear previous suggestions
  
    if (searchTerm.length > 0) {
      // Filter health conditions based on search term (name and description)
      const filtered = healthConditions.filter(condition =>
        condition.name.toLowerCase().includes(searchTerm) ||
        condition.desc.toLowerCase().includes(searchTerm)
      );
  
      if (filtered.length > 0) {
        filtered.forEach(condition => {
          const div = document.createElement('div');
          div.className = 'suggestion-item';
          div.textContent = condition.name;
          div.onclick = () => {
            document.getElementById('searchInput').value = condition.name;
            suggestions.style.display = 'none';
            showConsultation(condition); // Show consultation details if desired
          };
          suggestions.appendChild(div);
        });
        suggestions.style.display = 'block';
      } else {
        suggestions.style.display = 'none';
      }
    } else {
      suggestions.style.display = 'none';
    }
  }
  
  // Attach debounced event listener to the search input
  document.getElementById('searchInput').addEventListener('input', debounce(handleSearchInput, 300));
  


// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);