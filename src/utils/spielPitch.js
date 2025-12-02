export const isSpielPitchActive = () => {
  const cutoff = new Date(2025, 10, 30, 23, 59, 59, 999);
  return new Date() <= cutoff;
};
