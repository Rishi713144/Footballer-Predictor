const images = [
    'https://images.teamtalk.com/content/uploads/2022/10/02160859/erling-haaland-man-city-2022.jpg',
    'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg',
    'https://miro.medium.com/v2/resize:fit:1400/1*SH23000Oy7JRqyslNyPGoA.jpeg',
    'https://gymnation.com/media/bgjgtc1d/cr7-2008.jpg',
    'https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    'https://i.pinimg.com/564x/f2/9b/ae/f29baed184ebf3c6fa25d82fc259d873.jpg',
    'https://w0.peakpx.com/wallpaper/809/437/HD-wallpaper-paolo-maldini-milan.jpg',
    'https://assets.realmadrid.com/is/image/realmadrid/1330190795142?$Mobile$&fit=wrap',


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