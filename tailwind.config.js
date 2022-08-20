/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      'Ex-mobile': '300px',
      'mobile':'640px',
      'tablate':'768px',
      'desktop': '1024px'
    },
    extend: {

      fontFamily:{

        "LogoFont": ['Cormorant SC', "serif"],
        "Navlinksfont": ['Cormorant', "serif"],
        "CormorantInfant": ['Cormorant Infant', "serif"],
        "heroMainTextfont": ['Playfair Display', "serif"],
        "PlayfairDisplaySC": ['Playfair Display SC', "serif"],
        "Poppins": ['Poppins', "sans-serif"],
        "Ubuntu": ['Ubuntu', "sans-serif"]
      },
      colors:{
        'mainColor':'#F9F1F0',
        'buttonColorfirst':'#FFAEBC',
        'buttonColorSecond':'#FF75D8',
        'heartColor':'#FF45B5',
      }


    },
  },
  plugins: [],
}
