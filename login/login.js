document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const loginForm = document.getElementById('loginForm');
  
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
           
        });
    });
  
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('userId').value;
        const password = document.getElementById('password').value;
        const activeTab = document.querySelector('.tab.active').id;
        // 여기에 로그인 처리 
        console.log(`Username: ${username}, Password: ${password}, Active Tab: ${activeTab}`);
    });
  });
  

// 

function changeFormMember(){
    const form = document.querySelector("#loginForm");
    const bizForm = document.querySelector("#bizLoginForm");
    const adminForm = document.querySelector("#adminLoginForm");
    form.classList.add("active");
    bizForm.classList.remove("active");
    adminForm.classList.remove("active");
}

function changeFormBiz(){
    const form = document.querySelector("#loginForm");
    const bizForm = document.querySelector("#bizLoginForm");
    const adminForm = document.querySelector("#adminLoginForm");
    form.classList.remove("active");
    bizForm.classList.add("active");
    adminForm.classList.remove("active");
}

function changeFormAdmin(){
    const form = document.querySelector("#loginForm");
    const bizForm = document.querySelector("#bizLoginForm");
    const adminForm = document.querySelector("#adminLoginForm");
    form.classList.remove("active");
    bizForm.classList.remove("active");
    adminForm.classList.add("active");
}