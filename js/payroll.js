function addPayroll() {
    const getpay = document.getElementById("list-pay");
    if (getpay) {
        const employees = [
            { name: "Bui Quang Ha 1", ctc: 45000, monthly: 4000, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 2", ctc: 38000, monthly: 3500, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 3", ctc: 50000, monthly: 4200, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 4", ctc: 43300, monthly: 4600, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 5", ctc: 47431, monthly: 4700, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 6", ctc: 46730, monthly: 4600, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 7", ctc: 44810, monthly: 4001, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 8", ctc: 43940, monthly: 4600, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 9", ctc: 46800, monthly: 4584, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 10", ctc: 45830, monthly: 4992, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 11", ctc: 46870, monthly: 4780, img: "/img/avatar.jpg" },
            { name: "Bui Quang Ha 12", ctc: 47445, monthly: 4883, img: "/img/avatar.jpg" },
          ];

        

        employees.forEach(emp => {
            const deduction = Math.floor(Math.random() * 501); // random 0 -> 500
            const statusOK = Math.random() < 0.5; // random true/false
            const statusText = statusOK ? "Completed" : "Pending";
            const statusClass = statusOK ? "pay-status-completed" : "pay-status-pending";

            const html = `
    <div class="pay-employee">
      <div class="name-payroll">
        <img src="${emp.img}" alt="">
        <p class="name">${emp.name}</p>
      </div>
      <p class="pay-ctc">$${emp.ctc}</p>
      <p class="pay-thang">$${emp.monthly}</p>
      <p class="pay-deduction">$${deduction}</p>
      <p class="${statusClass}">${statusText}</p>
    </div>
  `;
            getpay.insertAdjacentHTML("beforeend", html);
        });
    }
}
