const pages = [
  "dashboard.html",
  "employees.html",
  "departments.html",
  "attendance.html",
  "payroll.html",
  "jobs.html",
  "candidates.html",
  "leaves.html",
  "holidays.html",
  "settings.html"
];

const buttons = document.querySelectorAll(".menu .menu-button-off, .menu .menu-button-on");
const titleMenuButtons = document.querySelectorAll(".menu .menu-button-off p, .menu .menu-button-on p");
const contentDiv = document.getElementById("content");

const breadcrumb = document.getElementById("breadcrumb");
const topbarMainTitle = document.getElementById("topbar-left-main-title");

function updateMainTitle(title) {
  topbarMainTitle.innerText = title;
}

function updateBreadcrumb(paths) {
  breadcrumb.innerHTML = "";

  paths.forEach((text, index) => {
    const p = document.createElement("p");
    p.className = "body2-regular";
    p.innerText = text;
    breadcrumb.appendChild(p);

    if (index < paths.length - 1) {
      const img = document.createElement("img");
      img.className = "icon";
      img.src = "asset/icon/direction-right.svg";
      breadcrumb.appendChild(img);
    }
  });
}

async function loadPage(fileName, button) {

  buttons.forEach(btn => {
    btn.classList.remove("menu-button-on");
    btn.classList.add("menu-button-off");
    const icon = btn.querySelector("img.icon");
    const defaultSrc = icon.getAttribute("src");

    if (!icon.dataset.defaultSrc) icon.dataset.defaultSrc = defaultSrc;
    icon.setAttribute("src", icon.dataset.defaultSrc);
  });

  const activeIcon = button.querySelector("img.icon");
  activeIcon.setAttribute("src", activeIcon.getAttribute("data-icon-active"));

  button.classList.remove("menu-button-off");
  button.classList.add("menu-button-on");
  titleMenuButtons.forEach(title => {
    title.classList.add("body1-regular");
    title.classList.remove("body1");
  });

  const title = button.querySelector("p");
  title.classList.remove("body1-regular");
  title.classList.add("body1");

  contentDiv.classList.remove("page-show");
  contentDiv.classList.add("page-transition");

  setTimeout(async () => {
    const html = await fetch(`pages/${fileName}`).then(res => res.text());
    contentDiv.innerHTML = html;

    switch (fileName) {
      case "dashboard.html":
        updateMainTitle('Hello Robert 👋🏻'); // Có thể thay tên khác
        updateBreadcrumb(["Good Morning"]);
        if (typeof window.initDashBoardPage === "function") {
          window.initDashBoardPage();
        }
        break;
      case "employees.html":
        updateBreadcrumb(["All Employees"]);
        if (typeof window.initEmployeePage === "function") {
          window.initEmployeePage();
        }
        break;
      case "departments.html":
        updateMainTitle("All Departments");
        updateBreadcrumb(["All Departments Information"]);
        if (typeof window.initDepartmentPage === "function") {
          window.initDepartmentPage();
        }
        break;
      case "attendance.html":
        updateMainTitle("Attendance");
        updateBreadcrumb(["All Employee Attendance"]);
        if (typeof window.initAttendancePage === "function") {
          window.initAttendancePage();
        }
        break;
      case "payroll.html":
        updateMainTitle("Payroll");
        updateBreadcrumb(["All Employee Payroll"]);
        if (typeof window.initPayrollPage === "function") {
          window.initPayrollPage();
        }
        break;
      case "jobs.html":
        updateMainTitle("Jobs");
        updateBreadcrumb(["Show All Jobs"]);
        if (typeof window.initJobsPage === "function") {
          window.initJobsPage();
        }
        break;
      case "candidates.html":
        updateMainTitle("Candidates");
        updateBreadcrumb(["Show All Candidates"]);
        if (typeof window.initCandidatesPage === "function") {
          window.initCandidatesPage();
        }
        break;
      case "leaves.html":
        updateMainTitle("Leaves");
        updateBreadcrumb(["Leaves"]);
        if (typeof window.initLeavesPage === "function") {
          window.initLeavesPage();
        }
        break;
      case "holidays.html":
        updateMainTitle("Holidays");
        updateBreadcrumb(["All Holiday Lists"]);
        if (typeof window.initHolidaysPage === "function") {
          window.initHolidaysPage();
        }
        break;
      case "settings.html":
        updateMainTitle("Settings");
        updateBreadcrumb(["All System Settings"]);
        if (typeof window.initSettingsPage === "function") {
          window.initSettingsPage();
        }
        break;
    }
    requestAnimationFrame(() => {
      contentDiv.classList.remove("page-transition");
      contentDiv.classList.add("page-show");
    });
  }, 300);

  const pageTitle = button.querySelector("p").innerText;
  document.title = `HRMS | ${pageTitle}`;

}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    localStorage.setItem("activeMenuIndex", String(index));
    loadPage(pages[index], btn);
    window.location.href = './index.html'
  });
});


window.addEventListener("DOMContentLoaded", () => {
  let savedIndex = parseInt(localStorage.getItem("activeMenuIndex"), 10);

  if (Number.isNaN(savedIndex) || savedIndex < 0 || savedIndex >= buttons.length) {
    savedIndex = 0;
  }

  const defaultBtn = buttons[savedIndex] || buttons[0];
  loadPage(pages[savedIndex] || pages[0], defaultBtn);
});
