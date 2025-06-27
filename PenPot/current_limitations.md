# PenPot Current Limitations for NovyUI Design System Automation

## 🔎 TL;DR

**PenPot automation is currently impractical for NovyUI design systems due to 4 critical limitations:**

1. **No Component Variants** → Need 313 individual components instead of 18 with variants
2. **No Dynamic Token References** → Must duplicate all components for light/dark themes *(plugin API only, manual GUI works)*
3. **Broken Layout System** → Gap/padding properties don't work, requires complex spacer workarounds *(plugin API only, manual GUI works)*
4. **Limited Plugin API** → Can't programmatically manage tokens or set theme-aware properties

**Result**: 2-3x more manual work than expected, with maintenance becoming nearly impossible due to hardcoded values. **Current recommendation: Wait for component variants and token API improvements before attempting full automation.**

---

**Document Date**: June 2025  
**Research Status**: Comprehensive analysis based on official documentation, community feedback, and project experience  
**Last Updated**: Based on PenPot 2.3+ (Plugin system introduced October 2024)

---

## 📋 Executive Summary

### Current State of NovyUI → PenPot Automation

**Status**: **Limited Viability** - Significant technical constraints prevent effective design system automation

**Key Findings**: While PenPot has made progress, multiple critical limitations compound to make full automation impractical:
- **Component variants missing**: Requires 313 individual components instead of 18
- **No dynamic token references**: Forces duplicate components for each theme
- **Layout system failures**: Gap/padding properties require complex workarounds
- **Plugin API restrictions**: Cannot programmatically manage tokens or set references

### Real Impact Assessment
- ✅ **Individual Shape Creation**: Basic automation possible
- ❌ **Theme-Aware Components**: Must create duplicates for light/dark themes
- ❌ **Design Token Benefits**: Lost due to inability to set token references
- ❌ **Layout Consistency**: Requires transparent spacer workarounds
- ❌ **Complete Design System**: Blocked by multiple compounding issues

### Timeline Reality
- **Component Variants**: Active development but no committed dates
- **Token API Access**: No timeline for plugin improvements
- **Layout Fixes**: Not acknowledged as issues yet
- **Current Approach**: Manual workflows more practical than automation attempts

---

## 🚨 Critical Limitations (Blocking Full Automation)

### 1. **Component Variants/States Support - CRITICAL BLOCKER**

**Status**: ❌ **Missing** - Confirmed as the most significant limitation preventing design system adoption

#### Impact on NovyUI
- **Original Plan**: 18 base components with multiple variants and states
- **Current Reality**: Requires 313 individual components (variants × states)
- **Example**: Button component needs 36 separate components instead of 1 with 6 variants and 6 states

#### Community Evidence
- **GitHub Issue #768**: "Managing components without the ability to create variations/states is a mess"
- **Community Feedback**: "Single biggest issue that prevents me from attempting to use PenPot full time"
- **Adoption Blocker**: "The deciding factor for Figma vs PenPot"

#### Technical Impact
```
Original Design System Architecture:
├── Button (1 component)
│   ├── Variants: Primary, Secondary, Destructive, Outline, Ghost, Link
│   └── States: Normal, Hover, Active, Focus, Disabled, Loading

Current Required Architecture:
├── Button-Primary-Normal (component 1/36)
├── Button-Primary-Hover (component 2/36)
├── Button-Primary-Active (component 3/36)
[...33 more individual components]
```

#### Workarounds in Use
- **Naming Conventions**: Using slashes (e.g., "Button/Primary", "Button/Secondary")
- **Component Duplication**: Creating separate components for each variant
- **Manual Organization**: Category-based grouping to maintain some structure

### 2. **Design System Organization Challenges**

**Status**: ❌ **Significant Limitation** - No true component system management

#### Missing Capabilities
- **Component Hierarchy**: No parent-child variant relationships
- **Shared Properties**: No inheritance between variant states
- **System Governance**: No centralized variant management
- **Bulk Updates**: Changes require updating hundreds of individual components

