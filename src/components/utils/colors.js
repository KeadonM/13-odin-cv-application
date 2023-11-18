export function findComplement(hexColor, scale = 0.5) {
  const rgbColor = hexToRgb(hexColor);

  // Calculate the complement
  const complementRed = 255 - Math.round(rgbColor[0] * scale);
  const complementGreen = 255 - Math.round(rgbColor[1] * scale);
  const complementBlue = 255 - Math.round(rgbColor[2] * scale);

  // Convert the complement to hex format
  const complementHex = rgbToHex([
    complementRed,
    complementGreen,
    complementBlue,
  ]);

  return complementHex;
}

export function incrementSaturation(hexColor, factor) {
  const rgbColor = hexToRgb(hexColor);
  const hslColor = rgbToHsl(rgbColor);
  hslColor[1] = Math.max(0, hslColor[1] + factor); // Decrease saturation
  hslColor[1] = Math.min(hslColor[1], 0.98); // Decrease brightness
  const incrementedSaturationRgb = hslToRgb(hslColor);
  return rgbToHex(incrementedSaturationRgb);
}

export function incrementBrightness(hexColor, factor) {
  const rgbColor = hexToRgb(hexColor);
  const hslColor = rgbToHsl(rgbColor);

  hslColor[2] = Math.max(0, hslColor[2] + factor); // Decrease brightness
  hslColor[2] = Math.min(hslColor[2], 0.98); // Decrease brightness
  // console.log(hslColor[2]);
  const incrementedBrightnessRgb = hslToRgb(hslColor);
  return rgbToHex(incrementedBrightnessRgb);
}

//CONVERTERS

function hexToRgb(hex) {
  // Remove the hash if present
  hex = hex.replace(/^#/, '');

  // Parse the hex value into RGB components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

function rgbToHex(rgbColor) {
  const [r, g, b] = rgbColor;
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hexRed = toHex(r);
  const hexGreen = toHex(g);
  const hexBlue = toHex(b);

  return `#${hexRed}${hexGreen}${hexBlue}`;
}

function hslToRgb(hslColor) {
  const [h, s, l] = hslColor;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHsl(rgbColor) {
  const [red, green, blue] = rgbColor;
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}
