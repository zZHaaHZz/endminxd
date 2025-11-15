function initAddEmployeePage() {
  console.log("Add Employee page loaded ✅");

  const tabs = document.querySelectorAll(".top-main-content-add-employee p");

  const content = document.querySelector("#center-main-content-add-employee");
  if (!tabs.length || !content) return;

  const defaultSection = document.getElementById("default-add-employee-section");
  if (defaultSection) {
    content.innerHTML = defaultSection.innerHTML;
    tabs.forEach((t, i) =>
      t.classList.toggle("top-main-content-add-employee-active", i === 0)
    );
  }

  const files = [
    "./add-employee/07.html",
    "./add-employee/08.html",
    "./add-employee/09.html",
    "./add-employee/10.html"
  ];

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", async () => {
      tabs.forEach((t) =>
        t.classList.remove("top-main-content-add-employee-active")
      );
      tab.classList.add("top-main-content-add-employee-active");

      if (index === 0) {
        if (defaultSection) content.innerHTML = defaultSection.innerHTML;
        attachButtonEvents();
        return;
      }

      const fileToLoad = files[index];
      try {
        const res = await fetch(fileToLoad);
        if (!res.ok) throw new Error(`Không thể tải ${fileToLoad}`);
        const html = await res.text();
        content.innerHTML = html;
        attachButtonEvents();
      } catch (err) {
        content.innerHTML = `<p style="color:red;padding:10px;">${err.message}</p>`;
        console.error(err);
      }
    });
  });


  // xy ly cancel next
  function attachButtonEvents() {
    let btnNext = document.getElementById("next-employee");
    let btnCancel = document.getElementById("cancel-employee");

    // Clone để xóa event cũ
    if (btnNext) {
      const newBtnNext = btnNext.cloneNode(true);
      btnNext.parentNode.replaceChild(newBtnNext, btnNext);
      btnNext = newBtnNext;
    }
    if (btnCancel) {
      const newBtnCancel = btnCancel.cloneNode(true);
      btnCancel.parentNode.replaceChild(newBtnCancel, btnCancel);
      btnCancel = newBtnCancel;
    }

    // --- Cancel → quay lại danh sách nhân viên
    btnCancel?.addEventListener("click", (e) => {
      e.preventDefault();
      loadPageMaster("./06.html");
    });

    // --- Next → sang bước kế tiếp
    btnNext?.addEventListener("click", async (e) => {
      e.preventDefault();
      const activeIndex = [...tabs].findIndex((t) =>
        t.classList.contains("top-main-content-add-employee-active")
      );

      if (activeIndex < files.length - 1) {
        tabs.forEach((t) =>
          t.classList.remove("top-main-content-add-employee-active")
        );
        tabs[activeIndex + 1].classList.add(
          "top-main-content-add-employee-active"
        );

        const nextFile = files[activeIndex + 1];
        const res = await fetch(nextFile);
        const html = await res.text();
        content.innerHTML = html;
        attachButtonEvents();
      } else {
        // ✅ Chỉ hiển alert 1 lần rồi chuyển trang
        alert("✅ Đã hoàn tất thêm nhân viên!");
        loadPageMaster("./06.html");
      }
    });
  }

  // Gắn sự kiện lần đầu
  attachButtonEvents();
}
