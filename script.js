// =============================================================================
// ClubHub - College Societies & Cells Management Project
// Simple JavaScript for Beginners (Using basic arrays, loops & localStorage)
// =============================================================================

// 1. DATA OF THE 6 COLLEGE CLUBS AND CELLS
var clubs = [
  {
    name: "C&C",
    fullName: "Career and Counselling Cell",
    category: "Career & Guidance",
    color: "#334155",
    info: "Helps students with career guidance, resume building, soft skills training, mock interviews, and placement preparation.",
    coordinator: "Dr. A. Sharma (Faculty Advisor)",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Srijan",
    fullName: "Art & Creativity Club",
    category: "Fine Arts & Craft",
    color: "#ea580c",
    info: "The creative hub for sketching, canvas painting, digital art, poster making, and college event decorations.",
    coordinator: "Pooja Verma (Student Head)",
    image: "https://images.unsplash.com/photo-1460661419200-182b77d46e83?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Tarannum",
    fullName: "Music Club",
    category: "Performing Arts",
    color: "#9333ea",
    info: "The official university music society uniting singers, guitarists, instrumentalists, and classical vocalists.",
    coordinator: "Aman Gupta (Music Secretary)",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Ananya",
    fullName: "Literary Club",
    category: "Literature & Debating",
    color: "#059669",
    info: "Promotes creative writing, poetry recitations, English & Hindi debates, elocution, and open-mic literary sessions.",
    coordinator: "Ritu Nambiar (Convener)",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "IIC",
    fullName: "Institution's Innovation Council",
    category: "Innovation & Startup",
    color: "#d97706",
    info: "Supported by Ministry of Education to nurture student startups, design thinking workshops, and ideation challenges.",
    coordinator: "Prof. K. Verma (President)",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "UCC & DA",
    fullName: "University Computer Cell and Digital Affairs",
    category: "Technical & IT Cell",
    color: "#0f766e",
    info: "Manages digital affairs, coding competitions, web maintenance, technical workshops, and campus IT support.",
    coordinator: "Siddharth Rao (Tech Lead)",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80"
  }
];

// Initial Data Arrays
var members = [];
var events = [];
var notices = [];
var registrations = [];

// =============================================================================
// 2. LOCALSTORAGE SAVE AND LOAD FUNCTIONS
// =============================================================================

// Save all data into the browser's local storage
function saveData() {
  var data = {
    members: members,
    events: events,
    notices: notices,
    registrations: registrations
  };
  localStorage.setItem("simpleClubHubData", JSON.stringify(data));
}

