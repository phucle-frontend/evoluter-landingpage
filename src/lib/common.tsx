export const truncateText = (text: string, maxLength: number) => {
  const normalized = text.replace(/\r\n|\r/g, "\n");
  
  if (normalized.length <= maxLength) return normalized;
  return normalized.slice(0, maxLength) + "...";
};
