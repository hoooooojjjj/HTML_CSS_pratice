const sections = [
    '과제하기',
    '놀기',
    '과제 조금 하고 놀기',
    '잠이나 자자',
    '드랍한다'
  ];
  
  const spinButton = document.querySelector('#spin-button');
  const roulette = document.querySelector('.roulette');
  const loading = document.querySelector('.loading');
  
  spinButton.addEventListener('click', function() {
    // 스핀 버튼 클릭 이벤트 핸들러
    spinButton.disabled = true;
    roulette.classList.add('spinning');
    loading.style.display = 'block';
  
    setTimeout(function() {
      const index = Math.floor(Math.random() * sections.length);
      const selectedSection = sections[index];
  
      alert(`과연 과제의 운명은?: ${selectedSection}`);
  
      roulette.classList.remove('spinning');
      spinButton.disabled = false;
      loading.style.display = 'none';
    }, 5000);
  });
  