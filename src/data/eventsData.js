// Default event categories supported by CADD Centre Perinthalmanna
export const EVENT_CATEGORIES = [
  'All',
  'Workshops',
  'Industrial Visits',
  'Celebrations',
  'Placement Sessions',
  'Convocation',
  'Featured Post'
];

export const formatEventDate = (dateString) => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch (e) {
    return dateString;
  }
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};