#### Impact on Team Workflow
- **Design Consistency**: Difficult to maintain when variants are disconnected
- **Change Management**: Updates require touching dozens of components
- **Documentation**: No automatic state/variant documentation
- **Developer Handoff**: Variants appear as unrelated components

---

## ✅ Resolved/Improving Limitations

### 1. **API Access Issues - PARTIALLY RESOLVED**

**Previous Understanding**: ❌ Cloudflare blocking all API access  
**Current Reality**: ⚠️ Mixed results - depends on authentication method and access type

#### Confirmed Issues with Cloud PenPot
- **Token-Based Access**: ❌ Limited functionality due to Cloudflare protection on `design.penpot.app`
- **AI Browser Automation**: ❌ Blocked by Cloudflare for MCP server automation
- **Feature Restrictions**: Token access doesn't provide full API capabilities (e.g., image export)

#### Working Authentication Methods
- **Username/Password**: ✅ Works with cloud PenPot (used by MCP servers)
- **Self-Hosted**: ✅ Full API access without Cloudflare restrictions
- **Plugin API**: ✅ Bypasses external access issues entirely

#### MCP Server Evidence
```bash
# MCP servers use username/password due to limitations
# montevive/penpot-mcp: username/password authentication
# Token access insufficient for full API feature set
```

#### Why Tokens Have Limited Access
From PenPot GitHub discussions: *"regular credentials are required since the export into image feature is not available using regular API tokens"* - suggesting intentional API limitations beyond Cloudflare.

### 2. **Layout System Issues - PERSISTENT PROBLEMS**

**Previous Understanding**: ❌ Padding issues, appendChild() vs absolute positioning conflicts  
**Current Reality**: ⚠️ Significant improvements made, but core gap/padding issues remain

#### Confirmed Ongoing Issues
- **Gap Properties**: Flex layout `gap` settings don't work reliably
- **Padding Inconsistencies**: `paddingTop`/`paddingBottom` cause layout failures
- **Border Touching**: Elements touch borders despite proper padding settings
- **Flat Layouts**: Components appear "flat" due to spacing failures

#### Required Workarounds
```typescript
// DOESN'T WORK: Standard CSS-style properties
layout.gap = 16; // Unreliable
layout.paddingTop = 8; // Causes issues

// REQUIRED WORKAROUND: Transparent spacer rectangles
const leftSpacer = penpot.createRectangle();
leftSpacer.resize(paddingX, height);
leftSpacer.fills = []; // Transparent spacer
container.appendChild(leftSpacer);
container.appendChild(content);
```

#### Evidence from Component Development
From SelectComponentImplementation: *"PenPot's flex layout padding properties don't work as expected"* and *"USER FEEDBACK: Number '8' still touching border despite paddingLeft/Right settings"*

#### Recent Improvements
- **GitHub PR #6125**: Added absolute positioning support (helpful but doesn't solve gap issues)
- **Mixed Positioning**: Can combine flex + absolute positioning as workaround

### 3. **Plugin System Maturity - FULLY CAPABLE**

**Previous Understanding**: ❓ Unknown scope and limitations  
**Current Reality**: ✅ Comprehensive, well-documented, actively supported

#### Current Plugin Capabilities
- **Content Management**: Full read/write access to design elements
- **Shape Creation**: Rectangle, ellipse, path, board, text creation
- **Layout Systems**: Both flex and grid layout support
- **Styling Control**: Fills, strokes, borders, shadows, opacity
- **Library Access**: Component library integration
- **Framework Agnostic**: React, Vue, Angular, or vanilla JS support

#### Community Ecosystem
- **Plugin Contest**: $3,000+ prizes in Nov-Dec 2024
- **Active Development**: Responsive GitHub maintenance
- **Comprehensive Docs**: Available at `help.penpot.app/plugins/api/`

### 4. **Design Token Management - ALREADY BEST-IN-CLASS**

**Previous Understanding**: ❌ No design token API  
**Current Reality**: ✅ Industry-leading W3C-compliant implementation

