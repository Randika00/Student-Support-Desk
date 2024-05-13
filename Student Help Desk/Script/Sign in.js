
function pwdConFunction(){
			var pwd = document.getElementById("pwd");
			
			if (pwd.type === "password")
			{
				pwd.type = "text";
			}
			else
			{
				pwd.type = "password";
			}	
			
			
			var pwdCon = document.getElementById("conPwd");
			
			if (pwdCon.type === "password")
			{
				pwdCon.type = "text";
			}
			else
			{
				pwdCon.type = "password";
			}
		}