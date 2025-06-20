// PenPot API type augmentation
// This extends the official @penpot/plugin-types with verified methods

declare global {
  const penpot: {
    ui: {
      open: (name: string, url: string) => void;
      onMessage: (callback: (message: any) => void) => void;
      sendMessage: (message: any) => void;
    };
    viewport?: {
      center?: { x: number; y: number; };
    };
    
    // Shape creation methods (verified working)
    createRectangle: () => PenpotRectangle;
    createEllipse: () => PenpotShape;
    createPath: () => PenpotShape;
    createBoard: () => PenpotShape;
    createText: (text: string) => PenpotText | null;
    
    // Methods that MAY exist (need to test)
    group?: (elements: PenpotShape[]) => PenpotGroup;
    // createFrame?: () => PenpotFrame; // DOES NOT EXIST - removed
    
    library?: any;
  };
}

interface PenpotShape {
  name: string;
  x: number;
  y: number;
  resize: (width: number, height: number) => void;
  fills?: Array<{ fillColor: string; fillOpacity?: number; }>;
  strokes?: Array<{ strokeColor: string; strokeWidth: number; }>;
  borderRadius?: number;
  shadows?: Array<{
    offsetX: number;
    offsetY: number;
    blur: number;
    spread: number;
    color: string;
    hidden?: boolean;
  }>;
  opacity?: number;
}

interface PenpotRectangle extends PenpotShape {
  borderRadius: number;
}

interface PenpotText extends PenpotShape {
  characters: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number | string;
}

interface PenpotGroup extends PenpotShape {
  appendChild?: (child: PenpotShape) => void;
}

export {};