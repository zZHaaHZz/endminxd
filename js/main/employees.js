function initEmployeePage() {

    function showPage(pageShow, pageHide) {
        // Ẩn page hiện tại
        pageHide.classList.remove("active");

        setTimeout(() => {
            pageHide.style.display = "none";

            // Hiện page mới
            pageShow.style.display = "flex";

            setTimeout(() => {
                pageShow.classList.add("active");
            }, 10);
        }, 300);
    }

    function profileDetailsPage() {
        const tabPersonaInfo = document.querySelectorAll(".persona-info-tabbar .persona-info-tabbar-on, .persona-info-tabbar .persona-info-tabbar-off");
        const titlePersonaInfo = document.querySelectorAll(".persona-info-tabbar .persona-info-tabbar-on p, .persona-info-tabbar .persona-info-tabbar-off p");

        const personalInfoDetails = document.getElementById("persona-info");
        const professionalInfoDetails = document.getElementById("professional-info");
        const documentsDetails = document.getElementById("documents");
        const acountAccessDetails = document.getElementById("account-access");

        personalInfoDetails.style.display = "flex";
        personalInfoDetails.classList.add("active");

        tabPersonaInfo.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                tabPersonaInfo.forEach(tb => {
                    tb.classList.remove("persona-info-tabbar-on");
                    tb.classList.add("persona-info-tabbar-off");
                    const icon = tb.querySelector("img");
                    const defaultSrc = icon.getAttribute("src");

                    if (!icon.dataset.defaultSrc) icon.dataset.defaultSrc = defaultSrc;
                    icon.setAttribute("src", icon.dataset.defaultSrc);
                });
                const iconActive = tab.querySelector("img");
                iconActive.setAttribute("src", iconActive.getAttribute("data-icon-active"));

                tab.classList.remove("persona-info-tabbar-off");
                tab.classList.add("persona-info-tabbar-on");
                switch (index) {
                    case 0:
                        updateBreadcrumb(["All Employees", "Brooklyn Simmons", "Profile", "Personal Infomation"]);
                        showPage(personalInfoDetails, professionalInfoDetails);
                        showPage(personalInfoDetails, documentsDetails);
                        showPage(personalInfoDetails, acountAccessDetails);
                        titlePersonaInfo.forEach(title => {
                            title.classList.add("body1-regular");
                            title.classList.remove("body1");
                        });
                        const title = tab.querySelector("p");
                        title.classList.remove("body1-regular");
                        title.classList.add("body1");
                        break;
                    case 1:
                        updateBreadcrumb(["All Employees", "Brooklyn Simmons", "Profile", "Professional Infomation"]);
                        showPage(professionalInfoDetails, personalInfoDetails);
                        showPage(professionalInfoDetails, documentsDetails);
                        showPage(professionalInfoDetails, acountAccessDetails);
                        titlePersonaInfo.forEach(title => {
                            title.classList.add("body1-regular");
                            title.classList.remove("body1");
                        });
                        const title1 = tab.querySelector("p");
                        title1.classList.remove("body1-regular");
                        title1.classList.add("body1");
                        break;
                    case 2:
                        updateBreadcrumb(["All Employees", "Brooklyn Simmons", "Profile", "Documents"]);
                        showPage(documentsDetails, personalInfoDetails);
                        showPage(documentsDetails, professionalInfoDetails);
                        showPage(documentsDetails, acountAccessDetails);
                        titlePersonaInfo.forEach(title => {
                            title.classList.add("body1-regular");
                            title.classList.remove("body1");
                        });
                        const title2 = tab.querySelector("p");
                        title2.classList.remove("body1-regular");
                        title2.classList.add("body1");
                        break;
                    case 3:
                        updateBreadcrumb(["All Employees", "Brooklyn Simmons", "Profile", "Account Access"]);
                        showPage(acountAccessDetails, personalInfoDetails);
                        showPage(acountAccessDetails, professionalInfoDetails);
                        showPage(acountAccessDetails, documentsDetails);
                        titlePersonaInfo.forEach(title => {
                            title.classList.add("body1-regular");
                            title.classList.remove("body1");
                        });
                        const title3 = tab.querySelector("p");
                        title3.classList.remove("body1-regular");
                        title3.classList.add("body1");
                        break;
                }
            });

        });

        tabPersonaInfo[0].click();
    }

    function viewEmployee() {
        const sideOptions = document.querySelectorAll(".side-options-off, .side-options-on");
        const titleSideOptions = document.querySelectorAll(".side-options-off p, .side-options-on p");

        const profileDetails = document.getElementById("profile-details");
        const attendanceDetails = document.getElementById("attendance-details");
        const documentsDetails = document.getElementById("documents-details");
        const levaveDetails = document.getElementById("leave-details");

        profileDetails.style.display = "flex";
        profileDetails.classList.add("active");

        updateMainTitle("Brooklyn Simmons");

        sideOptions.forEach((option, index) => {
            option.addEventListener("click", () => {
                sideOptions.forEach(opt => {
                    opt.classList.remove("side-options-on");
                    opt.classList.add("side-options-off");
                    const icon = opt.querySelector("img");
                    const defaultSrc = icon.getAttribute("src");
                    if (!icon.dataset.defaultSrc) icon.dataset.defaultSrc = defaultSrc;
                    icon.setAttribute("src", icon.dataset.defaultSrc);
                });
                const iconActive = option.querySelector("img");
                iconActive.setAttribute("src", iconActive.getAttribute("data-icon-active"));
                option.classList.remove("side-options-off");
                option.classList.add("side-options-on");
                switch (index) {
                    case 0:
                        updateBreadcrumb(["All Employees", "Brooklyn Simmons", "Profile"]);
                        showPage(profileDetails, attendanceDetails);
                        showPage(profileDetails, documentsDetails);
                        showPage(profileDetails, levaveDetails);
                        profileDetailsPage();
                        titleSideOptions.forEach(title => {
                            title.classList.add("body1-regular");
                            title.classList.remove("body1");
                        });
                        const title = option.querySelector("p");
                        title.classList.remove("body1-regular");
                        title.classList.add("body1");
                        break;
                    case 1:
                        updateBreadcrumb(["All Employees", "Brooklyn Simmons", "Attendance"]);
                        showPage(attendanceDetails, profileDetails);
                        showPage(attendanceDetails, documentsDetails);
                        showPage(attendanceDetails, levaveDetails);
                        titleSideOptions.forEach(title => {
                            title.classList.add("body1-regular");
                            title.classList.remove("body1");
                        });
                        const title1 = option.querySelector("p");
                        title1.classList.remove("body1-regular");
                        title1.classList.add("body1");
                        break;
                    case 2:
                        updateBreadcrumb(["All Employees", "Brooklyn Simmons", "Documents"]);
                        showPage(documentsDetails, profileDetails);
                        showPage(documentsDetails, attendanceDetails);
                        showPage(documentsDetails, levaveDetails);
                        titleSideOptions.forEach(title => {
                            title.classList.add("body1-regular");
                            title.classList.remove("body1");
                        });
                        const title2 = option.querySelector("p");
                        title2.classList.remove("body1-regular");
                        title2.classList.add("body1");
                        break;
                    case 3:
                        updateBreadcrumb(["All Employees", "Brooklyn Simmons", "Leaves"]);
                        showPage(levaveDetails, profileDetails);
                        showPage(levaveDetails, attendanceDetails);
                        showPage(levaveDetails, documentsDetails);
                        titleSideOptions.forEach(title => {
                            title.classList.add("body1-regular");
                            title.classList.remove("body1");
                        });
                        const title3 = option.querySelector("p");
                        title3.classList.remove("body1-regular");
                        title3.classList.add("body1");
                        break;
                }
            });
        });

        sideOptions[0].click();
    }

    viewEmployee();

}

window.initEmployeePage = initEmployeePage;