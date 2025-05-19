// ===========================================
// Early Payout Calculator – TValue-Accurate
// FINAL (clean Step-3 view + spread-aware Min/Max)
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    const amtInput = document.getElementById("calculator-paymentAmount");

amtInput.addEventListener("input", () => {
  const rawValue = amtInput.value;

  // Limit input to 7 digits
  if (rawValue.length > 7) {
    amtInput.value = rawValue.slice(0, 7);
  }

  const amount = parseInt(amtInput.value);
  const isValid = !isNaN(amount) && amount >= 100 && amount <= 1000000;

  // Apply red highlight if invalid
  amtInput.classList.toggle("invalid", !isValid);
});

  /* ────────────────────────────────────────
     payemnt end date 
  ───────────────────────────────────────── */


const startDateInput = document.getElementById("calculator-startDate");
const endDateInput = document.getElementById("calculator-endDate");

// ✅ Validate start date is not before May 14, 2024
function validateStartDate() {
  const startDate = new Date(startDateInput.value);
  const errorMsg = document.getElementById("startDate-error");

  const today = new Date();
  today.setHours(0, 0, 0, 0); // remove time
  const minAllowed = new Date("2024-05-14");
  const effectiveMinDate = today > minAllowed ? today : minAllowed;

  const isValid = !isNaN(startDate) && startDate >= effectiveMinDate;

  startDateInput.classList.toggle("invalid", !isValid);

  // Show/hide message
  if (!isValid) {
    errorMsg.textContent = "Payment Start Date cannot be in the past.";
    errorMsg.classList.add("visible");
  } else {
    errorMsg.textContent = "";
    errorMsg.classList.remove("visible");
  }
}


// ✅ Validate end date is at least 6 months after start date
function validateDateRange() {
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);
  const errorMsg = document.getElementById("endDate-error");

  if (!isNaN(startDate) && !isNaN(endDate)) {
    const sixMonthsLater = new Date(startDate);
    sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

    const isValid = endDate >= sixMonthsLater;

    endDateInput.classList.toggle("invalid", !isValid);

    if (!isValid) {
      errorMsg.textContent = "Payment End Date must be at least 6 months after Start Date.";
      errorMsg.classList.add("visible");
    } else {
      errorMsg.textContent = "";
      errorMsg.classList.remove("visible");
    }
  }
}


// ✅ Only add listeners ONCE
startDateInput.addEventListener("change", () => {
  validateStartDate();
  validateDateRange();
});

endDateInput.addEventListener("change", validateDateRange);


  /* ────────────────────────────────────────
     MODE & INCREASE BUTTONS
  ───────────────────────────────────────── */
  const modeButtons     = document.querySelectorAll(".calculator-mode-button");
  const increaseButtons = document.querySelectorAll(".calculator-increase-button");

  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modeButtons.forEach(b => b.classList.remove("selected-mode"));
      btn.classList.add("selected-mode");
      document.querySelector(".calculator")
        .classList.toggle("lumpsum-active", btn.dataset.mode === "Lump Sum");
    });
  });

  increaseButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      increaseButtons.forEach(b => b.classList.remove("selected-increase"));
      btn.classList.add("selected-increase");
    });
  });

  /* ────────────────────────────────────────
     MAIN  (Step-1)
  ───────────────────────────────────────── */
  document.getElementById("main-action-button").addEventListener("click", () => {

    const amtInput = document.getElementById("calculator-paymentAmount");
    const amt = parseFloat(amtInput.value);

      if (isNaN(amt) || amt < 100 || amt > 1000000) {
        alert("Please enter a valid payment amount between $100 and $1,000,000.");
        amtInput.focus();
        return;
      }


    if (selectedPaymentType === "Guaranteed") {
      calculateNPV();
      showExtendedPayouts(false);                 // → Step-3
    } else if (lcpStep === 1) {
      step1.style.display = "none";
      step2.style.display = "block";
      paymentTypeSection.style.display = "none";
      lcpStep = 2;
    }
  });

  /* ────────────────────────────────────────
     LCP CALCULATE (Step-2)
  ───────────────────────────────────────── */
  document.getElementById("lcp-calculateBtn").addEventListener("click", () => {
    calculateLCPNPV();
    showExtendedPayouts(true);                    // → Step-3
  });

  /* ────────────────────────────────────────
     LCP BACK   (Step-2 → Step-1)
  ───────────────────────────────────────── */
  document.getElementById("lcp-backBtn").addEventListener("click", () => {
    step1.style.display = "block";
    step2.style.display = "none";
    paymentTypeSection.style.display = "block";
    lcpStep = 1;
    mainActionButton.innerText = "Next";
  });
});

