/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: 'https://webfrontendassignment-isaraerospace.azurewebsites.net/api/',
        A_ENDPOINT: "SpectrumStatus",
        B_ENDPOINT: "ActOnSpectrum",
        WS_ENDPOINT: "wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS"
    },
}

module.exports = nextConfig
