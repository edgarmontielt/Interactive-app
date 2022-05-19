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

    onSubmit() {

    }


    render() {
        const login = `
        <aside class=" aside h-screen w-1/4 fixed bg-[#0a1024eb] top-0  right-0 text-white px-10 py-32">
            <form class=" flex flex-col gap-7">
                <h1 class=" text-3xl font-medium mb-10"> LogIn</h1>
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
                <button class="">SignIn</button>
            </form>
        </aside>
        `

        this.root.innerHTML = login
    }
}