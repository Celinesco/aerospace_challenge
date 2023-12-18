/** @format */

export default function PageC() {
    return (
        <div className="p-4 sm:ml-64 flex flex-col items-center ">
            <p>
                I understand the API is quite basic, with no real data involved.
                However, it might be beneficial to have information on units and ranges
                to provide user warnings or enhance graph representation.
            </p>
            <p>
                SpectrumStatus returns data in <strong>camelCase</strong>, and
                SpectrumWS does the same but in <strong>PascalCase</strong>. Would be
                better to unify this to avoid errors.
            </p>
            <p>
                First two endpoints, /SpectrumStatus and /SpectrumWS, no problems with
                the connections there. But the third one I'm not sure if I missed
                something in the exercise, but PUT and POST methods weren't allowed, and
                the GET method didn't give back anything.
            </p>
            <p className="mt-1">
                <em>
                    Thank you for the opportunity! I'm looking forward to your feedback!
                    🚀
                </em>
            </p>
            <div className="bg-purple-200 p-4 rounded text-purple-900 text-center mt-4">
                <a href="mailto:celina.alsina@gmail.com" >Celina Ines Alsina</a>
            </div>
        </div>
    );
}
