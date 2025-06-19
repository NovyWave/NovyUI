# NovyUI Component Migration Guide

## Overview
This guide provides detailed instructions for migrating all 18 NovyUI components from MoonZoon to PenPot format.

## Component Categories

### Form Components (6 components)
- **Input**: 7 variants, 5 states - Complex validation and input types
- **TextArea**: 3 variants, 4 states - Multi-line input with resize
- **Checkbox**: 3 variants, 6 states - Binary selection with indeterminate
- **Select**: 4 variants, 5 states - Dropdown with search and multi-selection
- **Switch**: 3 variants, 5 states - Toggle with optional icons
- **FileInput**: 4 variants, 5 states - Upload with drag-and-drop

### Display Components (6 components)
- **Typography**: 7 variants, 3 states - Text rendering with semantic styles
- **Icon**: 4 variants, 6 states - 77 Lucide icons in multiple sizes
- **Badge**: 7 variants, 3 states - Status indicators and labels
- **Avatar**: 3 variants, 4 states - User profile pictures with fallbacks
- **Card**: 3 variants, 4 states - Flexible content containers
- **Alert**: 4 variants, 3 states - Notification messages

### Navigation Components (4 components)
- **Button**: 6 variants, 6 states - Primary interactive component
- **Accordion**: 2 variants, 4 states - Collapsible content sections
- **TreeView**: 3 variants, 5 states - Hierarchical data display
- **Kbd**: 3 variants, 2 states - Keyboard shortcut display

### Layout Components (2 components)
- **List**: 4 variants, 4 states - Various list styles
- **Pattern**: 5 variants, 2 states - Background patterns

## Migration Priority

### Phase 1: Core Components (High Priority)
1. **Button** - Primary interactive component, 36 total combinations
2. **Input** - Essential form component, 35 total combinations
3. **Typography** - Text rendering foundation, 21 total combinations
4. **Icon** - Visual elements, 24 total combinations

### Phase 2: Form Components (Medium Priority)
5. **Select** - Complex dropdown functionality
6. **Checkbox** - Binary selection
7. **Switch** - Toggle control
8. **TextArea** - Multi-line input

### Phase 3: Display Components (Medium Priority)
9. **Badge** - Status indicators
10. **Avatar** - User representations
11. **Card** - Content containers
12. **Alert** - Notifications

### Phase 4: Advanced Components (Lower Priority)
13. **Accordion** - Collapsible content
14. **TreeView** - Hierarchical display
15. **FileInput** - File uploads
16. **List** - List layouts
17. **Pattern** - Background patterns
18. **Kbd** - Keyboard shortcuts

## PenPot Migration Strategy

### Component Variants Workaround
Since PenPot lacks native component variants:
1. Create separate components for each variant
2. Use consistent naming: `ComponentName-variant-state`
3. Group related components in shared libraries
4. Document relationships between components

### Token Integration
1. Import W3C design tokens first
2. Apply tokens to all component styling
3. Maintain theme-aware token references
4. Test light/dark theme switching

### State Documentation
1. Create state matrices for each component
2. Document all interactive states
3. Show hover, focus, active, disabled states
4. Include loading and error states where applicable

### Component Organization
```
NovyUI Component Library/
├── Form Components/
│   ├── Button-primary-default
│   ├── Button-primary-hover
│   ├── Button-primary-active
│   └── ...
├── Display Components/
├── Navigation Components/
└── Layout Components/
```

## Technical Considerations

### Missing PenPot Features
- **Component Variants**: Create separate components
- **Interactive States**: Document with specifications
- **Animations**: Use PenPot prototyping features
- **Complex Interactions**: Document behavior separately

### Token Mapping
- Use semantic token references: `{color.primary.7}`
- Maintain theme consistency
- Apply spacing tokens consistently
- Use typography tokens for all text

### Accessibility Documentation
- Include ARIA labels and roles
- Document keyboard navigation
- Specify focus management
- Maintain contrast requirements

## Quality Assurance

### Validation Checklist
- [ ] All variants created
- [ ] All states documented
- [ ] Tokens properly applied
- [ ] Accessibility features included
- [ ] Interactive states shown
- [ ] Documentation complete

### Testing Process
1. Import component library into PenPot
2. Test token theme switching
3. Validate component relationships
4. Check documentation completeness
5. Verify accessibility compliance

## Maintenance

### Sync Process
1. Monitor MoonZoon implementation changes
2. Update token values as needed
3. Add new variants and states
4. Maintain documentation currency
5. Update PenPot components accordingly

### Version Control
- Tag component library versions
- Document changes between versions
- Maintain migration logs
- Track PenPot feature additions

## Support Resources

- **MoonZoon Storybook**: https://moonzoon-novyui-storybook.kavik.cz/
- **Component Specifications**: See `/components/specifications/`
- **State Matrices**: See `/components/state-matrices/`
- **Token Definitions**: See `/tokens/`
- **PenPot Documentation**: https://help.penpot.app/

## Success Metrics

- **336+ component variants** successfully migrated
- **100% token coverage** (no hardcoded values)
- **Complete state documentation** for all components
- **Accessibility compliance** maintained
- **Design-code consistency** achieved
