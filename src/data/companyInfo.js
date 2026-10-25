const companyInfoModules = import.meta.glob("../../company-info/*.json", {
  eager: true,
});

const toEntry = (module) => module.default ?? module;

export const companyInfoList = Object.entries(companyInfoModules)
  .filter(([filePath]) => !filePath.endsWith("/index.json"))
  .map(([, module]) => toEntry(module))
  .filter((entry) => !!entry && typeof entry === "object")
  .flatMap((entry) => (Array.isArray(entry) ? entry : [entry]))
  .filter((company) => company?.companyId);

export const getCompanyInfoById = (companyId) =>
  companyInfoList.find((company) => company.companyId === companyId) ?? null;
