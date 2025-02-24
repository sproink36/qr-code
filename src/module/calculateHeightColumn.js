export default function calculateHeightColumn(
  value,
  minValue,
  maxValue,
  minHeight,
  maxHeight
) {
  const clampedValue = Math.min(value, maxValue);
  return (
    minHeight +
    ((clampedValue - minValue) / (maxValue - minValue)) *
      (maxHeight - minHeight)
  );
}
