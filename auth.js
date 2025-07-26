let isLogin = true;
let currentRole = "";

function openLogin(role) {
  currentRole = role;
  isLogin = true;
  document.getElementById("authTitle").innerText = `Login as ${role}`;
  document.getElementById("toggleAuth").innerText = `Don't have an account? Register`;
  document.getElementById("authModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

function toggleMode() {
  isLogin = !isLogin;
  document.getElementById("authTitle").innerText = `${isLogin ? "Login" : "Register"} as ${currentRole}`;
  document.getElementById("toggleAuth").innerText = isLogin
    ? `Don't have an account? Register`
    : `Already have an account? Login`;
}

function submitAuth() {
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;

  if (isLogin) {
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        db.collection("users").doc(user.user.uid).get().then(doc => {
          const role = doc.data().role;
          if (role === "vendor") {
            window.location.href = "vendor.html";
          } else if (role === "supplier") {
            window.location.href = "supplier.html";
          }
        });
      })
      .catch(err => alert(err.message));
  } else {
    auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        return db.collection("users").doc(user.user.uid).set({
          email,
          role: currentRole
        });
      })
      .then(() => {
        alert("Registration successful!");
        closeModal();
        if (currentRole === "vendor") {
          window.location.href = "vendor.html";
        } else if (currentRole === "supplier") {
          window.location.href = "supplier.html";
        }
      })
      .catch(err => alert(err.message));
  }
}
