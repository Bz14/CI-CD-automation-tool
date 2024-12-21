const validate = {
  validateText: (text) => {
    if (!text || typeof text !== "string" || text.trim() === "") {
      return false;
    }
    return true;
  },

  validateTemplate: (template, availableTemplates) => {
    if (!availableTemplates.includes(template)) {
      return false;
    }
    return true;
  },
};
