import { collection, config, fields } from "@keystatic/core";

// Local files while developing. Production edits commit to GitHub, which needs
// the Keystatic GitHub App (see DEPLOY.md) and NEXT_PUBLIC_KEYSTATIC_GITHUB=true.
const useGitHub = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB === "true";

export default config({
  storage: useGitHub ? { kind: "github", repo: "dev-doji/portfolio" } : { kind: "local" },
  ui: { brand: { name: "Emmanuel Doji" } },
  collections: {
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["date", "draft"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        summary: fields.text({
          label: "Summary",
          description: "One or two sentences shown on the blog list and in link previews.",
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({ label: "Publish date", validation: { isRequired: true } }),
        topic: fields.select({
          label: "Topic",
          options: [
            { label: "AI", value: "AI" },
            { label: "Fintech", value: "Fintech" },
            { label: "Education", value: "Education" },
            { label: "Engineering", value: "Engineering" },
            { label: "Product", value: "Product" },
          ],
          defaultValue: "Engineering",
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Drafts stay off the live site until you untick this.",
          defaultValue: true,
        }),
        content: fields.mdx({ label: "Post" }),
      },
    }),
  },
});
