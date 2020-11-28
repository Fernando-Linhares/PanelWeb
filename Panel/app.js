try{
		const content  = [
			{
			id:"n",
			name:"Netflix",
			endress: "https://www.netflix.com/browse"
			},{
			id:"f",
			name:"Facebook",
			endress: "https://www.facebook.com/"
			},
			{
			id:"w",
			name:"Whatsapp",
			endress: "https://web.whatsapp.com/"
			},
			{
			id:"y",
			name:"Youtube",
			endress: "https://www.youtube.com/?gl=BR&hl=pt"
			},
			{
			id:"g",
			name:"Gmail",
			endress: "https://mail.google.com/mail/u/0/#inbox"
			},{
			id:"gh",
			name:"GitHub",
			endress: "https://github.com/"
			},


		]
		const app  = document.querySelector(".app")

			content.forEach((e)=>{

				app.innerHTML += `<div id="${e.id}" class="panel-itens">${e.name}</div>`
			})

			const Itens = document.querySelectorAll(".panel-itens")

			Itens.forEach((e,i)=>{
				e.addEventListener("click",()=>{
					console.log(content[i].endress)
					window.location = content[i].endress
					
				})
			})

		}catch(errors){

			document.write("erros em "+errors)


		}

		