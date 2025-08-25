# 📩 Contact Form with Client-Side Validation

## Features

* Client-side validation: Name, Email, and Message fields
* Error messages: Displayed inline under each input
* Email validation: Uses regex for proper format
* Success feedback: Shows confirmation when all inputs are valid
* Mobile-friendly: Works on all screen sizes

---

## Input Validation Rules

| Field   | Requirement | Validation                                                                         |
| ------- | ----------- | ---------------------------------------------------------------------------------- |
| Name    | Required    | Cannot be empty                                                                    |
| Email   | Required    | Must match standard email format ([example@domain.com](mailto:example@domain.com)) |
| Message | Required    | Cannot be empty                                                                    |

---

## Installation

No installation required. Simply:

1. Copy the index.html file (or your HTML file with CSS and JS)
2. Open in any modern browser (Chrome, Firefox, Edge)

---

## Customization

1. Change colors: Modify CSS background-color and color values
2. Adjust validation rules: Edit JavaScript logic for stricter or different checks
3. Add content: Customize labels, placeholders, or messages
4. Extend functionality: Add JavaScript for backend submission or additional interactivity

---

## Testing

1. *Chrome DevTools*

   * Right-click → Inspect → Toggle Device Toolbar (📱)
   * Test form on different device sizes

2. *Edge Cases*

   * Empty fields → should show error messages
   * Invalid email → should show email format error
   * Valid input → should show success message

---

## Best Practices Implemented

* ✔ Viewport meta tag for responsive design
* ✔ Inline error messages for accessibility
* ✔ Regex email validation
* ✔ Prevents form submission if invalid
* ✔ Clear success feedback
* ✔ Mobile-friendly layout
