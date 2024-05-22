document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const loginForm = document.getElementById('loginForm');
  
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // 여기에 각 탭에 따른 추가 동작을 구현해야함
        });
    });
  
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const activeTab = document.querySelector('.tab.active').id;
        // 여기에 로그인 처리 및 각 탭에 따른 추가 로직을 구현해야함
        console.log(`Username: ${username}, Password: ${password}, Active Tab: ${activeTab}`);
    });
  });
  