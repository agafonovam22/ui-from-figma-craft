import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Monitor, Smartphone, Tablet, Eye, EyeOff } from 'lucide-react';

const presets = [
  { name: 'Mobile S', width: 320, height: 568, icon: Smartphone },
  { name: 'Mobile M', width: 375, height: 667, icon: Smartphone },
  { name: 'Mobile L', width: 414, height: 896, icon: Smartphone },
  { name: 'Tablet', width: 768, height: 1024, icon: Tablet },
  { name: 'Laptop', width: 1024, height: 768, icon: Monitor },
  { name: 'Laptop L', width: 1440, height: 900, icon: Monitor },
  { name: 'Full HD', width: 1920, height: 1080, icon: Monitor },
  { name: '4K', width: 2560, height: 1440, icon: Monitor },
];

const getBreakpoint = (width: number) => {
  if (width < 640) return 'Mobile';
  if (width < 768) return 'SM';
  if (width < 1024) return 'MD';
  if (width < 1280) return 'LG';
  if (width < 1536) return 'XL';
  if (width < 1920) return '2XL';
  if (width <= 2559) return 'HD';
  return '4K+';
};

interface DevPreviewShellProps {
  children: React.ReactNode;
}

export const DevPreviewShell: React.FC<DevPreviewShellProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState('Full HD');
  const [isLandscape, setIsLandscape] = useState(true);
  const [scale, setScale] = useState(0.5);
  const [customWidth, setCustomWidth] = useState(1920);
  const [customHeight, setCustomHeight] = useState(1080);

  // Load settings from localStorage
  useEffect(() => {
    const settings = localStorage.getItem('dev-preview-settings');
    if (settings) {
      const parsed = JSON.parse(settings);
      setIsVisible(parsed.isVisible ?? true);
      setSelectedPreset(parsed.selectedPreset ?? 'Full HD');
      setIsLandscape(parsed.isLandscape ?? true);
      setScale(parsed.scale ?? 0.5);
      setCustomWidth(parsed.customWidth ?? 1920);
      setCustomHeight(parsed.customHeight ?? 1080);
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    const settings = {
      isVisible,
      selectedPreset,
      isLandscape,
      scale,
      customWidth,
      customHeight
    };
    localStorage.setItem('dev-preview-settings', JSON.stringify(settings));
  }, [isVisible, selectedPreset, isLandscape, scale, customWidth, customHeight]);

  const getCurrentDimensions = () => {
    const preset = presets.find(p => p.name === selectedPreset);
    if (!preset) return { width: customWidth, height: customHeight };
    
    return isLandscape 
      ? { width: preset.width, height: preset.height }
      : { width: preset.height, height: preset.width };
  };

  const openFullHDWindow = () => {
    window.open(window.location.href, '_blank', 'width=1920,height=1080');
  };

  const dimensions = getCurrentDimensions();
  const currentBreakpoint = getBreakpoint(dimensions.width);

  if (!isVisible) {
    return (
      <>
        <Button
          onClick={() => setIsVisible(true)}
          className="fixed top-4 right-4 z-[9999] bg-primary text-primary-foreground"
          size="sm"
        >
          <Eye className="w-4 h-4 mr-2" />
          Resolution Preview
        </Button>
        <div className="w-full h-full">{children}</div>
      </>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Left Panel */}
      <div className="w-80 bg-card border-r border-border p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-card-foreground">Resolution Preview</h2>
          <Button
            onClick={() => setIsVisible(false)}
            variant="ghost"
            size="sm"
          >
            <EyeOff className="w-4 h-4" />
            Hide
          </Button>
        </div>

        <div className="space-y-4">
          {/* Presets */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Device Presets</Label>
            <Select value={selectedPreset} onValueChange={setSelectedPreset}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {presets.map((preset) => {
                  const Icon = preset.icon;
                  return (
                    <SelectItem key={preset.name} value={preset.name}>
                      <div className="flex items-center">
                        <Icon className="w-4 h-4 mr-2" />
                        {preset.name} ({preset.width}×{preset.height})
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Orientation */}
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Landscape</Label>
            <Switch
              checked={isLandscape}
              onCheckedChange={setIsLandscape}
            />
          </div>

          {/* Scale */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Scale</Label>
            <Select value={scale.toString()} onValueChange={(value) => setScale(Number(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.25">25%</SelectItem>
                <SelectItem value="0.5">50%</SelectItem>
                <SelectItem value="0.75">75%</SelectItem>
                <SelectItem value="1">100%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Full HD Button */}
          <Button 
            onClick={openFullHDWindow}
            className="w-full bg-primary text-primary-foreground"
            variant="default"
          >
            <Monitor className="w-4 h-4 mr-2" />
            Open Full HD Window
          </Button>

          <Separator />

          {/* Current Info */}
          <div className="bg-muted p-3 rounded-md">
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">Current Info</h3>
            <div className="text-xs space-y-1 text-muted-foreground">
              <div>Resolution: {dimensions.width}×{dimensions.height}</div>
              <div>Scale: {Math.round(scale * 100)}%</div>
              <div>Breakpoint: <span className="font-semibold text-primary">{currentBreakpoint}</span></div>
              <div>Orientation: {isLandscape ? 'Landscape' : 'Portrait'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 bg-muted p-4 overflow-auto">
        <div 
          className="bg-background border border-border mx-auto"
          style={{
            width: `${dimensions.width * scale}px`,
            height: `${dimensions.height * scale}px`,
            transform: `scale(1)`,
            transformOrigin: 'top left'
          }}
        >
          <div 
            style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left'
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};