/* ==========================================
   GLOBAL STATE & ELEMENTS
========================================== */
let selectedPaymentType = "Guaranteed";
let lcpStep             = 1;

const mainActionButton   = document.getElementById("main-action-button");
const step1              = document.getElementById("calculator-step-1");
const step2              = document.getElementById("calculator-step-2");
const step3              = document.getElementById("calculator-step-3");
const extendedResults    = document.getElementById("extended-payout-results");
const paymentTypeSection = document.getElementById("paymentTypeSection");

/* ────────────────────────────────────────
   TYPE-SELECT  (Guaranteed / LCP)
───────────────────────────────────────── */
document.querySelectorAll(".calculator-type-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".calculator-type-button").forEach(b => b.classList.remove("selected-type"));
    btn.classList.add("selected-type");

    selectedPaymentType = btn.dataset.type;
    lcpStep = 1;

    step1.style.display           = "block";
    step2.style.display           = "none";
    step3.style.display           = "none";
    extendedResults.style.display = "none";
    paymentTypeSection.style.display = "block";

    mainActionButton.innerText = (selectedPaymentType === "Guaranteed") ? "Calculate" : "Next";
  });
});

/* Highlight LCP answers */
document.querySelectorAll(".lcp-question").forEach(q => {
  q.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      q.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });
});

/* ==========================================
   UTILITY HELPERS
========================================== */
function addMonths(date, months) {
  const d = new Date(date), day = d.getDate();
  d.setMonth(d.getMonth() + months);
  if (d.getDate() < day) d.setDate(0);
  return d;
}
function getAdjustmentByKey(key) {
  const el = document.querySelector(`#adjustment-config div[data-key="${key}"]`);
  return el ? parseFloat(el.dataset.adjustment) : 0;
}
function getSelectedLcpKeys() {
  return Array.from(document.querySelectorAll(".lcp-question button.selected"))
              .map(btn => btn.dataset.key);
}
function getAdjustmentMap() {
  const map = {};
  document.querySelectorAll("#adjustment-config div").forEach(el => {
    map[el.dataset.key] = parseFloat(el.dataset.adjustment);
  });
  return map;
}
function calcAdjRate(base, keys, mapa) {
  return base + keys.reduce((s, k) => s + (mapa[k] || 0), 0);
}

/* ==========================================
   GENERIC NPV (any discount-rate)
========================================== */
function calcNPVAnyRate(discountRate) {
  const amt = parseFloat(document.getElementById("calculator-paymentAmount").value);
  const inc = parseFloat(document.querySelector(".selected-increase")?.dataset.rate || 0);
  const s   = new Date(document.getElementById("calculator-startDate").value);
  const e   = new Date(document.getElementById("calculator-endDate").value);
  const mode= document.querySelector(".selected-mode")?.dataset.mode || "Monthly";
  const today = new Date();
  const fm = {Monthly:12,Quarterly:4,Semiannually:2,Annually:1,"Lump Sum":1};
  const per  = fm[mode];
  const gap  = 12 / per;

  let npv = 0, payment = amt, idx = 0;
  for (let d = new Date(s); d <= e; d = addMonths(d, gap), idx++) {
    const months = (d.getFullYear() - today.getFullYear()) * 12 + (d.getMonth() - today.getMonth());
    npv += payment / Math.pow(1 + discountRate / 12, months);
    if ((idx + 1) % per === 0) payment *= 1 + inc / 100;
  }
  return npv;
}

