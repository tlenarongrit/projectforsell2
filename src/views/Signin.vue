<template>
    <div class="app-container">
      <div class="login-container">
        <div class="login-box">
          <div class="logo">
            <img src="@/assets/logo.png" alt="Logo" class="logo-image">
          </div>
          <h2>Login</h2>
          <form @submit.prevent="handleSubmit">
            <div class="input-group">
              <label for="username"><i class="fas fa-user"></i> </label>
              <input type="text" id="username" name="username" placeholder="Username" v-model="username" required>
            </div>
            <div class="input-group">
              <label for="password"><i class="fas fa-lock"></i> </label>
              <input type="password" id="password" name="password" placeholder="Password" v-model="password" required>
            </div>
            <div class="actions">
              <div>
                <input type="checkbox" id="remember-me" v-model="rememberMe">
                <label for="remember-me">Remember me</label>
              </div>
              <a href="/forgot-password" class="forgot-password">Forgot your Password?</a>
            </div>
            <button type="submit" class="login-button">เข้าสู่ระบบ</button>
          </form>
          <div class="signup-link">
            <p>Don't Have an Account? <router-link to="/signup" class="text-black">Sign Up</router-link></p>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer-section">
          <h3>เกี่ยวกับเรา</h3>
          <p>ติดตามเราบน:</p>
          <div class="social-icons">
            <img src="@/assets/fb.png" alt="Facebook" class="social-icon">
            <img src="@/assets/line.png" alt="Line" class="social-icon">
            <img src="@/assets/ig.png" alt="Instagram" class="social-icon">
          </div>
        </div>
        <div class="footer-section">
          <h3>ศูนย์ช่วยเหลือ</h3>
          <p><a href="#">ข้อกำหนดและเงื่อนไขในการใช้งาน</a></p>
          <p><a href="#">นโยบายความเป็นส่วนตัว</a></p>
        </div>
        <div class="footer-section">
          <h3>ติดต่อเรา</h3>
          <p>บริษัท จูอาโล่ มาร์เก็ตเพลส จำกัด </p>
          <p>เลขที่ 191/23 อาคารซีทีไอ ทาวเวอร์ ชั้น 26 </p>
          <p>ถนน รัชดาภิเษก แขวงคลองเตย เขตคลองเตย </p>
          <p> กรุงเทพมหานคร 10110</p>
          <div class="footer-icon">
                <img src="@/assets/phone.png" alt="Phone" class="social-icon"><p>091-XXXXX</p>
            </div>
            <div class="footer-icon">
                <img src="@/assets/email.png" alt="Email" class="social-icon"><p>jenglovegtas@gmail.com</p>
            </div>      
        </div>
      </footer>
    </div>
  </template>
  
  
<script>
  export default {
    name: "Signin",
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false,
      };
    },
    methods: {
      handleSubmit() {
       
      }
    }
  };
</script>
  
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

html, body, #app, .app-container {
  height: 100%;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  background-color: #f9f9f9;
}

.login-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 400px;
}

.logo {
  margin-bottom: 20px;
}

.logo-image {
  width: 50px;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
}

.actions input {
  margin-right: 5px;
}

.actions .forgot-password {
  color: #888;
  text-decoration: none;
}

.login-button {
  background-color: #ff7f3f;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #e66d31;
}

.signup-link {
  margin-top: 20px;
  font-size: 14px;
  color: #888;
}

.signup-link a {
  color: #ff7f3f;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}

footer {
  padding: 20px;
  background-color: #ff7f3f;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.footer-section h3 {
  margin-bottom: 10px;
}

.footer-section p, .footer-section a {
  color: #fff;
}

.social-icons {
  display: flex;
}

.social-icon {
  width: 20px;
  margin-right: 10px;
}
.footer-icon {
  display: flex;
}
</style>