#### Current Token Features
- **W3C Standard**: Full compliance with Design Tokens Community Group format
- **Native Support**: First design tool with native token implementation
- **Token Types**: Color, radius, dimensions, sizing, spacing, rotation, border, opacity
- **Advanced Features**: Token groups, referenced values, theme sets
- **Export Capabilities**: CSS, SCSS, JSON export formats
- **REST API**: Automation and integration capabilities

#### 2025 Enhancements Planned
- **GitHub Sync**: Automated import/export workflows
- **Gradients Support**: Extended token type coverage
- **Enhanced Automation**: Improved programmatic access

---

## ⚠️ Minor Technical Constraints

### 1. **Plugin Development HTTPS/CORS Requirements**

**Status**: ❌ **Critical Setup Issue** - Poorly documented in official guides

#### Cloud PenPot HTTPS Requirement
- **Problem**: Cloud PenPot uses HTTPS, cannot load HTTP plugin scripts
- **Error**: Cryptic CORS error messages instead of clear HTTPS requirement
- **Official Docs**: Don't mention HTTPS certificate requirement for development

#### Development Setup Required
```bash
# Required for cloud PenPot plugin development
# 1. Generate SSL certificate for localhost
# 2. Serve plugin over HTTPS (not HTTP)
# 3. Configure proper CORS headers
# 4. Official plugin templates use HTTP (won't work with cloud)
```

#### Impact on Development Workflow
- **Local Development**: Must set up SSL certificates
- **Team Onboarding**: Additional complexity not mentioned in guides
- **Error Debugging**: Misleading error messages slow development

### 2. **Plugin Performance Issues**

**Status**: ⚠️ **Moderate Limitation** - Affects user experience during creation

#### Main Thread Blocking
- **Issue**: Plugin execution blocks PenPot's main browser thread
- **Impact**: UI becomes unresponsive during component creation
- **Workaround**: Batch operations in smaller chunks
- **Scope**: Doesn't prevent functionality, just affects UX

### 3. **Design Token API Limitations - CRITICAL**

**Status**: ❌ **Major Functional Gaps** - Breaking design token workflow automation

#### Missing Capabilities
- **Token Creation**: Cannot create design tokens via plugin API
- **Token Updates**: Cannot modify existing tokens programmatically
- **Token Association**: ❌ **Cannot link element properties to tokens dynamically**
- **Token References**: Cannot set `{token.name}` syntax via plugin API
- **Theme Switching**: Impossible to create theme-aware components programmatically

#### Critical Impact: No Dynamic Token References
```typescript
// ❌ NOT POSSIBLE: Set token reference via plugin
element.fills = [{ fillColor: "{color.primary.7}" }]; // Doesn't work

// ❌ ACTUAL RESULT: Only static hex values work
element.fills = [{ fillColor: "#3B82F6" }]; // Light theme color hardcoded
element.fills = [{ fillColor: "#60A5FA" }]; // Dark theme color hardcoded

// CONSEQUENCE: Must create duplicate components for each theme
createButtonLight(); // Uses light theme hex values
createButtonDark();  // Uses dark theme hex values
```

#### Workflow Impact
- **Double Work**: Every component must be created twice (light + dark)
- **No Theme Switching**: Components can't adapt to theme changes
- **Maintenance Nightmare**: Updates require changing multiple hardcoded values
- **Defeats Token Purpose**: Loses main benefit of design token systems

#### Current Workaround
```typescript
// Forced to create theme-specific component sets
function createAllComponents() {
  // Light theme components (850x580px container)
  createComponentsWithTheme("light", lightThemeColors);
  
  // Dark theme components (separate 850x580px container)
  createComponentsWithTheme("dark", darkThemeColors);
  
  // Result: 2x the components, no dynamic theming
}
```

### 4. **OKLCH Color Format Support**

**Status**: ❌ **Not Supported** - Requires hex color conversion

#### Impact
- **NovyUI Tokens**: Use OKLCH color space for better color accuracy
- **PenPot Requirement**: Must convert to hex values for plugin API
- **Workaround**: Automated conversion in token processing pipeline

#### Technical Solution
```typescript
// Required conversion
const oklchColor = "oklch(70% 0.15 180)";
const hexColor = "#3B82F6"; // Converted value
shape.fills = [{ fillColor: hexColor }];
```

