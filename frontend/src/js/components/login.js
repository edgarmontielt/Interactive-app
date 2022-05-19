export default class Login {

    constructor() {
        this.root = document.getElementById('root')
    }

    activeMenu() {
        const openNav = document.getElementById('open-nav')
        const closeNav = document.getElementById('close-nav')
        openNav.onclick = () => {
            const sideMenu = document.querySelector('aside')
            sideMenu.style.display = 'block'
            sideMenu.style.animation = 'openNav 2s ease'
            closeNav.style.animation = 'openNav 1s ease'
            closeNav.style.display = 'block'
            setTimeout(() => {
                closeNav.style.zIndex = '10'
            }, 2000)
        }
    }

    closeMenu() {
        const closeNav = document.getElementById('close-nav')
        closeNav.onclick = () => {
            const sideMenu = document.querySelector('aside')
            sideMenu.style.animation = 'closeNav 2s ease'
            closeNav.style.animation = 'closeNav 2s ease'
            closeNav.style.zIndex = '0'
            closeNav.style.display = 'none'
            setTimeout(() => {
                sideMenu.style.display = 'none'
            }, 2000)
        }
    }

    // onSubmit() {
    //     const login = document.getElementById('login')
    //     console.log(login);
    //     login.onsubmit = (event) => {
    //         event.preventDefault()
    //         const {
    //             email: { value: email },
    //             password: { value: password },
    //         } = event.target
    //         console.log(email, password );

    //         callback({ email, password })
    //     }
    // }


    render() {
        const login = `
        <aside class=" aside h-screen w-1/4 fixed bg-[#0a1024eb] top-0  right-0 px-10 py-32">
            <form id="login" class=" flex flex-col gap-7">
                <h1 class=" text-3xl font-medium mb-10 text-white"> LogIn</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    class=" px-5 py-1 rounded outline-none"
                    />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    class=" px-5 py-1 
                    rounded outline-none"
                    />
                <button class="text-white">SignIn</button>
            </form>
        </aside>
        `

        this.root.innerHTML = login
    }
}