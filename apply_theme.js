const fs = require('fs');
const path = require('path');

// 1. Update tailwind.config.js
const twPath = path.join(__dirname, 'tailwind.config.js');
let twContent = fs.readFileSync(twPath, 'utf8');

// Replace brand colors (Make it Cyan)
twContent = twContent.replace(/brand: {[\s\S]*?},/, `brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },`);

// Replace indigo colors (Make it Blue/Cyan ish)
twContent = twContent.replace(/indigo: {[\s\S]*?},/, `indigo: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },`);

// Replace purple colors (Make it Amber/Yellow to match subtitle)
twContent = twContent.replace(/purple: {[\s\S]*?},/, `purple: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },`);

// Replace Glow Shadows from purple (rgba(139, 92, 246)) to cyan (rgba(6, 182, 212))
twContent = twContent.replace(/rgba\(139, 92, 246/g, 'rgba(6, 182, 212');

fs.writeFileSync(twPath, twContent, 'utf8');


// 2. Update globals.css
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Replace CSS Custom Properties for Brand
cssContent = cssContent.replace(/--color-brand-primary: 139, 92, 246;/g, '--color-brand-primary: 6, 182, 212;');
cssContent = cssContent.replace(/--color-brand-secondary: 99, 102, 241;/g, '--color-brand-secondary: 14, 165, 233;');
cssContent = cssContent.replace(/--color-accent: 236, 72, 153;/g, '--color-accent: 245, 158, 11;');

// Replace gradient-text hexes
cssContent = cssContent.replace(/background: linear-gradient\(135deg, #8b5cf6 0%, #6366f1 50%, #ec4899 100%\);/g, 'background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #f59e0b 100%);');

// Replace gradient-overlay hexes
cssContent = cssContent.replace(/rgba\(139, 92, 246/g, 'rgba(6, 182, 212');
cssContent = cssContent.replace(/rgba\(236, 72, 153/g, 'rgba(245, 158, 11');

fs.writeFileSync(cssPath, cssContent, 'utf8');

console.log('Successfully updated design tokens to Cyan/Yellow theme!');
