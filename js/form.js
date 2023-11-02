const fullName = document.querySelector("#fullName");
const age = document.querySelector("#age");
const phone = document.querySelector("#phone");
const submit = document.querySelector("#form");
const message = document.querySelector("#message");

const submitUser = () => {
   if (fullName.value === "" || age.value === "" || phone.value === "") {
      message.innerHTML = "Vui lòng nhập đầy đủ thông tin";
      return;
   }
   const postData = {
      name: fullName.value,
      phone: phone.value,
      age: age.value,
   };
   // Hiển thị hiệu ứng loading
   document.getElementById("loading").style.display = "block";

   axios
      .post("https://api.warriorcode.online/api/users", postData)
      .then(function (response) {
         // Xử lý dữ liệu từ phản hồi
         const data = response.data;
         console.log(data);
         if (data?.status === "success") {
            localStorage.setItem("currentPlay", 1);
            document.getElementById("loading").style.display = "none";

            window.location.href = "game.html";
         } else {
            alert("Xảy ra lỗi xin vui lòng thử lại!");
         }
      })
      .catch(function (error) {
         // Xử lý lỗi nếu có
         console.error(error);
      });
};
submit.addEventListener("submit", submitUser);
