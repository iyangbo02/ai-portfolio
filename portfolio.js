"use strict";

const samples = {
  complete: {
    email: "您好，需要 50 台 380 V 电机，希望下月底交货。请提供报价。",
    spec: "电机 · 380 V",
    qty: "50 台",
    date: "下月底",
    message: "字段齐全，等待业务人员确认。",
    incomplete: false
  },
  missing: {
    email: "您好，需要 50 台电机，希望下月底交货。请提供报价。",
    spec: "电机 · 电压待确认",
    qty: "50 台",
    date: "下月底",
    message: "缺少电压规格，待业务人员核对并向客户确认。",
    incomplete: true
  }
};

const buttons = [...document.querySelectorAll("button[data-scenario]")];
const fields = Object.fromEntries(
  ["email", "spec", "qty", "date", "message"].map(key => [key, document.getElementById("sample-" + key)])
);
const status = document.getElementById("sample-status");

for (const button of buttons) {
  button.addEventListener("click", () => {
    const selected = samples[button.dataset.scenario];
    for (const [key, element] of Object.entries(fields)) {
      element.textContent = selected[key];
    }
    status.dataset.incomplete = String(selected.incomplete);
    for (const option of buttons) {
      option.setAttribute("aria-pressed", String(option === button));
    }
  });
}
