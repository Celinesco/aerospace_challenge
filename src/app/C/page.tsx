/** @format */

export default function PageC() {
    return (
        <div className="px-8 md:p-16 md:p-4 sm:ml-64 flex flex-col items-center dark:text-white pt-24">
            <ul className="list-disc">
                <li className="mb-1">
                    I understand the API is quite basic, with no real data involved.
                    However, it might be beneficial to have information on units and ranges
                    to provide user warnings or enhance graph representation.
                </li>
                <li className="mb-1">
                    SpectrumStatus returns data in <strong>camelCase</strong>, and
                    SpectrumWS in <strong>PascalCase</strong>. Would be
                    better to unify this to avoid errors and to write less code.
                </li>
                <li className="mb-1">
                    First two endpoints, /SpectrumStatus and /SpectrumWS, no problems with
                    the connections there. The third one I tried PUT and POST methods but they weren&apos;t allowed, and
                    the GET method didn&apos;t give back anything.
                </li>
            </ul>
            <p className="mt-5">
                <em>
                    Thank you for the opportunity! I&apos;m looking forward to your feedback!
                    🚀
                </em>
            </p>
            <div className="bg-purple-200 p-4 rounded text-purple-900 text-center mt-4">
                <a href="mailto:celina.alsina@gmail.com">Celina Inés Alsina</a>
            </div>
        </div>
    );
}
