/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        queijo: "url('/queijo.jpg')",
        vaca: "url('/minas-removebg-preview.png)",
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-sansita)',
      },
      colors: {
        vermelho: '#EB3237',
        beje: '#FEEFDD',
        preto: '#343434',
      },
      dropShadow: {
        dark1: '4px 4px 5px black',
        branco1: '1px 1px 0px white',
        dark2: '1px 2px 2px #1A1A1A',
        drop1: '0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5)',
      },
      width: {
        meu: '1px',
      },
      height: {
        meuh: '2px',
      },
    },
  },
  plugins: [],
}
