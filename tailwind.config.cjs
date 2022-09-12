/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '	#0f1424',
        card: '#1c1f4a',
        profileBlue: '#5847eb',
        caption: '#6f76c8',
        main: '#bdc1ff',
        work: '#ff8c66',
        play: '#56c2e6',
        study: '#ff5c7c',
        exercise: '#4acf81',
        social: '#7536d3',
        selfcare: '#f1c65b'
      },
      fontFamily: {
        default: ['Rubik', 'sans-serif']
      },
      borderWidth: {
        3: '3px'
      },
      backgroundImage: {
        workBg: "url('./src/assets/images/icon-work.svg')",
        playBg: "url('./src/assets/images/icon-play.svg')",
        studyBg: "url('./src/assets/images/icon-study.svg')",
        exerciseBg: "url('./src/assets/images/icon-exercise.svg')",
        socialBg: "url('./src/assets/images/icon-social.svg')",
        selfcareBg: "url('./src/assets/images/icon-self-care.svg')"
      }
    }
  },
  plugins: []
}
