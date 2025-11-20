function initAllDepartmentsPage() {
  console.log("Trang 20 loaded ✅");

  const tbody = document.getElementById("employee-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    tbody.innerHTML += `
      <tr class="td-body">
        <td class="td-tbl-emp td-name"><img src="img/avatar.jpg" alt=""><p>Bùi Quang Hà ${i}</p></td>
        <td class="td-tbl-emp td-id">${345321000 + i}</td>
        <td class="td-tbl-emp td-depart">Development</td>
        <td class="td-tbl-emp td-des">JS Developer</td>
        <td class="td-tbl-emp td-type">Office</td>
        <td class="td-tbl-emp td-status">
          <div class="box-td-stt-permanent">Permanent</div>
        </td>
        <td class="td-tbl-emp td-acction">
        
           <i class="fa-solid fa-eye view-employee" data-id="${i}" title="Xem chi tiết"></i>
          <i class="fa-solid fa-pen"></i>
          <i class="fa-solid fa-trash"></i>
        </td>
      </tr>
    `;
  }



  const viewBtns = document.querySelectorAll(".view-employee");
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      localStorage.setItem("activeMenuIndex", '1')
      window.location.href = "./2_Mainboard.html";
    });
  });

}


