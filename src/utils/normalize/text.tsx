const escapeAllUnsafeChars = (value: string) => {
  try {
    if (!value) return value;
    return value.replace(/([^\u0000-\u00ff]|\\)/g, '');
  } catch (e) {
    return value;
  }
}

export { escapeAllUnsafeChars };