### 5. **Board Naming UX Issues**

**Status**: ⚠️ **Design Issue** - Not actually a technical limitation

#### Clarification
- **User Insight**: Board display can be disabled in UI settings
- **Real Issue**: Board naming system design questionable (Board vs Frame/Grouping)
- **Unicode Workaround**: Not actually needed, just aesthetic preference
- **Impact**: Minimal - UX design choice rather than technical constraint

### 6. **Canvas Size Edge Cases**

**Status**: ⚠️ **Rare Limitation** - Specific size combinations cause issues

#### Observed Issues
- **Very Large Layouts**: Canvas exceeding ~4000px width can cause rendering issues
- **Thumbnail Generation**: Affects PenPot's preview system
- **Workaround**: Vertical layout instead of horizontal for large showcases

#### Technical Solution
```typescript
// Avoid: Wide horizontal layouts
const totalWidth = 1440 + 1500 + 1440; // 4380px - problematic

// Use: Vertical stacking
lightTheme.y = startY;
darkTheme.y = startY + 1100; // Keeps width at 1440px
```

---

## 🔧 Current Workarounds & Solutions

### 1. **Component Variant Management**

#### Naming Convention Strategy
```
Component Organization:
├── Button/
│   ├── Button-Primary-Normal
│   ├── Button-Primary-Hover
│   ├── Button-Primary-Active
│   └── [continuing pattern...]
├── Input/
│   ├── Input-Text-Normal
│   ├── Input-Text-Focus
│   └── [continuing pattern...]
```

#### Plugin Automation Approach
- **Batch Creation**: Generate all variant combinations programmatically
- **Consistent Styling**: Use shared token references across variants
- **Systematic Naming**: Automated naming for discoverability
- **Documentation**: Generate component documentation alongside creation

### 2. **Layout System Workarounds**

#### Transparent Spacer Elements (Critical Solution)
```typescript
// PROBLEM: Flex gap and padding properties don't work
layout.gap = 16; // ❌ Doesn't work reliably
layout.paddingLeft = 12; // ❌ Elements still touch borders

// SOLUTION: Transparent spacer rectangles
const leftSpacer = penpot.createRectangle();
leftSpacer.resize(paddingX, height);
leftSpacer.fills = []; // Transparent spacer
leftSpacer.strokes = []; // No borders

// Proper flex layout with spacers
container.appendChild(leftSpacer);
container.appendChild(content);
container.appendChild(rightSpacer);
```

#### Gap Workaround Pattern
```typescript
// For multiple elements with consistent spacing
elements.forEach((element, index) => {
  container.appendChild(element);
  
  // Add gap spacer between elements (except last)
  if (index < elements.length - 1) {
    const gapSpacer = penpot.createRectangle();
    gapSpacer.resize(gapSize, 1); // Invisible gap element
    gapSpacer.fills = [];
    container.appendChild(gapSpacer);
  }
});
```

#### Hybrid Positioning Strategy
```typescript
// Combine flex layout with absolute positioning when spacers fail
const flexLayout = container.addFlexLayout();
flexLayout.alignItems = "center";

// Fall back to absolute positioning for problematic elements
if (spacersNotWorking) {
  specialElement.x = container.x + calculatedPadding;
  specialElement.y = container.y + verticalCenter;
}
```

### 3. **Plugin Development Setup Workarounds**

#### HTTPS Development Server Setup
```bash
# Required for cloud PenPot compatibility
# Generate SSL certificate for localhost
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout localhost-key.pem -out localhost-cert.pem

# Configure development server with HTTPS
vite --https --cert localhost-cert.pem --key localhost-key.pem

# Set CORS headers in vite.config.js
export default {
  server: {
    https: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  }
}
```

### 4. **Token Integration Pipeline**

#### Automated Color Conversion
```typescript
// OKLCH to Hex conversion pipeline
const novyUITokens = loadOKLCHTokens();
const penpotTokens = convertToHex(novyUITokens);
applyTokensToComponents(penpotTokens);
```

