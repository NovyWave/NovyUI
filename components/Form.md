# Form

**Id:** Form
**Appearance:** Grouped input fields, labels, and controls with consistent spacing, alignment, and validation feedback.
**Behavior:** Handles user input, validation, submission, and error display. Supports keyboard navigation and accessibility.
**Components:**
- [Input](../components/Input.md)
- [Button](../components/Button.md)
- [FormErrorMessage](../components/FormErrorMessage.md)
**Used in pages:**
- [Checkout](../pages/Checkout.md)

---

## Form

A container for collecting and validating user input, supporting various field types, layouts, and validation states.

---

### Token Usage
The following table lists all design tokens used by the Form component:
| Part         | Token Example         | Description                      |
|--------------|----------------------|----------------------------------|
| Background   | color.bg.form        | Form background color            |
| Border       | border.form          | Form border style                |
| Label        | color.text.label     | Label text color                 |
| Input        | color.bg.input       | Input field background           |
| Error        | color.text.error     | Error message color              |
| Spacing      | spacing.form.field   | Space between fields             |

---

### Variants
All supported Form variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used           | Notes                |
|--------------|---------------------------|----------------------------|-----------------------|----------------------|
| Default      | Standard form             | Vertical layout            | color.bg.form         |                      |
| Inline       | Horizontal/inline fields  | Inline field arrangement   | spacing.form.field    |                      |
| With Errors  | Shows validation errors   | Error messages visible     | color.text.error      |                      |
| Disabled     | Disabled state            | All fields disabled        | color.text.disabled   |                      |

---

### States
Form states and their token usage:
| State    | Description                | Token(s) affected         |
|----------|----------------------------|---------------------------|
| Default  | Normal display             | color.bg.form             |
| Focus    | Field focused              | border.form.focus         |
| Error    | Validation error           | color.text.error          |
| Disabled | All fields disabled        | color.text.disabled       |

---

### Accessibility
Accessibility features and requirements for Form:
- Use semantic `<form>` element and label all fields.
- Associate labels with inputs using `for` and `id` attributes.
- Provide clear error messages and instructions.
- Ensure all fields are keyboard accessible.
- Use `aria-invalid` and `aria-describedby` for validation feedback.
- Ensure sufficient color contrast for all text and controls.
- Ensure focus indicator is visible for all interactive elements.
