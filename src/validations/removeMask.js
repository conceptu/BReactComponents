export default function removeMask(value) {
  if (value && typeof value === 'string') {
    return value.replace(/[^\d]+/g, '');
  }
  return '';
}