#### Theme System Implementation
```typescript
// Theme switching via token references
shape.fills = [{ fillColor: "{color.primary.7}" }]; // Light theme
shape.fills = [{ fillColor: "{color.primary.6}" }]; // Dark theme
```

---

## 🗓️ Roadmap & Timeline

### Component Variants Development

#### Active Development
- **Pull request #6051**: Added variants properties to inspect panel
- **Pull request #5876**: Drag components in/out of variant containers
- **Pull request #6131**: Variants system refactoring

#### Development Philosophy
PenPot explicitly avoids fixed roadmap dates: *"When innovating, commitments can be tricky. You're exploring uncharted territory, filled with uncertainty."*

#### Timeline Indicators
- **Active PRs**: Component variants are being actively developed
- **Community Priority**: High community demand drives development priority
- **Expected Timeframe**: No specific dates provided

### Upcoming Events

#### PenPot Fest
- **Date**: October 9-10
- **Location**: Madrid, Spain
- **Expected**: Major feature announcements and roadmap updates

### Other Improvements

#### Design Token Enhancements
- **GitHub Sync**: Automated repository integration
- **Gradients**: Extended token type support
- **API Improvements**: Enhanced automation capabilities

#### Plugin System Evolution
- **Expanded Permissions**: Additional API access levels
- **Performance Improvements**: Faster plugin execution
- **Development Tools**: Enhanced debugging and testing capabilities

---

## 📈 Recommendations & Next Steps

### Immediate Actions

#### 1. Address Critical Technical Issues
- **HTTPS Setup**: Document proper SSL certificate setup for plugin development
- **Layout Solutions**: Refine transparent spacer workarounds for gap/padding issues
- **Performance**: Implement chunked operations to reduce main thread blocking
- **Development Guide**: Create comprehensive plugin development setup documentation

#### 2. Continue Current Plugin Development
- **Maintain Plugin**: Keep improving individual component creation with spacer workarounds
- **Expand Coverage**: Add remaining NovyUI components using proven layout patterns
- **Improve Automation**: Enhance batch creation workflows with performance considerations
- **Documentation**: Create comprehensive component library docs including technical constraints

#### 3. Work Around Current Limitations
- **Token Management**: Document manual token import/export workflows
- **Layout Issues**: Perfect transparent spacer patterns for consistent spacing
- **Authentication**: Use username/password for external API access when needed
- **Development Environment**: Maintain HTTPS-enabled development setup

#### 4. Prepare for Component Variants
- **Architecture Planning**: Design variant structure for future migration
- **Naming Standards**: Develop consistent variant naming conventions  
- **Token Mapping**: Ensure all variants properly reference design tokens
- **Migration Strategy**: Plan transition from individual components to variants

