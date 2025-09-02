
const projectsData = {
  project1: {
    title: "SIPEMAKU",
    img: "assets/image/SIPEMAKU.png",
    alt: "Tampilan Aplikasi SIPEMAKU",
    desc: "SIPEMAKU adalah sebuah sistem yang dirancang untuk <em>memudahkan monitoring dan pengelolaan jadwal perkuliahan di lingkungan akademik.</em>"
  },
  project2: {
    title: "ODGJ Rescue",
    img: "assets/image/ODGJRescue.png",
    alt: "Tampilan Aplikasi ODGJ Rescue",
    desc: "ODGJ Rescue adalah sistem yang memungkinkan masyarakat <em>memberikan laporan pengaduan terkait gangguan jiwa dan mental di Bali.</em>"
  },
  project3: {
    title: "Vitalify App",
    img: "assets/image/Vitalify.png",
    alt: "Tampilan Aplikasi Vitalify",
    desc: "Vitalify adalah aplikasi yang membantu pengguna untuk <em>memantau dan mengelola kesehatan mereka dengan lebih baik.</em>"
  }
};

const infographicData = {
  info1: {
    title: "Micro-learning",
    img: "assets/image/Microlearning.png",
    alt: "Tampilan Poster Microlearning",
    desc: "Finalis Lomba Infographic Design INVENTION 2024.<br><br>Poster ini mengangkat metode pengajaran <em>microlearning sebagai solusi yang terbukti mampu meningkatkan hasil belajar secara signifikan.</em>"
  },
  info2: {
    title: "Budaya Teknologi",
    img: "assets/image/Berteknologi.png",
    alt: "Tampilan Poster Budaya Berteknologi",
    desc: "Lomba Poster Design INVENTION 2023.<br><br>Poster ini menekankan bahwa <em>teknologi dapat menjadi kunci untuk melestarikan budaya lokal sekaligus membuka peluang meraih pengakuan dunia.</em>"
  },
  info3: {
    title: "L.E.N.S.A",
    img: "assets/image/Ufonity.png",
    alt: "Tampilan Poster Berpariwisata Melalui L.E.N.S.A",
    desc: "Lomba Poster Design UFONITY 2023.<br><br>Poster ini menawarkan <em>solusi riset visual inklusif agar wisatawan dapat memilih destinasi sesuai ekspektasi, meminimalisir kekecewaan, dan mengabadikan pengalaman berharga.</em>"
  }
};

const workData = {
  work1: {
    title: "7th Beat Games",
    img: "assets/image/WorkInformation.png",
    alt: "Deskripsi Tim 7th Beat Games",
    desc: '7th Beat Games adalah sebuah studio indie yang mengontrak saya.<br><br><em>Studio ini dikenal dari Rhythm Game satu tombol seperti <a class="link"href="https://store.steampowered.com/app/774181/Rhythm_Doctor/" target="_blank">Rhythm Doctor</a> dan <a class="link"href="https://store.steampowered.com/app/977950/A_Dance_of_Fire_and_Ice/" target="_blank">A Dance of Fire and Ice.</a></em>'
  },
  work2: {
    title: "Asset Design",
    img: "assets/image/Assetwork.png",
    alt: "Deskripsi Tim Asset Design",
    desc: `Desain Thumbnail, Banner, dan Tooltip yang saya buat untuk keperluan <em>promosi 
<a class="link"href="https://www.youtube.com/@7thBeatGames" target="_blank">YouTube channel</a> studio 7th Beat Games.</em>`

  },
  work3: {
    title: "Logo Design",
    img: "assets/image/LogoDesign.png",
    alt: "Deskripsi Tim Logo Design",
    desc: 'Desain Logo yang saya buat untuk kerperluan <em>event <a class="link"href="https://youtu.be/zLC1QVOjtqQ" target="_blank">Level of The Year</a> untuk game <a class="link"href="https://store.steampowered.com/app/977950/A_Dance_of_Fire_and_Ice/" target="_blank">A Dance of Fire and Ice.</a></em>'
  },
  work4: {
    title: "Level Design",
    img: "assets/image/LevelDesign.png",
    alt: "Deskripsi Tim Level Design",
    desc: 'Desain level yang saya buat untuk keperluan konten game <a class="link"href="https://store.steampowered.com/app/977950/A_Dance_of_Fire_and_Ice/" target="_blank">A Dance of Fire and Ice.</a> <em>mulai dari sketsa layout level hingga animasinya.</em>'
  }
};


function updateContent(sourceData, key, targetId) {
  const item = sourceData[key];
  const container = document.getElementById(targetId);

  if (!item || !container) return;

  container.innerHTML = `
    <div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
    <img src="${item.img}" alt="${item.alt}" class="featured-image" />
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = [
    { id: "projects-dropdown", data: projectsData, target: "projects-content" },
    { id: "infographic-dropdown", data: infographicData, target: "infographic-content" },
    { id: "work-dropdown", data: workData, target: "work-content" }
  ];

  dropdowns.forEach(({ id, data, target }) => {
    const selectEl = document.getElementById(id);
    if (selectEl) {
      updateContent(data, selectEl.value, target);
      selectEl.addEventListener("change", () => {
        updateContent(data, selectEl.value, target);
      });
    }
  });
});