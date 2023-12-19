/** @format */

export default function PageC() {
    return (
        <div className="px-8 md:p-16 md:p-4 sm:ml-64 flex flex-col items-center dark:text-white pt-24">
            <ul className="list-disc">
                <li className="mb-4">
                    I understand the API is quite basic, with no real data involved.
                    However, it might be beneficial to have information on units and
                    ranges to provide user warnings or enhance graph representation. Also
                    an ID to ensure that the information corresponds to the same item
                    would be nice. And last how many significat digits the values should have. I left all of them so no data is lost.
                </li>
                <li className="mb-4">
                    Documentation for APIs is always nice. In this case, the data from
                    the given endpoints <strong>/SpectrumStatus</strong> and <strong>/SpectrumWS</strong> were described in
                    the exercise. However, the <span className="text-red-600 dark:text-red-400 font-bold">/ActOnSpectrum</span> endpoint did not clarify
                    much, providing only the instruction to let the user
                    "<strong>act</strong> in Spectrum", which I interpreted as a
                    POST or PUT request. Unfortunately, without knowing what should be in
                    the request body, it remains unclear. Nevertheless, I tried both
                    methods, PUT and POST, and for both of them, I received a 405 Method
                    Not Allowed error. Consequently, I decided to go for the GET request
                    instead and sent a fake response to the user.
                </li>
                <li className="mb-4">
                    SpectrumStatus returns data in <strong>camelCase</strong>, and
                    SpectrumWS in <strong>PascalCase</strong>. Would be better to unify
                    this to avoid errors and to write less code.
                </li>
            </ul>
            <p className="mt-5">
                <em>
                    Thank you for the opportunity! I&apos;m looking forward to your
                    feedback! 🚀
                </em>
            </p>
            <div className="bg-purple-200 p-4 rounded text-purple-900 text-center mt-4">
                <a href="mailto:celina.alsina@gmail.com">Celina Inés Alsina</a>
            </div>
        </div>
    );
}
