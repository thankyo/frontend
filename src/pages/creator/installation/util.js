
export const toInstalledAndPending = (projects = [], installedIds = [], byId = {}) => {
  const allInstalled = installedIds.map(id => byId[id]);

  const pending = projects.filter(project => !allInstalled.some(({ url }) => project.url === url));
  const installed = allInstalled.filter(installed => projects.some(({ url }) => installed.url === url));

  return { projects, pending, installed };
};