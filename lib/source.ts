import { pages, projects } from "@/.source";
import { loader } from "fumadocs-core/source";
import type { Source, SourceConfig } from "fumadocs-core/source";

const pagesDocs = pages as unknown as { toFumadocsSource: () => unknown };
const projectsDocs = projects as unknown as { toFumadocsSource: () => unknown };

export const pagesSource = loader({
  baseUrl: "/pages",
  source: pagesDocs.toFumadocsSource() as Source<SourceConfig>,
});

export const projectsSource = loader({
  baseUrl: "/projects",
  source: projectsDocs.toFumadocsSource() as Source<SourceConfig>,
});
