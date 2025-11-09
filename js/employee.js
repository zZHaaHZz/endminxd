function initEmployeePage() {
  console.log("Employee page loaded ✅");

  const tbody = document.getElementById("employee-body");
  if (tbody) {
    tbody.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
      tbody.innerHTML += `
        <tr class="td-body">
          <td class="td-tbl-emp td-name"><img src="img/avatar.jpg" alt=""><p>Bùi Quang Hà ${i}</p></td>
          <td class="td-tbl-emp td-id">${345321000 + i}</td>
          <td class="td-tbl-emp td-depart">Development</td>
          <td class="td-tbl-emp td-des">JS Developer</td>
          <td class="td-tbl-emp td-type">Office</td>
          <td class="td-tbl-emp td-status"><div class="box-td-stt-permanent">Permanent</div></td>
          <td class="td-tbl-emp td-acction">
            <i class="fa-solid fa-eye view-employee" data-id="${i}" title="Xem chi tiết"></i>
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash"></i>
          </td>
        </tr>`;
    }
  }

  // === Xử lý popup filter ===
  const filterBtn = document.querySelector(".fillter");
  const popup = document.getElementById("popup");
  const contentWrapper = document.querySelector(".index-container");
  const closePopup = document.getElementById("closePopup");
  const applyPopup = document.getElementById("applyPopup");
  const siderbar = document.getElementById("siderbar");

  const openPopup = () => {
    popup?.classList.add("show");
    contentWrapper?.style.setProperty("filter", "blur(6px)");
    siderbar?.style.setProperty("filter", "blur(6px)");
  };
  const closePopupFunc = () => {
    popup?.classList.remove("show");
    contentWrapper?.style.setProperty("filter", "none");
    siderbar?.style.setProperty("filter", "none");
  };

  filterBtn?.addEventListener("click", openPopup);
  closePopup?.addEventListener("click", closePopupFunc);
  applyPopup?.addEventListener("click", closePopupFunc);

  // === Nút thêm nhân viên ===
  const addBtn = document.querySelector(".btn-add-emloyee");
  addBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("./add-employee/07.html");
  });

  // === Nút xem chi tiết nhân viên (fa-eye) ===
  const viewBtns = document.querySelectorAll(".view-employee");
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id; // có thể truyền id vào trang 12 nếu cần
      console.log("👁 Xem thông tin nhân viên ID:", id);
      loadPage("./show-employee/12.html");
    });
  });
}
