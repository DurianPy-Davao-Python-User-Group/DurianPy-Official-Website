const COC_REPORT_FORM_URL =
  process.env.NEXT_PUBLIC_COC_REPORT_FORM_URL ??
  'https://forms.gle/R4MXsc2brwHEmgrE7';

export default function CodeOfConductPage() {
  return (
    <main className="bg-dark-green text-white min-h-[70vh] py-8 md:px-36 px-10 flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">
        Code of <span className="text-primary">Conduct</span>
      </h1>

      <h2 className="text-xl md:text-4xl font-medium mb-8">
        We value respect and inclusivity in all events.
      </h2>

      <p className="text-xl max-w-3xl leading-relaxed mb-8">
        The Python community is made up of members from around the globe with a
        diverse set of skills, personalities, and experiences. It is through
        these differences that our community experiences great successes and
        continued growth.
      </p>

      <p className="text-xl max-w-3xl leading-relaxed">
        To clarify our expectations, all participants, including attendees,
        speakers, exhibitors, organizers, and volunteers at any DurianPy event,
        must adhere to the following{' '}
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
          href={COC_REPORT_FORM_URL}
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
