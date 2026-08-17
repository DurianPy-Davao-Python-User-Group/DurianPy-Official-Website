import { getCodeOfConductData } from '@/lib/graphql/cms';

export default async function CodeOfConductPage() {
  const codeOfConductData = await getCodeOfConductData();

  return (
    <main className="bg-dark-green text-white min-h-[70vh] py-8 md:px-36 px-10 flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">
        Code of <span className="text-primary">Conduct</span>
      </h1>

      <h2 className="text-xl md:text-4xl font-medium mb-8">
        {codeOfConductData.content[0]}
      </h2>

      <p className="text-xl max-w-3xl leading-relaxed mb-8">
        {codeOfConductData.content[1]}
      </p>

      <p className="text-xl max-w-3xl leading-relaxed">
        {codeOfConductData.content[2]}{' '}
        <a
          href="https://policies.python.org/python.org/code-of-conduct/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5B041] hover:underline"
        >
          Code of Conduct
        </a>
        .
      </p>

      <p className="text-xl max-w-3xl leading-relaxed mt-8 font-semibold">
        If you witness or experience any violations of the Code of Conduct,
        please report them using the{' '}
        <a
          href={codeOfConductData.reportFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5B041] hover:underline"
        >
          Code of Conduct Report Form
        </a>
        .
      </p>
    </main>
  );
}
