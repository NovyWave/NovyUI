import { type ComputedRef } from 'vue';
import { color, spacing, cornerRadius, border, shadow, opacity, zIndex, typography, patterns, icons, width, height, transition, animation } from './tokens';

/**
 * Helper to generate color options with descriptive keys (returns computed refs, not unwrapped values)
 */
export function getColorOptions(colorObj: typeof color) {
  return Object.entries(colorObj).reduce((acc, [palette, scale]) => {
    Object.entries(scale).forEach(([scaleKey, val]) => {
      acc[`${palette} ${scaleKey} (theme)`] = val as ComputedRef<string>;
    });
    return acc;
  }, {} as Record<string, ComputedRef<string>>);
}

/**
 * Helper to generate width options with descriptive keys
 */
export function getWidthOptions(widthObj: Record<string, string>) {
  return Object.entries(widthObj).reduce((acc, [key, value]) => {
    acc[`Width ${key} (${value})`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate height options with descriptive keys
 */
export function getHeightOptions(heightObj: Record<string, string>) {
  return Object.entries(heightObj).reduce((acc, [key, value]) => {
    acc[`Height ${key} (${value})`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate spacing options with descriptive keys
 */
export function getSpacingOptions(spacingObj: typeof spacing) {
  return Object.entries(spacingObj).reduce((acc, [key, value]) => {
    acc[`Spacing ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate corner radius options with descriptive keys
 */
export function getCornerRadiusOptions(cornerObj: typeof cornerRadius) {
  return Object.entries(cornerObj).reduce((acc, [key, value]) => {
    acc[`Radius ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate border width options with descriptive keys
 */
export function getBorderWidthOptions(borderObj: typeof border.width) {
  return Object.entries(borderObj).reduce((acc, [key, value]) => {
    acc[`Border ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate border style options with descriptive keys
 */
export function getBorderStyleOptions(borderObj: typeof border.style) {
  return Object.entries(borderObj).reduce((acc, [key, value]) => {
    acc[`Border style ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate shadow size options with descriptive keys
 */
export function getShadowSizeOptions(shadowObj: typeof shadow.size) {
  return Object.entries(shadowObj).reduce((acc, [key, value]) => {
    acc[`Shadow size ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate shadow color options with descriptive keys
 */
export function getShadowColorOptions(shadowObj: typeof shadow.color) {
  return Object.entries(shadowObj).reduce((acc, [key, value]) => {
    acc[`Shadow color ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate opacity options with descriptive keys
 */
export function getOpacityOptions(opacityObj: typeof opacity) {
  return Object.entries(opacityObj).reduce((acc, [key, value]) => {
    acc[`Opacity ${key}`] = value;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Helper to generate z-index options with descriptive keys
 */
export function getZIndexOptions(zIndexObj: typeof zIndex) {
  return Object.entries(zIndexObj).reduce((acc, [key, value]) => {
    acc[`zIndex ${key}`] = value;
    return acc;
  }, {} as Record<string, number | string>);
}

/**
 * Helper to generate typography size options with descriptive keys
 */
export function getTypographySizeOptions(typographyObj: typeof typography.size) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Font size ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Helper to generate typography weight options with descriptive keys
 */
export function getTypographyWeightOptions(typographyObj: typeof typography.weight) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Font weight ${key}`] = value;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Helper to generate typography line height options with descriptive keys
 */
export function getTypographyLineOptions(typographyObj: typeof typography.line) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Line height ${key}`] = value;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Helper to generate typography tracking options with descriptive keys
 */
export function getTypographyTrackingOptions(typographyObj: typeof typography.tracking) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Tracking ${key}`] = value;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Helper to generate typography family options with descriptive keys
 */
export function getTypographyFamilyOptions(typographyObj: typeof typography.family) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Font family ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Pattern tokens for SVG backgrounds.
 */
export function getPatternOptions(patternsArr: typeof patterns) {
  return patternsArr.reduce((acc, pattern) => {
    acc[pattern.name] = pattern.file;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Icon tokens for available icon names.
 */
export function getIconOptions(iconsArr: typeof icons) {
  return iconsArr.reduce((acc, icon) => {
    acc[icon] = `/icons/${icon}.svg`;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Transition tokens for standard transitions.
 */
export function getTransitionOptions(transitionObj: typeof transition) {
  return Object.entries(transitionObj).reduce((acc, [key, value]) => {
    acc[`Transition ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Animation tokens for standard animations.
 */
export function getAnimationOptions(animationObj: typeof animation) {
  return Object.entries(animationObj).reduce((acc, [key, value]) => {
    acc[`Animation ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}
