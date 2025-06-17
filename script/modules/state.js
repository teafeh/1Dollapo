// script/modules/state.js

// Centralized state for the application
export const state = {
  totalIncome: 0,
  totalExpense: 0,
  selectedType: '', // 'income' or 'expenses'
  transData: [],
  get currentBalance() {
    return this.totalIncome - this.totalExpense;
  },
};

// All DOM elements are selected here once for efficiency
export const elements = {
  // Views
  transView: document.querySelector('.trans'),
  addDataView: document.querySelector('.add-data'),
  mobileDeviceView: document.getElementById('mobileDevice'),

  // Buttons
  incomeBtn: document.getElementById('incomeBtn'),
  expensesBtn: document.getElementById('expensesBtn'),
  addPaymentMobile: document.getElementById('addPaymentMobile'),

  // Balance Displays
  blanT: document.getElementById('blanT'),
  amoutIncome: document.getElementById('amoutIncome'),
  amoutExpenses: document.getElementById('amoutExpenses'),

  // Transaction Display Containers
  displayTrans: document.getElementById('displayTrans'),
  fullDisplayTrans: document.getElementById('fullDisplayTrans'),

  // Form Inputs
  amountInput: document.getElementById('amount'),
  titleInput: document.getElementById('title'),
  categoryInput: document.getElementById('category'),
  dateInput: document.getElementById('date'),

  // Other UI Elements
  profileNav: document.querySelector('.set-in'),
};