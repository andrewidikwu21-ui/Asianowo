import fs from 'node:fs';
import path from 'node:path';

/**
 * Validates whether the project is ready for production launch.
 * If siteData.LAUNCH is true, all placeholders and placeholder assets must be resolved.
 * Throws a detailed error if any placeholders are detected in src/data/site.ts.
 */
export function validateLaunchGate(): void {
  const siteTsPath = path.resolve('src/data/site.ts');
  if (!fs.existsSync(siteTsPath)) {
    return;
  }

  const content = fs.readFileSync(siteTsPath, 'utf-8');

  // Check if LAUNCH is true
  const launchMatch = content.match(/LAUNCH\s*:\s*(true|false)/);
  const isLaunch = launchMatch ? launchMatch[1] === 'true' : false;

  if (!isLaunch) {
    return; // Preview mode, build continues
  }

  const errors: string[] = [];
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Strip comments
    let codePart = line.split('//')[0].trim();
    if (codePart.startsWith('*') || codePart.startsWith('/*')) {
      return;
    }

    if (codePart.includes('[PLACEHOLDER]')) {
      errors.push(`Line ${index + 1}: ${codePart}`);
    }

    if (codePart.includes('assets/placeholders') || codePart.includes('placeholders/project-')) {
      errors.push(`Line ${index + 1}: references placeholder asset: ${codePart}`);
    }
  });

  if (errors.length > 0) {
    const message = [
      '',
      '====================================================================',
      '🚨 LAUNCH GATE FAILURE: CANNOT BUILD WITH LAUNCH = true',
      'The following placeholder values or assets are still present in src/data/site.ts:',
      ...errors.map((e) => `  - ${e}`),
      '',
      'Action required:',
      '1. Open src/data/site.ts and replace all [PLACEHOLDER] values with confirmed text.',
      '2. Replace placeholder images with real, consented, face-free client project photos.',
      '3. To build a preview version instead, set LAUNCH: false in src/data/site.ts.',
      '====================================================================',
      '',
    ].join('\n');

    throw new Error(message);
  }
}
