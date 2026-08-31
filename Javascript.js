const TOTAL_TUITION_USD = 5000;
const PAYMENT_AMOUNT_USD = 1000;
const TOTAL_PAYMENTS = 5;

let completedPayments = Number(
  localStorage.getItem("promaxCompletedPayments")
) || 0;

const paymentProgressFill =
  document.getElementById("paymentProgressFill");

const paymentStatus =
  document.getElementById("paymentStatus");

const addPaymentButton =
  document.getElementById("addPayment");

const removePaymentButton =
  document.getElementById("removePayment");

const resetPaymentButton =
  document.getElementById("resetPayment");

const paymentMarkers =
  document.querySelectorAll(".payment-marker");

function formatUSD(amount) {
  return `$${amount.toLocaleString("en-US")} USD`;
}

function updatePaymentSystem() {
  completedPayments = Math.max(
    0,
    Math.min(completedPayments, TOTAL_PAYMENTS)
  );

  const paidAmount =
    completedPayments * PAYMENT_AMOUNT_USD;

  const remainingBalance =
    TOTAL_TUITION_USD - paidAmount;

  const progressPercent =
    (completedPayments / TOTAL_PAYMENTS) * 100;

  if (paymentProgressFill) {
    paymentProgressFill.style.width =
      `${progressPercent}%`;
  }

  paymentMarkers.forEach(function (marker, index) {
    marker.classList.toggle(
      "paid",
      index < completedPayments
    );
  });

  if (paymentStatus) {
    paymentStatus.textContent =
      `Payments completed: ${completedPayments}/${TOTAL_PAYMENTS}` +
      ` · Paid: ${formatUSD(paidAmount)}` +
      ` · Balance: ${formatUSD(remainingBalance)}`;
  }

  localStorage.setItem(
    "promaxCompletedPayments",
    completedPayments
  );
}

if (addPaymentButton) {
  addPaymentButton.addEventListener("click", function () {
    if (completedPayments < TOTAL_PAYMENTS) {
      completedPayments += 1;
      updatePaymentSystem();
    }
  });
}

if (removePaymentButton) {
  removePaymentButton.addEventListener("click", function () {
    if (completedPayments > 0) {
      completedPayments -= 1;
      updatePaymentSystem();
    }
  });
}

if (resetPaymentButton) {
  resetPaymentButton.addEventListener("click", function () {
    completedPayments = 0;
    updatePaymentSystem();
  });
}

updatePaymentSystem();