#### 5. Monitor Development Progress
- **GitHub Tracking**: Watch component variant PRs (#6051, #5876, #6131) and issues
- **Community Engagement**: Report layout/gap issues to help improve plugin API
- **Feature Testing**: Test preview builds when available
- **Feedback Provision**: Share design system requirements and technical constraints with PenPot team

### Medium-term Strategy

#### 1. Full System Migration
- **Variant Migration**: Convert individual components to variant system
- **Workflow Integration**: Integrate with design-development workflows
- **Team Training**: Onboard team members to PenPot-based workflows
- **Documentation**: Create complete design system documentation

#### 2. Automation Enhancement
- **CI/CD Integration**: Automate design system updates
- **Sync Workflows**: Maintain consistency between code and PenPot
- **Quality Assurance**: Automated testing of design token changes
- **Version Control**: Design system versioning and change management

### Long-term Vision

#### 1. Design System Maturity
- **Complete Automation**: Fully automated design system maintenance
- **Advanced Workflows**: Complex design-development integration
- **Community Sharing**: Open source design system templates
- **Standards Compliance**: Industry best practices implementation

#### 2. Platform Integration
- **MoonZoon Integration**: Direct code generation from PenPot designs
- **Developer Tools**: VS Code extensions and CLI tools
- **Design APIs**: Programmatic design system management
- **Cross-Platform**: Consistent experience across all frameworks

---

## 🎯 Strategic Considerations

### Why PenPot Despite Limitations?

#### Long-term Benefits
- **Open Source**: No vendor lock-in, community-driven development
- **W3C Compliance**: Future-proof design token standards
- **Self-Hosting**: Complete control over design infrastructure
- **Community**: Active development community and responsive maintainers

#### Competitive Advantages
- **Token System**: Industry-leading design token implementation *(but limited plugin API access)*
- **Plugin Ecosystem**: Comprehensive and well-documented API *(with significant constraints)*
- **Standards Compliance**: Built on open web standards
- **Transparency**: Open development process and roadmap

#### Current Reality Check
While PenPot has excellent design token support in the UI, the plugin API limitations severely restrict automation capabilities:
- No dynamic token references means no true theme switching
- Layout issues require complex workarounds
- Authentication limitations complicate external integrations
- Missing component variants multiply work exponentially

### Risk Assessment

#### Primary Risk: Component Variants Delay
- **Likelihood**: Low-Medium (active development visible)
- **Impact**: High (blocks full design system automation)
- **Mitigation**: Continue current workaround approach, maintain flexibility

#### Secondary Risks
- **OKLCH Support**: Low impact, workaround available
- **API Changes**: Low likelihood, stable plugin API
- **Community Adoption**: Growing ecosystem reduces this risk

### Success Criteria

#### Phase 1: Current State (✅ Achieved)
- Individual component automation working
- Plugin system mastery achieved
- Workaround strategies proven effective
- Team workflow adaptation successful

#### Phase 2: Component Variants (🎯 Target)
- True component variant system available
- Migration from individual to variant components
- Full design system automation achieved
- Team workflow optimization completed

#### Phase 3: Ecosystem Maturity (🔮 Future)
- Complete design-development integration
- Industry-standard design system workflows
- Community adoption and sharing
- Advanced automation and tooling

---

## 📚 Additional Resources

### Official Documentation
- **Plugin API**: https://help.penpot.app/plugins/api/
- **Design Tokens**: https://help.penpot.app/user-guide/design-tokens/
- **Community Forum**: https://community.penpot.app/

### Project Documentation
- **Migration Status**: `/PenPot/MIGRATION_STATUS.md`
- **Plugin Research**: `/PenPot/PLUGIN_RESEARCH.md`
- **Component Specifications**: `/PenPot/components/`
- **Design Tokens**: `/PenPot/tokens/`

### Development Resources
- **GitHub Repository**: https://github.com/penpot/penpot
- **Plugin Examples**: https://github.com/penpot/penpot-plugins
- **TypeScript Types**: `@penpot/plugin-types`

---

## 🔄 Document Maintenance

This document should be updated:
- **Quarterly**: Review official roadmap and development progress
- **After Major Releases**: Update capabilities and limitations
- **When Issues Resolved**: Remove limitations as they're addressed
- **Community Feedback**: Incorporate new findings and workarounds

**Document Owner**: NovyUI Project Team
**Last Research Date**: June 2025

---

## 📊 Summary of Key Limitations

### Critical Blockers (Preventing Automation)
1. **No Component Variants/States** - 313 components needed instead of 18
2. **No Dynamic Token References** - Must duplicate everything for themes
3. **Layout System Broken** - Gap/padding require spacer workarounds
4. **Token API Missing** - No programmatic token management

### Major Issues (Complicating Development)
1. **HTTPS/CORS Requirements** - Undocumented, complex setup
2. **API Authentication Limits** - Tokens restricted, passwords required
3. **Performance Problems** - Main thread blocking during operations

### Impact on NovyUI Project
- **Automation Goal**: Not achievable with current limitations
- **Manual Effort**: 2-3x more work due to theme duplication
- **Maintenance**: Nearly impossible with hardcoded values
- **Team Adoption**: Difficult to justify over existing tools

---

*This document represents comprehensive research conducted in June 2025, including official documentation review, community feedback analysis, and hands-on project experience. The limitations documented here are based on actual implementation attempts and may change as PenPot development progresses.*