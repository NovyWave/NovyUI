import type { Meta, StoryObj } from '@storybook/vue3-vite';
import FileInput from './FileInput.vue';

const meta: Meta<typeof FileInput> = {
  title: 'Components/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: false,
      description: 'Array of selected files.',
      table: { category: 'Content', defaultValue: { summary: '[]' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the file input.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (MIME types or file extensions).',
      table: { category: 'Validation', defaultValue: { summary: '' } },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection.',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the file input.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    required: {
      control: 'boolean',
      description: 'Makes the file input required.',
      table: { category: 'Validation', defaultValue: { summary: false } },
    },
    maxFiles: {
      control: { type: 'number', min: 1 },
      description: 'Maximum number of files allowed.',
      table: { category: 'Validation', defaultValue: { summary: 10 } },
    },
    maxFileSize: {
      control: { type: 'number', min: 1024 },
      description: 'Maximum file size in bytes.',
      table: { category: 'Validation', defaultValue: { summary: '10485760' } },
    },
    primaryText: {
      control: 'text',
      description: 'Primary text displayed in the drop zone.',
      table: { category: 'Content', defaultValue: { summary: 'Drop files here or click to browse' } },
    },
    secondaryText: {
      control: 'text',
      description: 'Secondary text displayed in the drop zone.',
      table: { category: 'Content', defaultValue: { summary: 'Supports: JPG, PNG, PDF, DOC' } },
    },
    browseButtonText: {
      control: 'text',
      description: 'Text for the browse button.',
      table: { category: 'Content', defaultValue: { summary: 'Browse Files' } },
    },
    uploadIcon: {
      control: 'text',
      description: 'Icon displayed in the drop zone.',
      table: { category: 'Content', defaultValue: { summary: 'upload' } },
    },
  },
  args: {
    modelValue: [],
    size: 'medium',
    multiple: false,
    disabled: false,
    required: false,
    maxFiles: 10,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    primaryText: 'Drop files here or click to browse',
    secondaryText: 'Supports: JPG, PNG, PDF, DOC',
    browseButtonText: 'Browse Files',
    uploadIcon: 'upload',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A drag-and-drop file input component with validation, preview, and multiple file support. Perfect for file uploads with a modern, user-friendly interface.\n\n**Features:**\n\n- Drag and drop functionality\n- Multiple file selection\n- File type validation\n- File size validation\n- File preview with icons\n- Progress indication\n- Error handling\n- Three sizes (small, medium, large)\n- Full accessibility support\n\n**Usage:**\n\n```vue\n<FileInput v-model="files" multiple accept="image/*" />\n<FileInput v-model="documents" accept=".pdf,.doc,.docx" :maxFileSize="5242880" />\n```',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Multiple: Story = {
  args: {
    multiple: true,
    primaryText: 'Drop multiple files here',
    secondaryText: 'You can select multiple files at once',
  },
};

export const ImagesOnly: Story = {
  args: {
    accept: 'image/*',
    multiple: true,
    primaryText: 'Drop images here',
    secondaryText: 'Supports: JPG, PNG, GIF, WebP',
    maxFiles: 5,
  },
};

export const DocumentsOnly: Story = {
  args: {
    accept: '.pdf,.doc,.docx,.txt',
    multiple: true,
    primaryText: 'Drop documents here',
    secondaryText: 'Supports: PDF, DOC, DOCX, TXT',
    maxFileSize: 5 * 1024 * 1024, // 5MB
  },
};

export const SingleFile: Story = {
  args: {
    multiple: false,
    primaryText: 'Drop a single file here',
    secondaryText: 'Only one file can be selected',
    browseButtonText: 'Choose File',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    primaryText: 'Drop file here',
    secondaryText: 'Small file input',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
    multiple: true,
    primaryText: 'Drop files here or click to browse',
    secondaryText: 'Large file input with more space for drag and drop',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    primaryText: 'File input is disabled',
    secondaryText: 'Cannot select files',
  },
};

export const WithValidation: Story = {
  args: {
    multiple: true,
    maxFiles: 3,
    maxFileSize: 2 * 1024 * 1024, // 2MB
    primaryText: 'Drop up to 3 files (max 2MB each)',
    secondaryText: 'Files larger than 2MB will be rejected',
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { FileInput },
    setup() {
      return {
        smallFiles: [],
        mediumFiles: [],
        largeFiles: [],
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">Small</h3>
          <FileInput 
            v-model="smallFiles" 
            size="small" 
            primaryText="Small file input"
            secondaryText="Compact size"
          />
        </div>
        <div>
          <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">Medium</h3>
          <FileInput 
            v-model="mediumFiles" 
            size="medium" 
            primaryText="Medium file input"
            secondaryText="Standard size"
          />
        </div>
        <div>
          <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">Large</h3>
          <FileInput 
            v-model="largeFiles" 
            size="large" 
            primaryText="Large file input"
            secondaryText="Spacious size for better drag and drop experience"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'FileInput component in different sizes.',
      },
    },
  },
};

export const AvatarUpload: Story = {
  render: () => ({
    components: { FileInput },
    setup() {
      return {
        avatarFile: [],
      };
    },
    template: `
      <div style="max-width: 400px;">
        <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Profile Avatar</h3>
        <FileInput 
          v-model="avatarFile" 
          accept="image/*"
          :multiple="false"
          :maxFileSize="1024 * 1024"
          primaryText="Drop your avatar here"
          secondaryText="JPG, PNG up to 1MB"
          browseButtonText="Choose Avatar"
          uploadIcon="user"
          size="small"
        />
        <p style="margin: 12px 0 0 0; font-size: 12px; color: #6b7280;">
          Recommended: Square image, at least 200x200 pixels
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'File input configured for avatar/profile picture upload.',
      },
    },
  },
};

export const DocumentUpload: Story = {
  render: () => ({
    components: { FileInput },
    setup() {
      return {
        documents: [],
      };
    },
    template: `
      <div style="max-width: 600px;">
        <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Document Upload</h3>
        <FileInput 
          v-model="documents" 
          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
          multiple
          :maxFiles="10"
          :maxFileSize="10 * 1024 * 1024"
          primaryText="Drop your documents here"
          secondaryText="Supports: PDF, Word, Excel, PowerPoint (max 10MB each)"
          browseButtonText="Browse Documents"
          uploadIcon="file-text"
        />
        <div style="margin-top: 16px; padding: 12px; background: #f9fafb; border-radius: 6px; border: 1px solid #e5e7eb;">
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Upload Guidelines:</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #6b7280;">
            <li>Maximum 10 files per upload</li>
            <li>Each file must be under 10MB</li>
            <li>Supported formats: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX</li>
            <li>Files will be scanned for viruses</li>
          </ul>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'File input configured for business document upload with guidelines.',
      },
    },
  },
};

