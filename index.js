function index(){
    document.getElementById("send").addEventListener("submit",function(e){
        e.preventDefault()
    })

    const qqb = {
        user: document.getElementById("user").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        namecomp: document.getElementById("namecomp").value,
        cell: document.getElementById("cell").value,
        age: document.getElementById("age").value,
    }

    console.log(qqb);
    
}