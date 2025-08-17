// Mapeamento dos elementos da página de Register
export default {
  // Campos básicos
  firstName: 'input[placeholder="First Name"]',
  lastName: 'input[placeholder="Last Name"]',
  address: 'textarea[ng-model="Adress"]',
  email: 'input[type="email"][ng-model="EmailAdress"]',
  phone: 'input[type="tel"][ng-model="Phone"]',

  // Radio/checkbox
  genderMale: 'input[value="Male"]',
  genderFemale: 'input[value="FeMale"]',
  hobbyCricket: 'input[type="checkbox"][value="Cricket"]',
  hobbyMovies: 'input[type="checkbox"][value="Movies"]',
  hobbyHockey: 'input[type="checkbox"][value="Hockey"]',

  // Selects
  languagesBox: "#msdd",
  languageItem: ".ui-autocomplete li",
  skills: "#Skills",
  country: "#countries",
  selectCountryOpen: ".select2-selection",
  selectCountryInput: ".select2-search__field",

  // Data de nascimento
  year: "#yearbox",
  month: 'select[placeholder="Month"]',
  day: "#daybox",

  // Senha/submit
  password: "#firstpassword",
  confirmPassword: "#secondpassword",
  submitBtn: "#submitbtn",

  // “Sucesso” pós-envio (essa página redireciona normalmente para WebTable)
  webTableHeader: 'h4:contains("Web Table")',
};
