// import type { StructureResolver } from "sanity/structure"

export const structure = (S: any) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("startup").title("Startups"),
    ])

