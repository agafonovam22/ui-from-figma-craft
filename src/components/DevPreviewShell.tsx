import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Tablet, RotateCcw } from 'lucide-react';

interface Resolution {
  name: string;
  width: number;
  height: number;
  icon: React.ComponentType<any>;
}

const resolutions: Resolution[] = [
  { name: 'Desktop FHD', width: 1920, height: 1080, icon: Monitor },
  { name: 'Desktop 2K', width: 2560, height: 1440, icon: Monitor },
  { name: 'Laptop', width: 1366, height: 768, icon: Monitor },
  { name: 'Tablet', width: 768, height: 1024, icon: Tablet },
  { name: 'Mobile', width: 375, height: 667, icon: Smartphone },
];

interface DevPreviewShellProps {
  children: React.ReactNode;
}

const DevPreviewShell: React.FC<DevPreviewShellProps> = ({ children }) => {
  const [selectedResolution, setSelectedResolution] = useState<Resolution>(resolutions[0]);
  const [isLandscape, setIsLandscape] = useState(true);
  const [scaleMode, setScaleMode] = useState<'fit' | '100%'>('fit');
  const [isVisible, setIsVisible] = useState(true);

  // Load preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('dev-preview-settings');
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        const resolution = resolutions.find(r => r.name === settings.resolution);
        if (resolution) setSelectedResolution(resolution);
        if (settings.isLandscape !== undefined) setIsLandscape(settings.isLandscape);
        if (settings.scaleMode) setScaleMode(settings.scaleMode);
        if (settings.isVisible !== undefined) setIsVisible(settings.isVisible);
      } catch (e) {
        // Ignore invalid JSON
      }
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    const settings = {
      resolution: selectedResolution.name,
      isLandscape,
      scaleMode,
      isVisible
    };
    localStorage.setItem('dev-preview-settings', JSON.stringify(settings));
  }, [selectedResolution, isLandscape, scaleMode, isVisible]);

  const currentWidth = isLandscape ? selectedResolution.width : selectedResolution.height;
  const currentHeight = isLandscape ? selectedResolution.height : selectedResolution.width;

  const getScale = () => {
    if (scaleMode === '100%') return 1;
    
    const windowWidth = window.innerWidth - 320; // Account for panel width
    const windowHeight = window.innerHeight - 100; // Account for header/padding
    
    const scaleX = windowWidth / currentWidth;
    const scaleY = windowHeight / currentHeight;
    
    return Math.min(scaleX, scaleY, 1);
  };

  const scale = getScale();

  if (!isVisible) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Control Panel */}
      <div className="w-80 bg-background border-r border-border p-4 space-y-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm">Resolution Preview</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Hide
          </button>
        </div>
        
        {/* Resolution Presets */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Presets</label>
          {resolutions.map((resolution) => {
            const Icon = resolution.icon;
            return (
              <button
                key={resolution.name}
                onClick={() => setSelectedResolution(resolution)}
                className={`w-full flex items-center gap-2 p-2 rounded text-left text-xs transition-colors ${
                  selectedResolution.name === resolution.name
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon size={14} />
                <span>{resolution.name}</span>
                <span className="ml-auto text-muted-foreground">
                  {resolution.width}×{resolution.height}
                </span>
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Orientation</span>
            <button
              onClick={() => setIsLandscape(!isLandscape)}
              className="flex items-center gap-1 px-2 py-1 text-xs rounded hover:bg-muted"
            >
              <RotateCcw size={12} />
              {isLandscape ? 'Landscape' : 'Portrait'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Scale</span>
            <div className="flex rounded border">
              {(['fit', '100%'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setScaleMode(mode)}
                  className={`px-2 py-1 text-xs ${
                    scaleMode === mode
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {mode === 'fit' ? 'Fit' : '100%'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Current Info */}
        <div className="pt-3 border-t border-border space-y-1 text-xs text-muted-foreground">
          <div>Virtual: {currentWidth}×{currentHeight}</div>
          <div>Scale: {(scale * 100).toFixed(0)}%</div>
          <div>DPR: {window.devicePixelRatio}</div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-full">
          <div
            className="bg-white shadow-lg border border-border overflow-hidden"
            style={{
              width: currentWidth,
              height: currentHeight,
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
            }}
          >
            <div style={{ width: currentWidth, height: currentHeight }}>
              {children}
            </div>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground text-center">
            {selectedResolution.name} - {currentWidth}×{currentHeight} ({(scale * 100).toFixed(0)}% scale)
          </div>
        </div>
      </div>
    </div>
  );
};

// Toggle button to show the panel when hidden
export const DevPreviewToggle: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    const saved = localStorage.getItem('dev-preview-settings');
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        return settings.isVisible !== false;
      } catch (e) {
        return true;
      }
    }
    return true;
  });

  if (isVisible) return null;

  return (
    <button
      onClick={() => {
        setIsVisible(true);
        const settings = JSON.parse(localStorage.getItem('dev-preview-settings') || '{}');
        settings.isVisible = true;
        localStorage.setItem('dev-preview-settings', JSON.stringify(settings));
        window.location.reload();
      }}
      className="fixed top-4 right-4 z-50 bg-primary text-primary-foreground px-3 py-2 rounded text-xs font-medium shadow-lg hover:bg-primary/90"
    >
      Resolution Preview
    </button>
  );
};

export default DevPreviewShell;