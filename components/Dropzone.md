## Dropzone
🗃️ A component for uploading files via drag-and-drop or file selection.
- **Id:** Dropzone
- **Appearance:** A bordered area with an icon and prompt text. Shows file previews or list of uploaded files. May include progress bars and remove buttons.
- **Behavior:** Dragging files over highlights the area. Dropping or selecting files uploads them. Supports multiple files, file type restrictions, and progress display.
- **Used in blocks:**
  - [DragAndDrop](../blocks/DragAndDrop.md)
### Accessibility
- Use `aria-label` to describe dropzone purpose.
- Announce file selection and upload progress.
- Support keyboard file selection.

### Variants
#### Dropzone - **Single file**
- **Id:** SingleFile
- **Appearance:** Supports single file upload.
- **Behavior:** Uploads single file.
#### Dropzone - **Multiple files**
- **Id:** MultipleFiles
- **Appearance:** Supports multiple file uploads.
- **Behavior:** Uploads multiple files.
#### Dropzone - **With preview**
- **Id:** WithPreview
- **Appearance:** Includes file previews.
- **Behavior:** Displays file previews.
#### Dropzone - **With file type restrictions**
- **Id:** WithFileTypeRestrictions
- **Appearance:** Restricts file types.
- **Behavior:** Validates file types.
#### Dropzone - **With upload progress**
- **Id:** WithUploadProgress
- **Appearance:** Includes progress bars.
- **Behavior:** Displays upload progress.
#### Dropzone - **Drag-and-drop**
- **Id:** DragAndDrop
- **Appearance:** Supports drag-and-drop.
- **Behavior:** Drag-and-drop file upload.
