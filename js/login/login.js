// Login
const btnGotoForgotPassword = document.getElementById('goto-page-forgot-password');
const pageForgotPassword = document.getElementById('page-forgot-password');
const pageLogin = document.getElementById('page-login');
const btnBackToLogin = document.getElementById('btn-back-to-login');
const pageChangePassword = document.getElementById('page-change-password');
const inputEmailLogin = document.getElementById('input-email-login');
const inputPasswordLogin = document.getElementById('input-password-login');
const togglePasswordLogin = document.getElementById('toggle-password-login');

function togglePasswordVisibility(inputField, toggleIcon) {
    if (inputField.type === "password") {
        inputField.type = "text";
        toggleIcon.src = "asset/icon/eye.svg";
    }
    else {
        inputField.type = "password";
        toggleIcon.src = "asset/icon/eye-disable.svg";
    }
}

togglePasswordLogin.addEventListener("click", () => {
    togglePasswordVisibility(inputPasswordLogin, togglePasswordLogin);
});

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

// Go to Forgot password
btnGotoForgotPassword.addEventListener("click", () => {
    showPage(pageForgotPassword, pageLogin);
    inputEmailSendOTP.value = inputEmailLogin.value.trim();
    if (isValidEmail(inputEmailSendOTP.value.trim())) {
        btnSendOTP.disabled = false;
    } else {
        btnSendOTP.disabled = true;
    }
    setTimeout(() => {
        inputEmailSendOTP.focus();
    }, 350);
});

// Back to Login
btnBackToLogin.addEventListener("click", () => {
    showPage(pageLogin, pageForgotPassword);
});

pageLogin.classList.add("active");


// Forgot password
const btnSendOTP = document.getElementById('btn-send-otp');
const pageOTP = document.getElementById('page-otp');
const inputEmailSendOTP = document.getElementById('input-email-send-otp');

// Send OTP to go to OTP page
btnSendOTP.disabled = true;

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

inputEmailSendOTP.addEventListener("input", () => {
    if (isValidEmail(inputEmailSendOTP.value.trim())) {
        btnSendOTP.disabled = false;
    } else {
        btnSendOTP.disabled = true;
    }
});

btnSendOTP.addEventListener("click", () => {
    const email = inputEmailSendOTP.value.trim();
    if (isValidEmail(inputEmailSendOTP.value.trim())) {
        if (isValidEmail(email)) {
            nofiSendOTPToEmail.textContent =
                `We have sent a code to your registered email address ${email}`;

            showPage(pageOTP, pageForgotPassword);
            //reset input OTP
            inputs.forEach(input => input.value = "");
            setTimeout(() => {
                inputs[0].focus();
            }, 350);
        }
    }
});

// Back to Forgot password from OTP
const btnBackToForgotPassword = document.getElementById('btn-back-to-page-forgot-password');
btnBackToForgotPassword.addEventListener("click", () => {
    showPage(pageForgotPassword, pageOTP);
});

// OTP INPUT
const inputs = document.querySelectorAll('.otp-input input');
const nofiSendOTPToEmail = document.getElementById('nofi-send-otp-to-email');
const btnVerifyOTP = document.getElementById('btn-verify-otp');
const btnBackToPageOTP = document.getElementById('btn-back-to-page-otp');

btnVerifyOTP.disabled = true;

function checkOTPFilled() {
    const otp = Array.from(inputs).map(input => input.value).join('');
    btnVerifyOTP.disabled = otp.length !== inputs.length;
}

inputs.forEach((input, index) => {
    input.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, "");

        if (this.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

        checkOTPFilled();
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === "Backspace" && !this.value && index > 0) {
            inputs[index - 1].focus();
        }
        setTimeout(checkOTPFilled, 10);
    });
});

btnVerifyOTP.addEventListener("click", () => {
    showPage(pageChangePassword, pageOTP);
    //reset input OTP
    inputs.forEach(input => input.value = "");
    setTimeout(() => {
        inputNewPassword.focus();
    }, 350);
});

// Change Password
const btnChangePassword = document.getElementById('btn-change-password');
const inputNewPassword = document.getElementById('input-new-password');
const inputConfirmNewPassword = document.getElementById('input-confirm-new-password');
const toggleNewPassword = document.getElementById('toggle-new-password');
const toggleNewPasswordConfirm = document.getElementById('toggle-new-password-confirm');
const popupChangePasswordSuccess = document.getElementById('popup-change-password-success');
const btnBackToLoginFromPopup = document.getElementById('btn-popup-back-to-login');

toggleNewPassword.addEventListener("click", () => {
    togglePasswordVisibility(inputNewPassword, toggleNewPassword);
});

toggleNewPasswordConfirm.addEventListener("click", () => {
    togglePasswordVisibility(inputConfirmNewPassword, toggleNewPasswordConfirm);
});

btnChangePassword.addEventListener("click", () => {
    if (inputNewPassword.value === inputConfirmNewPassword.value && inputNewPassword.value.length >= 6) {
        inputNewPassword.value = "";
        inputConfirmNewPassword.value = "";
        // showPage(pageLogin, pageChangePassword);
        // setTimeout(() => {
        //     inputPasswordLogin.focus();
        // }, 350);
        popupChangePasswordSuccess.style.display = "flex";
        setTimeout(() => {
            popupChangePasswordSuccess.classList.add("active");
        }, 10);

    }
});

btnBackToLoginFromPopup.addEventListener("click", () => {
    popupChangePasswordSuccess.classList.remove("active");
    setTimeout(() => {
        popupChangePasswordSuccess.style.display = "none";
        showPage(pageLogin, pageChangePassword);
        setTimeout(() => {
            inputPasswordLogin.focus();
        }, 350);
    }, 300);
});


// Back to OTP from Change Password
btnBackToPageOTP.addEventListener("click", () => {
    showPage(pageOTP, pageChangePassword);
    //reset input OTP
    inputs.forEach(input => input.value = "");
    setTimeout(() => {
        inputs[0].focus();
    }, 350);
});

const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener("click", () => {
    const email = inputEmailLogin.value.trim();
    const password = inputPasswordLogin.value;

    if (isValidEmail(email) && password.length >= 6) {
        localStorage.setItem("isLogin", "true"); 
        window.location.href = "index.html";
    }
});
