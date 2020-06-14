// import './index.html';
// import './style.css';



// let upLikes = 0;
// let downLikes = 0;

// const btnUp = document.querySelector('#btn-up');
// const btnDown = document.querySelector('#btn-down');

// btnUp.addEventListener('click', () => {
//   upLikes += 1;
//   const likesUpElm = document.querySelector('#likes-up');
//   likesUpElm.textContent = upLikes;
// });

// btnDown.addEventListener('click', () => {
//   downLikes += 1;
//   const likesDownElm = document.querySelector('#likes-down');
//   likesDownElm.textContent = downLikes;
// });

// new VTTCue({
//   el: '#app',
//   data: {
//     upLikes: 0,
//     downLikes: 0,

//   },
//   methods: {
//     like() {
//       console.log('ahoj')
//       this.upLikes += 1;
//     },
//     dislike() {
//       this.downLikes -= 1;
//     },
//   }

// })

new Vue({
  el: '#app',
  data: {
    upLikes: 0,
    downLikes: 0,

  },
  methods: {
    like() {
      console.log('ahoj')
      this.upLikes += 1;
    },
    dislike() {
      this.downLikes += 1;
    },
  }

})