// Load data when website opens (or use beginner sample data if empty)
function loadData() {
  var saved = localStorage.getItem("simpleClubHubData");
  if (saved) {
    try {
      var parsed = JSON.parse(saved);
      members = parsed.members || [];
      events = parsed.events || [];
      notices = parsed.notices || [];
      registrations = parsed.registrations || [];
    } catch (e) {
      console.log("Error loading saved data");
    }
  }

  // If there is no data yet, load some sample data for the user's 6 clubs
  if (members.length === 0 && events.length === 0) {
    members = [
      { id: 1, name: "Rahul Sharma", email: "rahul@college.edu", club: "C&C", role: "Student Coordinator", year: "3rd Year" },
      { id: 2, name: "Pooja Verma", email: "pooja@college.edu", club: "Srijan", role: "Painting Lead", year: "2nd Year" },
      { id: 3, name: "Aman Gupta", email: "aman@college.edu", club: "Tarannum", role: "Vocalist", year: "2nd Year" },
      { id: 4, name: "Ritu Nambiar", email: "ritu@college.edu", club: "Ananya", role: "Editor", year: "3rd Year" },
      { id: 5, name: "Siddharth Rao", email: "sid@college.edu", club: "UCC & DA", role: "Web Coordinator", year: "3rd Year" },
      { id: 6, name: "Kunal Jain", email: "kunal@college.edu", club: "IIC", role: "Project Lead", year: "4th Year" }
    ];

    events = [
      {
        id: 101,
        club: "Tarannum",
        title: "Annual Band & Vocal Auditions 2026",
        type: "Audition",
        date: "2026-11-28",
        time: "4:00 PM",
        venue: "Auditorium Hall",
        desc: "Auditions for lead vocalists, drummers, and guitarists for the university music band. 2 minutes performance.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 102,
        club: "Srijan",
        title: "Rangoli & Canvas Painting Competition",
        type: "Event",
        date: "2026-12-02",
        time: "11:00 AM",
        venue: "Arts Block Lawn",
        desc: "Express your creativity! Sheets and basic colors provided. Certificates and trophies for top 3 paintings.",
        image: "https://images.unsplash.com/photo-1460661419200-182b77d46e83?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 103,
        club: "C&C",
        title: "Resume Building & Interview Skills Workshop",
        type: "Event",
        date: "2026-12-05",
        time: "2:00 PM",
        venue: "Seminar Hall 1",
        desc: "Expert session on drafting ATS-friendly resumes, LinkedIn profile optimization, and facing HR interviews.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 104,
        club: "UCC & DA",
        title: "Web Development Bootcamp (HTML, CSS, JS)",
        type: "Event",
        date: "2026-12-08",
        time: "1:00 PM",
        venue: "Computer Lab 3",
        desc: "Learn to build simple websites using HTML5, CSS3, and JavaScript from scratch. Laptops recommended.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 105,
        club: "Ananya",
        title: "Annual Hindi & English Poetry Slam",
        type: "Audition",
        date: "2026-12-10",
        time: "3:30 PM",
        venue: "Open Amphitheatre",
        desc: "Auditions and recitations for original poetry, shayari, and self-composed short stories.",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=700&q=80"
      }
    ];

    notices = [
      {
        id: 201,
        club: "Tarannum",
        title: "Music Band Audition Dates Announced!",
        category: "Audition",
        date: "2026-11-20",
        body: "Tarannum music club is holding auditions this Friday. Bring your instruments or prepare a solo vocal piece."
      },
      {
        id: 202,
        club: "C&C",
        title: "Registration Open for Internship Drive",
        category: "Urgent",
        date: "2026-11-19",
        body: "All 2nd and 3rd year students must register their resumes with Career and Counselling Cell before Nov 30."
      },
      {
        id: 203,
        club: "IIC",
        title: "Smart Campus Innovation Challenge 2026",
        category: "Notice",
        date: "2026-11-18",
        body: "Submit your startup idea or tech prototype. Shortlisted teams will receive prototype funding from IIC."
      }
    ];

    registrations = [
      { id: 301, name: "Rohit Verma", email: "rohit@college.edu", eventTitle: "Annual Band & Vocal Auditions 2026", club: "Tarannum" },
      { id: 302, name: "Sneha Patel", email: "sneha@college.edu", eventTitle: "Rangoli & Canvas Painting Competition", club: "Srijan" }
    ];

    saveData();
  }
}

