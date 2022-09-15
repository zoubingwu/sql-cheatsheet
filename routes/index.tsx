import { Handlers, PageProps } from "$fresh/server.ts";
import { html, tokens } from "https://deno.land/x/rusty_markdown@v0.4.1/mod.ts";

interface HomePageProps {
  content: string;
}

export const handler: Handlers<HomePageProps> = {
  async GET(req, ctx) {
    const text = await Deno.readTextFile("./SQL.md");
    const resp = await ctx.render({
      content: html(tokens(text, { tables: true })),
    });
    return resp;
  },
};

export default function Home({ data }: PageProps<HomePageProps>) {
  return (
    <div
      className="flex flex-col p-4 md:max-w-[25%] md:max-h-screen md:flex-wrap"
      dangerouslySetInnerHTML={{ __html: data.content }}
    >
    </div>
  );
}
