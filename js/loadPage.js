async function loadHTML(id, file) {
    try {
        const element = document.getElementById(id);
        if (!element) throw new Error(`Không tìm thấy phần tử có id="${id}"`);

        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải file: ${file}`);

        element.innerHTML = await res.text();

        if (id === "siderbar") initSidebarEvents();

        return true;
    } catch (err) {
        console.error(`Lỗi loadHTML(${id}):`, err.message);
    }
}

async function loadPage(file) {
    const content = document.getElementById("content-hrms");
    if (!content) return;
    console.log(file)
    if (file == "./23.html" || file == "./25.html" || file == "./26.html" || file == "./28.html" || file == "./40.html") {
        alert("Chuc nang dang phat trien");
        window.location.href = "./index.html"
    }
    try {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải file: ${file}`);

        content.innerHTML = await res.text();

        // Gọi init phù hợp
        if (file.includes("dashboard.html") && typeof initAttendanceChart === "function") setTimeout(initAttendanceChart, 50);
        if (file.includes("employees.html") && typeof initEmployeePage === "function") setTimeout(initEmployeePage, 50);
        if (file.includes("add_employee_07.html") && typeof initAddEmployeePage === "function") setTimeout(initAddEmployeePage, 50);
        if (file.includes("departments.html") && typeof initDepartmentPage === "function") setTimeout(initDepartmentPage, 50);
        if (file.includes("attendance.html") && typeof initAllDepartmentsPage === "function") setTimeout(initAllDepartmentsPage, 50);
        if (file.includes("payroll.html") && typeof initAllDepartmentsPage === "function");
        if (file.includes("payroll.html") && typeof addPayroll === "function") setTimeout(addPayroll, 50);
    } catch (err) {
        content.innerHTML = `<p style="color:red;padding:20px;">${err.message}</p>`;
    }
}

let idx = localStorage.getItem('activeMenuIndex');

if (idx === null) {
    localStorage.setItem('activeMenuIndex', '0');
    idx = '0';
}
// mặc định false nếu chưa login
let isLogin = localStorage.getItem("isLogin") === "true";

if (!isLogin) {

    window.location.href = "1_Login.html";
} 
loadHTML("siderbar", "./site/siderbar.html").then(() => {
    const sidebar = document.getElementById("siderbar");
    if (!sidebar) return;
    switch (localStorage.getItem('activeMenuIndex')) {
        case '0':
            loadPage("dashboard.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '1':
            loadPage("employees.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '2':
            loadPage("departments.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '3':
            loadPage("attendance.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '4':
            loadPage("payroll.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '5':
            alert("chuc nang dang phat trien");
            loadPage("dashboard.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '6':
            alert("chuc nang dang phat trien");
            loadPage("dashboard.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '7':
            alert("chuc nang dang phat trien");
            loadPage("dashboard.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '8':
            alert("chuc nang dang phat trien");
            loadPage("dashboard.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        case '9':
            alert("chuc nang dang phat trien");
            loadPage("dashboard.html");
            localStorage.removeItem('activeMenuIndex')
            break;
        default:
            break;
    }
});
loadHTML("header", "./site/header.html");


function initSidebarEvents() {
    const sidebar = document.getElementById("siderbar");
    if (!sidebar) return;

    sidebar.addEventListener("click", (e) => {
        const a = e.target.closest("a");
        if (!a) return;
        e.preventDefault();

        sidebar.querySelectorAll("li").forEach(li => li.classList.remove("siderbar-active"));
        a.closest("li")?.classList.add("siderbar-active");

        const path = a.getAttribute("href").replace("/", "");
        loadPage(`./${path}.html`);
    });
}

function initDepartmentPage() {
    console.log("Page 19 loaded ✅");

    // Lấy tất cả nút "View All"
    const viewAllBtns = document.querySelectorAll(".viewAlldepartments");

    if (!viewAllBtns.length) {
        console.warn("❌ Không tìm thấy nút View All");
        return;
    }

    // Gắn sự kiện click cho từng nút
    viewAllBtns.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(`👉 Click View All ở phòng ${index + 1}`);

            loadPage("employees.html");
        });
    });
}
const pages = [
    "dashboard.html", // Quang Hà
    "employees.html", // Quang Hà
    "departments.html", //Quang Hà
    "attendance.html", //Quang Hà
    "payroll.html",//Quang Hà
    "jobs.html",
    "candidates.html",
    "leaves.html",
    "holidays.html",
    "settings.html"
];
