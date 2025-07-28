// 1 Plain solution
export const boolToWord = (bool: boolean): string => {
  if (bool) {
    return 'Yes';
  }
  return 'No';
};

// 2 Optimized solution
export const boolToWord = (bool: boolean): string => {
  return bool ? 'Yes' : 'No';
};

// 3 Clever solution
export const boolToWord = (b: boolean): string => ['No', 'Yes'][+b];