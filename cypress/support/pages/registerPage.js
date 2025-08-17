import el from "../elements/registerElements";

class RegisterPage {
  openBase() {
    // BASE_URL vem dos .env conforme README do projeto
    cy.visit("/");
  }

  goToRegister() {
    // Garante navegação direta para a página de registro
    cy.visit("/Register.html");
    cy.url().should("include", "Register.html");
  }

  fillForm({
    firstName,
    lastName,
    address,
    email,
    phone,
    gender = "Male",
    hobbies = ["Cricket", "Movies"],
    language = "English",
    skill = "JavaScript",
    country = "India",
    dob = { year: "1996", month: "May", day: "10" },
    password,
  }) {
    cy.get(el.firstName).clear();
    cy.get(el.firstName).type(firstName);
    cy.get(el.lastName).clear();
    cy.get(el.lastName).type(lastName);
    cy.get(el.address).clear();
    cy.get(el.address).type(address);
    cy.get(el.email).clear();
    cy.get(el.email).type(email);
    cy.get(el.phone).clear();
    cy.get(el.phone).type(phone);

    // Gênero
    if (gender === "Male") cy.get(el.genderMale).check({ force: true });
    else cy.get(el.genderFemale).check({ force: true });

    // Hobbies
    if (hobbies.includes("Cricket"))
      cy.get(el.hobbyCricket).check({ force: true });
    if (hobbies.includes("Movies"))
      cy.get(el.hobbyMovies).check({ force: true });
    if (hobbies.includes("Hockey"))
      cy.get(el.hobbyHockey).check({ force: true });

    // Languages (dropdown customizado)
    cy.get(el.languagesBox).click();
    cy.get(el.languageItem).contains(language).click();
    cy.get("body").click(0, 0); // fecha dropdown

    // Skills
    cy.get(el.skills).select(skill);

    // Country (select simples)
    cy.get(el.country).select(country);

    // Select Country (select2) — opcional (não é obrigatório para o cadastro)
    cy.get(el.selectCountryOpen).click();
    cy.get(el.selectCountryInput).type("India{enter}");

    // Data de nascimento
    cy.get(el.year).select(dob.year);
    cy.get(el.month).select(dob.month);
    cy.get(el.day).select(dob.day);

    // Senhas
    cy.get(el.password).type(password);
    cy.get(el.confirmPassword).type(password);
  }

  submit() {
    cy.get(el.submitBtn).click({ force: true });
  }

  assertSuccess() {
    // Comportamento comum do demo: redirecionar para WebTable.
    // Validamos por URL OU por header "Web Table" quando disponível.
    cy.url().should("not.include", "Register.html");
    cy.url().then((url) => {
      if (url.includes("WebTable")) {
        cy.get(el.webTableHeader).should("be.visible");
      } else {
        // fallback: a página não quebrou e continua carregada
        cy.get("body").should("be.visible");
      }
    });
  }

  checkFieldsVisible() {
    cy.get(el.firstName).should("be.visible");
    cy.get(el.lastName).should("be.visible");
    cy.get(el.address).should("be.visible");
    cy.get(el.email).should("be.visible");
    cy.get(el.phone).should("be.visible");

    cy.get(el.genderMale).should("be.visible");
    cy.get(el.genderFemale).should("be.visible");

    cy.get(el.hobbyCricket).should("be.visible");
    cy.get(el.hobbyMovies).should("be.visible");
    cy.get(el.hobbyHockey).should("be.visible");

    cy.get(el.languagesBox).should("be.visible");

    cy.get(el.skills).should("be.visible");
    cy.get(el.country).should("be.visible");

    cy.get(el.year).should("be.visible");
    cy.get(el.month).should("be.visible");
    cy.get(el.day).should("be.visible");

    cy.get(el.password).should("be.visible");
    cy.get(el.confirmPassword).should("be.visible");

    cy.get(el.submitBtn).should("be.visible");
  }
}

export default new RegisterPage();
