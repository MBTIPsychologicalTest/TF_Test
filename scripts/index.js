const integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8";
const crossorigin="anonymous";

// SDK를 초기화, 사용할 앱의 JavaScript 키를 설정
Kakao.init('3c459c5810b76c81ae161f275304414a');

// SDK 초기화 여부를 판단
console.log(Kakao.isInitialized());

Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
    title: 'MBTI T/F 심리테스트',
    description: '재미로 알아보는 MBTI T/F 심리테스트', //콘텐츠 상세 상세설명
    imageUrl: 'https://ifh.cc/g/JkGRtY.jpg',
    link: {
        mobileWebUrl: 'https://mbti-tftest-millenniumdragons.netlify.app/', //모바일 카카오톡에서 사용하는 웹링크 url
        webUrl: 'https://mbti-tftest-millenniumdragons.netlify.app/' //PC버전 카카오톡에서 사용하는 웹링크 url
    }
    }
});
Kakao.Share.createDefaultButton();

/*클립보드 api*/
let clipboard = new Clipboard('.shareBtn');
clipboard.on('success', function (e) {
swal("복사되었습니다!","", "success")
});   