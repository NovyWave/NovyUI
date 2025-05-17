// Typed design tokens for NovyUI (auto-generated from /tokens folder)
// Use these for inline styles or script-side token access in Vue components
export const tokens = {
  color: {
    bg: {
      default: 'var(--color-bg-default)',
      subtle: 'var(--color-bg-subtle)',
      muted: 'var(--color-bg-muted)',
      inverse: 'var(--color-bg-inverse)',
    },
    border: {
      default: 'var(--color-border-default)',
      subtle: 'var(--color-border-subtle)',
      muted: 'var(--color-border-muted)',
    },
    text: {
      default: 'var(--color-text-default)',
      subtle: 'var(--color-text-subtle)',
      muted: 'var(--color-text-muted)',
      inverse: 'var(--color-text-inverse)',
    },
    primary: {
      default: 'var(--color-primary-default)',
      subtle: 'var(--color-primary-subtle)',
      muted: 'var(--color-primary-muted)',
    },
    focus: {
      default: 'var(--color-focus-default)',
    },
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '40px',
    9: '48px',
    10: '56px',
  },
  radii: {
    1: '2px',
    2: '4px',
    3: '8px',
    4: '16px',
    full: '9999px',
    none: '0',
  },
  shadow: {
    1: '0 1px 2px oklch(0.9 0 0)',
    2: '0 2px 8px oklch(0.85 0 0)',
    3: '0 4px 16px oklch(0.8 0 0)',
  },
  border: {
    1: '1px',
  },
  font: {
    size3: '1rem',
    weight2: 500,
  },
  button: {
    primary: {
      bg: {
        default: 'linear-gradient(180deg, var(--color-primary-6), var(--color-primary-7))',
        hover: 'linear-gradient(180deg, var(--color-primary-7), var(--color-primary-8))',
        active: 'var(--color-primary-8)',
        focus: 'linear-gradient(180deg, var(--color-primary-8), var(--color-primary-7))',
        disabled: 'var(--color-neutral-6)',
      },
      text: {
        default: 'var(--color-neutral-1)',
        hover: 'var(--color-neutral-1)',
        active: 'var(--color-neutral-1)',
        disabled: 'var(--color-neutral-8)',
      },
      border: {
        default: 'var(--color-primary-7)',
        hover: 'var(--color-primary-8)',
        active: 'var(--color-primary-8)',
        disabled: 'var(--color-neutral-6)',
      },
      shadow: {
        default: 'var(--shadow-1)',
        hover: 'var(--shadow-2)',
        active: 'none',
      },
    },
    secondary: {
      bg: {
        default: 'var(--color-neutral-2)',
        hover: 'var(--color-primary-2)',
        active: 'var(--color-primary-3)',
        disabled: 'var(--color-neutral-6)',
      },
      text: {
        default: 'var(--color-primary-7)',
        hover: 'var(--color-primary-8)',
        active: 'var(--color-primary-8)',
        disabled: 'var(--color-neutral-8)',
      },
      border: {
        default: 'var(--color-primary-5)',
        hover: 'var(--color-primary-6)',
        active: 'var(--color-primary-6)',
        disabled: 'var(--color-neutral-6)',
      },
      shadow: {
        default: 'var(--shadow-1)',
        hover: 'var(--shadow-2)',
        active: 'none',
      },
    },
    outline: {
      bg: {
        default: 'transparent',
        hover: 'var(--color-primary-1)',
        active: 'var(--color-primary-2)',
        disabled: 'var(--color-neutral-6)',
      },
      text: {
        default: 'var(--color-primary-7)',
        hover: 'var(--color-primary-8)',
        active: 'var(--color-primary-8)',
        disabled: 'var(--color-neutral-8)',
      },
      border: {
        default: 'var(--color-primary-6)',
        hover: 'var(--color-primary-7)',
        active: 'var(--color-primary-8)',
        disabled: 'var(--color-neutral-6)',
        style: 'dashed',
      },
      shadow: {
        default: 'var(--shadow-1)',
        hover: 'var(--shadow-2)',
        active: 'none',
      },
    },
    ghost: {
      bg: {
        default: 'transparent',
        hover: 'var(--color-primary-1)',
        active: 'var(--color-primary-2)',
        disabled: 'var(--color-neutral-6)',
      },
      text: {
        default: 'var(--color-primary-7)',
        hover: 'var(--color-primary-8)',
        active: 'var(--color-primary-8)',
        disabled: 'var(--color-neutral-8)',
      },
      border: {
        default: 'none',
        hover: 'none',
        active: 'none',
        disabled: 'none',
      },
      shadow: {
        default: 'none',
        hover: 'none',
        active: 'none',
      },
    },
    icon: {
      bg: {
        default: 'var(--color-primary-1)',
        hover: 'var(--color-primary-2)',
        active: 'var(--color-primary-3)',
        disabled: 'var(--color-neutral-6)',
      },
      text: {
        default: 'var(--color-primary-7)',
        hover: 'var(--color-primary-8)',
        active: 'var(--color-primary-8)',
        disabled: 'var(--color-neutral-8)',
      },
      border: {
        default: 'none',
        hover: 'none',
        active: 'none',
        disabled: 'none',
      },
      shadow: {
        default: 'none',
        hover: 'none',
        active: 'none',
      },
    },
    socialLogin: {
      bg: {
        default: 'var(--color-neutral-1)',
        hover: 'var(--color-neutral-2)',
        active: 'var(--color-neutral-3)',
        disabled: 'var(--color-neutral-6)',
      },
      text: {
        default: 'var(--color-primary-7)',
        hover: 'var(--color-primary-8)',
        active: 'var(--color-primary-8)',
        disabled: 'var(--color-neutral-8)',
      },
      border: {
        default: 'var(--color-neutral-5)',
        hover: 'var(--color-neutral-6)',
        active: 'var(--color-neutral-7)',
        disabled: 'var(--color-neutral-6)',
      },
      shadow: {
        default: 'var(--shadow-1)',
        hover: 'var(--shadow-2)',
        active: 'none',
      },
    },
    loading: {
      spinner: 'var(--color-primary-7)',
    },
    group: {
      borderRadius: '0',
    },
    sizes: {
      small: {
        height: '28px',
        fontSize: 'var(--font-size-2, 0.875rem)',
        paddingX: 'var(--spacing-2, 8px)',
      },
      medium: {
        height: '36px',
        fontSize: 'var(--font-size-3, 1rem)',
        paddingX: 'var(--spacing-3, 12px)',
      },
      large: {
        height: '44px',
        fontSize: 'var(--font-size-4, 1.125rem)',
        paddingX: 'var(--spacing-4, 16px)',
      },
      icon: {
        width: '36px',
        height: '36px',
        padding: '0',
      },
    },
  },
};
export type Tokens = typeof tokens;
