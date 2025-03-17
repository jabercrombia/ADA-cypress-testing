# Cypress Image Accessibility Test

## Overview
This Cypress test ensures that all `<img>` tags on a webpage contain `alt` attributes, improving web accessibility and compliance with WCAG guidelines.

## Prerequisites
- **Node.js** (v16+ recommended)
- **Cypress** installed

## Installation
Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/cypress-image-accessibility.git
cd cypress-image-accessibility
npm install
```

## Running the Test

### Open Cypress Test Runner (GUI)
```sh
npx cypress open
```
- Select and run the test in an interactive browser.

### Run Test in Headless Mode
```sh
npx cypress run
```
- Executes all tests without opening the UI.

## Test Code
The test verifies that all images on the website have a valid `alt` attribute:

```javascript
describe('Image Accessibility Test', () => {
  it('Ensures all <img> tags have alt attributes', () => {
    cy.visit('https://www.examples.com'); // Replace with your URL

    cy.get('img').each(($img) => {
      cy.wrap($img)
        .should('have.attr', 'alt')
        .and('not.be.empty');
    });
  });
});
```

## Cypress Folder Structure
```plaintext
cypress/
│── e2e/
│   ├── image-accessibility.cy.js  # Image accessibility test
│── screenshots/                    # Captured test screenshots (ignored in .gitignore)
│── videos/                         # Test run recordings (ignored in .gitignore)
```

## Cypress Configuration
Modify **`cypress.config.js`** if needed:

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.example.com', // Update with your site
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
```

## Why This Test Is Important
**Improves accessibility** – Ensures images have descriptive `alt` text for screen readers.  
**Enhances SEO** – Search engines use `alt` text for indexing images.  
**Compliance** – Helps meet WCAG and ADA accessibility standards.  

## Additional Resources
- [Cypress Documentation](https://docs.cypress.io/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Why Alt Text Matters](https://webaim.org/techniques/alttext/)

