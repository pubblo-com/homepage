/**
 * Deep-merge plain objects. Arrays and primitives from later sources replace earlier values.
 */
export function deepMerge(target, ...sources) {
  const result = { ...(target && typeof target === 'object' ? target : {}) };

  for (const source of sources) {
    if (!source || typeof source !== 'object' || Array.isArray(source)) continue;

    for (const key of Object.keys(source)) {
      const sourceVal = source[key];
      const targetVal = result[key];

      if (
        sourceVal &&
        typeof sourceVal === 'object' &&
        !Array.isArray(sourceVal) &&
        targetVal &&
        typeof targetVal === 'object' &&
        !Array.isArray(targetVal)
      ) {
        result[key] = deepMerge(targetVal, sourceVal);
      } else {
        result[key] = sourceVal;
      }
    }
  }

  return result;
}