// =============================================================================
// 3. NAVIGATION (Switch between pages)
// =============================================================================
function showPage(pageId) {
  // Hide all sections
  var pages = document.getElementsByClassName("page-section");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  // Show the selected section
  var activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.style.display = "block";
  }

  // Highlight active button in navigation
  var navBtns = document.querySelectorAll("nav button");
  for (var j = 0; j < navBtns.length; j++) {
    navBtns[j].classList.remove("active");
  }
  var currentBtn = document.getElementById("btn-" + pageId);
  if (currentBtn) {
    currentBtn.classList.add("active");
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

// =============================================================================
// 4. RENDERING FUNCTIONS (Show data on screen)
// =============================================================================

function renderAll() {
  renderStats();
  renderClubs();
  renderEvents();
  renderNotices();
  renderMembers();
  renderRegistrations();
  fillDropdowns();
}

// Update the 4 numbers on Home page
function renderStats() {
  document.getElementById("count-clubs").innerText = clubs.length;
  document.getElementById("count-events").innerText = events.length;
  document.getElementById("count-notices").innerText = notices.length;
  document.getElementById("count-members").innerText = members.length;

  // Update top notice ticker
  if (notices.length > 0) {
    document.getElementById("ticker-text").innerText = "📢 [" + notices[0].club + "]: " + notices[0].title + " (" + notices[0].body + ")";
  }
}

// Render the 6 Clubs on Home and Clubs page
function renderClubs() {
  var html = "";
  for (var i = 0; i < clubs.length; i++) {
    var c = clubs[i];
    // Count how many members belong to this club
    var memberCount = 0;
    for (var m = 0; m < members.length; m++) {
      if (members[m].club === c.name) memberCount++;
    }

    html += `
      <div class="club-item">
        <img class="club-img" src="${c.image}" alt="${c.name}">
        <div class="club-item-body">
          <span class="club-tag" style="background-color: ${c.color};">${c.category}</span>
          <h3>${c.name} - ${c.fullName}</h3>
          <p>${c.info}</p>
          <div class="club-info-line"><strong>Faculty/Head:</strong> ${c.coordinator}</div>
          <div class="club-info-line"><strong>Active Members:</strong> ${memberCount}</div>
        </div>
      </div>
    `;
  }

  // Put into both pages
  var homeClubs = document.getElementById("home-clubs-grid");
  if (homeClubs) homeClubs.innerHTML = html;

  var allClubs = document.getElementById("all-clubs-grid");
  if (allClubs) allClubs.innerHTML = html;
}

// Render Events and Auditions
function renderEvents() {
  var filterClub = document.getElementById("filter-event-club") ? document.getElementById("filter-event-club").value : "ALL";
  var html = "";

  for (var i = 0; i < events.length; i++) {
    var ev = events[i];

    // Check filter
    if (filterClub !== "ALL" && ev.club !== filterClub) {
      continue;
    }

    var badgeClass = ev.type === "Audition" ? "badge-audition" : "badge-event";

    html += `
      <div class="event-item">
        <img class="event-img" src="${ev.image}" alt="${ev.title}">
        <div class="event-item-body">
          <span class="${badgeClass}">${ev.type === "Audition" ? "⭐ Audition" : "📅 Event"}</span>
          <span style="font-size:12px; font-weight:bold; color:#1f6f58; margin-left:8px;">[${ev.club}]</span>
          <h3>${ev.title}</h3>
          <div class="event-meta">📅 <strong>Date:</strong> ${ev.date} | ⏰ <strong>Time:</strong> ${ev.time}</div>
          <div class="event-meta">📍 <strong>Venue:</strong> ${ev.venue}</div>
          <p style="font-size:13px; color:#64748b; margin:10px 0;">${ev.desc}</p>
          <button class="btn-green" onclick="quickRegister('${ev.title}', '${ev.club}')">Register for this</button>
          <button class="btn-red" style="margin-left:6px;" onclick="deleteEvent(${ev.id})">Delete</button>
        </div>
      </div>
    `;
  }

  if (html === "") {
    html = "<p style='color:#64748b;'>No events found for this selection.</p>";
  }

  document.getElementById("events-grid").innerHTML = html;
}

// Render Notices
function renderNotices() {
  var filterClub = document.getElementById("filter-notice-club") ? document.getElementById("filter-notice-club").value : "ALL";
  var html = "";

  for (var i = 0; i < notices.length; i++) {
    var n = notices[i];

    if (filterClub !== "ALL" && n.club !== filterClub) {
      continue;
    }

    var cardClass = "notice-box";
    if (n.category === "Urgent") cardClass += " urgent";
    if (n.category === "Audition") cardClass += " audition";

    html += `
      <div class="${cardClass}">
        <div class="notice-header">
          <span style="font-weight:bold; font-size:12px; color:#1f6f58;">${n.club} • ${n.category}</span>
          <span style="font-size:12px; color:#94a3b8;">📅 ${n.date}</span>
        </div>
        <h4 class="notice-title">${n.title}</h4>
        <div class="notice-body">${n.body}</div>
        <div class="notice-footer">
          <span>Official Circular</span>
          <button class="btn-red" onclick="deleteNotice(${n.id})">Remove</button>
        </div>
      </div>
    `;
  }

  if (html === "") {
    html = "<p style='color:#64748b;'>No announcements posted for this club.</p>";
  }

  document.getElementById("notices-list").innerHTML = html;
}

// Render Members Table
function renderMembers() {
  var filterClub = document.getElementById("filter-member-club") ? document.getElementById("filter-member-club").value : "ALL";
  var searchInput = document.getElementById("search-member") ? document.getElementById("search-member").value.toLowerCase() : "";

  var html = "";

  for (var i = 0; i < members.length; i++) {
    var m = members[i];

    // Filter by club
    if (filterClub !== "ALL" && m.club !== filterClub) {
      continue;
    }

    // Search by name or email
    if (searchInput !== "" && m.name.toLowerCase().indexOf(searchInput) === -1 && m.email.toLowerCase().indexOf(searchInput) === -1) {
      continue;
    }

    html += `
      <tr>
        <td><strong>${m.name}</strong></td>
        <td>${m.email}</td>
        <td><span style="color:#1f6f58; font-weight:bold;">${m.club}</span></td>
        <td>${m.role}</td>
        <td>${m.year || "UG"}</td>
        <td><button class="btn-red" onclick="deleteMember(${m.id})">Delete</button></td>
      </tr>
    `;
  }

  if (html === "") {
    html = "<tr><td colspan='6' style='text-align:center; color:#94a3b8;'>No members found.</td></tr>";
  }

  document.getElementById("members-table-body").innerHTML = html;
}

// Render Registrations Table
function renderRegistrations() {
  var html = "";
  for (var i = 0; i < registrations.length; i++) {
    var r = registrations[i];
    html += `
      <tr>
        <td><strong>${r.name}</strong></td>
        <td>${r.email}</td>
        <td>${r.eventTitle}</td>
        <td><span style="color:#1f6f58; font-weight:bold;">${r.club}</span></td>
        <td><button class="btn-red" onclick="deleteRegistration(${r.id})">Cancel</button></td>
      </tr>
    `;
  }

  if (html === "") {
    html = "<tr><td colspan='5' style='text-align:center; color:#94a3b8;'>No registrations yet.</td></tr>";
  }

  document.getElementById("regs-table-body").innerHTML = html;
}

// Fill all dropdown select boxes with the 6 clubs
function fillDropdowns() {
  var options = `<option value="ALL">All Clubs & Cells</option>`;
  var formOptions = "";

  for (var i = 0; i < clubs.length; i++) {
    options += `<option value="${clubs[i].name}">${clubs[i].name} (${clubs[i].category})</option>`;
    formOptions += `<option value="${clubs[i].name}">${clubs[i].name}</option>`;
  }

  // Filter dropdowns
  var fEvents = document.getElementById("filter-event-club");
  if (fEvents && fEvents.innerHTML === "") fEvents.innerHTML = options;

  var fNotices = document.getElementById("filter-notice-club");
  if (fNotices && fNotices.innerHTML === "") fNotices.innerHTML = options;

  var fMembers = document.getElementById("filter-member-club");
  if (fMembers && fMembers.innerHTML === "") fMembers.innerHTML = options;

  // Form dropdowns
  var mClub = document.getElementById("member-club");
  if (mClub && mClub.innerHTML === "") mClub.innerHTML = formOptions;

  var eClub = document.getElementById("event-club");
  if (eClub && eClub.innerHTML === "") eClub.innerHTML = formOptions;

  var nClub = document.getElementById("notice-club");
  if (nClub && nClub.innerHTML === "") nClub.innerHTML = formOptions;

  var rClub = document.getElementById("reg-club");
  if (rClub && rClub.innerHTML === "") rClub.innerHTML = formOptions;
}

// =============================================================================
// 5. USER ACTIONS (Add & Delete)
// =============================================================================

// Add a Member
function addMember() {
  var name = document.getElementById("member-name").value;
  var email = document.getElementById("member-email").value;
  var club = document.getElementById("member-club").value;
  var role = document.getElementById("member-role").value;
  var year = document.getElementById("member-year").value;

  if (name === "" || email === "") {
    alert("Please enter both Member Name and Email!");
    return;
  }

  var newMember = {
    id: Date.now(),
    name: name,
    email: email,
    club: club,
    role: role || "Member",
    year: year || "UG Student"
  };

  members.push(newMember);
  saveData();
  renderAll();

  // Reset inputs
  document.getElementById("member-name").value = "";
  document.getElementById("member-email").value = "";
  document.getElementById("member-role").value = "";
  document.getElementById("member-year").value = "";
  alert("Member added successfully to " + club + "!");
}

function deleteMember(id) {
  if (!confirm("Are you sure you want to delete this member?")) return;
  members = members.filter(function (m) { return m.id !== id; });
  saveData();
  renderAll();
}

// Add an Event or Audition
function addEvent() {
  var title = document.getElementById("event-title").value;
  var club = document.getElementById("event-club").value;
  var type = document.getElementById("event-type").value;
  var date = document.getElementById("event-date").value;
  var time = document.getElementById("event-time").value;
  var venue = document.getElementById("event-venue").value;
  var desc = document.getElementById("event-desc").value;

  if (title === "" || date === "") {
    alert("Please provide at least Title and Date!");
    return;
  }

  // Simple default photos based on club
  var defaultImage = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80";
  for (var i = 0; i < clubs.length; i++) {
    if (clubs[i].name === club) {
      defaultImage = clubs[i].image;
      break;
    }
  }

  var newEvent = {
    id: Date.now(),
    club: club,
    title: title,
    type: type,
    date: date,
    time: time || "TBA",
    venue: venue || "Campus",
    desc: desc || "College event. Everyone is welcome!",
    image: defaultImage
  };

  events.unshift(newEvent);
  saveData();
  renderAll();

  // Reset inputs
  document.getElementById("event-title").value = "";
  document.getElementById("event-date").value = "";
  document.getElementById("event-time").value = "";
  document.getElementById("event-venue").value = "";
  document.getElementById("event-desc").value = "";
  alert(type + " added successfully!");
}

function deleteEvent(id) {
  if (!confirm("Delete this event?")) return;
  events = events.filter(function (e) { return e.id !== id; });
  saveData();
  renderAll();
}

// Add a Notice
function addNotice() {
  var title = document.getElementById("notice-title").value;
  var club = document.getElementById("notice-club").value;
  var category = document.getElementById("notice-category").value;
  var body = document.getElementById("notice-body").value;

  if (title === "" || body === "") {
    alert("Please fill in Notice Title and Notice Message!");
    return;
  }

  var newNotice = {
    id: Date.now(),
    club: club,
    title: title,
    category: category,
    date: new Date().toISOString().split("T")[0],
    body: body
  };

  notices.unshift(newNotice);
  saveData();
  renderAll();

  document.getElementById("notice-title").value = "";
  document.getElementById("notice-body").value = "";
  alert("Notice posted on board!");
}

function deleteNotice(id) {
  if (!confirm("Remove this announcement?")) return;
  notices = notices.filter(function (n) { return n.id !== id; });
  saveData();
  renderAll();
}

// Register for an event
function addRegistration() {
  var name = document.getElementById("reg-name").value;
  var email = document.getElementById("reg-email").value;
  var eventTitle = document.getElementById("reg-event-title").value;
  var club = document.getElementById("reg-club").value;

  if (name === "" || email === "" || eventTitle === "") {
    alert("Please enter Name, Email, and Event Title!");
    return;
  }

  var newReg = {
    id: Date.now(),
    name: name,
    email: email,
    eventTitle: eventTitle,
    club: club
  };

  registrations.push(newReg);
  saveData();
  renderAll();

  document.getElementById("reg-name").value = "";
  document.getElementById("reg-email").value = "";
  document.getElementById("reg-event-title").value = "";
  alert("Successfully registered for " + eventTitle + "!");
}

function quickRegister(eventTitle, clubName) {
  showPage("register");
  document.getElementById("reg-event-title").value = eventTitle;
  document.getElementById("reg-club").value = clubName;
}

function deleteRegistration(id) {
  if (!confirm("Cancel this registration?")) return;
  registrations = registrations.filter(function (r) { return r.id !== id; });
  saveData();
  renderAll();
}

// =============================================================================
// Reset all data back to default sample data
function resetData() {
  if (confirm("Reset all events, notices and members back to default sample data?")) {
    localStorage.removeItem("simpleClubHubData");
    location.reload();
  }
}

// 6. INITIAL RUN WHEN WEBPAGE LOADS
// =============================================================================
window.onload = function () {
  loadData();
  renderAll();
  showPage("home");
};
