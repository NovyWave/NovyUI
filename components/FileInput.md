## File Input
📤 An input field for selecting one or more files from the user's device.
- **Id:** FileInput
- **Appearance:** An input field with a button to select files. May show selected file name(s) and a clear button.
- **Behavior:** Clicking button opens file picker. Selecting files updates the value. Supports multiple files and file type restrictions.
- **Used in blocks:**
### Accessibility
- Use native `<input type="file">` for best accessibility.
- Provide clear labels and instructions.
- Announce selected files to screen readers.

### Variants
#### File Input - **Single file**
- **Id:** SingleFile
- **Appearance:** Supports single file selection.
- **Behavior:** Selects single file.
#### File Input - **Multiple files**
- **Id:** MultipleFiles
- **Appearance:** Supports multiple file selection.
- **Behavior:** Selects multiple files.
#### File Input - **File preview**
- **Id:** FilePreview
- **Appearance:** Includes file previews.
- **Behavior:** Displays file previews.
