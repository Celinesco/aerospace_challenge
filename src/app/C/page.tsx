/** @format */

export default function PageC() {
    return (
        <div className="p-4 sm:ml-64 flex flex-col items-center dark:text-white pt-10">
            <p className="mb-1">
                I understand the API is quite basic, with no real data involved.
                However, it might be beneficial to have information on units and ranges
                to provide user warnings or enhance graph representation.
            </p>
            <p className="mb-1">
                SpectrumStatus returns data in <strong>camelCase</strong>, and
                SpectrumWS in <strong>PascalCase</strong>. Would be
                better to unify this to avoid errors and to write less code.
            </p>
            <p className="mb-1">
                First two endpoints, /SpectrumStatus and /SpectrumWS, no problems with
                the connections there. But the third one I&apos;m not sure if I missed
                something in the exercise, but PUT and POST methods weren&apos;t allowed, and
                the GET method didn&apos;t give back anything.
            </p>
            <p className="mt-1">
                <em>
                    Thank you for the opportunity! I&apos;m looking forward to your feedback!
                    🚀
                </em>
            </p>
            <div className="bg-purple-200 p-4 rounded text-purple-900 text-center mt-4">
                <a href="mailto:celina.alsina@gmail.com" >Celina Inés Alsina</a>
            </div>
        </div>
    );
}