export const MediaUpload: Story = {
  render: () => ({
    components: { FileInput },
    setup() {
      return {
        mediaFiles: [],
      };
    },
    template: `
      <div style="max-width: 600px;">
        <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Media Gallery</h3>
        <FileInput 
          v-model="mediaFiles" 
          accept="image/*,video/*"
          multiple
          :maxFiles="20"
          :maxFileSize="50 * 1024 * 1024"
          primaryText="Drop photos and videos here"
          secondaryText="Images and videos up to 50MB each"
          browseButtonText="Add Media"
          uploadIcon="image"
          size="large"
        />
        <div style="margin-top: 16px; display: flex; gap: 16px; font-size: 12px; color: #6b7280;">
          <div>
            <strong>Images:</strong> JPG, PNG, GIF, WebP
          </div>
          <div>
            <strong>Videos:</strong> MP4, MOV, AVI, WebM
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'File input configured for media gallery with images and videos.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => ({
    components: { FileInput },
    setup() {
      return {
        resume: [],
        portfolio: [],
        coverLetter: [],
      };
    },
    template: `
      <form style="max-width: 600px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Job Application</h3>
        
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name"
              style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;"
            />
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;"
            />
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Resume *</label>
            <FileInput 
              v-model="resume" 
              accept=".pdf,.doc,.docx"
              :multiple="false"
              :maxFileSize="5 * 1024 * 1024"
              primaryText="Upload your resume"
              secondaryText="PDF, DOC, or DOCX (max 5MB)"
              browseButtonText="Choose Resume"
              size="small"
              required
            />
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Portfolio (Optional)</label>
            <FileInput 
              v-model="portfolio" 
              accept=".pdf,image/*"
              multiple
              :maxFiles="5"
              :maxFileSize="10 * 1024 * 1024"
              primaryText="Upload portfolio files"
              secondaryText="Images or PDFs (max 10MB each, up to 5 files)"
              browseButtonText="Add Portfolio"
              size="small"
            />
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Cover Letter (Optional)</label>
            <FileInput 
              v-model="coverLetter" 
              accept=".pdf,.doc,.docx,.txt"
              :multiple="false"
              :maxFileSize="2 * 1024 * 1024"
              primaryText="Upload cover letter"
              secondaryText="PDF, DOC, DOCX, or TXT (max 2MB)"
              browseButtonText="Choose File"
              size="small"
            />
          </div>
          
          <button 
            type="submit"
            :disabled="resume.length === 0"
            style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;"
            :style="{ opacity: resume.length > 0 ? 1 : 0.5 }"
          >
            Submit Application
          </button>
        </div>
      </form>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'FileInput components integrated in a job application form.',
      },
    },
  },
};
