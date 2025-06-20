const c = {
  color: {
    primary: {
      1: { light: { $value: "#E6F0FF" }, dark: { $value: "#0A1929" } },
      2: { light: { $value: "#CCE0FF" }, dark: { $value: "#112A45" } },
      3: { light: { $value: "#99C2FF" }, dark: { $value: "#1E3A5F" } },
      4: { light: { $value: "#66A3FF" }, dark: { $value: "#2E4C7E" } },
      5: { light: { $value: "#3385FF" }, dark: { $value: "#3D5FA1" } },
      6: { light: { $value: "#0066FF" }, dark: { $value: "#4E73C8" } },
      7: { light: { $value: "#0052CC" }, dark: { $value: "#5E86F0" } },
      8: { light: { $value: "#003D99" }, dark: { $value: "#7196FF" } },
      9: { light: { $value: "#002966" }, dark: { $value: "#85A6FF" } },
      10: { light: { $value: "#001433" }, dark: { $value: "#99B8FF" } },
      11: { light: { $value: "#000A1A" }, dark: { $value: "#B3CCFF" } },
      12: { light: { $value: "#00050D" }, dark: { $value: "#E6F0FF" } }
    },
    neutral: {
      1: { light: { $value: "#FAFAFA" }, dark: { $value: "#0A0A0A" } },
      2: { light: { $value: "#F5F5F5" }, dark: { $value: "#171717" } },
      3: { light: { $value: "#E5E5E5" }, dark: { $value: "#262626" } },
      4: { light: { $value: "#D4D4D4" }, dark: { $value: "#363636" } },
      5: { light: { $value: "#A3A3A3" }, dark: { $value: "#525252" } },
      6: { light: { $value: "#737373" }, dark: { $value: "#6B6B6B" } },
      7: { light: { $value: "#525252" }, dark: { $value: "#858585" } },
      8: { light: { $value: "#404040" }, dark: { $value: "#A3A3A3" } },
      9: { light: { $value: "#262626" }, dark: { $value: "#C2C2C2" } },
      10: { light: { $value: "#171717" }, dark: { $value: "#E0E0E0" } },
      11: { light: { $value: "#0A0A0A" }, dark: { $value: "#F5F5F5" } },
      12: { light: { $value: "#000000" }, dark: { $value: "#FFFFFF" } }
    },
    success: {
      7: { light: { $value: "#10B981" }, dark: { $value: "#34D399" } }
    },
    warning: {
      7: { light: { $value: "#F59E0B" }, dark: { $value: "#FBB040" } }
    },
    error: {
      7: { light: { $value: "#EF4444" }, dark: { $value: "#F87171" } }
    },
    static: {
      white: { $value: "#FFFFFF" },
      black: { $value: "#000000" },
      transparent: { $value: "transparent" }
    }
  },
  borderRadius: {
    sm: { $value: 4 },
    md: { $value: 6 },
    lg: { $value: 8 },
    xl: { $value: 12 },
    full: { $value: 9999 }
  },
  spacing: {
    1: { $value: 4 },
    2: { $value: 8 },
    3: { $value: 12 },
    4: { $value: 16 },
    5: { $value: 20 },
    6: { $value: 24 },
    8: { $value: 32 },
    10: { $value: 40 },
    12: { $value: 48 },
    16: { $value: 64 }
  }
};
penpot.ui.open("NovyUI Design System", "");
penpot.ui.onMessage((e) => {
  switch (console.log("Received message:", e), e.type) {
    case "test-capabilities":
      u();
      break;
    case "import-tokens":
      f();
      break;
    case "create-test-component":
      d();
      break;
    case "create-all-components":
      y();
      break;
    default:
      console.error("Unknown message type:", e.type);
  }
});
function u() {
  console.log("🔍 Testing PenPot Plugin API Capabilities...");
  const e = {
    // Basic shape creation
    hasPenpot: typeof penpot < "u",
    hasCreateRectangle: typeof penpot.createRectangle == "function",
    hasCreateEllipse: typeof penpot.createEllipse == "function",
    hasCreatePath: typeof penpot.createPath == "function",
    hasCreateBoard: typeof penpot.createBoard == "function",
    hasCreateText: typeof penpot.createText == "function",
    hasUI: typeof penpot.ui < "u",
    hasViewport: typeof penpot.viewport < "u",
    // Typography properties
    hasFontFamily: typeof penpot.setFontFamily == "function",
    hasFontSize: typeof penpot.setFontSize == "function",
    hasFontWeight: typeof penpot.setFontWeight == "function",
    hasTextProperties: typeof penpot.textProperties < "u",
    // Shadow properties
    hasShadow: typeof penpot.setShadow == "function",
    hasBoxShadow: typeof penpot.setBoxShadow == "function",
    hasShadowProperties: typeof penpot.shadowProperties < "u",
    // Border and corner radius
    hasBorderRadius: typeof penpot.setBorderRadius == "function",
    hasCornerRadius: typeof penpot.setCornerRadius == "function",
    // Opacity
    hasOpacity: typeof penpot.setOpacity == "function",
    hasElementOpacity: typeof penpot.opacity < "u",
    // Design system features
    hasCreateComponent: typeof penpot.createComponent == "function",
    hasImportTokens: typeof penpot.importTokens == "function",
    hasSetTokens: typeof penpot.setTokens == "function",
    hasColors: typeof penpot.colors < "u",
    hasTypography: typeof penpot.typography < "u",
    hasLibrary: typeof penpot.library < "u",
    // All available properties on penpot object
    penpotProperties: Object.getOwnPropertyNames(penpot)
  };
  h(), v(), $(), F(), penpot.ui.sendMessage({
    type: "capabilities-result",
    data: e
  }), console.log("Plugin Capabilities:", e);
}
function f() {
  console.log("🎨 Importing NovyUI Design Tokens...");
  try {
    const e = c.color;
    let t = 0, o = 0;
    Object.entries(e).forEach(([a, n]) => {
      a === "static" ? Object.entries(n).forEach(([s, r]) => {
        if (r.$value && r.$value !== "transparent") {
          const l = penpot.createRectangle();
          l.name = `${a}-${s}`, l.x = 100 + o % 10 * 120, l.y = 100 + Math.floor(o / 10) * 120, l.resize(100, 100), l.fills = [{ fillColor: r.$value }], t++, o++;
        }
      }) : Object.entries(n).forEach(([s, r]) => {
        if (r.light && r.light.$value) {
          const l = penpot.createRectangle();
          l.name = `${a}-${s}`, l.x = 100 + o % 10 * 120, l.y = 100 + Math.floor(o / 10) * 120, l.resize(100, 100), l.fills = [{ fillColor: r.light.$value }], t++, o++;
        }
      });
    }), penpot.ui.sendMessage({
      type: "import-result",
      data: {
        success: !0,
        message: `Created ${t} color swatches from tokens`
      }
    });
  } catch (e) {
    penpot.ui.sendMessage({
      type: "import-result",
      data: {
        success: !1,
        error: e.message
      }
    });
  }
}
function d() {
  console.log("🔧 Creating Test NovyUI Button Component...");
  try {
    const e = penpot.createRectangle();
    if (e.name = "NovyUI Button - Primary", e.x = 200, e.y = 400, e.resize(120, 40), e.borderRadius = 6, e.fills = [{
      fillColor: c.color.primary[7].light.$value || "#3B82F6"
    }], typeof penpot.createText == "function") {
      const t = penpot.createText("Button Label");
      t && (t.name = "Button Label", t.x = e.x + 30, t.y = e.y + 12, t.resize(60, 16), t.characters = "Click me", t.fills = [{
        fillColor: c.color.static.white.$value || "#FFFFFF"
      }]);
    }
    if (penpot.viewport && penpot.viewport.center) {
      const t = penpot.viewport.center;
      e.x = t.x - 60, e.y = t.y - 20;
    }
    penpot.ui.sendMessage({
      type: "component-result",
      data: {
        success: !0,
        message: "Created NovyUI button component"
      }
    });
  } catch (e) {
    penpot.ui.sendMessage({
      type: "component-result",
      data: {
        success: !1,
        error: e.message
      }
    });
  }
}
function y() {
  console.log("🏗️ Creating All NovyUI Components...");
  const e = [
    { name: "Button", variants: ["primary", "secondary", "outline"] },
    { name: "Input", variants: ["text", "email", "password"] },
    { name: "Card", variants: ["default", "elevated", "outlined"] },
    { name: "Badge", variants: ["default", "success", "warning", "error"] }
    // Add more components as needed
  ];
  let t = 0;
  const o = 100, a = 100, n = 150;
  e.forEach((s, r) => {
    s.variants.forEach((l, p) => {
      const i = penpot.createRectangle();
      i.name = `${s.name}-${l}`, i.x = o + p * n, i.y = a + r * n, i.resize(120, 40), g(i, s.name, l), t++;
    });
  }), penpot.ui.sendMessage({
    type: "batch-result",
    data: {
      success: !0,
      message: `Created ${t} component variants`
    }
  });
}
function g(e, t, o) {
  const a = c;
  switch (e.borderRadius = 6, t) {
    case "Button":
      o === "primary" ? e.fills = [{ fillColor: a.color.primary[7].light.$value }] : o === "secondary" ? e.fills = [{ fillColor: a.color.neutral[3].light.$value }] : o === "outline" && (e.fills = [], e.strokes = [{
        strokeColor: a.color.primary[7].light.$value,
        strokeWidth: 2
      }]);
      break;
    case "Input":
      e.fills = [{ fillColor: a.color.static.white.$value }], e.strokes = [{
        strokeColor: a.color.neutral[6].light.$value,
        strokeWidth: 1
      }];
      break;
    case "Card":
      o === "elevated" ? e.fills = [{ fillColor: a.color.static.white.$value }] : o === "outlined" && (e.fills = [{ fillColor: a.color.static.white.$value }], e.strokes = [{
        strokeColor: a.color.neutral[4].light.$value,
        strokeWidth: 1
      }]);
      break;
    case "Badge":
      e.resize(80, 24), e.borderRadius = 12, o === "success" ? e.fills = [{ fillColor: a.color.success[7].light.$value }] : o === "warning" ? e.fills = [{ fillColor: a.color.warning[7].light.$value }] : o === "error" && (e.fills = [{ fillColor: a.color.error[7].light.$value }]);
      break;
  }
}
function h() {
  console.log("📝 Testing Typography APIs...");
  try {
    const e = penpot.createText("Typography Test");
    if (e) {
      e.name = "Typography API Test", e.x = 500, e.y = 100;
      const t = {
        canSetFontFamily: !1,
        canSetFontSize: !1,
        canSetFontWeight: !1,
        canSetTextColor: !1,
        availableProperties: Object.getOwnPropertyNames(e)
      };
      try {
        "fontFamily" in e && (e.fontFamily = "Inter", t.canSetFontFamily = !0);
      } catch (o) {
        console.log("FontFamily failed:", o);
      }
      try {
        "fontSize" in e && (e.fontSize = 16, t.canSetFontSize = !0);
      } catch (o) {
        console.log("FontSize failed:", o);
      }
      try {
        "fontWeight" in e && (e.fontWeight = "bold", t.canSetFontWeight = !0);
      } catch (o) {
        console.log("FontWeight failed:", o);
      }
      try {
        e.fills = [{ fillColor: "#333333" }], t.canSetTextColor = !0;
      } catch (o) {
        console.log("TextColor failed:", o);
      }
      console.log("Typography Test Results:", t), penpot.ui.sendMessage({
        type: "typography-test-result",
        data: t
      });
    }
  } catch (e) {
    console.error("Typography test failed:", e);
  }
}
function v() {
  console.log("🎭 Testing Shadow APIs...");
  try {
    const e = penpot.createRectangle();
    e.name = "Shadow API Test", e.x = 500, e.y = 250, e.resize(100, 100), e.fills = [{ fillColor: "#FFFFFF" }];
    const t = {
      canSetShadow: !1,
      canSetBoxShadow: !1,
      hasShadowProperty: !1,
      availableProperties: Object.getOwnPropertyNames(e)
    };
    try {
      "shadow" in e && (t.hasShadowProperty = !0, e.shadow = "0 4px 6px rgba(0,0,0,0.1)", t.canSetShadow = !0);
    } catch (o) {
      console.log("Shadow property failed:", o);
    }
    try {
      "shadows" in e && (e.shadows = [{
        offsetX: 0,
        offsetY: 4,
        blur: 6,
        spread: 0,
        color: "#00000010"
      }], t.canSetBoxShadow = !0);
    } catch (o) {
      console.log("Shadows array failed:", o);
    }
    console.log("Shadow Test Results:", t), penpot.ui.sendMessage({
      type: "shadow-test-result",
      data: t
    });
  } catch (e) {
    console.error("Shadow test failed:", e);
  }
}
function $() {
  console.log("🔲 Testing Border Radius APIs...");
  try {
    const e = penpot.createRectangle();
    e.name = "Border Radius API Test", e.x = 500, e.y = 400, e.resize(100, 100), e.fills = [{ fillColor: "#0066FF" }];
    const t = {
      canSetBorderRadius: !1,
      canSetRx: !1,
      canSetRy: !1,
      availableProperties: Object.getOwnPropertyNames(e)
    };
    try {
      e.borderRadius = 12, t.canSetBorderRadius = !0;
    } catch (o) {
      console.log("BorderRadius failed:", o);
    }
    try {
      "rx" in e && (e.rx = 8, t.canSetRx = !0);
    } catch (o) {
      console.log("Rx failed:", o);
    }
    try {
      "ry" in e && (e.ry = 8, t.canSetRy = !0);
    } catch (o) {
      console.log("Ry failed:", o);
    }
    console.log("Border Radius Test Results:", t), penpot.ui.sendMessage({
      type: "border-radius-test-result",
      data: t
    });
  } catch (e) {
    console.error("Border radius test failed:", e);
  }
}
function F() {
  console.log("👻 Testing Opacity APIs...");
  try {
    const e = penpot.createRectangle();
    e.name = "Opacity API Test", e.x = 500, e.y = 550, e.resize(100, 100), e.fills = [{ fillColor: "#FF0000" }];
    const t = {
      canSetOpacity: !1,
      canSetFillOpacity: !1,
      availableProperties: Object.getOwnPropertyNames(e)
    };
    try {
      "opacity" in e && (e.opacity = 0.5, t.canSetOpacity = !0);
    } catch (o) {
      console.log("Opacity failed:", o);
    }
    try {
      e.fills = [{ fillColor: "#FF0000", fillOpacity: 0.5 }], t.canSetFillOpacity = !0;
    } catch (o) {
      console.log("Fill opacity failed:", o);
    }
    console.log("Opacity Test Results:", t), penpot.ui.sendMessage({
      type: "opacity-test-result",
      data: t
    });
  } catch (e) {
    console.error("Opacity test failed:", e);
  }
}
console.log("✅ NovyUI PenPot Plugin Loaded");
