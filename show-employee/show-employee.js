function initShowEmployeePage() {
  console.log("Show Employee page loaded ✅");

  const tabs = document.querySelectorAll(".top-main-content-add-employee p");
  const content = document.querySelector("#center-main-content-show-employee");

  if (!tabs.length || !content) return;

  // Mặc định hiển thị phần đầu tiên (13.html)
  const defaultFile = "./show-employee/13.html";

  const loadInnerSection = async (file) => {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Không thể tải ${file}`);
      const html = await res.text();
      content.innerHTML = html;
    } catch (err) {
      content.innerHTML = `<p style="color:red;padding:10px;">${err.message}</p>`;
    }
  };

  // Tải mặc định tab 1
  loadInnerSection(defaultFile);

  const files = [
    "./show-employee/13.html",
    "./show-employee/14.html",
    "./show-employee/15.html",
    "./show-employee/16.html",
  ];

  // Lắng nghe sự kiện click
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("top-main-content-add-employee-active"));
      tab.classList.add("top-main-content-add-employee-active");
      loadInnerSection(files[index]);
    });
  });
}
