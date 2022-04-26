/* js */
document.addEventListener('DOMContentLoaded',()=>{
    /* map */
    var container = document.querySelector('.map');
    var options = {
        center: new kakao.maps.LatLng(37.47708672717911, 126.8820527877078),
        level: 3
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.476733, 126.882404);
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);

    var iwContent = '<div style="padding:5px;">(주)컴투스 <br><a href="https://map.kakao.com/link/map/(주)컴투스,37.476733, 126.882404" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/(주)컴투스,37.476733, 126.882404" style="color:blue" target="_blank">길찾기</a></div>',
    iwPosition = new kakao.maps.LatLng(37.476733, 126.882404);
    var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
    });
    infowindow.open(map, marker); 


    /* footer */
    const box1=document.querySelector('.korean');
    const box2=document.querySelector('.language');
    box1.addEventListener('click',()=>{
        box2.classList.toggle('on');
    })
    box2.addEventListener('click',()=>{
        box2.classList.toggle('on');
    })
})
