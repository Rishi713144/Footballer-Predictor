const images = [
    'https://images.teamtalk.com/content/uploads/2022/10/02160859/erling-haaland-man-city-2022.jpg',
    'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg',
    'https://miro.medium.com/v2/resize:fit:1400/1*SH23000Oy7JRqyslNyPGoA.jpeg',
    'https://gymnation.com/media/bgjgtc1d/cr7-2008.jpg',
    'https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    'https://i.pinimg.com/564x/f2/9b/ae/f29baed184ebf3c6fa25d82fc259d873.jpg',
    'https://w0.peakpx.com/wallpaper/809/437/HD-wallpaper-paolo-maldini-milan.jpg',
    'https://assets.realmadrid.com/is/image/realmadrid/1330190795142?$Mobile$&fit=wrap',
    'https://www.shutterstock.com/editorial/image-editorial/MdTdA513N1zaA6y8MDkxMzA=/karim-benzema-real-madrid-celebrates-scoring-opening-440nw-10484600u.jpg',
    'https://a.espncdn.com/photo/2020/0304/r674744_1296x1296_1-1.jpg',
    'https://preview.redd.it/david-beckham-made-his-debut-for-manchester-united-32-years-v0-zbxrdf4k4jqd1.jpg?width=640&crop=smart&auto=webp&s=070c4d4f721791c4225b7183ba66522bee36a873',
    'https://foto.sondakika.com/haber/2025/07/14/dogum-gununde-cuce-bireyleri-calistiran-yamal-18846835_5007_amp.jpg',
    'https://www.fcbarcelona.com/fcbarcelona/photo/2023/09/25/08593578-2837-4af2-9235-e3a56e3db23c/2023-09-16_FCBvsBETIS_97.jpg',
    'https://www.aljazeera.com/wp-content/uploads/2025/01/2025-01-21T220448Z_1474946714_UP1EL1L1PBY5X_RTRMADP_3_SOCCER-CHAMPIONS-SLB-BAR-REPORT-1737497355.jpg?resize=770%2C513&quality=80',
    'https://www.economist.com/content-assets/images/20230121_BLP510.jpg',
    'https://www.economist.com/content-assets/images/20230121_BLP510.jpg',
    'https://www.fcbarcelona.com/fcbarcelona/photo/2020/09/06/c7355114-245c-48a3-b5fe-0cea11dc9379/SUAREZ-56-min.jpg',




];

function showRandomImage() {
    if (images.length === 0) {
        alert('Please add images to the collection!');
        return;
    }
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('randomImage');
    imageElement.src = images[randomIndex];
    imageElement.classList.add('show');

}
