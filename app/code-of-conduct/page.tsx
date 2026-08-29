import { getCodeOfConductData } from '@/lib/graphql/cms';
import { lexicalToHtml } from '@/lib/utils';

export default async function CodeOfConductPage() {
  const codeOfConductData = await getCodeOfConductData();
  const contentHtml = lexicalToHtml(codeOfConductData.root);
  console.log(`CodeOfConductPage: Rendered content HTML: ${contentHtml}`);

  return (
    <main className="bg-dark-green text-white min-h-[70vh] py-8 md:px-36 px-10 flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">
        Code of <span className="text-primary">Conduct</span>
      </h1>

      <article
        className="max-w-3xl text-xl leading-relaxed [&_h1]:mb-8 [&_h1]:text-2xl [&_h1]:font-semibold md:[&_h1]:text-5xl [&_h2]:mb-8 [&_h2]:text-xl [&_h2]:font-medium md:[&_h2]:text-4xl [&_p]:mb-8 [&_a]:text-[#F5B041] [&_a]:hover:underline"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
