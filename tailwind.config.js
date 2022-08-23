/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
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
      //  'secondColor':'#FBE7C6',
      //  'buttonColorThird':'#B68D40',
      //   'productColor':'#D6AD60',
      //   'extraColor':'#FBC740'
      }


    },
  },
  plugins: [],
}