/* ==========================================
   GUARANTEED NPV  (original)
========================================== */
function calculateNPV() {
  const amt  = parseFloat(document.getElementById("calculator-paymentAmount").value);
  const inc  = parseFloat(document.querySelector(".selected-increase")?.dataset.rate || 0);
  const rate = parseFloat(document.getElementById("calculator-discountRate").value) / 100;
  const s    = new Date(document.getElementById("calculator-startDate").value);
  const e    = new Date(document.getElementById("calculator-endDate").value);
  const mode = document.querySelector(".selected-mode")?.dataset.mode || "Monthly";
  const today= new Date();
  const fm   = {Monthly:12,Quarterly:4,Semiannually:2,Annually:1,"Lump Sum":1};
  const per  = fm[mode], gap = 12 / per;

  let npv=0,payment=amt,idx=0;
  for (let d=new Date(s); d<=e; d=addMonths(d,gap), idx++){
    const m=(d.getFullYear()-today.getFullYear())*12 + (d.getMonth()-today.getMonth());
    npv += payment / Math.pow(1+rate/12, m);
    if((idx+1)%per===0) payment *= 1+inc/100;
  }
  document.getElementById("npvResult").innerText   = `NPV Result: $${npv.toFixed(2)}`;
  document.getElementById("totalPayments").innerText = `Total Payments: ${idx}`;
}

/* ==========================================
   LCP NPV  (original logic)
========================================== */
function calculateLCPNPV() {
  const amt  = parseFloat(document.getElementById("calculator-paymentAmount").value);
  const inc  = parseFloat(document.querySelector(".selected-increase")?.dataset.rate || 0);
  const base = parseFloat(document.getElementById("calculator-discountRate").value) / 100;
  const s    = new Date(document.getElementById("calculator-startDate").value);
  const e    = new Date(document.getElementById("calculator-endDate").value);
  const mode = document.querySelector(".selected-mode")?.dataset.mode || "Monthly";
  const today= new Date();
  const fm   = {Monthly:12,Quarterly:4,Semiannually:2,Annually:1,"Lump Sum":1};
  const per  = fm[mode], gap = 12 / per;

  const adjRate = calcAdjRate(base, getSelectedLcpKeys(), getAdjustmentMap());

  let npv=0,payment=amt,idx=0;
  for (let d=new Date(s); d<=e; d=addMonths(d,gap), idx++){
    const m=(d.getFullYear()-today.getFullYear())*12 + (d.getMonth()-today.getMonth());
    npv += payment / Math.pow(1+adjRate/12, m);
    if((idx+1)%per===0) payment *= 1+inc/100;
  }
  document.getElementById("lcp-npv-result").innerText = `Net Present Value: $${npv.toFixed(2)}`;
}

/* ==========================================
   EXTENDED PAYOUT (swap to Step-3)
========================================== */
function showExtendedPayouts(isLCP) {
  const id = isLCP ? "lcp-npv-result" : "npvResult";
  const m  = document.getElementById(id).innerText.match(/\$([\d,.]+)/);
  if (!m) return;

  const npv = parseFloat(m[1].replace(/,/g, ""));
  calculateAdditionalPayouts(isLCP);
  calculateFamilyProtectionValue(npv, isLCP);

  step1.style.display = "none";
  step2.style.display = "none";
  paymentTypeSection.style.display = "none";
  step3.style.display = "block";
  extendedResults.style.display = "block";
}

