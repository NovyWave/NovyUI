// Color Token System
// Reactive approach using theme signals

use super::theme::{theme, Theme};
use zoon::*;

// Primary Color Scale - Reactive signals
pub fn primary_1() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(98% 0.01 250)",
        Theme::Dark => "oklch(20% 0.01 250)",
    })
}

pub fn primary_2() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(95% 0.02 250)",
        Theme::Dark => "oklch(25% 0.02 250)",
    })
}

pub fn primary_3() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(90% 0.04 250)",
        Theme::Dark => "oklch(30% 0.04 250)",
    })
}

pub fn primary_7() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(55% 0.16 250)",
        Theme::Dark => "oklch(65% 0.16 250)",
    })
}

pub fn primary_9() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(45% 0.20 250)",
        Theme::Dark => "oklch(75% 0.20 250)",
    })
}

// Neutral Color Scale - Reactive signals
pub fn neutral_1() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(99% 0.025 255)",
        Theme::Dark => "oklch(12% 0.025 255)",
    })
}

pub fn neutral_2() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(97% 0.025 255)",
        Theme::Dark => "oklch(15% 0.025 255)",
    })
}

pub fn neutral_3() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(95% 0.025 255)",
        Theme::Dark => "oklch(18% 0.025 255)",
    })
}

pub fn neutral_6() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(70% 0.025 255)",
        Theme::Dark => "oklch(45% 0.025 255)",
    })
}

pub fn neutral_9() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(40% 0.025 255)",
        Theme::Dark => "oklch(70% 0.025 255)",
    })
}

pub fn neutral_11() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(25% 0.025 255)",
        Theme::Dark => "oklch(85% 0.025 255)",
    })
}

pub fn neutral_12() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(15% 0.025 255)",
        Theme::Dark => "oklch(95% 0.025 255)",
    })
}

// Error Color Scale - Reactive signals
pub fn error_7() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(55% 0.16 15)",
        Theme::Dark => "oklch(65% 0.16 15)",
    })
}

pub fn error_9() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(45% 0.20 15)",
        Theme::Dark => "oklch(75% 0.20 15)",
    })
}

// Success Color Scale - Reactive signals
pub fn success_7() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(55% 0.16 140)",
        Theme::Dark => "oklch(65% 0.16 140)",
    })
}

pub fn success_9() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(45% 0.20 140)",
        Theme::Dark => "oklch(75% 0.20 140)",
    })
}

// Static colors that don't change with theme
pub fn transparent() -> &'static str {
    "transparent"
}

pub fn white() -> &'static str {
    "oklch(100% 0 0)"
}

pub fn black() -> &'static str {
    "oklch(0% 0 0)"
}