/* ==========================================
   MIN / MAX PAYOUT  (spread + profile adj)
========================================== */
function calculateAdditionalPayouts(isLCP) {
  const base = parseFloat(document.getElementById("calculator-discountRate").value) / 100;
  const minSp= parseFloat(document.querySelector('[data-key="minimum-payout"]').dataset.rateSpread || 0);
  const maxSp= parseFloat(document.querySelector('[data-key="maximum-payout"]').dataset.rateSpread || 0);

  /* NEW: if Life-Contingent → include profile adjustments */
  let rateForMin = base + minSp;
  let rateForMax = base + maxSp;

  if (isLCP) {
    const adjRateBase = calcAdjRate(base, getSelectedLcpKeys(), getAdjustmentMap());
    rateForMin = adjRateBase + minSp;
    rateForMax = adjRateBase + maxSp;
  }

  const npvMin = calcNPVAnyRate(rateForMin);
  const npvMax = calcNPVAnyRate(rateForMax);

  const minAdj = getAdjustmentByKey("minimum-payout");
  const maxAdj = getAdjustmentByKey("maximum-payout");

  const minPay = Math.ceil((npvMin - minAdj) / 100) * 100;
  const maxPay = Math.ceil((npvMax - maxAdj) / 100) * 100;

  document.getElementById("calculator-minPayout").innerText =
    `$${minPay.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2})}`;
  document.getElementById("calculator-maxPayout").innerText =
    `$${maxPay.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2})}`;
}

/* ==========================================
   FAMILY PROTECTION  (works in both modes)
========================================== */
function calculateFamilyProtectionValue(npv, isLCP) {
  const el = document.getElementById("calculator-familyProtection");

  if (!isLCP) {                                 // Guaranteed
    const guaranteed = getAdjustmentByKey("family-protection-guaranteed");
    if (npv >= 100000) {
      const rounded = Math.round(guaranteed / 10000) * 10000;
      el.innerText  = `$${rounded.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    } else {
      el.innerText = "";
    }
  } else {                                      // Life-Contingent
    const alt    = calculateNPV_FamilyProtection();
    const rounded= Math.round(alt / 10000) * 10000;
    el.innerText = `$${rounded.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2})}`;
  }
}

/* ALT NPV for life-contingent family protection */
function calculateNPV_FamilyProtection() {
  const amt  = parseFloat(document.getElementById("calculator-paymentAmount").value);
  const inc  = parseFloat(document.querySelector(".selected-increase")?.dataset.rate || 0);
  const rate = getAdjustmentByKey("family-protection-discount-rate");
  const s    = new Date(document.getElementById("calculator-startDate").value);
  const e    = new Date(document.getElementById("calculator-endDate").value);
  const mode = document.querySelector(".selected-mode")?.dataset.mode || "Monthly";
  const today= new Date();
  const fm   = {Monthly:12,Quarterly:4,Semiannually:2,Annually:1,"Lump Sum":1};
  const per  = fm[mode], gap = 12 / per;

  let npv=0,pay=amt,idx=0;
  for (let d=new Date(s); d<=e; d=addMonths(d,gap), idx++){
    const m=(d.getFullYear()-today.getFullYear())*12 + (d.getMonth()-today.getMonth());
    npv += pay / Math.pow(1+rate/12, m);
    if((idx+1)%per===0) pay *= 1+inc/100;
  }
  return npv;
}

/* ==========================================
   STEP-3 BACK
========================================== */
document.getElementById("step3-backBtn").addEventListener("click", () => {
  step3.style.display           = "none";
  extendedResults.style.display = "none";
  if (selectedPaymentType === "Guaranteed") {
    step1.style.display = "block";
    paymentTypeSection.style.display = "block";
  } else {
    step2.style.display = "block";
  }
});

// ========== What Is It Tooltip ==========
document.querySelectorAll('.what-is-it-trigger').forEach(function (trigger) {
  trigger.addEventListener('click', function (e) {
    e.stopPropagation();

    // Remove any existing tooltips
    document.querySelectorAll('.what-is-it-overlay, .what-is-it-box').forEach(el => el.remove());

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'what-is-it-overlay';

    // Create tooltip box
    const box = document.createElement('div');
    box.className = 'what-is-it-box';
    box.textContent = trigger.getAttribute('data-definition');

    // Append to DOM
    document.body.appendChild(overlay);
    document.body.appendChild(box);

    // Close on outside click
    const close = () => {
      overlay.remove();
      box.remove();
      document.removeEventListener('click', close);
    };

    setTimeout(() => {
      document.addEventListener('click', close);
    }, 10);
  });
});

